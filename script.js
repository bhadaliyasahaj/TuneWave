console.log("Welcome To Spotify");
let songIndex = 1;
// let previousindex = 1
let progressBar = document.getElementById("Range");
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio("audio/song1.mp3");
let songImage = document.getElementById("songimage");
let song = Array.from(document.getElementsByClassName("song"));
let songplayname = document.getElementById("songplayname");
let pausetime;

let playlist = JSON.parse(localStorage.getItem('songs')) || []
console.log(playlist);

let isPlaylistPage = window.location.href.split("/").pop().startsWith("playlist");

fetch('./songs.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.songs);
    let songs = [];
    const htmlHandler = () => {
      songIndex = 1;
      document.getElementById("mainContainer").innerHTML = "";
      document.getElementById("songplayname").innerHTML = "";
      songs = isPlaylistPage ? playlist : data.songs
      document.getElementById("songplayname").innerHTML += songs[0]?.songName || "";

      // console.log(songs);
      if (songs.length <= 0) {
        document.getElementById("mainContainer").innerHTML = `<h2 class="empty">EMPTY PLAYLIST</h2>`;
      };

      songs.map((song, index) => {
        let element = `<div class="song">
                      <div class="songandname">
                          <img src="songImage/${song.songName}.jpg" alt="Song Image">
                          <span class="songname">${song.songName}</span>
                      </div>
                      <div class="timeandicon">
                          <span class="songtime">${song.duration}</span>
                          <span class="play"><i id=${index + 1} class="songplay pausedplay fa-regular fa-circle-play"></i></span>
                          <span class="${isPlaylistPage ? "removefromPlaylist" : "addtoPlaylist"}"><i id=${index + 1} class="fa-solid ${isPlaylistPage ? "fa-circle-minus" : "fa-circle-plus"}"></i></span>
                      </div>
                  </div>`

        document.getElementById("mainContainer").innerHTML += element;
      })
      audioElement.src = `audio/${songs[0].filePath}`

      song.forEach((element, i) => {
        // console.log(element,i)
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
        element.getElementsByClassName("songtime")[0].innerText = songs[i].duration;
      });

    }

    htmlHandler();

    //Adjusting masterPlay to play song
    // masterPlay.addEventListener('click',()=>{
    //     if(audioElement.paused || audioElement.currentTime<=0)
    //     {
    //         audioElement.play();
    //         masterPlay.classList.remove("fa-play")
    //         masterPlay.classList.add("fa-pause")
    //         songImage.style.opacity = '1'
    //         document.getElementById(songIndex).classList.remove('fa-circle-play')
    //         document.getElementById(songIndex).classList.add('fa-circle-pause')
    //         // Array.from(document.getElementsByClassName('songplay')[songIndex]).classList.remove("fa-pause")
    //     }
    //     else{
    //         audioElement.pause();
    //         makeallPlay();
    //         masterPlay.classList.remove("fa-pause")
    //         masterPlay.classList.add("fa-play")
    //         songImage.style.opacity = '0'
    //     }
    // })

    const attachListener = () => {
      audioElement.addEventListener("timeupdate", () => {
        progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        progressBar.value = progress;
        if (progressBar.value >= 100) {
          makeallPlay();
          songIndex += 1
          audioElement.src = `audio/song${songIndex}.mp3`;
          songplayname.innerText = songs[songIndex - 1].songName;
          audioElement.currentTime = 0;
          audioElement.play();
          // audioElement.pause();
          songImage.style.opacity = "0";
          document.getElementById(`${songIndex}`).classList.remove("fa-circle-play")
          document.getElementById(`${songIndex}`).classList.add("fa-circle-pause")
          masterPlay.classList.remove("fa-play")
          masterPlay.classList.add("fa-pause");
        }
      });

      progressBar.addEventListener("input", () => {
        if (audioElement.duration) {
          audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
        }
      });

      const makeallPlay = () => {
        Array.from(document.getElementsByClassName("songplay")).forEach((element) => {
          element.classList.remove("fa-circle-pause");
          element.classList.add("fa-circle-play");
        });
      };

      const reAttach = () => {

        Array.from(document.getElementsByClassName("songplay")).forEach((element) => {
          element.addEventListener("click", (e) => {
            makeallPlay();
            // console.log(songIndex !== parseInt(e.target.id));

            if (songIndex !== parseInt(e.target.id)) {
              songIndex = parseInt(e.target.id);
              audioElement.src = `audio/${songs[songIndex - 1].filePath}`;
              audioElement.play()
              e.target.classList.remove("pausedplay");
              e.target.classList.add("playpaused");
              e.target.classList.remove("fa-circle-play");
              e.target.classList.add("fa-circle-pause");
              masterPlay.classList.remove("fa-play");
              masterPlay.classList.add("fa-pause");
              songplayname.innerText = songs[songIndex - 1].songName;
              songImage.style.opacity = "1";
            } else {
              // console.log(parseInt(audioElement.duration))
              if (e.target.classList.contains("pausedplay")) {
                audioElement.play();
                // audioElement.currentTime = pausetime
                songImage.style.opacity = "1";
                e.target.classList.remove("pausedplay");
                e.target.classList.add("playpaused");
                e.target.classList.remove("fa-circle-play");
                e.target.classList.add("fa-circle-pause");
                masterPlay.classList.remove("fa-play");
                masterPlay.classList.add("fa-pause");
              } else if (e.target.classList.contains("playpaused")) {
                audioElement.pause();
                // audioElement.currentTime = 0
                // pausetime = audioElement.currentTime
                songImage.style.opacity = "0";
                e.target.classList.remove("playpaused");
                e.target.classList.add("pausedplay");
                e.target.classList.remove("fa-circle-pause");
                e.target.classList.add("fa-circle-play");
                masterPlay.classList.remove("fa-pause");
                masterPlay.classList.add("fa-play");
              }
            }
          });
        });

        Array.from(document.getElementsByClassName("removefromPlaylist")).forEach((element) => {
          element.addEventListener("click", (e) => {
            const songId = parseInt(e.target.id, 10);
            console.log(songId);

            const song = songs.find((item, index) => (index + 1) === songId);
            if (song && playlist.includes(song)) { // Check to avoid duplicates
              console.log(playlist.indexOf(song))
              playlist.splice(playlist.indexOf(song), 1)
              console.log(playlist);
              localStorage.setItem('songs', JSON.stringify(playlist));
              htmlHandler()
              // attachListener()
              reAttach()
              masterPlay.classList.remove("fa-pause");
              masterPlay.classList.add("fa-play");
            }
          });
        });

      }
      reAttach()

      document.getElementById("next").addEventListener("click", () => {
        makeallPlay();
        console.log(songIndex, songs.length);

        if (songIndex >= songs.length) {
          songIndex = 1;
        } else {
          songIndex += 1;
        }

        audioElement.src = `audio/${songs[songIndex - 1].filePath}`;
        audioElement.currentTime = 0;
        audioElement.play();
        songplayname.innerText = songs[songIndex - 1].songName;
        document.getElementById(songIndex).classList.remove("fa-circle-play");
        document.getElementById(songIndex).classList.add("fa-circle-pause");
        songImage.style.opacity = 1;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
      });

      document.getElementById("previous").addEventListener("click", () => {
        makeallPlay();
        if (songIndex <= 1) {
          songIndex = songs.length;
        } else {
          songIndex -= 1;
        }
        audioElement.src = `audio/${songs[songIndex - 1].filePath}`;
        songplayname.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        songImage.style.opacity = 1;
        document.getElementById(songIndex).classList.remove("fa-circle-play");
        document.getElementById(songIndex).classList.add("fa-circle-pause");
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
      });
      // console.log(songIndex)

      masterPlay.addEventListener("click", () => {
        console.log(audioElement.paused);

        if (audioElement.paused || audioElement.currentTime <= 0) {
          audioElement.play();
          masterPlay.classList.remove("fa-play");
          masterPlay.classList.add("fa-pause");
          songImage.style.opacity = "1";
          document.getElementById(songIndex).classList.remove("fa-circle-play");
          document.getElementById(songIndex).classList.add("fa-circle-pause");
        } else {
          audioElement.pause();
          makeallPlay();
          masterPlay.classList.remove("fa-pause");
          masterPlay.classList.add("fa-play");
          songImage.style.opacity = "0";
        }
      });

      // let playlist = []
      Array.from(document.getElementsByClassName("addtoPlaylist")).forEach((element) => {
        element.addEventListener("click", (e) => {
          const songId = parseInt(e.target.id, 10);
          const song = songs.find((item, index) => (index + 1) === songId);
          if (song && !playlist.includes(song)) { // Check to avoid duplicates
            playlist.push(song);
            console.log(playlist);
            localStorage.setItem('songs', JSON.stringify(playlist));
            alert("Playlist Updated")
          }else{
            alert("Already Present")
          }
        });
      });



    }
    // reAttach()
    attachListener()
  })
// audioElement.play()





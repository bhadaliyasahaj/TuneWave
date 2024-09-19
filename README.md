TuneWave - A Music Player Web Application
TuneWave is a fully functional music player web application that allows users to play, pause, and switch between songs. Users can also create a playlist, store it in local storage, and retrieve it later. The app provides a dynamic interface with song controls like play/pause, next/previous, and a progress bar to track the current song's playback.

Features
Play/Pause Songs: Play and pause functionality with dynamic control updates (play/pause icons).
Next/Previous Song: Users can easily switch between songs in the library or playlist.
Progress Bar: A range input allows users to seek to any part of the song.
Song Library: Dynamic loading of songs from a JSON file for the main library.
Playlist: Users can add songs to a playlist, and their playlist is saved in localStorage to persist even after refreshing the page.
Responsive Design: The application is responsive and works well on both desktop and mobile devices.
Technologies Used
HTML: Structure of the application.
CSS: Styling, including custom fonts and layout.
JavaScript: Handles the player functionality (play, pause, next, previous, progress bar updates), as well as the playlist management.
Local Storage: Used for persisting the playlist between sessions.
Font Awesome: For the music control icons.
Getting Started
Prerequisites
Ensure you have a modern browser (Chrome, Firefox, Edge) that supports HTML5 audio and the localStorage API.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/tunewave.git
cd tunewave
Open the project:

Open index.html in your browser to run the application locally.

Add Your Songs:

Store your song files (e.g., song1.mp3, song2.mp3) in the audio folder.
Update the songs.json file with the details (song name, duration, cover image, file path) of each song.
File Structure
plaintext
Copy code
TuneWave/
│
├── audio/                 # Directory for storing song audio files
│   └── song1.mp3
│
├── image/                 # Directory for images, including album covers
│   └── image.png
│
├── css/
│   └── stylesheet.css      # CSS for styling the application
│
├── js/
│   └── script.js           # Main JavaScript file for handling player functionality
│
├── songs.json              # JSON file containing song details (name, duration, file path, cover image)
├── index.html              # Main page for the music player
└── playlist.html           # Page displaying the user's playlist
Example JSON Structure (songs.json)
json
Copy code
{
  "songs": [
    {
      "songName": "Ram Siya Ram",
      "duration": "4:25",
      "filePath": "song1.mp3",
      "coverPath": "songImage/RamSiyaRam.jpg"
    },
    {
      "songName": "Song 2",
      "duration": "3:45",
      "filePath": "song2.mp3",
      "coverPath": "songImage/Song2.jpg"
    }
  ]
}
Usage
Add Songs to Playlist: Click the + icon next to a song to add it to your playlist.
Remove Songs from Playlist: Visit the playlist page and click the - icon next to a song to remove it from the playlist.
Control Playback: Use the play/pause buttons or the range slider to control the audio.
Contributing
Feel free to submit issues, fork the repository, and send pull requests with improvements. Contributions are always welcome!

License
This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to replace yourusername with your actual GitHub username and adjust the paths and song data as needed for your project.







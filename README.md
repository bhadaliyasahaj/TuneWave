<h1 align="center">TuneWave 🎶</h1>
<p align="center">A simple web-based music player with playlist functionality.</p>

## 🔧 Technologies Used
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript (ES6)</li>
  <li>FontAwesome (for icons)</li>
  <li>LocalStorage (for playlist management)</li>
</ul>

## ✨ Features
<ul>
  <li>Play/pause songs with a master control button.</li>
  <li>Range slider for progress control.</li>
  <li>Playlist functionality: add and remove songs from a playlist stored in LocalStorage.</li>
  <li>Next and previous buttons to navigate songs.</li>
  <li>Display the song name and duration.</li>
  <li>Responsive UI with interactive song cards and dynamic updates.</li>
</ul>

## 🚀 How to Run the Project
<ol>
  <li>Clone the repository: <code>git clone git@github.com:bhadaliyasahaj/TuneWave.git</code></li>
  <li>Navigate to the project directory: <code>cd tunewave</code></li>
  <li>Open the <code>index.html</code> file in your browser.</li>
</ol>

## 📂 Project Structure
<pre>
📦 tunewave
├── 📂 audio                  # Folder containing song audio files
├── 📂 image                  # Folder containing image assets
├── 📂 songImage              # Folder containing cover images for songs
├── 📄 index.html             # Main HTML page
├── 📄 playlist.html          # Playlist page HTML
├── 📄 stylesheet.css         # Stylesheet for the UI
├── 📄 script.js              # JavaScript for functionality
├── 📄 songs.json             # JSON file containing song metadata
└── 📄 README.md              # Project documentation (this file)
</pre>

## ⚙️ Functionalities
<ul>
  <li>All song details are fetched from a JSON file and displayed dynamically.</li>
  <li>Master play/pause control applies across all songs.</li>
  <li>Progress bar updates dynamically as the song progresses.</li>
  <li>Ability to add songs to a local playlist using LocalStorage, which can be viewed and managed on the playlist page.</li>
  <li>Next/Previous song control with automatic song progression.</li>
</ul>

## 📝 Usage Instructions
<ul>
  <li>Click on the play button on the main player to start playing the first song.</li>
  <li>Select different songs by clicking on their play button from the list.</li>
  <li>Adjust the progress of the song using the range slider.</li>
  <li>Add songs to the playlist by clicking the <i class="fa-solid fa-circle-plus"></i> icon next to the song.</li>
  <li>View and manage your playlist on the <a href="playlist.html">playlist page</a>.</li>
</ul>

## 📜 License
<p>This project is licensed under the MIT License - see the LICENSE file for details.</p>


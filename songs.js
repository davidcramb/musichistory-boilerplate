"use strict";

var songs = [];
var addMusicLink = document.getElementById('addMusic');
var listMusicView = document.getElementById('listMusicView');
var addMusicInput = document.getElementById('addMusicView');
var listMusicLink = document.getElementById('listMusic');
var songInfoBox = document.getElementById('songInfoBox');
let XHRmusiclist01 = new XMLHttpRequest ();

// Code for event listeners and hides and shows the different views. Bad naming.
// Adds the event listeners to the first two navbar links and hides/shows the List and Input views
addMusicLink.addEventListener('click', function () {
  hideMusicView(listMusicView);
  addMusicView(addMusicInput);
  musicInput();

});
listMusicLink.addEventListener('click', function () {
  hideMusicView(addMusicInput);
  addMusicView(listMusicView);
});

let hideMusicView = view =>  {
  view.classList.remove('visible'); view.classList.add('hidden'); 
};
let addMusicView = view => {
  view.classList.remove('hidden'); view.classList.add('visible');
};

//This function is invoked in the addMusicLink Event Listener and its primary function
//is to capture data from the user and add a new event listener on the Add button
var musicInput = function () {
  let addButton = document.getElementById('add');
  addButton.addEventListener('click', addMusicInfo)
};

let addMusicInfo = () => {
  console.log('hi')
  let DOMOutput = songInfoBox;
  let userSong = document.getElementById('addSong').value;
  let userArtist = document.getElementById('addArtist').value; 
  let userAlbum = document.getElementById('addAlbum').value;

    let newItemText = `<h2 class="songName">${userSong}</h2><div>${userSong} by ${userArtist} on the album ${userAlbum}</div>`;
    console.log(newItemText)
    DOMOutput.innerHTML += newItemText

};


let loadJSON = () => {

  XHRmusiclist01.open('GET', 'musiclist01.JSON');
  XHRmusiclist01.send();
  XHRmusiclist01.addEventListener('load', JSONparseData);
  XHRmusiclist01.addEventListener('error', JSONerror); 

  function JSONparseData (callback) {
    let data = JSON.parse(this.responseText);
    songs.push(data.music);
    addSongsToDOM(songs);
  }

}
let JSONerror = (xhrEvent) => console.log("an error has occured loading the JSON file");

function addSongsToDOM (songs) {

  let songTitle, artist, album;
  let DOMOutput = document.getElementById('songInfoBox');
  
  for (let i = 0; i < songs[0].length; i++) {
      songTitle = songs[0][i].song;
      artist = songs[0][i].artist;
      album = songs[0][i].album;
      DOMOutput.innerHTML += `<h2 class="songName">${songTitle}</h2>`;
      DOMOutput.innerHTML += `<div>${songTitle} by ${artist} on the album ${album}`;
    };
};
loadJSON();



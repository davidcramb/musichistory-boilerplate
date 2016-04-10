"use strict";

var addMusicLink = document.getElementById('addMusic');
var listMusicView = document.getElementById('listMusicView');
var addMusicInput = document.getElementById('addMusicView');
var listMusicLink = document.getElementById('listMusic');
var songInfoBox = document.getElementById('songInfoBox');
let XHRmusiclist01 = new XMLHttpRequest ();
let XHRmusiclist02 = new XMLHttpRequest ();

// Adds event listeners and hides and shows the different views. Bad naming.
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
  var song = [];
  var userSong = [{'song':'','artist':'','album':''}];
  userSong[0].song =  document.getElementById('addSong').value;
  userSong[0].artist = document.getElementById('addArtist').value; 
  userSong[0].album = document.getElementById('addAlbum').value;
  song.push(userSong);
  addSongsToDOM(song)
};


let loadJSON01 = () => {

  XHRmusiclist01.open('GET', 'musiclist01.JSON');
  XHRmusiclist01.send();
  XHRmusiclist01.addEventListener('load', JSONparseData);
  XHRmusiclist01.addEventListener('error', loadJSONerror); 

};

let loadJSON02 = () => {

  XHRmusiclist02.open('GET', 'musiclist02.JSON');
  XHRmusiclist02.send();
  XHRmusiclist02.addEventListener('load', JSONparseData);
  XHRmusiclist02.addEventListener('error', loadJSONerror);
};

function JSONparseData (callback) {
    let songs = [];
    let data = JSON.parse(this.responseText);
    songs.push(data.music);

    addSongsToDOM(songs);
};



let loadJSONerror = (xhrEvent) => console.log("an error has occured loading the JSON file");

function addSongsToDOM (songs) {

  let songTitle, artist, album;
  let DOMOutput = document.getElementById('songInfoBox');
  console.log(songs)
  for (let i = 0; i < songs[0].length; i++) {
      songTitle = songs[0][i].song;
      artist = songs[0][i].artist;
      album = songs[0][i].album;
      DOMOutput.innerHTML += `<div class='musicRow'>
                              <h2 class="songName">${songTitle}</h2>
                              <div>${songTitle} by ${artist} on the album ${album}
                              <button class='delete'>Delete</button></div>`;
  };
    let moreButton = document.getElementById('more');
    moreButton.addEventListener('click', loadJSON02);
    songInfoBox.addEventListener('click', deleteRow);
};

let deleteRow = (e) => {
  if (e.target.classList.contains('delete')){
    let rowToDelete = e.target.parentNode.parentNode;
    e.currentTarget.removeChild(rowToDelete);

  }
}
loadJSON01();





"use strict";

var songs = [];
var addMusicLink = document.getElementById('addMusic');
var listMusicView = document.getElementById('listMusicView');
var addMusicInput = document.getElementById('addMusicView');
var listMusicLink = document.getElementById('listMusic')

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function addSongtoEnd (songarray, newSong, newArtist, newAlbum) {
  songarray.push(newSong + ' - by ' + newArtist + ' on the album ' + newAlbum)
};

function addSongtoBeginning (songarray, newSong, newArtist, newAlbum){
  songarray.unshift(newSong + ' - by ' + newArtist + ' on the album ' + newAlbum)
}

// (Regex practice) loops through existing song arrays to remove characters that don't belong.

function removeCrap (crap) {
  songs = [];
  for (var i = 0; i < crap.length; i ++){
    var replaced = crap[i].replace(/[!@##$%^&*()]/g,"").replace(/[>]/g,"-");
    songs.push(replaced);
  };
  addSongtoEnd(songs, "Bridge", "Red Hot Chili Peppers", "Californication");
  addSongtoBeginning(songs, "Breathe", "The Prodigy", "Fat of the Land");
};
removeCrap(songs);

// Writes the songs from the song array to the listMusicView DOM element
function addSongsToDOM (songs) {
  var DOMOutput = document.getElementById('songInfoBox')
    for (let i in songs) {
      var songTitle = songs[i].split(" - ")[0];
      console.log(songTitle)
      DOMOutput.innerHTML += `<h2 class="songName">${songTitle}</h2>`;
      DOMOutput.innerHTML += `${songs[i]}`;
    };
};
addSongsToDOM(songs);

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
  let DOMOutput = document.getElementById('songInfoBox')
  let addButton = document.getElementById('add');
  let addMusicInfo = (x) => {
    let userSong = document.getElementById('addSong').value;
    let userArtist = document.getElementById('addArtist').value; 
    let userAlbum = document.getElementById('addAlbum').value;
    DOMOutput.innerHTML += `<h2 class"songName">${userSong}</h2><div>${userSong} by ${userArtist} on the album ${userAlbum}`
  };
  addButton.addEventListener('click', addMusicInfo)
}






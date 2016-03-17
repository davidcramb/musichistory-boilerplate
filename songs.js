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
addMusicLink.addEventListener('click', function () {
  hideMusicView(listMusicView)
  addMusicView(addMusicInput);
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





"use strict";
$(document).ready(function() {

var hideAddMusicView = function () {
  $('#addMusicView').hide();
};
hideAddMusicView();

function addSongsToDOM (songs) {
  for (let song in songs) {
   let currentSong = songs[song];
    $('#songInfoBox').append(`<div class='musicRow'>
                              <h2 class="songName"><span class="btn delete">X</span>${currentSong.song}</h2>
                              <div class="songData">${currentSong.song} by ${currentSong.artist} on the album ${currentSong.album}
                              </div>`);  }
}

// let addMusicInfo = () => {
//   var song = {'music':[]};
//   var userSong = [{'song':'','artist':'','album':''}];
//   if (!$('#addSong').val() || !$('#addArtist').val() || !$('#addAlbum').val()) {
//     alert('no empty inputs plz');
//     return;
//   }
//   userSong.song =  $('#addSong').val();
//   userSong.artist = $('#addArtist').val();
//   userSong.album = $('#addAlbum').val();
//   song.music = userSong;
//     $('input[type="text"]').each(function(index, input) {
//     input.value = '';
//     });
//     console.log(song)
//   addSongsToDOM(song);
// };

let deleteRow = (e) => {
  let rowToDelete = ($(event)[0].target.parentNode.parentNode);
  $(rowToDelete).animate({
    opacity: 0.10,

  }, 500, function() {

  $('#songInfoBox')[0].removeChild(rowToDelete);
  })
  };


$.ajax({
  url: 'https://dcc-music-history.firebaseio.com/music/.json',
  type: 'GET'
  }).done(function(songs){
    console.log(songs)
  addSongsToDOM(songs);
});

$('#add').click(function () {
  let newSong = {
    "song": $('#addSong').val(),
    "artist": $('#addArtist').val(),
    "album": $('#addAlbum').val()
  }
  console.log(newSong)
  $.ajax({
    url: 'https://dcc-music-history.firebaseio.com/music/.json',
    type: 'POST',
    data: JSON.stringify(newSong)
  }).done(function(songFromPost){
    console.log("it saved", songToAdd)

    addSongsToDOM(songToAdd)

  });
});

$('#addMusic').click(function() {
  $('#listMusicView').fadeOut();
  $('#addMusicView').fadeIn();
});
$('#listMusic').click(function(){
  $('#addMusicView').fadeOut();
  $('#listMusicView').fadeIn();
});
// $('#add').click(addMusicInfo);
$('#songInfoBox').on('click', '.delete', deleteRow);
});




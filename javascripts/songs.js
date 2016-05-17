"use strict";
$(document).ready(function() {

var hideAddMusicView = function () {
  $('#addMusicView').hide();
};
hideAddMusicView();

function addSongsToDOM (songs) {
  for (let song in songs) {
   let currentSong = songs[song];
    $('#songInfoBox').append(`<div class='musicRow' id='${song}'>
                              <h2 class="songName"><span class="btn delete">X</span>${currentSong.song}</h2>
                              <div class="songData">${currentSong.song} by ${currentSong.artist} on the album ${currentSong.album}
                              </div>`);  }
}

let pageLoad = () => {
$.ajax({
  url: 'https://dcc-music-history.firebaseio.com/music/.json',
  type: 'GET'
  }).done(function(songs){
  addSongsToDOM(songs);
  songList.push(songs);
  });
};

// var getSong = () => {
//   $.ajax({
//     url: `https://dcc-music-history.firebaseio.com/music/${songID}.json`
//   }).done(function(songID){
//     console.log(songID)
//   });
// };
  
$('#add').click(function () {
  let newSong = {
    "song": $('#addSong').val(),
    "artist": $('#addArtist').val(),
    "album": $('#addAlbum').val()
    };

  $.ajax({
    url: 'https://dcc-music-history.firebaseio.com/music/.json',
    type: 'POST',
    data: JSON.stringify(newSong)
  }).done(function(songFromPost){
     $('#songInfoBox').empty();
    pageLoad();
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

$(document).on('click', '.delete', function() {
  let objecttoDelete = $(this).parent().parent();
  objecttoDelete.remove();
$.ajax({
    url: `https://dcc-music-history.firebaseio.com/music/${objecttoDelete.get(0).id}.json`,
    type: 'DELETE'
  });
});

pageLoad();

});

let songList = [];

let filter = () => {
  console.log(songList)
  let testsearchByArtist = "Pink Floyd";
  console.log(testsearchByArtist);
}
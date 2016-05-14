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


let deleteRow = (e) => {
  let rowToDelete = ($(event)[0].target.parentNode.parentNode);
  let objecttoDelete = rowToDelete.id;
  console.log(objecttoDelete)
  $(rowToDelete).animate({
    opacity: 0.10,
  }, 500, function() {
  $('#songInfoBox')[0].removeChild(rowToDelete);
  });

  $.ajax({
    url: `https://dcc-music-history.firebaseio.com/music/${objecttoDelete}.json`,
    type: 'DELETE'
  }).done(function(deletedSong){
    console.log(deletedSong)
  })
};  



var pageLoad = function () {
$.ajax({
  url: 'https://dcc-music-history.firebaseio.com/music/.json',
  type: 'GET'
  }).done(function(songs){
  addSongsToDOM(songs);
  });
};

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

let dothis = () => {
  console.log('hi')
}

$('#songInfoBox').on('click', '.delete', deleteRow);

pageLoad();
});



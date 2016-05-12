"use strict";
$(document).ready(function() {

var hideAddMusicView = function () {
  $('#addMusicView').hide();
};
hideAddMusicView();

function addSongsToDOM (songs) {
  $(songs.music).each(function(index, data){
    $('#songInfoBox').append(`<div class='musicRow'>
                              <h2 class="songName"><span class="btn delete">X</span>${data.song}</h2>
                              <div class="songData">${data.song} by ${data.artist} on the album ${data.album}
                              </div>`);
  });
}
let addMusicInfo = () => {
  var song = {'music':[]};
  var userSong = [{'song':'','artist':'','album':''}];
  if (!$('#addSong').val() || !$('#addArtist').val() || !$('#addAlbum').val()) {
    alert('no empty inputs plz');
    return;
  }
  userSong[0].song =  $('#addSong').val();
  userSong[0].artist = $('#addArtist').val();
  userSong[0].album = $('#addAlbum').val();
  song.music = userSong;
    $('input[type="text"]').each(function(index, input) {
    input.value = '';
    });
  addSongsToDOM(song);
};
let deleteRow = (e) => {
  let rowToDelete = ($(event)[0].target.parentNode.parentNode);
  $(rowToDelete).animate({
    opacity: 0.10,
    left: "+=500px",
  }, 1000, function() {

  $('#songInfoBox')[0].removeChild(rowToDelete);
  })
  };


$.ajax({
  url: 'musiclist01.JSON',
  }).done(function(songs){
  addSongsToDOM(songs);
});
$('#more').click(function () {
  $.ajax({
    url: 'musiclist02.JSON',
  }).done(function(songs){
    addSongsToDOM(songs);
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
$('#add').click(addMusicInfo);
$('#songInfoBox').on('click', '.delete', deleteRow);
});




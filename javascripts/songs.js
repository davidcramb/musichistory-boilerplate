"use strict";
$(document).ready(function() {
function addSongsToDOM (songs) {
  $(songs.music).each(function(index, data){
    $('#songInfoBox').append(`<div class='musicRow'>
                              <h2 class="songName">${data.song}</h2>
                              <div>${data.song} by ${data.artist} on the album ${data.album}
                              <button class='delete'>Delete</button></div>`);
  });
}
let addMusicInfo = () => {
  var song = {'music':[]};
  var userSong = [{'song':'','artist':'','album':''}];
  if (!$('#addSong').val() || !$('#addArtist').val() || !$('#addAlbum').val()) {
    alert('no empty inputs plz')
    return
  }
  userSong[0].song =  $('#addSong').val();
  userSong[0].artist = $('#addArtist').val();
  userSong[0].album = $('#addAlbum').val();
  song.music = userSong;
    $('input[type="text"]').each(function(index, input) {
    input.value = '';
    })
  addSongsToDOM(song);
};
let deleteRow = (e) => {
  let rowToDelete = ($(event)[0].target.parentNode.parentNode);
  $('#songInfoBox')[0].removeChild(rowToDelete);
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
  $('#listMusicView').hide();
  $('#addMusicView').show();
});
$('#listMusic').click(function(){
  $('#listMusicView').show();
  $('#addMusicView').hide();
});
$('#add').click(addMusicInfo);
$('#songInfoBox').on('click', '.delete', deleteRow);
});




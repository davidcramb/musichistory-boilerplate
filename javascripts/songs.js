"use strict";
$(document).ready(function() {

var hideAddMusicView = function () {
  $('#addMusicView').hide();
};
hideAddMusicView();

function addSongsToDOM (songs) {
  for (let song in songs) {
   let currentSong = songs[song];
    $('#songInfoBox').append(`<div class='musicRow' id='del_${song}'>
                              <h2 class="songName"><span class="btn delete">X</span>${currentSong.title}</h2>
                              <div class="songData">${currentSong.title} by ${currentSong.artist} on the album ${currentSong.album}<span class="btn edit" id="edit_${song}">edit</span>
                              </div>`);  }
}

let pageLoad = () => {
$.ajax({
  url: 'https://dcc-music-history.firebaseio.com/music/.json',
  type: 'GET'
  }).done(function(songs){
  addSongsToDOM(songs);
  songList.songs = songs;
  });
  // if ($('#add').attr('hidden'))
  console.log($('#add:hidden'));
  if ($('#add:hidden')) {
    $('#add').show();
  }
};

let getFirebaseID = (id) => {
  console.log(id)
  return id.split("edit_")[1];
}

$('#add').click(function () {
  let newSong = {
    "title": $('#addSong').val(),
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
  $('#songInfoBox').empty();
  pageLoad();
  $('#addMusicView').fadeOut();
  $('#listMusicView').fadeIn();
});

$(document).on('click', '.delete', function() {
  let objecttoDelete = $(this).parent().parent();
  objecttoDelete.remove();
  // console.log(objecttoDelete.get(0).id);
  getFirebaseID(objecttoDelete.get(0).id);
$.ajax({
    url: `https://dcc-music-history.firebaseio.com/music/${getFirebaseID(objecttoDelete.get(0).id)}.json`,
    type: 'DELETE'
  });
});

//TO DO
$(document).on('click', '.edit', function() {
  $('#listMusicView').fadeOut();
  $('#addMusicView').fadeIn()
  $('#addMusicView button').hide();
  
  $('<button id="edit-current-song" class="btn">Edit</button>').appendTo("#addMusicView");
  // $('#addMusicView button').text('Edit').removeAttr('id').addClass('edit-current-song');

  let songID = getFirebaseID($(this).get(0).id);
  console.log(songID)
  $.ajax({
    url: `https://dcc-music-history.firebaseio.com/music/${songID}.json`,
    type: 'GET'
  }).done(function(song){
    console.log(song)
    let songEditObject = { };
    $(document).on('click', '#edit-current-song', function() {
      songEditObject.title = $('#addSong').val();
      songEditObject.artist = $('#addArtist').val();
      songEditObject.album = $('#addAlbum').val();

      console.log(songEditObject)
      // console.log(songEditObject);
      $.ajax({
        url: `https://dcc-music-history.firebaseio.com/music/${songID}.json`,
        type: 'PUT',
        data: JSON.stringify(songEditObject),
      }).done(function(barg) {
        $('#songInfoBox').empty();
        pageLoad();

        $('#songInfoBox').empty();
        
        $('#listMusicView').fadeIn();
        
        $('#edit-current-song').remove();

      })
    });
  });

});

//ON PAGE LOAD
pageLoad();
});

let songList = { songs: {}}

// let filter = (artist) => {
//   console.log(songList)
//   let testsearchByArtist = "Pink Floyd";
//   for (let key in songList.songs) {
//     var currentSong = songList.songs[key];
//     if (currentSong.artist === testsearchByArtist) {
//       console.log(currentSong)
//     }
//   }
// }


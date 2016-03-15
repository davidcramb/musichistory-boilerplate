var songs = [];

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
// addSongtoBeginning (songs, "My Humps - by The Black Eye Peas");

// addSongtoEnd(songs, "Under the Bridge - by Red Hot Chili Peppers");

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
    for (i in songs) {
      var songTitle = songs[i].split(" - ")[0];
      DOMOutput.innerHTML += `<h2 class="songName">${songTitle}</h2>`;
      DOMOutput.innerHTML += `${songs[i]}`;
    };
};
addSongsToDOM(songs);

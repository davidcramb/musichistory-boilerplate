var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function addSongtoEnd (songarray, newsong) {
  songarray.push(newsong)
};

function addSongtoBeginning (songarray, newsong){
  songarray.unshift(newsong)
}
addSongtoBeginning (songs, "My Humps by The Black Eye Peas");

addSongtoEnd(songs, "Under the Bridge by Red Hot Chili Peppers");

function removeCrap (crap) {
  console.log()
   for (var i = 0; i < crap.length; i ++){
    var toString = crap[i].replace(/[!@##$%^&*()><]/g,"")
    console.log(toString)

  }
};
removeCrap(songs)
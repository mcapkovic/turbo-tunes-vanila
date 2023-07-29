const songs = songsData.filter(
  (song) => song.artist != null && song.artist != ""
);

const tileElement = document.querySelector(".tile");
const containerElement = document.querySelector(".container");

const tiles = songs
  .map((song, index) => {
    const newTileElement =
      index === 0 ? tileElement : tileElement.cloneNode(true);
    const titleElement = newTileElement.querySelector(".tile__title");
    const imageElement = newTileElement.querySelector(
      ".tile__song-link__image"
    );
    const linkElement = newTileElement.querySelector(".tile__song-link");
    const lyricsElement = newTileElement.querySelector(".tile__lyrics");

    titleElement.textContent = `${song.artist} - ${song.song_name}`;
    imageElement.src = song.song_img;
    linkElement.href = song.song_url;

    const lyrics = song.song_lyrics
      ?.split("\n")
      .filter((_, index) => index < 10)
      .join("\n");

    lyricsElement.textContent = lyrics ? `${lyrics}\n...` : "";

    return newTileElement;
  })
  .filter((_, index) => index > 0);

tiles.forEach((tile) => {
  containerElement.appendChild(tile);
});

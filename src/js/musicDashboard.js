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
    const lyricsPreviewElement = newTileElement.querySelector(
      ".tile__lyrics__preview"
    );
    const lyricsTextElement = newTileElement.querySelector(
      ".tile__lyrics__text"
    );

    titleElement.textContent = `${song.artist} - ${song.song_name}`;
    imageElement.src = song.song_img;
    linkElement.href = song.song_url;

    const lyrics = song.song_lyrics?.split("\n");
    lyricsElement.style.display = song.song_lyrics === "" ? "none" : "block";
    lyricsPreviewElement.textContent = `lyrics: ${lyrics[0]}... (click to expand))`;
    lyricsTextElement.textContent = song.song_lyrics;

    return newTileElement;
  })
  .filter((_, index) => index > 0);

tiles.forEach((tile) => {
  containerElement.appendChild(tile);
});

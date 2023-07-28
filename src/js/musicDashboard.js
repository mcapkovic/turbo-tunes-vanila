const songs = songsData.filter(
  (song) => song.artist != null && song.artist != ""
);

function getTileTitleElement(element) {
  return element.querySelector(".tile__title");
}

function getTileImageElement(element) {
  return element.querySelector(".tile__image");
}

const tileElement = document.querySelector(".tile");
const containerElement = document.querySelector(".container");

const tiles = songs
  .map((song, index) => {
    const newTileElement =
      index === 0 ? tileElement : tileElement.cloneNode(true);
    const titleElement = getTileTitleElement(newTileElement);
    const imageElement = getTileImageElement(newTileElement);

    titleElement.textContent = `${song.artist} - ${song.song_name}`;
    imageElement.src = song.song_img;

    return newTileElement;
  })
  .filter((_, index) => index > 0);

tiles.forEach((tile) => {
  containerElement.appendChild(tile);
});

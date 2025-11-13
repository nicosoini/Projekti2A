document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "91afecd2af16314e66a20e5c4544b915"; // oma API-avain
  // Haetaan elementit HTML:stä
  const artistSelect = document.getElementById("artistSelect"); // Artistin valinta
  const artistInfoDiv = document.getElementById("artistInfo"); // Artistin tiedot
  const albumsDiv = document.getElementById("albums"); // Albumit

  // Artistin valintalistan kuuntelija
  artistSelect.addEventListener("change", () => {
    const artist = artistSelect.value.trim();
    if (!artist) return; // Jos valinta on tyhjä, ei tehdä mitään
    // Tyhjennetään vanhat tiedot
    artistInfoDiv.innerHTML = "";
    albumsDiv.innerHTML = "";
    // Haetaan ja näytetään artistin tiedot ja albumit
    fetchArtistInfo(artist);
    fetchAlbums(artist);
  });

  // Haetaan artistin perustiedot Live.fm API:sta
  function fetchArtistInfo(artist) {
    artistInfoDiv.innerHTML = "<p>Ladataan artistin tietoja...</p>";

    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(
      artist
    )}&api_key=${apiKey}&format=json`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // Jos artistia ei löydy
        if (!data.artist) {
          artistInfoDiv.textContent = "Artistia ei löytynyt.";
          return;
        }

        const info = data.artist;
        // Lyhennetään artistin biotekstiä 300 merkkiin
        const bioText =
          info.bio?.summary && info.bio.summary.length > 0
            ? info.bio.summary.slice(0, 300) + "..."
            : "Ei lisätietoja saatavilla.";

        // Näytetään artistin nimi ja bioteksti
        artistInfoDiv.innerHTML = `
          <h2>${info.name}</h2>
          <p>${bioText}</p>
        `;
      })
      .catch(err => {
        console.error("Virhe artistin tietojen haussa:", err);
        artistInfoDiv.textContent = "Virhe artistin tietojen haussa.";
      });
  }

  // Haetaan artistin albumit Live.fm API:sta
  function fetchAlbums(artist) {
    albumsDiv.innerHTML = "<p>Ladataan albumeja...</p>";

    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${encodeURIComponent(
      artist
    )}&api_key=${apiKey}&format=json`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // Jos albumeja ei löydy
        if (!data.topalbums?.album) {
          albumsDiv.textContent = "Albumeja ei löytynyt.";
          return;
        }
        // Tyhjennetään loading-teksti
        albumsDiv.innerHTML = "";

        // Näytetään vain 8 suosituinta albumia
        data.topalbums.album.slice(0, 8).forEach(album => {
          // Albumin kansikuva
          const img = album.image[2]["#text"] || "https://via.placeholder.com/200x200";
          // Albumin div
          const div = document.createElement("div");
          div.className = "album";

          div.innerHTML = `
            <img src="${img}" alt="${album.name}">
            <h3>${album.name}</h3>
            <button>Näytä kappaleet</button>
          `;
          // Haetaan nappi ja lisätään tapahtumankuuntelija
          const btn = div.querySelector("button");
          btn.addEventListener("click", () => toggleTracks(artist, album.name, div, btn));
          // Lisätään albumi albumien diviin
          albumsDiv.appendChild(div);
        });
      })
      .catch(err => {
        console.error("Virhe albumien latauksessa:", err);
        albumsDiv.textContent = "Virhe albumien latauksessa.";
      });
  }

  // Haetaan ja näytetään albumien kappalistat
  function toggleTracks(artist, album, container, button) {
    // Jos kappalelista on jo näkyvissä, suljetaan se
    const existingList = container.querySelector("ul");
    if (existingList) {
      existingList.remove();
      button.textContent = "Näytä kappaleet";
      return;
    }

    // Vaihdetaan napin teksti kun kappaleet ovat näkyvissä
    button.textContent = "Piilota kappaleet";

    const url = `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${encodeURIComponent(
      artist
    )}&album=${encodeURIComponent(album)}&api_key=${apiKey}&format=json`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // Jos kappaleita ei löydy
        if (!data.album?.tracks?.track) {
          console.log("Ei kappaleita albumissa:", album);
          return;
        }

        // Luodaan ul-lista kappaleille
        const ul = document.createElement("ul");
        ul.classList.add("tracklist");
        // Lisätään kappaleet listaan
        data.album.tracks.track.forEach(track => {
          const li = document.createElement("li");
          li.textContent = track.name;
          ul.appendChild(li);
        });

        // Lisätään biisilista kuvan alle, ennen nappia
        const buttonElement = container.querySelector("button");
        container.insertBefore(ul, buttonElement);
      })
      .catch(err => console.error("Virhe kappaleiden haussa:", err));
  }
});

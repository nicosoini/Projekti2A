# Projektin nimi ja tekijät
Music Information App (ArtistiHub).
Tekijät: Nico Soini, Simo Rönni

## Verkkolinkit:
Pääset julkaistuun sovellukseen käsiksi osoitteessa [ArtistiHub](https://albumihub.netlify.app/)
Linkki projektin videoesittelyyn [Nico](), [Simo]()

## Työn jakautuminen 
Työskentelimme molemmat niin HTML:n, CSS:n ja scriptin parissa. Teimme työtä samaan aikaan Discordin välityksellä, hyödyntäen LiveShare lisäominaisuutta Visual Studio Codessa. Työhön käytimme yhteensä aikaa noin 8 tuntia. Emme jakaneet osioita erikseen vaan suoritimme samaan aikaan molemmat niin HTML:n, visuaalisen ja scriptipuolen. Tehtävässä käytimme Simon API-avainta.

## Oma arvio työstä ja oman osaamisen kehittymisestä:
Projektissa tuli vahvistettua AJAX-hakujen tekemistä, API-datan käsittelyä ja dynaamista DOM-manipulointia. Opimme myös virheenkäsittelyä ja sitä, miten sovelluksen rakenne kannattaa suunnitella selkeästi ennen koodaamista. Projektin lopputulos toimii paremmin kuin aluksi oletimme, ja koemme että osaaminen nimenomaan JavaScriptin puolella kehittyi eniten.

## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka
Kurssin tempo on ollut sopiva ja tehtävät loogisesti eteneviä. On ollut hyödyllistä, että projekteissa joutuu oikeasti soveltamaan kaikkea opetettua. Ohjeet olivat selkeitä.



## Sisällysluettelo:

- [Tietoja sovelluksesta](#tietoja-sovelluksesta)
- [Kuvakaappaukset](#kuvakaappaukset)
- [Teknologiat](#teknologiat)
- [Asennus](#asennus)
- [Lähestymistapa](#lähestymistapa)
- [Kiitokset](#kiitokset)
- [Lisenssi](#lisenssi)

## Tietoja sovelluksesta
ArtistiHub hakee valitun artistin tietoja Last.fm:n API:n kautta. Sovellus näyttää artistin lyhyen esittelyn sekä listan suosituimmista albumeista. Albumeilla on painike, jonka kautta käyttäjä voi avata ja sulkea albumin kappalelistan.
Kaikki tapahtuu dynaamisesti ilman sivun uudelleenlatausta.

## Kuvakaappaukset
<img alt="image" src="/kuvat/image-1.png" />


Kuva: [Nico Soini](https://github.com/nicosoini)

## Teknologiat
Käytimme seuraavia teknologioita: `html`, `css`, `Javascript`, `Netlify`, `Last.FM`. `html` Käytimme sivuston perusrakenteen luomiseen, kuten div-elementit artisteille, albumeille jne. Tämän tekemiseen meillä kului aikaa noin 2 tuntia. `css` avulla muokkasimme sivustosta erittäin modernin ja helppokäyttöisen. Lisäsimme oman logon sivustolle myös tuomaan ammattimaisempaa näkymää. Tähän vaiheeseen meillä kului aikaa myös noin 2 tuntia ja käytimme ChatGPT:tä apuna tuomaan elementit muokattavaksi, koska halusimme olla erittäin tarkkoja, että kaikki toimivat. `Last.FM` on projektimme sydän eli API-avain. Tämän avulla haemme dataa [LiveFm API](https://www.last.fm/api) sivustolta eri artisteista, joita tässä tapauksessa olivat mm. Travis Scott, Playboi Carti, Taylor Swift ja The Weeknd. Tuomme datan omalle sivustollemme ja puramme sen eri osoihin, albumit albumidiviin, artistitiedot artistiInfo -diviin, jne. Tähän meillä kului eniten aikaa, koska API-avain ei toiminut aluksi ollenkaan ja pyysimme ChatGPT:ltä apua, joka auttoi meitä saamaan Apin toimimaan oikein. `Javascript` loimme toiminnallisudet Apille, joka hakee elementit HTML:stä ja tuo Last.Fm -apin tiedot niihin. Scriptiin meillä kului aikaa noin 4 tuntia. `Netlify` alustalle on julkaistu valmis sovellus.


## Asennus
Kirjoita lyhyet ohjeet sovelluksen käynnistämiseen ja käyttöön. Esimerkiksi: 
- Seuraa Netlify linkkiä sovellukseen, joka sijaitsee ylempänä. 
- Lataa projektin tiedostot GitHubista. Avaa kansio koodieditorissa. Avaa index.html selaimessa → sovellus toimii heti. Jos käytät omaa API-avainta, lisää se script.js-tiedostoon muuttujaan apiKey.



## Kiitokset
- [LiveFm API](https://www.last.fm/api)
- Käytimme ChatGPT:tä apuna Apin toiminnallisuuden varmistamiseen, kuten ongelmatilanteessa, jossa emme saaneet apiavainta toimimaan oikein. Pyysimme apua myös muotoilun kanssa, jotta saimme css:ään oikeat elementit, joita muokata.

## Lisenssi
MIT-lisenssi @ [Nico Soini](https://github.com/nicosoini)

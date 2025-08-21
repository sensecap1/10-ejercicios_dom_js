//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const btnToClick = document.getElementById('btnToClick');
btnToClick.addEventListener('click', (event) => {
    console.log(event);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
    console.log(event.target.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (event) => {
    console.log(event.target.value);
});

//1.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.const albums = ["De Mysteriis Dom Sathanas", "Reign of Blood",  "Ride the Lightning",  "Painkiller",  "Iron Fist",];
const albums = ["De Mysteriis Dom Sathanas", "Reign of Blood", "Ride the Lightning", "Painkiller", "Iron Fist"];
const albumsContainer = document.getElementById('albums');
albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    albumsContainer.appendChild(li);
});
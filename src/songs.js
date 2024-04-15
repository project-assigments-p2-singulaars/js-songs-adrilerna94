//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    const result = array.map(element => element.artist);
    console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    const result = array.filter((song => song.artist === artist))
    console.log("Exercise 2 ->", result);
    return result;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(arr) {
    // Clonar el array original para no modificarlo directamente
    const newArr = arr.slice();
    
    // Ordenar el nuevo array alfabéticamente según el título
    newArr.sort((a, b) => {
        // Convertir los títulos a minúsculas para asegurar una comparación insensible a mayúsculas
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        // Utilizar la función de comparación para ordenar alfabéticamente
        if (titleA < titleB) return -1; // Si el título A está antes en orden alfabético, retornar -1
        if (titleA > titleB) return 1; // Si el título B está antes en orden alfabético, retornar 1
        return 0; // Si los títulos son iguales, retornar 0
    });
    
    // Obtener solo los títulos en un nuevo array
    const titles = newArr.map(item => item.title);
    
    // Devolver los primeros 10 elementos si hay más de 10, o todos los elementos si hay menos de 10
    return titles.slice(0, 10);
}

//Exercise 4: Order by year, ascending
function orderByYear(songs){
    const titleYearArray = songs.map(songs => (
    {
        title : songs.title,
        year : songs.year
    }))
    const songsSortedByYear = titleYearArray.slice().sort((a,b) => {
        if (a.year !== b.year){
            return a.year - b.year;
        }
        else {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            // Utilizar la función de comparación para ordenar alfabéticamente
            if (titleA < titleB) return -1; // Si el título A está antes en orden alfabético, retornar -1
            if (titleA > titleB) return 1; // Si el título B está antes en orden alfabético, retornar 1
            return 0; // Si los títulos son iguales, retornar 0
        }
    });
    console.log(songsSortedByYear);
    return songsSortedByYear;
};

//Exercise 5: Filter songs by genre
function songsByGenre(songs, genre) {
    const filterGenre = songs.filter(song => song.genre.includes(genre));
    console.log(filterGenre);
    return filterGenre;
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(songs) {
    const durationToSeconds = songs.map(songs => {
        const partduration = songs.duration.split(" ");
        const minutes = parseInt(partduration[0]);
        const seconds = parseInt(partduration[1]);
        if(minutes === 0){
            return {
                ...songs,
                duration: seconds
            };
        }
        else if (seconds === 0){
            return {
                ...songs,
                duration: minutes * 60
            };
        }
        else{
            let result = minutes * 60 + seconds;
            return {
                ...songs,
                duration: result
            };
        }
    })
    console.log(durationToSeconds);
    return durationToSeconds;
};

//Exercise 7: Get the longest song
function getLongestSong(){
    
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };

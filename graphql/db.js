
export let movies =[
    {
        id:0,
        name: "Star Wars",
        score:7
    },
    {
        id:1,
        name: "Avangers",
        score:9
    },
    {
        id:2,
        name: "The GodFather II",
        score:8
    },
    {
        id:3,
        name: "Logan",
        score:2
    }
]
export const getMovies =() => movies;

export const getById= id =>{
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0];
}

export const deleteMovie =(id)=>{
    const cleanedMovie = movies.filter(movie => movie.id !==id);
    if(movies.length > cleanedMovie.length){
        movies = cleanedMovie;
        return true;
    }
    else{
        return false;
    }
}

export const addMovie =(name,score) =>{
    const newMovie ={
        id: `${movies.length +1}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie
}
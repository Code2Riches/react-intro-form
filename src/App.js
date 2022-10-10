import { useState } from 'react';
import './App.css';

const MovieForm = (props) => {
  console.log(props)
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [year, setYear] = useState(0);
  const [imdb, setImdb] = useState(0);
  const [rated, setRated] = useState("");
  const [released, setReleased] = useState(0);
  const [runtime, setRuntime] = useState(0);
  const [genre, setGenre] = useState("");
  const [writer, setWriter] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <div>
      {/* <h1> Movie Form </h1> */}
      <label>Title: </label> 
      <input type = "text" onChange = {(event) => {setTitle(event.target.value)}}/>
      <br/>
      <label>Director: </label>
      <input type = "text" onChange = {(event) => {setDirector(event.target.value)}}/>
      <br/>
      <label>Actors: </label>
      <input type = "text" onChange = {(event) => {setActors(event.target.value)}}/>
      <br/>
      <label>Plot: </label> 
      <input type = "text" onChange = {(event) => {setPlot(event.target.value)}}/>
      <br/>
      <label>Year: </label>
      <input type = "number" onChange = {(event) => {setYear(event.target.value)}}/>
      <br/> 
      <label>Imdb Rating: </label>
      <input type = "number" step = "0.1" onChange = {(event) => {setImdb(event.target.value)}}/>
      <br/>
      <label>Rated: </label>
      <input type = "text" onChange = {(event) => {setRated(event.target.value)}}/>
      <br/>
      <label>Released: </label>
      <input type = "date" onChange = {(event) => {setReleased(event.target.value)}}/>
      <br/>
      <label>Runtime: </label>
      <input type = "number" onChange = {(event) => {setRuntime(event.target.value)}}/>
      <br/>
      <label>Genre: </label>
      <input type = "text" onChange = {(event) => {setGenre(event.target.value)}}/>
      <br/>
      <label>Writer: </label>
      <input type = "text" onChange = {(event) => {setWriter(event.target.value)}}/>
      <br/>
      <label>Language: </label>
      <input type = "text" onChange = {(event) => {setLanguage(event.target.value)}}/>

      <p>Current Title: {title}</p>
      <p>Current Director: {director}</p>
      <p>Current Actors: {actors}</p>
      <p>Current Plot: {plot}</p>
      <p>Current Year: {year}</p>
      <p>Current Imdb Rating: {imdb}</p>
      <p>Current Rating: {rated}</p>
      <p>Current Released Date: {released}</p>
      <p>Current Runtime: {runtime}</p>
      <p>Current Genre: {genre}</p>
      <p>Current Writer: {writer}</p>
      <p>Current Language: {language}</p>

      <button onClick={()=>{
        const newMovie = {
          title: title,
          director: director,
          actors: actors,
          plot: plot,
          year: year,
          imdb: imdb,
          rating: rated,
          released: released,
          runtime: runtime,
          genre: genre,
          writer: writer,
          language: language
        }

        props.handleAddMovie(newMovie)
        console.log(newMovie)
      }}>Add Movie</button>
    </div>
  );
};

const MovieDisplay = (props) => {
  return (
    <div>
      {props.movieList.map((movie, index) => {
        return <MovieItem movie={movie} key={index}/>
      })}
    </div>
  )
}

const MovieItem = (props) => {
  return (
    <div>
      <h2>Title: {props.movie.title}</h2>
      <p>Director: {props.movie.director}</p>
      <p>Actors: {props.movie.actors}</p>
      <p>Plot: {props.movie.plot}</p>
      <p>Year: {props.movie.year}</p>
      <p>Imdb Rating: {props.movie.imdb}</p>
      <p>Rated: {props.movie.rated}</p>
      <p>Released: {props.movie.released}</p>
      <p>runtime: {props.movie.runtime}</p>
      <p>genre: {props.movie.genre}</p>
      <p>writer: {props.movie.writer}</p>
      <p>language: {props.movie.language}</p>
      
    </div>
  )
}

function App() {

  const [movieList, setMovieList] = useState([]);

  const handleAddMovie = (newMovie) => {
    const movieListCopy = [...movieList, newMovie]
    setMovieList(movieListCopy)
  }
  console.log(movieList)  

  return ( 
    <div className="App">
      <h1>Movie Form</h1>
      <header className="App-header">
        <MovieForm handleAddMovie={handleAddMovie}/>
        <MovieDisplay movieList={movieList}/>
      </header>
    </div>
  );
}

export default App;
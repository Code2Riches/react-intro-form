import { useState } from 'react';
import './App.css';

function App() {
  return ( 
    <div className="App App-header" >
      <MovieForm />
    </div>
  );
}

function MovieForm(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [year, setYear] = useState(0);
  const [imbd, setImbd] = useState(0);
 
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
      <input type = "number" step = "0.1" onChange = {(event) => {setImbd(event.target.value)}}/>
      
      <p>Current Title: {title}</p>
      <p>Current Director: {director}</p>
      <p>Current Actors: {actors}</p>
      <p>Current Plot: {plot}</p>
      <p>Current Year: {year}</p>
      <p>Current Imbd Rating: {imbd}</p>
    </div>
  );
};

export default App;
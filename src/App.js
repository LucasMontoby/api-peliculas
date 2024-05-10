
import { useEffect, useState } from 'react';
import './style.css';

function App() {

  const [peliculas, setPeliculas] = useState([])

  useEffect (() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=1c3fab805396314881b22647f450a7da')
    .then(response => response.json())
    .then(data => setPeliculas(data.results))
    .catch(e => console.error('Errro al obtener pelíclas: ', e))
    },[])
  

  return (
  <div>
    <h1 className="titulo">Listado de Películas Populares </h1>
    <ul>
      {peliculas.map(pelicula =>(
        <div>
          <li key={pelicula.id}>
            <img src={`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg${pelicula.poster_path}`} alt={peliculas.title}
            />
          <h2>{pelicula.title}</h2>
          <p>Puntuación: {pelicula.vote_average}</p>
          </li>
        </div>
     
      ))}
    </ul>
  </div>
  );
}

export default App;

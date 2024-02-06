import axios from "axios";
import React, {useEffect,useState } from "react";
export default function Movies(){
    const [moviesList, setMoviesList]=useState([]);
    const options = { headers: {accept: 'application/json',Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDNhMTE5NWY3NGEwNzhjZmY4YjNlZDQxNTQ2NGJlZCIsInN1YiI6IjY0M2IxZWFjMmVhNmI5MDU0NjUwZWZlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PugmZspdW2YB6RZ71dYJlcZuOZklEFM9sINg2PLyixE'}};
    async function getApi(){
        let { data }=await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options  );
      console.log(data.results)
      setMoviesList(data.results)
    }
    useEffect(()=>{
        getApi()
    },[]);
    
    return(
        <>
    
        <div className="row g-3">
            {moviesList.map((movie,i)=> (
              <div className="col-md-3">
                <div className="item p-3 h-100 position-relative">
                    <img className="w-100"
                    src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}/>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
    
                </div>
    
    
              </div>
            
            ))}
    
        </div>
        </>
        )
};


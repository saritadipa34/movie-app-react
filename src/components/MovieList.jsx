import {useState,useEffect} from "react";
import Movie from "./Movie";

const MovieList=()=>{
const [movieData,setMovieData]=useState([]);

    const getMovieData=async()=>{
    try{
    const api_Key=import.meta.env.VITE_API_KEY;
    const response=await fetch(`https://www.omdbapi.com/?s=Inception&apikey=${api_Key}`);
    const data=await response.json();
    setMovieData(data.Search);
    console.log(data.Search);
    } catch (error){
console.log(error.message);
    }
}

useEffect(()=>{
getMovieData();
},[])
    return(
        <div className=" min-h-[450px] my-5 rounded-lg flex gap-5 flex-wrap">
            {
             movieData && movieData.map((movie)=>{
                    return <Movie film={movie} key={movie.imdbID} />
                })
            }

        </div>

    )
}
export default MovieList;
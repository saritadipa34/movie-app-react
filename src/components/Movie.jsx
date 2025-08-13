
const Movie=({film})=>{
   
    return(
        <div className="bg-red-300 max-h-[220px] w-[220px]">
        <img className="max-h-[150px] w-full" src={film?.Poster && film?.Poster === "N/A" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXab0saoVsU1D2TsN5Bp0sSqvP5q2VeGfzfA&s" : film?.Poster} alt="movie" />
       
            <h1 className="font-bold">Title:{film?.Title}</h1>
            <h1>Year:{film?.Year}</h1>
        </div>
    )
}
export default Movie;
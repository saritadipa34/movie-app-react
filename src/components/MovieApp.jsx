import InputBox from "./InputBox";
import MovieList from "./MovieList";
import SearchBox from "./SearchBox";

const MovieApp=()=>{

    return(
        <div className="min-h-screen min-w-screen bg-blue-300 px-10 py-5">
            <h1 className="text-center font-bold text-2xl">Movie App</h1>
            <div className="w-2/5 flex gap-10"> 
            <InputBox />
            <SearchBox />
            </div>
            <MovieList />
        </div>
    )
}
export default MovieApp;

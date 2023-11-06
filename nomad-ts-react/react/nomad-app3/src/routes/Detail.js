import {useParams} from "react-router-dom/cjs/react-router-dom";
import {useEffect, useState} from "react";
import Movie from "../components/Movie";


function Detail(){
    const {id}= useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([])

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )).json();
        //console.log(json.data)
        setMovie(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getMovie();
    });
    return(
        <div>
            {loading ? (<h1>Loading ...</h1>) : (
                <div><Movie
                        key={id}
                        id={id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                </div>
            )}
        </div>
   )
}
export default Detail;
import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVidoes from "../../../../components/movie-videos";

interface IParams{ 
    params: Promise<{id: string}>;
}

export async function generateMetadata({params}:IParams){
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    }
}
export default async function MovieDetail( {params}: IParams) {
    
    const { id } = await params;
    return (
        <div>
            <Suspense fallback ={<h1>Loading movie info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback ={<h1>Loading movie video</h1>}>
                <MovieVidoes id={id}/>
            </Suspense>
        </div>
    )
}


/*

export default async function MovieDetail({ params }) {
   
    const { id } = await params
    return <h1>Movies: {id}</h1>
  }

  */
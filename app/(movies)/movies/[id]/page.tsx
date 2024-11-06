import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVidoes from "../../../../components/movie-videos";

interface IParams{ 
    params: {id: string};
}

export async function generateMetadata({params: {id}}:IParams){
    const movie = await getMovie(id);
    return {
        title: movie.title,
    }
}
export default async function MovieDetail( {params: {id}}: IParams) {
    
  
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

export default async function MovieDetail({
    params,
}: {
    params: 
        Promise<{id: string}>
    
}) {
    
    const { id } = await params;
    return <p>Movie: {id}</p>;
}


/*

export default async function MovieDetail({ params }) {
   
    const { id } = await params
    return <h1>Movies: {id}</h1>
  }

  */
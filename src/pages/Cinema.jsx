import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Movies() {
    const nav = useNavigate();
    const [movie, setMovie] = useState({})
    const {id} = useParams ()
    useEffect(() => {
        fetch (`http://localhost:3000/movies/${id}`)
        .then((res) => res.json())
        .then((data) =>(
         setMovie(data)
        ))
    })
function handleDelete(){
    fetch (`http://localhost:3000/movies/${id}`,
         {method:"DELETE"}
    )
    toast.success("Movie deleted successfully!")
     nav("/")
}
    return (
        <div>
        <img src={movie.image_url} />  
                            <div className="card-body">
                                <h3 className="p-2 g-col-6">{movie.title}</h3>
                                <h5>{movie.category}</h5>
                                <h5>{movie.release_year}</h5>
                                <h5>{movie.rating}</h5>
                                <h5>{movie.director}</h5>
                                <h5>{movie.language}</h5>
                                
                                <h6 className="card-subtitle mb-2 text-muted">{movie.duration} minutes</h6>
                                
                       </div>
                       <button onClick={handleDelete} type="button" class="btn btn-dark">Delete</button>

                       
       </div>
    );
}

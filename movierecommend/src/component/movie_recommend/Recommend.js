import React,{useState} from 'react'
import './recommend.css'
import axios from 'axios'

export default function Recommend() {
    const[movie_name, setMovieName] = useState('')
    const[recommended_movies, setRecommendedMovies] = useState(null)
    const[status,setstatus] =useState(false)
  return (
    <div className='body'>
        <div className='recommend'>
            <h1>Movie Recommendation</h1>
            <div className='recommend__movies' >
                <form method='POST'>
                    <input type="text" placeholder="Enter a keyword to search the movie" required onChange={(e)=>{
                        setMovieName(e.target.value)
                    }} />
                    <br/>
                    <button type="submit" onClick= {async (e)=>{
                        e.preventDefault()
                        setstatus(false)
                        await axios.post('http://localhost:5000/recommend',{
                            movie_name:movie_name
                        }).then((res)=>{    
                                  
                           
                            let temp = res.data.Recommended_Movies[0]                     
                            if (temp === "No_Movie"){
                                document.getElementById('recommended__movies__list').style.display = 'block'
                            }
                            else{
                                setstatus(true)
                                setRecommendedMovies(res.data.Recommended_Movies)
                                document.getElementById('recommended__movies__list').style.display = 'none'
                            }

                        }
                        
                        )
                        
                    }}>Search</button>
                </form>
            </div>    
        </div>  
        <div id='recommended__movies__list'>
            <center>
            <span style={{
                color: 'red',
                fontSize: '20px',
                fontWeight: 'bold',
                marginTop: '20px'
            }}>No Movie Found</span>
            </center>
        </div>
        { status && 
        <div className='recommended__movies'>
            <h1>Recommended Movies</h1>
            <div className='recommended__movies__list'>
                {recommended_movies.map((movie,index)=>{
                        return(
                            <>
                            <li key={index}>{movie}</li>
                            {/* <hr style={{
                                width: '10px',
                            }}/> */}
                            </>
                        )
                        })
                    }        
                
                
            </div>    

            
        </div> 
        }
    </div>
  )
}

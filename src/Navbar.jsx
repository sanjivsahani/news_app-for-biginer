import axios from 'axios'
import React, { useState } from 'react'
import News from './News'

const Navbar = () => {
    const [category ,setCatogery]=useState('business')
    // const [data,setData]=useState([])
    const [data ,setData] = useState([])
    const handleClick = (catogery)=>{
        setCatogery(catogery)
        try {
            axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${catogery}&apiKey=122442c9a1cf47a0af3df54c86818f36`).then((res)=>{
                // console.log(res?.data?.articles)
                // console.log(res.data.articles)
                setData(res.data.articles)
                // setData(res?.data?.articles)
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" >Reality News</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" onClick={()=>handleClick('business')}>Business</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={()=>handleClick('entertainment')}>Entertainment</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" onClick={()=>handleClick('general')}>General</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={()=>handleClick('health')}>Health</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={()=>handleClick('science')}>Science</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" onClick={()=>handleClick('sports')}>Sports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={()=>handleClick('technology')}>Technology</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <News catogery = {category} data={data}/>
        </div>
    )
}

export default Navbar
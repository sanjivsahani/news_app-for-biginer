import React from 'react'

const News = ({ catogery, data }) => {
    return (
        <div>
            <div className='text-center h4 my-2'> Top headline : {catogery.toUpperCase()}</div>
            <div>
                <div className="row">

                    {data.map((ele) => {
                        return <>
                            <div className="card-body mx-2">
                                <img src={ele?.urlToImage} className="card-img-top" alt="..." />
                                <h5 className="card-title">title : {ele?.title} </h5>
                                <p className="card-text">{ele?.description}</p>
                                <p className="card-text"> publishedAt : {ele?.publishedAt}</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </>
                    })}
                </div>

            </div>
        </div>
    )
}

export default News
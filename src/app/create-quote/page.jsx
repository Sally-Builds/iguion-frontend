'use client'
import React from 'react';
import {useState, useEffect} from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async';
import axios from 'axios'



const showType = [
    { label: 'Movie', value: 'movie' },
    { label: 'TV Show', value: 'tv' },
]


const searchMovie = async (keyword) => {
    try {
        const res = await axios.get(`http://localhost:5000/search?movie_type=tv&keyword=${keyword}`)
        let movies = res.data.movies

        return movies.length > 0 ? movies.map((movie) => {
            return {
                label: movie.movie_name,
                value: movie.movie_id,
                image: movie.movie_image
            }
        }) : []

    }catch (e) {
        console.log(e)
    }
}


const loadOptions = async (inputValue) => {
    return searchMovie(inputValue)
}

function CreateQuote(props) {
    const [quote, setQuote] = useState('')
    const [movie_type, setMovieType] = useState('')
    const [movie, setMovie] = useState('')
    const [casts, setCasts] = useState([])
    const [cast, setCast] = useState([])
    const [keyword, setKeyword] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    useEffect(() => {
        searchMovie().then(res => console.log(res))
    }, []);

    const handleChange = async (newValue) => {
        setPreviewImage(newValue.image)
        const casts = await getCharacters(newValue.value)
        setCasts(casts)
        setMovie(newValue);
    };

    const getCharacters = async (movie_id) => {
        try {
            const res = await axios.get(`http://localhost:5000/casts?movie_type=tv&movie_id=${movie_id}`)
            let casts = res.data.casts
            return casts.length > 0 ? casts.map((cast) => {
                return {
                    label: cast.cast_name,
                    value: cast.cast_id,
                }
            }) : []
        }catch (e) {
            console.log(e.response)
        }
    }

    const submitQuote = async (e) => {
        e.preventDefault()
        const data = {
            "movie_id": movie.value,
            "cast_id": cast.value,
            "movie_type": movie_type.value,
            "quote": quote
        }
        try {
            const res = await axios.post('http://localhost:5000/quotes', data)
            console.log(res)
            window.reload()
        }catch (e) {
            console.log(e.response)
        }

    }

    return (
        <div className="create-section">
            <div className="my-form p-8">
                <div className="text-2xl font-bold p-8 text-center"> Submit Quote </div>
                <form className="max-w-sm mx-auto" onSubmit={submitQuote}>
                    <div className="mb-5">
                        <label htmlFor="countries"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select show
                            type *</label>
                        <Select
                            value={movie_type}
                            onChange={(val) => setMovieType(val)}
                            options={showType}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Movie Name *
                        </label>
                        <AsyncSelect
                            defaultOptions
                            value={movie}
                            onChange={handleChange}
                            loadOptions={loadOptions}
                            placeholder="Search"
                            isDisabled={!movie_type}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="countries"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Character *
                            </label>
                        <Select
                            options={casts}
                            value={cast}
                            onChange={(val) => setCast(val)}
                            isDisabled={!movie || !movie.label}
                            placeholder="Search"
                        />
                    </div>
                    <div className="mb-5">

                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quote *
                        </label>
                        <textarea id="message" rows="4"
                                  value={quote}
                                  onChange={(val) =>  setQuote(val.target.value)}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Leave a comment..."></textarea>

                    </div>
                    <button
                        type="submit"
                            // disabled={true}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Submit Quote
                    </button>
                </form>


            </div>
            <div className="preview p-5">
                <img src={previewImage} height="px" width="250px"
                     alt="bb"/>
                <div className="text-center p-4">{movie.label}</div>
            </div>
        </div>
    );
}

export default CreateQuote;

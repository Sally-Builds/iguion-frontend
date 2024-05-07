'use client'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {log} from "next/dist/server/typescript/utils";

export default function  Home() {
    // let quote = {
    //     movie_name: "Breaking Bad(2013)",
    //     cast_name: "Walter White",
    //     quote: `Far Far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live the bline
    //                   texts. Separated they lin Bookmarksgrove right at the coasti`,
    //     images: [
    //         'https://image.tmdb.org/t/p/original/f3hwT3dLj3Jb8ikbxs415vKlIgg.jpg',
    //         'https://image.tmdb.org/t/p/original/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
    //         "https://image.tmdb.org/t/p/original/yXSzo0VU1Q1QaB7Xg5Hqe4tXXA3.jpg",
    //         "https://image.tmdb.org/t/p/original/alb2BU2BeBZv5dgHhuzV9ZGakfZ.jpg",
    //         "https://image.tmdb.org/t/p/original/gc8PfyTqzqltKPW3X0cIVUGmagz.jpg",
    //         "https://image.tmdb.org/t/p/original/vFxjuhENDjEKzWXUGKmRFct15bA.jpg",
    //         "https://image.tmdb.org/t/p/original/dFWqgL6MYHWLOs6Pev4G0TbMHSW.jpg",
    //         "https://image.tmdb.org/t/p/original/wSztOsbdspDi0E6dWU1cxNmYDV9.jpg",
    //         "https://image.tmdb.org/t/p/original/5WKVhTcc1cVaCsXwEUtB8lHzgm4.jpg",
    //         "https://image.tmdb.org/t/p/original/rKUAAwWnUJSVO7Up72qjqo1myQ4.jpg",
    //         "https://image.tmdb.org/t/p/original/6y12pMO6lLB5xytaEq9RWwjHMJi.jpg"
    //     ],
    //     movie_type: 'TV Show'
    // }
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState('')
    const [count, setCount] = useState(0)
    const [quoteIndex, setQuoteIndex] = useState(0)

    const [image, setImage] = useState()
    // const [image, setImage] = useState(quote.images[count])


    const fetchQuotes = async () => {
        try {
            console.log('fetching....')
            const res = await axios.get('http://localhost:5000/quotes')
            console.log(res)
            console.log('fetched....')
            return res.data
        }catch (e) {
            console.log(e, 'big error')
            return []
        }
    }

    useEffect(() => {
        fetchQuotes().then((data) => {
            console.log(data)
            setQuotes(data)
            setQuote(data.length > 0 ? data[0] : '')
            console.log(data, 'after')
        })
        // const timer = setInterval(() => {
        //     if(quote !== '') {
        //         console.log('quote from here', quote)
        //         let index = count === quote.images.length - 1 ? 0 : count + 1
        //         setCount(index)
        //         setImage(quote.images[count])
        //     }
        // }, 3000);
        // return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const timer = setInterval(() => {
            if(quote !== '') {
                console.log('quote from here', quote)
                let index = count === quote.images.length - 1 ? 0 : count + 1
                console.log(index)
                setCount(index)
                setImage(quote.images[count])
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [quote, image, quoteIndex]);

    const getNext = () => {
        if(quotes.length > 0) {
            let index = quoteIndex === quotes.length - 1 ? 0 : quoteIndex + 1
            setQuoteIndex(index)
            setQuote(quotes[index])
            setImage(quotes[index].images[0])
        }
    }

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="quote-section">
              <div className='card'>
                  <div className='card-quote'>
                      <blockquote>{quote ? quote.quote : ''}
                      </blockquote>
                  </div>
                  <div className="card-details">
                      <div className="character">{quote ? quote.cast_name : ''}</div>
                      <div className="movie">{quote ? quote.movie_name : ''}</div>
                  </div>
              </div>
              <img src={image} alt="bb"/>
          </div>
          <div className="quote_nav">
              <button> Prev </button>
              <button onClick={() => getNext()}> Next </button>
          </div>
      </main>
  )
}

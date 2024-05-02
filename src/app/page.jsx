'use client'
import {useEffect, useState} from 'react'

export default function Home() {
    const quotes = {
        movie_name: "Breaking Bad(2013)",
        character_name: "Walter White",
        quote: `Far Far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live the bline
                      texts. Separated they lin Bookmarksgrove right at the coasti`,
        images: ['https://image.tmdb.org/t/p/original/f3hwT3dLj3Jb8ikbxs415vKlIgg.jpg', 'https://image.tmdb.org/t/p/original/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg']
    }

    const [image, setImage] = useState(quotes.images[0])

    useEffect(() => {
        const timer = setTimeout(() => setImage(quotes.images[1]), 9 * 1000);
        return () => clearTimeout(timer);
    });
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="quote-section">
              <div className='card'>
                  <div className='card-quote'>
                      <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                      </blockquote>
                  </div>
                  <div className="card-details">
                      <div className="character">{quotes.character_name}</div>
                      <div className="movie">{quotes.movie_name}</div>
                  </div>
              </div>
              <img src={image} alt="bb"/>
          </div>
      </main>
  )
}

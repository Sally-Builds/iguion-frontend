export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="quote-section">
            <div className='card'>
                <div className="card-actor"></div>
                <div className='card-quote'>
                   "Far Far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live the bline
                    texts. Separated they lin Bookmarksgrove right at the coast".
                </div>
                <div className="character">Walter White</div>
                <div className="movie">breaking bad</div>
            </div>
            <img src="https://image.tmdb.org/t/p/original/f3hwT3dLj3Jb8ikbxs415vKlIgg.jpg" alt="bb" />
            {/*<div className=""></div>*/}
        </div>
    </main>
  )
}

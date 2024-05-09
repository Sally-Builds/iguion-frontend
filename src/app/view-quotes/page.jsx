'use client'
import React, {useEffect, useState} from 'react';
import styles from "./styles-quote.module.css";
import AxiosInstance from "@/app/helpers/axiosInstance";
import Image from "next/image";

function Page() {
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState('')
    const [count, setCount] = useState(0)
    const [quoteIndex, setQuoteIndex] = useState(0)

    const [image, setImage] = useState()
    // const [image, setImage] = useState(quote.images[count])


    const fetchQuotes = async () => {
        try {
            const res = await AxiosInstance.get('/quotes')
            console.log(res)
            return res.data.quotes
        }catch (e) {
            console.log(e, 'big error')
            return []
        }
    }

    useEffect(() => {
        fetchQuotes().then((data) => {
            setQuotes(data)
            setQuote(data.length > 0 ? data[0] : '')
        })
    }, []);
    useEffect(() => {
        const timer = setInterval(() => {
            if(quote !== '') {
                let index = count === quote.images.length - 1 ? 0 : count + 1
                console.log(index)
                setCount(index)
                setImage(quote.images[count])
            }
        }, 10000);
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
        <>
            <section className={styles.quote_section}>
                <Image
                    src={image}
                    alt={'jpegs'} className={styles.side_nav_card}
                    width={100}
                    height={100}
                    quality={100}
                    placeholder="empty"
                    unoptimized={true}
                    style={{
                        width: '100%',
                        minHeight: '80vh',
                        gridColumn: '3 / span 6',
                        gridRow:  '1 / span 10',
                        display: 'flex',
                        margin: '20px auto',
                        'borderRadius': '18px',
                        filter: 'brightness(70%)',
                        // backgroundColor: "lightyellow",
                        opacity: '55%',
                        'alignItems': 'flex-end',
                        'backgroundSize': 'cover',
                       'backgroundPosition': 'center',
                        'backgroundRepeat': 'no-repeat',
                        // 'backgroundImage': `url(${image})`
                    }}
                />
                {/*<div*/}
                {/*    className={styles.side_nav_card}*/}
                {/*    style={{*/}
                {/*        width: '100%',*/}
                {/*        minHeight: '80vh',*/}
                {/*        gridColumn: '3 / span 6',*/}
                {/*        gridRow:  '1 / span 10',*/}
                {/*        display: 'flex',*/}
                {/*        margin: '20px auto',*/}
                {/*        'borderRadius': '18px',*/}
                {/*        filter: 'brightness(70%)',*/}
                {/*        backgroundColor: "lightyellow",*/}
                {/*        opacity: '55%',*/}
                {/*        'alignItems': 'flex-end',*/}
                {/*        'backgroundSize': 'cover',*/}
                {/*        'backgroundPosition': 'center',*/}
                {/*        'backgroundRepeat': 'no-repeat',*/}
                {/*        'backgroundImage': `url(${image ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-k5W_6TMcJOjhLn1zu23IX-SN15_d3hkjCTLIaWPs0QW2DhxU'})`,*/}
                {/*    }}*/}
                {/*>*/}
                {/*</div>*/}
                <div className={styles.main_quote_section}>
                    <div className={styles.quote}>
                        {/*"On the other hand, we denounce with righteous indignation and*/}
                        {/*dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so*/}
                        {/*blinded by desire"*/}
                        &quot;{quote ? quote.quote : ''}&quot;
                    </div>
                    <div className={styles.quote_meta}>
                        <div>{quote ? quote.cast_name : ''}</div>
                        <div>{quote ? quote.movie_name : ''}</div>
                    </div>
                </div>

                <div className={styles.chevron_left}><i className="fa-solid fa-circle-chevron-left"></i></div>
                <div onClick={() => getNext()} className={styles.chevron_right}><i className="fa-solid fa-circle-chevron-right"></i></div>
            </section>
        </>
    );
}

export default Page;

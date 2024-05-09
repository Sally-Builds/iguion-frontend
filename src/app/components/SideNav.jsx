import React from 'react';
import styles from './styles-side_nav.module.css'

function SideNav(
    {
        movie_image='https://images5.alphacoders.com/131/1319604.jpeg',
        movie_name = 'Action / Adventure',
        cast_image = 'https://images5.alphacoders.com/131/1319604.jpeg',
        cast_name = 'Romance / Love'
    }) {
    return (
        <>
            <div className={styles.side_nav_heading}>
                <h4>Trending Now</h4>
                <a>See All</a>
            </div>
            <div className={styles.cards_section}>
                <div
                    className={styles.side_nav_card}
                    style={{
                        width: '230px',
                        height: '220px',
                        display: 'flex',
                        margin: '12px 0',
                        'borderRadius': '18px',
                        filter: 'brightness(70%)',
                        'alignItems': 'flex-end',
                        'backgroundColor': 'navajowhite',
                        'backgroundSize': 'cover', /* Cover the entire background */
                        'backgroundPosition': 'center', /* Center the background image */
                        'backgroundRepeat': 'no-repeat', /* Prevent background image from repeating */
                        'backgroundImage': `url('${movie_image}')`
                    }}
                >
                    <div className={styles.card_title}>{movie_name}</div>
                </div>

                <div
                    className={styles.side_nav_card}
                    style={{
                        width: '230px',
                        height: '220px',
                        display: 'flex',
                        margin: '12px 0',
                        'borderRadius': '18px',
                        filter: 'brightness(70%)',
                        'alignItems': 'flex-end',
                        'backgroundColor': 'navajowhite',
                        'backgroundSize': 'cover', /* Cover the entire background */
                        'backgroundPosition': 'center', /* Center the background image */
                        'backgroundRepeat': 'no-repeat', /* Prevent background image from repeating */
                        'backgroundImage': `url('${cast_image}')`
                    }}
                >
                    <div className={styles.card_title}>{cast_name}</div>
                </div>
            </div>
        </>
    );
}

export default SideNav;

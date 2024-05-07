import React from 'react';
import styles from './styles-side_nav.module.css'

function SideNav(
    {
        movie_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-k5W_6TMcJOjhLn1zu23IX-SN15_d3hkjCTLIaWPs0QW2DhxU',
        movie_name = 'Action / Adventure',
        cast_image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-k5W_6TMcJOjhLn1zu23IX-SN15_d3hkjCTLIaWPs0QW2DhxU',
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
                        'border-radius': '18px',
                        filter: 'brightness(70%)',
                        'align-items': 'flex-end',
                        'background-color': 'navajowhite',
                        'background-size': 'cover', /* Cover the entire background */
                        'background-position': 'center', /* Center the background image */
                        'background-repeat': 'no-repeat', /* Prevent background image from repeating */
                        'background-image': `url('${movie_image}')`
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
                        'border-radius': '18px',
                        filter: 'brightness(70%)',
                        'align-items': 'flex-end',
                        'background-color': 'navajowhite',
                        'background-size': 'cover', /* Cover the entire background */
                        'background-position': 'center', /* Center the background image */
                        'background-repeat': 'no-repeat', /* Prevent background image from repeating */
                        'background-image': `url('${cast_image}')`
                    }}
                >
                    <div className={styles.card_title}>{cast_name}</div>
                </div>
            </div>
        </>
    );
}

export default SideNav;

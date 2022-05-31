import React, { useState, useEffect, FC } from 'react'
import styles from './HotCollections.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import HotColSkeleton from './HotColSkeleton';

 const HotCollections:FC = () => {
    // state 
    const [hotCollections, setHotCollections] = useState([])
    const [loading, setLoading] = useState(true)
    // Types
    type CardType = {
        image: string;
        name: string;
    }

    const api = "https://rarible-data-scraper.p.rapidapi.com/hot_collection"
    const headers = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rarible-data-scraper.p.rapidapi.com",
            "x-rapidapi-key": "27b75a3147msh07900745f4edceep15fcb0jsn727c84d5ae66"
        }
    }

    const fetchHotCollections = async ()  => {
        const response = await fetch(api, headers)
        const data = await response.json()
        setHotCollections(data.list)
        setLoading(false)
    }

    useEffect(() => {
        fetchHotCollections()
    }, [])


    // display image and name of collection 
    let cards = hotCollections && hotCollections.map((col) => {
        let { name, pic, id } = col;

        return (
            <div className={styles.outerCard} key={id}>
                <Link to={`/collections/${id}`} style={{ color: 'white', textDecoration: 'none' }}>
                    <div className={styles.card}>
                        <div className={`${styles.innerCard} card mb-2`}>
                            <img className={`${styles.cardImg} card-img-top`} src={pic} alt="" />
                            <div className="card-body">
                                <h4 className={styles.cardtitle}>{name}</h4>
                            </div>
                        </div>
                    </div>
                </Link>

            </div >

        )
    })

    // Carousel outline from library react-multi-caurosel 
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 564 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 564, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <>
            <h3 className="my-4">Hot Collections 🔥</h3>
            <div >
                {loading ? <HotColSkeleton /> :
                    <Carousel
                        arrows={true}
                        renderButtonGroupOutside={true}
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlaySpeed={1000}
                        customTransition="transform 300ms ease-out"
                        containerClass="carousel-container"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {cards}
                    </Carousel>}
            </div>
        </>
    )
}

export default HotCollections
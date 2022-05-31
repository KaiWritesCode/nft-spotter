import React, { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './TopCol.module.css'
import TopSkeleton from './TopSkeleton'
import { ICollectionProps } from '../../Interfaces'

const Cards:FC = () => {
    const [topCollections, setTopCollections] = useState([])
    const [loading, setLoading] = useState(true)

    const api = "https://rarible-data-scraper.p.rapidapi.com/top_collection/1/16"
    const headers = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rarible-data-scraper.p.rapidapi.com",
            "x-rapidapi-key": "27b75a3147msh07900745f4edceep15fcb0jsn727c84d5ae66"
        }
    }

    const fetchTopCollections = async () => {
        let response = await fetch(api, headers)
        let data = await response.json()
        setTopCollections(data.list)
        setLoading(false)
    }


    useEffect(() => {
        fetchTopCollections()
    }, [])


    // displays the collection number, image, name, and volume 
    let display = topCollections && topCollections.map((col:ICollectionProps, index) => {
        let { id, name, pic, sum } = col

        // default picture if no picture is present 
        if (!pic) {
            pic = 'https://static.vecteezy.com/system/resources/previews/002/473/294/non_2x/nft-symbol-non-fungible-token-icon-free-vector.jpg'
        }
        index += 1

        // adds commas to show thousands 
        const newSum =  Math.floor(sum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


        return (

            <div key={id} className={`position-relative ${styles.colCard}`}>
                <div className={styles.index}>{index} </div>
                <img className={styles.image} width="150" src={pic} alt="" />
                <div>
                    <Link to={`/collections/${id}`} style={{ color: 'white', textDecoration: 'none' }}>
                        <div>{name}</div>
                        <div className={styles.sum}>${newSum}</div>
                    </Link>
                </div>
            </div>

        )
    })

    return (
        <>
            <div className={styles.topDiv}>
                <h3>Top Collections Today 👑</h3>
            </div>
            {loading ? <TopSkeleton /> :
                <div className={styles.container}>
                    {display}
                </div>}
        </>
    )
}


export default Cards
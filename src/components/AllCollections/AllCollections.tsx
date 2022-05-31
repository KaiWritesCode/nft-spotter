import React, { useState, useEffect, FC} from 'react'
import styles from './AllCollections.module.css'
import NavigationBar from '../Navbar/NavigationBar'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import AllColSkeleton from './AllColSkeleton'
import { ICollectionProps } from '../../Interfaces'

 const AllCollections:FC = () => {
    const [allCollections, setAllCollections] = useState([])
    const [loading, setLoading] = useState(true)

    const api = "https://rarible-data-scraper.p.rapidapi.com/top_collection/1/100"
    const headers = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rarible-data-scraper.p.rapidapi.com",
            "x-rapidapi-key": "27b75a3147msh07900745f4edceep15fcb0jsn727c84d5ae66"
        }
    }

   


    const fetchAllCollections = async () => {
        const response = await fetch(api, headers)
        const data = await response.json()
        setAllCollections(data.list)
        setLoading(false)
    }

    useEffect(() => {
        fetchAllCollections()
    }, [])


    // displays 100 collections in a column on /top-collections
    let display = allCollections && allCollections.map((col:ICollectionProps, index) => {
        let { id, name, pic, sum } = col

        if (!pic) {
            pic = 'https://static.vecteezy.com/system/resources/previews/002/473/294/non_2x/nft-symbol-non-fungible-token-icon-free-vector.jpg'
        }
        index += 1

        // adds commas to show thousands 
       const newSum =  Math.floor(sum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


        return (
            <div key={id} className={` mb-4 position-relative ${styles.colCard}`}>
                <div className=" col-1 ml-3">{index} </div>
                <img className="col-1" src={pic} alt="NFT profile" />
                <div className="col-4 mx-4">{name}</div>
                <div className="col-3">${newSum}</div>
                <Link to={`/collections/${id}`}>
                    <button className="btn btn-secondary">View</button>
                </Link >
            </div>
        )
    })

    return (
        <>

            <NavigationBar />
            <div>
                <h1 className="text-center my-5">Top Collections Today</h1>
            </div>

            {loading ? <AllColSkeleton /> :
                <div className={styles.overflowWrapper}>
                    <div className={styles.container}>
                        <div className={` mb-4 position-relative ${styles.heading}`}>
                            <div className="col-1 ml-3">#</div>
                            <div className="col-1">Collection</div>
                            <div className="col-4 mx-4">Name</div>
                            <div className="col-4">Volume</div>
                            <div className="col-2"></div>
                        </div>
                        {display}
                    </div>
                </div>}
            <Footer />
        </>
    )
}

export default AllCollections
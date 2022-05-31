import React, { useState, useEffect, FC} from 'react'
import { useParams } from 'react-router'
import styles from './NFTCard.module.css'
import NavigationBar from '../Navbar/NavigationBar'


const NFTCard:FC = () => {

   type INFTCard = {
        name: string;
        user: string;
        img: string;
        }

    const { id, token } = useParams<{id: string; token: string}>()

    const [mainImage, setMainImage] = useState('')
    const [event, setEvent] = useState([])
    const [info, setInfo] = useState<any>({
        user: '',
        img: '',
        name: '',
    })

    const [traits, setTraits] = useState([])
    const [loaded, setLoaded] = useState(false);


    const options = {
        method: 'GET',
        headers: { Accept: 'application/json', 'X-API-KEY': '087158b0d16f4e73a708168cefa9123c' }
    };

    const api = `https://kaiscorsproxy.herokuapp.com/https://api.opensea.io/api/v1/asset/${id}/${token}`
    const eventApi = `https://kaiscorsproxy.herokuapp.com/https://api.opensea.io/api/v1/events?asset_contract_address=${id}&token_id=${token}&only_opensea=false`

    const fetchData = async () => {
        const data = await fetch(api, options)
        const response = await data.json()
        setMainImage(response.image_url)
        setInfo({
            user: response.owner.user,
            img: response.owner,
            name: response.collection
        })
        setTraits(response.traits)
    }



    const fetchEvent = async () => {
        const data = await fetch(eventApi, options)
        const response = await data.json()
        setEvent(response.asset_events)
    }


    useEffect(() => {
        fetchData()
        fetchEvent()
    }, [setMainImage, setTraits, setEvent])


    let bids:number[] = []
    event && event.forEach((item:any) => {
        bids.push(item.bid_amount)
    })
    
    let highestBid = ((Math.max(...bids) / 1000000000000000000).toString().slice(0, 5))


    // declaring varaibles 
    const {profile_img_url} = info.img
    const {name} = info.name
    const {username}  = info.user !== null ? info.user : 'not found'

    // displays image once it is loaded 
    let imageDisplay = (
        <>
            {!loaded ? (
                <div className={styles.spinnerWrapper}>
                    <div
                        className="spinner-border"
                        role="status" >
                        <span className='sr-only'>Loading...</span>
                    </div>
                </div>
            ) : null
            }
            <div>
                <img
                    className={styles.mainImage}
                    style={loaded ? { display: 'block' } : { display: 'none' }}
                    src={mainImage}
                    onLoad={() => setLoaded(true)}
                    alt="NFT"
                />
            </div>
        </ >
    );


    // displays stats: title, token id, bid, and user information 
    let infoDisplay = (
        <>
            <div className={styles.topSection}>
                <div>
                    <h1 className={styles.title}>{name}</h1>
                    <div className={styles.token}>#{token}</div>
                </div>
                <div className={styles.bid}>
                    <div>Highest Bid</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/nft-spotter/imgs/eth.svg" style={{ width: '25px', height: '25px' }} alt="" />
                        {highestBid}
                    </div>
                </div>
            </div>

            <div className={styles.owner}>
                <img src={profile_img_url} alt="" />
                <div>Owner: {username}</div>
            </div>


        </>
    )


    // displays traits 
    let traitsDisplay = traits && traits.map((trait, index) => {
        let { trait_type, value } = trait
        return (
            <div key={index} className={`${styles.traitsDiv}`}>
                <div className="traitType">{trait_type}:</div>
                <div className={styles.value}>{value}</div>
            </div>
        )
    })


    return (
        <>
            <NavigationBar />
            <div className={styles.container}>
                <div className={styles.leftCol}>
                    {imageDisplay}
                </div>
                <div className={styles.rightCol}>
                    {infoDisplay}
                    <div className={styles.traitsContainer}>
                        {traitsDisplay}
                    </div>
                </div>
            </div>
        </>
    )
}


export default NFTCard
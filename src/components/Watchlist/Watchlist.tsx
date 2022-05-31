import React, {FC} from 'react'
import styles from "./Watchlist.module.css"

const Watchlist:FC = () => {
    return (
        <>
            <h3 className="mt-5">New Favorites 👀</h3>

            <div className={`card col-12 col-sm-12 col-md-4  ${styles.favCard}`} >
                <img src="/nft-spotter/imgs/nftworlds.png" height="150" className="card-img-top" alt="NFT Worlds" />
                <div className="card-body">
                    <a style={{ color: 'white', textDecoration: 'none' }} className="card-title" href="/#/collections/0xbd4455da5929d5639ee098abfaa3241e9ae111af">
                        <h4>NFT Worlds</h4> </a>
                    <p className="card-text">NFT Worlds is the most capable & flexible metaverse platform.

                        Each NFT World is an explorable, limitless world that can be built into anything you can imagine.

                        NFT Worlds are Minecraft compatible, massively multiplayer, will have developer APIs, are decentralized, and more. </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className={`list-group-item ${styles.listStyle}`}>Items: 10.0k</li>
                    <li className={`list-group-item ${styles.listStyle}`}>
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/nftworldsnft">Twitter</a></li>
                    <li className={`list-group-item ${styles.listStyle}`}>
                        <a rel="noreferrer" target="_blank" href="https://discord.com/invite/AEVWVPeeG3">Discord</a></li>
                    <li className={`list-group-item ${styles.listStyle}`}>
                        <a rel="noreferrer" target="_blank" href="https://docs.nftworlds.com/">Website</a></li>
                </ul>
            </div>

            <div className={`card col-12 col-sm-12 col-md-4  ${styles.favCard}`} >
                <img src="/nft-spotter/imgs/neotok.png" height="150" className="card-img-top" alt="neo tokyo" />
                <div className="card-body">
                    <a style={{ color: 'white', textDecoration: 'none' }} className="card-title" href="/#/collections/0x86357a19e5537a8fba9a004e555713bc943a66c0">
                        <h4>Neo Tokyo Identities</h4></a>
                    <p className="card-text">SCiphers decoding.... Preparing bytestream headers [/*|] Memory linked list unpacked Welcome to the New World</p>
                </div>
                <ul className="list-group list-group-flush ">
                    <li className={`list-group-item ${styles.listStyle}`}>Items: 2.0k</li>
                    <li className={`list-group-item ${styles.listStyle}`}>
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/NeoTokyoCode">Twitter</a></li>
                    <li className={`list-group-item ${styles.listStyle}`}>
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/NeoTokyoCode">Discord</a></li>
                    <li className={`list-group-item ${styles.listStyle}`}>
                        <a rel="noreferrer" target="_blank" href="https://neotokyo.codes/">Website</a></li>
                </ul>

            </div>
            <div className={`card col-12 col-sm-12 col-md-4  ${styles.favCard}`} >
                <img src="/nft-spotter/imgs/vox.png" height="150" className="card-img-top" alt="vox" />
                <div className="card-body">
                    <a style={{ color: 'white', textDecoration: 'none' }} className="card-title" href="/#/collections/0xad9fd7cb4fc7a0fbce08d64068f60cbde22ed34c">
                        <h4>Vox Collectibles</h4></a>
                    <p className="card-text">Meet VOX, the adorable collectible series from Gala Labs. Own, play and earn rewards with your unique ERC721 avatar.</p>
                </div>
                <ul className="list-group list-group-flush ">
                    <li className={`list-group-item ${styles.listStyle}`}>Items: 8.9k</li>
                    <li className={`list-group-item ${styles.listStyle}`}>
                        <a rel="noreferrer" target="_blank" href="https://www.twitter.com/gogalagames">Twitter</a></li>
                    <li className={`list-group-item ${styles.listStyle}`}>
                        <a rel="noreferrer" target="_blank" href="https://discord.gg/EHgJJM6SdQ">Discord</a></li>
                    <li className={`list-group-item ${styles.listStyle}`}>
                        <a rel="noreferrer" target="_blank" href="http://collectvox.com/">Website</a></li>
                </ul>
            </div>

        </>
    )
}


export default Watchlist
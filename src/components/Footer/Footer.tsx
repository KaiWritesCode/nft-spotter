import React, {FC} from 'react'
import styles from './Footer.module.css'

const Footer:FC = () => {
    const mainFooter = (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <span className={styles.logo}>
                        <img src="/nft-spotter/imgs/logo-light.png" width="80px" alt="" />
                        <span className='footer-title'>NFT Spotter</span>
                    </span>
                    <span className={styles.description}>NFT Spotter provides basic statistics for the NFT marketplace.
                        NFT Spotter is powered with Rarible's and Opensea's API, built with React.js.
                    </span>
                    <span className={styles.copyright}>© NFT Spotter. All rights reserved</span>
                </div>

                <div className={styles.ulWrapper}>
                    <div className={styles.footerUl}>
                        <h5 className='mb-3'>About NFT-Spotter</h5>
                        <ul>
                            <a href="/"><li>About Us</li></a>
                            <a href="/"><li>FAQs</li></a>
                            <a href="/"><li>Suggestions</li></a>
                        </ul>
                    </div>
                    <div className={styles.footerUl}>
                        <h5 className='footer-h3'>For Devs (Apis)</h5>
                        <ul>
                            <a target='_blank' rel='noreferrer' href="https://rapidapi.com/nft-art-generator-nft-art-generator-default/api/rarible-data-scraper"><li>Rarible</li></a>
                            <a target='_blank' rel='noreferrer' href="https://docs.opensea.io/reference/api-overview"><li>Open Sea</li></a>
                            <a href="/"><li>Careers</li></a>
                        </ul>
                    </div>
                    <div className={styles.footerUl}>
                        <h5 className='footer-h3'>Follow Us</h5>
                        <ul>
                            <a target='_blank' rel='noreferrer' href="https://github.com/kaiwritescode"><li>Github</li></a>
                            <a target='_blank' rel='noreferrer' href="https://twitter.com/kaiwritescode"><li>Twitter</li></a>
                            <a href="/"><li>Discord</li></a>
                        </ul>
                    </div>
                    <div className={styles.footerUl}>
                        <span>Stay up to date with Cryptocurrencies stats</span>
                        <span className={styles.newsletter}>Join our newsletter!</span>
                        <div className="input-group footer-input my-2">
                            <input type="text" className="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-secondary" type="button" id="button-addon2">Join</button>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )

    const secondaryFooter = (
        <footer className={styles.footerTwo}>
            <div className={styles.footerTwoWrapper}>
                <div className={styles.logoTwoWrapper}>
                    <img width='50px' src="/nft-spotter/imgs/logo6.png" alt="" />
                    <span className={styles.titleTwo}>NFT Spotter</span>
                </div>
                <div>
                    <span className='mx-2'>Powered By:</span>
                    <a target='_blank' className={styles.apiLink} rel='noreferrer' href="https://rapidapi.com/nft-art-generator-nft-art-generator-default/api/rarible-data-scraper">Rarible</a>
                    <a target='_blank' className={styles.apiLink} rel='noreferrer' href="https://docs.opensea.io/reference/api-overview">Open Sea</a>
                </div>
                <div>
                    <span className='copyright2'>
                        © NFT Spotter. All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    )
    return (
        <>
            <div className={styles.mainFooter}>
                {mainFooter}
            </div>
            <div className={styles.collapsedFooter}>
                {secondaryFooter}
            </div>
        </>
    );
}

export default Footer
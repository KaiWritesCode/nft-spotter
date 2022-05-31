import React, {FC} from 'react'
import Footer from '../Footer/Footer'
import NavigationBar from '../Navbar/NavigationBar'
import styles from "./Errorpage.module.css"

const ErrorPage:FC = () => {
    return (
        <div className={styles.wrapper}>
            <NavigationBar />
            <div className={styles.container}>
                <div className={styles.number}>
                    404
                </div>
                <div className={styles.mainSection}>
                    <span className="oops">
                        Oooops...
                    </span>
                    <span className={styles.notFound}>
                        Page not found
                    </span>
                </div>
                <button className="btn btn-primary rounded my-3">
                    <a style={{ color: 'white', textDecoration: 'none' }} href="/nft-spotter/#/">Back to Homepage</a>
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage

import React, { useState, FC, ChangeEvent, SyntheticEvent } from 'react'
import styles from "./Navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";


const NavigationBar:FC = () => {

    const [searchInput, setSearchInput] = useState('')
    const history = useHistory()

    // types 
    


    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        setSearchInput(e.target.value)
    }

    function submitInput(e: SyntheticEvent) {
        e.preventDefault()
        history.push(`/collections/${searchInput}`)
    }

    return (

        <nav className={`navbar navbar-expand-lg navbar-dark px-2 ${styles.navigation}`}>
            <div className={`container-fluid ${styles.innerNav}`}>
                <a className="navbar-brand fs-4 ml-3 py-0" href="/nft-spotter/#/">
                    <img className="" width="80" src="/nft-spotter/imgs/logo-light.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className={`nav-item ${styles.hoverItem}`}>
                            <a className="nav-link hover-gray mx-2 text-light fw-bold" aria-current="page" href="/nft-spotter/#/">Home</a>
                        </li>
                        <li className={`nav-item ${styles.hoverItem}`}>
                            <a className="nav-link mx-2 text-light fw-bold" href="/nft-spotter/#/top-collections">Top 100</a>
                        </li>
                        <li className={`nav-item ${styles.hoverItem}`}>
                            <a className="nav-link mx-2 text-light fw-bold" href="/nft-spotter/#/collections/0x09233d553058c2f42ba751c87816a8e9fae7ef10">NFT of The Day</a>
                        </li>
                        <li className={`nav-item ${styles.hoverItem}`}>
                            <a className="nav-link mx-2 text-light fw-bold" href="/">About Us</a>
                        </li>
                    </ul>



                    <form className={`d-flex ${styles.form}`}>
                        <div className={styles.inputDiv}>
                            <input onChange={handleInput} className={`form-control rounded ${styles.input}`} type="search" placeholder="Search for collections (address)" aria-label="Search" />
                            <button onClick={submitInput} className={styles.searchBtn}><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </form>


                </div>
            </div>
        </nav>


    )
}

export default NavigationBar
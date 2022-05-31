import React, { FC } from 'react'
import styles from './Collection.module.css'
import { IPrices } from '../../Interfaces'

const PriceDisplay = ({count, num_owners, floor_price, average_price, one_day_volume, seven_day_volume,  one_day_sales, seven_day_sales}: IPrices) => {

    const biggerText = { fontSize: '1.5rem', fontWeight: 'bold' }
    const ethSymbol = { width: '25px', height: '25px' }

  return (
    <div className={styles.wrapper}>
    <div className={styles.flexWrapper}>
        <div className={styles.statsDiv}>
            <div className={styles.statsBox}>
                <div>Items:</div>
                <div style={biggerText}>{count}</div>
            </div>
            <div className={styles.statsBox}>
                <div>Owners:</div>
                <div style={biggerText}>{num_owners}</div>
            </div>
        </div>
        <div className={styles.statsDiv}>
            <div className={styles.statsBox}>
                <div>Floor Price:</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/nft-spotter/imgs/eth.svg" style={ethSymbol} alt="" />
                    <div style={biggerText}>{floor_price}</div>
                </div>
            </div>
            <div className={styles.statsBox}>
                <div>Average Price</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/nft-spotter/imgs/eth.svg" style={ethSymbol} alt="" />
                    <div style={biggerText}>{average_price}</div>
                </div>
            </div>
        </div>
    </div>


    <div className={styles.flexWrapper}>
        <div className={styles.statsDiv}>
            <div className={styles.statsBox}>
                <div>1d Volume</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/nft-spotter/imgs/eth.svg" style={ethSymbol} alt="" />
                    <div style={biggerText}>{one_day_volume}</div>
                </div>
            </div>
            <div className={styles.statsBox}>
                <div>7d Volume:</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/nft-spotter/imgs/eth.svg" style={ethSymbol} alt="" />
                    <div style={biggerText}>{seven_day_volume}</div>
                </div>
            </div>
        </div>
        <div className={styles.statsDiv}>
            <div className={styles.statsBox}>
                <div>Sales Today:</div>
                <div style={biggerText}>{one_day_sales}</div>
            </div>
            <div className={styles.statsBox}>
                <div>7d Sales:</div>
                <div style={biggerText}>{seven_day_sales}</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PriceDisplay
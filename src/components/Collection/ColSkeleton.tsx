import React, { FC } from 'react'
import styles from './ColSkeleton.module.css'

export const TopSkeleton:FC = () => {

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.bannerDiv} ${styles.skeleton}`}>
                <div className={`${styles.bannerImage} ${styles.skeleton}`}></div>
            </div>
            <div className={`${styles.circle} ${styles.skeleton}`}></div>
            <div className={`${styles.textFlex} mb-5`}>
                <div className={`${styles.big} ${styles.text} ${styles.skeleton}`}></div>
                <div className={`${styles.skeleton} ${styles.text}`}></div>
                <div className={`${styles.skeleton} ${styles.text}`}></div>
            </div>
        </div >
    )
}

export const CardSkeleton:FC = () => {

    const templateSkeleton = (
        <div className={` mb-4 ${styles.card}`}>
            <div className={`${styles.square} ${styles.skeleton}`}></div>
            <div className={`${styles.textFlex} p-3`}>
                <div className={`${styles.cardText} ${styles.skeleton}`}></div>
                <div className={`${styles.cardText} ${styles.small} ${styles.skeleton}`}></div>
            </div>
        </div>

    )

    let skeletonArr = []
    for (let i = 0; i < 30; i++) {
        skeletonArr.push(templateSkeleton)
    }

    const skeletons = skeletonArr.map((item, index) => {
        return (
            <div key={index}>
                {item}
            </div>
        )
    })

    return (
        <div className={styles.cardWrapper}>
            {skeletons}
        </div >
    )
}

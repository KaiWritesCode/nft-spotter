import React from 'react'
import styles from './AllSkeleton.module.css'

export default function AllCollectionsSkeleton() {

    const templateSkeleton = (
        <div className={` mb-4 position-relative ${styles.row}`}>
            <div className={`${styles.square} ${styles.skeleton}`}></div>
            <div className={styles.textFlex}>
                <div className={`${styles.text} ${styles.skeleton}`}></div>
                <div className={`${styles.textSm} ${styles.skeleton} ${styles.text}`}></div>
            </div>
        </div>

    )

    let skeletonArr = []
    for (let i = 0; i < 20; i++) {
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
        <div className={styles.wrapper}>
            {skeletons}
        </div >
    )
}
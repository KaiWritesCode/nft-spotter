import React, {FC} from 'react'
import styles from './HotSkeleton.module.css'

const HotColSkeleton:FC = () => {

    const templateSkeleton = (
        <div className={` mb-4 ${styles.card}`}>
            <div className={`${styles.circle} ${styles.skeleton}`}></div>
            <div className={styles.textFlex}>
                <div className={`${styles.text} ${styles.skeleton}`}></div>
                <div className={`${styles.textSm} ${styles.skeleton} ${styles.text}`}></div>
            </div>
        </div>

    )

    let skeletonArr = []
    for (let i = 0; i < 5; i++) {
        skeletonArr.push(templateSkeleton)
    }

    const skeletons = skeletonArr.map((item, index) => {
        return (
            <div key={index}>
                {item}
            </div >)
    })

    return (
        <div className={styles.wrapper}>
            {skeletons}
        </div >
    )
}

export default  HotColSkeleton
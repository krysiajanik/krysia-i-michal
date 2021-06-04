import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import UploadForm from './UploadForm/UploadForm';
import styles from './Gallery.module.scss'

const Gallery = () => {

    const { docs } = useFirestore('images')

    return(
        <>
        <UploadForm />
        <div className={styles.imgView}>
            {docs && docs.map(doc => (
                <div className={styles.imgWrapper} key={doc.id}> 
                    <img src={doc.url} alt={'zdjęcie z wesela Krysi i Michała'} className={styles.img}/>
                </div>
            ))}
        </div>
        </>
    )
}

export default Gallery;
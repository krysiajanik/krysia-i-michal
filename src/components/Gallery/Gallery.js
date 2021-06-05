import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import UploadForm from './UploadForm/UploadForm';
import styles from './Gallery.module.scss'
import Modal from './Modal/Modal';

const Gallery = () => {

    const { docs } = useFirestore('images')

    const [selectedImg, setSelectedImg] = useState(null)

    return(
        <>
        <UploadForm />
        <div className={styles.imgView}>
            {docs && docs.map(doc => (
                <div className={styles.imgWrapper} key={doc.id}
                    onClick={()=> setSelectedImg(doc.url)}
                > 
                    <img src={doc.url} alt={'zdjęcie z wesela Krysi i Michała'} className={styles.img}/>
                </div>
            ))}
        </div>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
        </>
    )
}

export default Gallery;
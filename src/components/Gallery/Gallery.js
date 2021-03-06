import React, { useState, useEffect } from 'react';
import useFirestore from '../../hooks/useFirestore';
import UploadForm from './UploadForm/UploadForm';
import styles from './Gallery.module.scss'
import Modal from './Modal/Modal';

const Gallery = () => {

    const { docs } = useFirestore('images')


    const [selectedImg, setSelectedImg] = useState(null);
    const [indexImg, setIndexImg] = useState(null);
    const [maxRight, setMaxRight] = useState(null)
    const [authorName, setAuthorName] = useState(null)


    useEffect( () => {
        if(indexImg>=0 && indexImg<maxRight) {
           let newImg=docs[indexImg]
           let newAuthor=docs[indexImg].authorName
           setSelectedImg(newImg.url)
           setAuthorName(newAuthor)
        }
      }, [indexImg]
      )

  

    return(
        <>
        <UploadForm />
        <div className={styles.imgView}>
            {docs && docs.map(doc => (
                <div className={styles.imgWrapper} key={doc.id}
                    onClick={()=> {
                        setSelectedImg(doc.url)
                        setIndexImg(docs.indexOf(doc))
                        setMaxRight(docs.length)
                        setAuthorName(doc.authorName)
                    }}
                > 
                    <img src={doc.url} alt={'zdjęcie z wesela Krysi i Michała'} className={styles.img}/>
                </div>
            ))}
        </div>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} indexImg={indexImg} setIndexImg={setIndexImg} maxRight={maxRight} authorName={authorName}/> }
        </>
    )
}

export default Gallery;
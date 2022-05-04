import React, { useState } from 'react';
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";



const Gallery = () => {
  
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        }
    ]

    const [model,setModel] = useState(false)
    const [tempimgSrc,setTempImgSrc] = useState('');


    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true)
    }

    return (
        <>
            <h1>Gallery</h1>
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc} />
            </div>
            {data.map((item, index) => {
                return (
                    <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%' }} />

                    </div>

                )
            })}
            
        </>
        
  )
}

export default Gallery
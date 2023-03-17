import React from "react";
import Styles from "./Picture.module.css"

export interface PictureProp {
    url: string;
}

const Picture = (prop: PictureProp) => {
    return (
        <img src={prop.url} alt="#" className={Styles.galleryPicture}/>
    )
}

export default Picture;
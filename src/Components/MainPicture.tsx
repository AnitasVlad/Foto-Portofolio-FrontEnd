import React from "react";
import Styles from "./Picture.module.css"
import {PictureProp} from "./Picture";


const MainPicture = (prop: PictureProp) => {
    return (
        <div className={Styles.imgGradient}>
            <img src={prop.url} alt="#" className={Styles.mainPicture}/>
        </div>
    )
}

export default MainPicture;
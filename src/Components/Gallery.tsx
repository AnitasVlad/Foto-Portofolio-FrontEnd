import React from "react";
import Picture from "./Picture";
import {PictureProp} from "./Picture";
import Styles from "./Gallery.module.css";
import MainPicture from "./MainPicture";
import TitleAndText from "./TitleAndText";

export interface GalleryProps {
    id?: number;
    title: string;
    text: string;
    mainPicture: PictureProp;
    pictures?: PictureProp[];
}

const Gallery = (props: GalleryProps) => {

    return (
        <>
            <div className={Styles.gallery}>
                <MainPicture url={props.mainPicture?.url}/>
                <TitleAndText title={props.title} text={props.text}/>
                <div className={Styles.picturesList}>
                    {props.pictures?.map(picture => {
                        return (<Picture url={picture.url}/>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Gallery;
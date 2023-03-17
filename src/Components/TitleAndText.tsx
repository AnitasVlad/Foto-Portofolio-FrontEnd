import React from "react";
import Styles from "./TitleAndText.module.css"

export interface TitleAndTextProp {
    title: string;
    text: string;
}

const TitleAndText = (prop: TitleAndTextProp) => {
    return (
        <div className={Styles.titleAndTextContainer}>
            <h2 className={Styles.title}>{prop.title}</h2>
            <p className={Styles.text}>{prop.text}</p>
        </div>
    )
}

export default TitleAndText;
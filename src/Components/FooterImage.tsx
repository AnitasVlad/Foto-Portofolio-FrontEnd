import React from "react";
import Styles from "./WeddingSolicitationForm.module.css";

const FooterImage = () => {
    return (
        <div className={Styles.down}>
            <div className={Styles.imgGradient}>
                <img
                    src={'https://res.cloudinary.com/dhvkhnsws/image/upload/v1678824394/PhotoPortofolio/DSC_8783_xk2hei.jpg'}
                    alt={'#'} className={Styles.footerImage}/>
            </div>
        </div>
    )
}
export default FooterImage;
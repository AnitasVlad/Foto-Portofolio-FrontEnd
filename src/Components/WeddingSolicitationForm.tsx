import React, {useState} from "react";
import Styles from "./WeddingSolicitationForm.module.css";
import {ImageProps} from "react-bootstrap";
import {PictureProp} from "./Picture";

export interface WeddingSolicitationFormProp {
    names: string;
    email: string;
    location: string;
    date: string;
    weddingInfo: string;
    guestsNumber: number;
}

interface weddingSolicitationFormProps {
    OnFormSubmit: (solicitation: WeddingSolicitationFormProp) => void;
    background?: PictureProp;
}

const WeddingSolicitationForm = ({OnFormSubmit}: weddingSolicitationFormProps) => {
    const [solicitationForm, setSolicitationForm] = useState<WeddingSolicitationFormProp>({
        names: '',
        email: '',
        location: '',
        date: '',
        weddingInfo: '',
        guestsNumber: 0
    });

    const {names, email, location, date, weddingInfo, guestsNumber} = solicitationForm;

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        OnFormSubmit(solicitationForm);
        setSolicitationForm({
            names: '',
            email: '',
            location: '',
            date: '',
            weddingInfo: '',
            guestsNumber: 0
        });
    }

    return (
        <div className={Styles.formContainer}>
            <form onSubmit={handleSubmit} className={Styles.weddingSolicitationForm}>
                <label className={Styles.label}>Names</label>
                <input type="text" value={names} onChange={event => setSolicitationForm({
                    ...solicitationForm,
                    names: event.currentTarget.value
                })} className={Styles.input}/>
                <label className={Styles.label}>Email</label>
                <input type="text" value={email} onChange={event => setSolicitationForm({
                    ...solicitationForm,
                    email: event.currentTarget.value
                })} className={Styles.input}/>
                <label className={Styles.label}>Location</label>
                <input type="text" value={location} onChange={event => setSolicitationForm({
                    ...solicitationForm,
                    location: event.currentTarget.value
                })} className={Styles.input}/>
                <label className={Styles.label}>Date</label>
                <input type="text" value={date}
                       onChange={event => setSolicitationForm({
                           ...solicitationForm,
                           date: event.currentTarget.value
                       })}
                       className={Styles.input}/>
                <label className={Styles.label}>Wedding Info</label>
                <input type="text" value={weddingInfo} onChange={event => setSolicitationForm({
                    ...solicitationForm,
                    weddingInfo: event.currentTarget.value
                })} className={Styles.input}/>
                <label className={Styles.label}>Number of Guests</label>
                <input type="number" value={guestsNumber} onChange={event => setSolicitationForm({
                    ...solicitationForm,
                    guestsNumber: event.currentTarget.valueAsNumber
                })} className={Styles.input}/>
                <button type="submit" className={Styles.submitButton}>Submit</button>
            </form>
            <div className={Styles.imgGradient}>
                <img
                    src={'https://res.cloudinary.com/dhvkhnsws/image/upload/v1678824394/PhotoPortofolio/DSC_8783_xk2hei.jpg'}
                    alt={'#'} className={Styles.footerImage}/>
            </div>
        </div>
    )
}
export default WeddingSolicitationForm;
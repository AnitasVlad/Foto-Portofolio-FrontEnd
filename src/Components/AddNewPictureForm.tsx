import React, {useState} from "react";
import Styles from "./WeddingSolicitationForm.module.css";

export interface NewPictureProp {
    url: string;
}

interface AddNewPictureProp {
    OnFormSubmit: (newPic: NewPictureProp) => void;
}

const AddNewPictureForm = ({OnFormSubmit}: AddNewPictureProp) => {
    const [newPicForm, setNewPicForm] = useState<NewPictureProp>({url: ''});

    const {url} = newPicForm;

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        OnFormSubmit(newPicForm);
        setNewPicForm({url: ''});
    }
    
    return (
        <>
            <div className={Styles.formContainer}>
                <form onSubmit={handleSubmit} className={Styles.weddingSolicitationForm}>
                    <label>Picture Url</label>
                    <input type="text" value={url} onChange={event => setNewPicForm({
                        ...newPicForm,
                        url: event.currentTarget.value
                    })} className={Styles.input}/>
                    <button type="submit" className={Styles.submitButton}>Submit</button>
                </form>
            </div>
        </>
    )
}
export default AddNewPictureForm;
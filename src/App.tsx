import React, {useEffect, useState} from 'react';
import axios from "axios";
import WeddingSolicitationForm, {WeddingSolicitationFormProp} from "./Components/WeddingSolicitationForm";
import Gallery, {GalleryProps} from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import {NewPictureProp} from "./Components/AddNewPictureForm";

const App = () => {
    const [gallery, setGallery] = useState<GalleryProps>();
    const [form, SetForm] = useState<WeddingSolicitationFormProp>();

    useEffect(() => {
        getGallery().catch();
    }, [])

    const client = axios.create({
        baseURL: 'http://localhost:3002/api'
    });

    async function getGallery() {
        const response = await client.get<GalleryProps>('/Home')
        setGallery(response.data);
    }

    async function updateGallery(newPic: NewPictureProp) {
        const respose = await client.put('/Home', newPic)
        await getGallery();
    }

    async function PostForm(form: WeddingSolicitationFormProp) {
        const response = await client.post('/WeddingSolicitation', form);
        SetForm(response.data);
    }

    return (
        <>
            <nav><Navbar/></nav>
            {gallery &&
                <Gallery id={gallery?.id} title={gallery?.title} text={gallery?.text} mainPicture={gallery?.mainPicture}
                         pictures={gallery?.pictures}/>}
            <WeddingSolicitationForm OnFormSubmit={PostForm}/>
            
        </>
    );
}

export default App;
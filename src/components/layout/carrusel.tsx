

import React from "react";
import { useState } from "react";
import styled from "styled-components";

const CarruselImg = styled.img`
max.width: 500px;
width: 100%;
heigth:auto;
opacity: 0;
transition:1s;
&.loaded {
    opacity:1;
}
`;

const CarruselButtonContainer = styled.div `
display:flex;
aling-content:center;
flex-direction:row;
margin-top:15px;
`;

const CarruselButton = styled.button`
color:white;
background-color: #eb118a;
padding:8px;
margin:0 5px;
`;

export default function Carrusel(props: any) {

    const images = ['themask.png', 'Argentina1985.png', 'dune.png', 'Interstellar.png', 'topgun.png', 'LostinTranslation.png', 'inception.png', 'aqedsqhm.png'];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    const selectNewImage = (index: number, images: string[], next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);

    };

    const previus = () => {
        selectNewImage(selectedIndex, images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, images);
    };


    return <>
        <CarruselImg src={require(`assets/img${selectedImage}`).default} alt='damian'
            className={loaded ? "loaded" : ""}
            onLoad={() => setLoaded(true)} />
        <CarruselButtonContainer>
        <CarruselButton onClick={previus}>{'<'}</CarruselButton>
        <CarruselButton onClick={next}>{'>'}</CarruselButton>
        </CarruselButtonContainer>
    </>;
}


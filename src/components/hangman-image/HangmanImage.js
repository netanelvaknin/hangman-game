import React, {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import zero from './assets/0.jpg';
import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
import five from './assets/5.jpg';
import six from './assets/6.jpg';
import {mobile} from '../../utils/screen-sizes';

const ImageContainer = styled.div`
    /* margin: 2rem auto; */
    img {
        @media ${mobile} {
            height: 25rem;
        }
    }
`;

const imageSrc = {
    0: zero,
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six
};

const HangmanImage = ({errors}) => {
    const [src, setSrc] = useState(imageSrc[0]);
    
    useEffect(() => {
        if (errors !== 'undefined') {
            setSrc(imageSrc[errors]);
        }
    }, [errors])
    
    return (
        <ImageContainer>
            <img src={src || imageSrc[0]} alt="hangman level" />
        </ImageContainer>
    );
};

export default HangmanImage;
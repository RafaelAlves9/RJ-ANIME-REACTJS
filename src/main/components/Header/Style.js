import styled from "styled-components"

import Background from './images2.jpg'

export const CarroselContainer = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${Background});
    background-size: cover;
    background-position: center;

    @media (max-width:1000px){
        height: 70vh;
    }
    @media (max-width:600px){
        height: 60vh;
    }
`
export const Back = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.250);
`

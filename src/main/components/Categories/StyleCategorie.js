import styled from "styled-components"

export const ContainerCategorie = styled.section`
    margin-top: 30px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const TittleCategorie = styled.div`
    height: 50px;
    background-image: linear-gradient(to bottom, #2F85EF, #56BDF5, #56BDF5);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
        
    h2{
        font-weight: bolder;
        font-size: 27px;
        padding: 0 10px;
    }
    &:hover{
        background-image: linear-gradient(to bottom, #2F85EF, #fff, #56BDF5);
    }
    @media (max-width:800px){
        text-align: center;
    }
`
export const CarrosselPicture = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;

    img{
        margin: 15px ;
        cursor: pointer;
        transition:all ease .5s;
    }
    img:hover{
        transform: scale(1.12);
        transition: 0.3s;
    }
    @media (max-width:1600px){
        justify-content: center;
    }
`
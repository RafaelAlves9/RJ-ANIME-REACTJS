import styled from "styled-components"

export const ContainerTopBar = styled.header`
    height: 65px;
    width: 100%;
    background-color: #000;
    border: 1px solid #000;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    position: fixed;
    z-index: 999;
`;
export const Nav = styled.nav`
    margin: auto;
    width: 94%;
    height: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`
export const Logo = styled.h2`
    cursor: pointer;
    font-weight: 700;
    font-size: 35px;
    transition:all ease .5s;

    span{
        color: #6097EF;
    }
    &:hover{
        transition:all ease .5s;
        color: #6097EF;
        span{
            color: #fff;
        }
    }
`
export const NavButton = styled.span`
    width: fit-content;
    height: fit-content;
    background-color: #fff;
    border-radius: 5px;
    transition:all ease .5s;
    cursor: pointer;
    img{
        padding: 7px;
    }
    &:hover{
        background-color: #6097EF;
    }
`
export const MenuOppened = styled.div`
    width: 0;
    height: 0;
    right: 0;
    top: 59px;
    background-color: #241059;
    border-radius: 5px;
    position: absolute;
    color: #fff;
    display: flex;
    justify-content: right;
    transition:all ease .3s;
    z-index: 999;

    ul{
        width: 100%;
        list-style: none;
    }
    li{
        width: 300px;
        padding: 15px 20px;
        font-weight: 700;
        border-bottom: 1px solid #fff;
        font-size: 22px;
        cursor: pointer;
    }
    li:hover, a:hover{
        color: #6097EF;
    }
`

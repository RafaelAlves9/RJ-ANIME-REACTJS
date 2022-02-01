import { Link } from 'react-router-dom'

import {
    ContainerTopBar,
    Nav,
    Logo,
    NavButton,
    MenuOppened
} from './TopStyle'


export default () => {

    function openMenu() {
        if (document.querySelector('.open').style.width < '300px') {
            document.querySelector('.open').style.width = '300px'
            document.querySelector('.open').style.height = '550px'
            document.querySelector('.open ul').style.width = '100%'

        }
        else {
            document.querySelector('.open').style.width = '0'
            document.querySelector('.open').style.height = '0'
            document.querySelector('.open ul').style.width = '0'
        }
    }


    return(
        <ContainerTopBar>
            <Nav>
                <Link to='/'>
                    <Logo>
                        RJ <span>ANIMES</span>
                    </Logo>
                </Link>
                <NavButton onClick={openMenu}>
                    <img src="https://img.icons8.com/material-two-tone/24/000000/menu--v2.png"/>
                </NavButton>
            </Nav>

            {/* abertura do menu */}
            <MenuOppened className="open">
                <ul>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <li><a href="#naruto">NARUTO</a></li>
                    <li><a href="#dragon">DRAGON BALL</a></li>
                    <li><a href="#jojo">JOJO'S</a></li>
                    <li><a href="#puch">ONE PUCH MAN</a></li>
                    <li><a href="#attack">ATTACK ON TITAN</a></li>
                    <li><a href="#sword">SWORD ART</a></li>
                </ul>
            </MenuOppened>
        </ContainerTopBar>
    )
}
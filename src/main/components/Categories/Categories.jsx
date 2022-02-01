import styled from "styled-components";
import Naruto from "./Categorie/Naruto"
import DragonBall from "./Categorie/DragonBall"
import Jojo from "./Categorie/Jojo"
import OnePuch from "./Categorie/OnePuch";
import Attack from "./Categorie/Attack";
import SwordArt from "./Categorie/SwordArt";



const Categories = styled.section`
    margin-top: 30px;
    height: fit-content;
`

export default () => {

    return(
       <Categories>
           <Naruto limited={6}/>
           <DragonBall limited={6}/>
           <Jojo limited={6}/>
           <OnePuch limited={6}/>
           <Attack limited={6}/>
           <SwordArt limited={6}/>
       </Categories>
    )
}
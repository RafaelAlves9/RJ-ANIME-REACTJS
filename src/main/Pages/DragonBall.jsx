import TopBar from '../components/TopBar/TopBar'
import DragonBall from '../components/Categories/Categorie/DragonBall'

import{ 
    ContainerPage,
    ContainerTittle
} from './Style'


export default () => {

    
    return(
        <>
            <TopBar />
            <ContainerPage>
                <ContainerTittle>
                    <DragonBall limited={20}/>
                </ContainerTittle>
            </ContainerPage>
        </>
    )
}
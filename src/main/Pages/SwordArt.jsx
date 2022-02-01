import TopBar from '../components/TopBar/TopBar'
import SwordArt from '../components/Categories/Categorie/SwordArt'

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
                    <SwordArt limited={20}/>
                </ContainerTittle>
            </ContainerPage>
        </>
    )
}
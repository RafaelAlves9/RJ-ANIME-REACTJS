import TopBar from '../components/TopBar/TopBar'
import Naruto from '../components/Categories/Categorie/Naruto'

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
                    <Naruto limited={20}/>
                </ContainerTittle>
            </ContainerPage>
        </>
    )
}
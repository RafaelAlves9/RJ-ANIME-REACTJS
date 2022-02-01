import TopBar from '../components/TopBar/TopBar'
import Jojo from '../components/Categories/Categorie/Jojo'

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
                    <Jojo limited={20}/>
                </ContainerTittle>
            </ContainerPage>
        </>
    )
}
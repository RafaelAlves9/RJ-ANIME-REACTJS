import TopBar from '../components/TopBar/TopBar'
import Attack from '../components/Categories/Categorie/Attack'

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
                    <Attack limited={20}/>
                </ContainerTittle>
            </ContainerPage>
        </>
    )
}
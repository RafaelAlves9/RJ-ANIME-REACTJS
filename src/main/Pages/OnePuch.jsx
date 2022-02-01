import TopBar from '../components/TopBar/TopBar'
import OnePuch from '../components/Categories/Categorie/OnePuch'

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
                    <OnePuch limited={11}/>
                </ContainerTittle>
            </ContainerPage>
        </>
    )
}
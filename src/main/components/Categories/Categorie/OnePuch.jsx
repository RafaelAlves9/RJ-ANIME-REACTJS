import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
    ContainerCategorie,
    TittleCategorie,
    CarrosselPicture
} from '../StyleCategorie'

export default (props) => {

    const [series, setSeries ] = useState({})
    

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=one-puch-man&page[limit]=${props.limited}`)
        .then(res => res.json())
        .then(data => setSeries(data))
    }, [])

    return(
        <ContainerCategorie id='puch'>
            <Link to='one-puch-man'>
                <TittleCategorie>
                    <h2>ONE PUCH MAN</h2>
                </TittleCategorie>
            </Link>

            {series.data && (
            <CarrosselPicture>
                 {series.data.map((serie) => (
                 <img
                    key={serie.id}
                    src={serie.attributes.posterImage.small}/>
                ))}
            </CarrosselPicture>  
            )}
          
           
        </ContainerCategorie>
    )
}
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
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=Attack-on&page[limit]=${props.limited}`)
        .then(res => res.json())
        .then(data => setSeries(data))
    }, [])

    return(
        <ContainerCategorie id='attack'>
            <Link to="/attack-on-titans">
                <TittleCategorie>
                    <h2>ATTACK ON TITAN</h2>
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './main/Pages/Home'
import Naruto from './main/Pages/Naruto'
import DragonBall from './main/Pages/DragonBall'
import Jojo from './main/Pages/Jojo'
import Attack from './main/Pages/Attack'
import OnePuch from './main/Pages/OnePuch'
import SwordArt from './main/Pages/SwordArt'

export default () =>{

    return(
       
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/naruto' element={<Naruto />} />
                <Route path='/dragon-ball' element={<DragonBall />} />
                <Route path='/jojo' element={<Jojo />} />
                <Route path='/one-puch-man' element={<OnePuch />} />
                <Route path='/attack-on-titans' element={<Attack />} />
                <Route path='/sword-art-online' element={<SwordArt />} />
            </Routes>
        </Router>
    )
}
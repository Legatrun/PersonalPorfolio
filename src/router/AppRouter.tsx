import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages'
import { Skills } from '../views'
import { Experience } from '../views/Experience'
import { Projets } from '../views/Projets'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skils' element={<Skills />} />
            <Route path='/projects' element={<Projets />} />
            <Route path='/experience' element={<Experience />} />



            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}

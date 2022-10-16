import { Navigate, Route, Routes } from 'react-router-dom'
import { App, Home } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/app' element={<App />} />
        </Routes>
    )
}

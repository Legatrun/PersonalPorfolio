import { useState } from 'react';
import { Loader } from '../components';
import './Home.css'



export const Home = () => {
    const [isLoading, setIsLoading] = useState(false)

    setTimeout(() => {
        setIsLoading(true)
    }, 1000);

    if (!isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <>
            {/* TODOS: 
                poder un loader //*LISTO
                una barra de navegacion o boton hamburgesa
                Link a tus perfiles sociales facebook twiter github linkedin whatsapp gmail
                quien soy
                conocimientos o mis skills
                Dividir la pagina principal por secciones
                diseñar un logotipo
                modificar la barra de scroll
                poner el nombre de la pagina en la seccion derecha en modo vertical
                poner que etiqueta encierra a cada elemento
                poner sonido
                poner un "contactame y un mapa colorido como en jacekjeznach.com "
                certificados que tengo
                mis gustos
            */}
            <h1>Hi.</h1>
            <h1>I'm Jair</h1>
            <h1>web developer</h1>
        </>
    )
}

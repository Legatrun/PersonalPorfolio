import { useState } from 'react';
import { Loader } from '../components';
import { PorfolioLayout } from '../layout/PorfolioLayout';
import { Greeting, Skills } from '../views';
import './Home.css'



export const Home = () => {
    const [isLoading, setIsLoading] = useState(false)

    setTimeout(() => {
        setIsLoading(true)
    }, 2000);

    if (!isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <PorfolioLayout className='home'>
            <div className="leadBar"></div>
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
            <Greeting />
            <Skills />

        </PorfolioLayout>
    )
}

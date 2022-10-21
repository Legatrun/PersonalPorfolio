import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <ul id='primary-navigation' className='navbar primary-navigation flex'>
                <li className='active'>
                    <a href="#">
                        <span aria-hidden="true">00</span>Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span aria-hidden="true">01</span>Destination
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span aria-hidden="true">02</span>Crew
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span aria-hidden="true">03</span>Technology
                    </a>
                </li>
            </ul>
        </nav>
    )
}

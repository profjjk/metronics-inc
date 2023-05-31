import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [ showMenu, setShowMenu ] = useState<boolean>(false);

    const links = [
        { path: '/', text: 'Home' },
        { path: '/services', text: 'Services' },
        { path: '/equipment', text: 'Equipment' },
        { path: '/contact', text: 'Contact' }
    ];

    useEffect(() => {
        const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLDivElement;
        const navMenu = document.querySelector('.nav-menu') as HTMLUListElement;

        if (showMenu) {
            hamburgerMenu.classList.add('open');
            navMenu.classList.remove('hidden');
        } else {
            hamburgerMenu.classList.remove('open');
            navMenu.classList.add('hidden');
        }
    }, [showMenu]);

    return (
        <header>
            <nav>
                <div className={'logo'}>
                    <Link to={'/'}>METRONICS<span>Inc</span></Link>
                    <div className={'slant'}>
                        <span className={'dark'} />
                        <span className={'light'} />
                    </div>
                </div>

                <ul className={'nav-menu'}>
                    {links.map(({ path, text }) => (
                        <li key={path}>
                            <NavLink className={'nav-link'} to={path} onClick={() => showMenu && setShowMenu(false)}>
                                {text}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className={'hamburger-menu'} onClick={() => setShowMenu(!showMenu)}>
                    <div className={'line'}></div>
                    <div className={'line'}></div>
                    <div className={'line'}></div>
                </div>
            </nav>
        </header>
    )
}
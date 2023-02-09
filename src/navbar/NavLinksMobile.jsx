
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';




const NavLinksMobile = () => {

    const [active, setActive] = useState('');
    const { pathname } = useLocation();
  
    useEffect(() => {
      setActive(pathname);
    }, [pathname]);

    return ( 
        <ul className="mob">
            <li  className={active === '/' ? 'active' : ''}>
                <div className='icon'>
                    <img src=""></img>
                </div>
                <Link to="/">Home</Link>
            </li>
            <li className={active === '/motocicletas' ? 'active' : ''}>
            <div className='icon'>
                <img src=""></img>
                </div>
                <Link to="/motocicletas">Motocicletas</Link>
            </li>
            <li className={active === '/veiculos' ? 'active' : ''}>
            <div className='icon'>
                <img src=""></img>
                </div>
                <a href="/veiculos"> Automoveis</a>
            </li>
            <li className={active === '/financiamentos' ? 'active' : ''}>
            <div className='icon'>
            <img src=""></img>
                </div>
                <a href="/financiamentos"> Financiamentos</a>
            </li>
            <li className={active === '/sobre' ? 'active' : ''}>
            <div className='icon'>
                <img src=""></img>
                </div>
                 <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li className={active === '/contato' ? 'active' : ''}>
            <div className='icon'>
                <img src=""></img>
                </div>
                <a href="/contato">Contato</a>
            </li>
            <li className={active === '/login' ? 'active' : ''}>
            <div className='icon'>
                <img src=""></img>
                </div>
                <a href="/login">Área do Cliente</a>
            </li>
            
    </ul>
     );
    
}
 
export default NavLinksMobile;
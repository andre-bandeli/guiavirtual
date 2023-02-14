
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
          <li>
              <Link to="/">Introdução</Link>
          </li>
          <li>
              <Link to="/sobre">Sobre a pesquisa</Link>
          </li>
          <li>
              <Link to="/gravacoes">Gravações</Link>
          </li>
          <li>
              <Link to="/saudecoletiva">Saúde Coletiva</Link>
          </li>
          <li>
              <Link to="/noticias">Noticias e Conteúdos Extras</Link>
          </li>
          <li>
              <Link to="/contatos">Contatos</Link>
          </li>
          <li>
              <Link to="/destaques">Destques</Link>
          </li>   
    </ul>
     );
    
}
 
export default NavLinksMobile;
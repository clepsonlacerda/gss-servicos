import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true); 
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    {/* GSS <i className="fab fa-typo3" /> */}
                    <img src='/images/logo.png' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/servicos' className='nav-links' onClick={closeMobileMenu}>
                      Serviços
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/contatos' className='nav-links' onClick={closeMobileMenu}>
                      Contato
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/sobre' className='nav-links' onClick={closeMobileMenu}>
                      Sobre
                    </Link>
                  </li>
                  {/* <li className='nav-item'>
                    <Link to='/contatos' className='nav-links' onClick={closeMobileMenu}>
                      Contatos
                    </Link>
                  </li> */}
                  {/* <li className='nav-item'>
                    <Link to='/contatos' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Sign-in
                    </Link>
                  </li> */}
                </ul>
                {false && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar;
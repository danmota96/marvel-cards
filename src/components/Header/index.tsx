import React from 'react'
import banner from '../../assets/imgs/banner.jpg'
import { RiLogoutCircleLine } from 'react-icons/ri'

const Header = () => {
  return (
    <header>
        <RiLogoutCircleLine/>
        <img src={banner} alt="header-background" />
        <section>
            <div>
                <img src="" alt="marvel´s logo" className='header-logo' />
                <h1>Personagens</h1>
                <button>Criar Personagem</button>
            </div>
        </section>
    </header>
  )
}

export default Header;
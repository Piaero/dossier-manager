import React from 'react';

import './Menu.css';

import logo_main from '../../assets/logos/logo_main.png';
import groups from '../../assets/icons/groups.png';
import hotel from '../../assets/icons/hotel.png';
import quotation from '../../assets/icons/quotation.png';
import invoice from '../../assets/icons/invoice.png';

export const Menu = () => {
  return (
    <nav className='menu'>
      <img src={logo_main} className='logo_main' alt='Promenada' />
      <ul className='menu-list'>
        <li className='menu__item'>
          <img src={groups} className='menu__icon' alt='Dossiers' />
          <p className='menu__item__caption'>Dossiers</p>
        </li>
        <li className='menu__item'>
          <img src={hotel} className='menu__icon' alt='Hôtels' />
          <p className='menu__item__caption'>Hôtels</p>
        </li>
        <li className='menu__item'>
          <img src={quotation} className='menu__icon' alt='Cotations' />
          <p className='menu__item__caption'>Cotations</p>
        </li>
        <li className='menu__item'>
          <img src={invoice} className='menu__icon' alt='Factures' />
          <p className='menu__item__caption'>Factures</p>
        </li>
      </ul>
    </nav>
  );
};

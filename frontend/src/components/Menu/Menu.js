import React from 'react';

import './Menu.css';

import logo_main from '../../assets/logos/logo_main.png';
import groups from '../../assets/icons/groups.png';
import hotel from '../../assets/icons/hotel.png';
import guide from '../../assets/icons/guide.png';
import quotation from '../../assets/icons/quotation.png';
import invoice from '../../assets/icons/invoice.png';
import settings from '../../assets/icons/settings.png';

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
          <img src={hotel} className='menu__icon' alt='Hotele' />
          <p className='menu__item__caption'>Hotele</p>
        </li>
        <li className='menu__item'>
          <img src={guide} className='menu__icon' alt='Piloci' />
          <p className='menu__item__caption'>Piloci</p>
        </li>
        <li className='menu__item'>
          <img src={quotation} className='menu__icon' alt='Kotacje' />
          <p className='menu__item__caption'>Kotacje</p>
        </li>
        <li className='menu__item'>
          <img src={invoice} className='menu__icon' alt='Faktury' />
          <p className='menu__item__caption'>Faktury</p>
        </li>
        <li className='menu__item'>
          <img src={settings} className='menu__icon' alt='Ustawienia' />
          <p className='menu__item__caption'>Ustawienia</p>
        </li>
      </ul>
    </nav>
  );
};

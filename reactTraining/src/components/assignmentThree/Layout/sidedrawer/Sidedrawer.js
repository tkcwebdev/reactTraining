import React, { Fragment } from 'react';
import './Sidedrawer.scss';
import BurgerNavItems from '../toolbar/burgerNav/burgerNavItems/BurgerNavItems';
import Logo from '../../assets/logo/Logo';
import ClearBackDrop from './clearBackDrop/ClearBackDrop';
import CloseIcon from '../../../../assets/close.svg';

export default function Sidedrawer(props) {
    return (
        <Fragment>
            <div className={`Sidedrawer ${props.open ? 'open' : ''}`}>
                <button className="close" onClick={props.close}><img src={CloseIcon} alt=""/></button>
                <Logo />
                <BurgerNavItems clicked={props.close}/>
            </div>
            { props.open ? <ClearBackDrop/> : null }
        </Fragment>
    );
}
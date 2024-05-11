import React from "react";
import './Logo.scss';
import logo from '../../../assets/logo.svg';


export default function Logo () {
    return (
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
    )
}

import React, { useContext } from 'react';
import './header.css';
import MyContext from '../../MyContext';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function Header() {
    const contesto = useContext(MyContext);
    return (
        <header className="cover" style={{ backgroundImage: `url(${contesto.image})` }}>
            <div className="cover__filter filter"></div>
            <div className="container-fluid h-100 d-flex align-items-end justify-content-end">
                <div className="cover__copy mb-5">
                    <h1 className="cliente">Per {contesto.nomeCliente}</h1>
                    <h2 className="my-3">{contesto.titolo}</h2>
                    <NavLink className="btn btn-primary cover__button mt-3" key={"3"} to={"/#mappa"}>SCOPRI DI PIÙ</NavLink>
                </div>
            </div>
        </header>
    )
}


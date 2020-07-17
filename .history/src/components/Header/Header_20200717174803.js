import React, { useContext } from 'react';
import './header.css';
import MyContext from '../../MyContext';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function Header() {
    const contesto = useContext(MyContext);
    return (
        <header class="cover">
        <div class="cover__filter filter"></div>
        <div class="cover__copy__section">
            <div class="cover__copy">
                <h1>Per Giulio Rossi</h1>
                <h2 class="my-3">Circuito Completo della Sicilia alla Scoperta dei Sapori</h2>
                <button class="btn btn-primary cover__button mt-3">SCOPRI DI PIÙ</button>
            </div>
        </div>
    </header>
        <header className="cover" style={{ backgroundImage: `url(${contesto.image})` }}>
            <div className="cover__filter filter"></div>
            <div className="cover__copy__section">
                <div className="cover__copy">
                    <h1>Per {contesto.nomeCliente}</h1>
                    <h2 className="my-3">{contesto.titolo}</h2>
                    <NavLink className="btn btn-primary rounded-0 cover-button px-3 mt-3" key={"3"} to={"/#mappa"}>SCOPRI DI PIÙ</NavLink>
                </div>
            </div>
        </header>
    )
}


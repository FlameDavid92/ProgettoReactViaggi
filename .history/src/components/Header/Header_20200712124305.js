import React from 'react';
import './header.css';
import MyContext from './'

function Header() {
    const contesto = useContext(MyContext);
    return ( 
        <header className="cover" style={{ backgroundImage: `url(${background})` }}>
        <div className="cover__filter"></div>
        <div className="cover__copy__section">
            <div className="cover__copy">
                <h1>Per Giulio Rossi</h1>
                <h2 className="my-3">Circuito Completo della Sicilia alla Scoperta dei Sapori</h2>
                <button className="btn btn-primary cover__button mt-3">SCOPRI DI PIÙ</button>
            </div>
        </div>
    </header>
    )
}

export default Header


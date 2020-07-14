import React,{useContext} from 'react';
import './header.css';
import MyContext from '../../MyContext';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Header() {
    const contesto = useContext(MyContext);
    return ( 
        <header className="cover" style={{ backgroundImage: `url(${contesto.image})`}}>
        <div className="cover__filter"></div>
        <div className="cover__copy__section">
            <div className="cover__copy">
                <h1>Per {contesto.nomeCliente}</h1>
                <h2 className="my-3">{contesto.titolo}</h2>
                <NavLink className="btn btn-primary cover__button mt-3" key={"3"} to={"/#id3"}>{"LINK3"}</NavLink>
                <button className="btn btn-primary cover__button mt-3">SCOPRI DI PIÙ</button>
            </div>
        </div>
    </header>
    )
}

export default Header


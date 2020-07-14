import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar(){
    return(
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-12">
                        <NavLink key={"1"} to={"/#id1"}>{"LINK1"}</NavLink>
                        <NavLink key={"2"} to={"/#id2"}>{"LINK2"}</NavLink>
                        <NavLink key={"3"} to={"/#id3"}>{"LINK3"}</NavLink>
                    </div>
                </div>
            </div>
        </header>
        )
}
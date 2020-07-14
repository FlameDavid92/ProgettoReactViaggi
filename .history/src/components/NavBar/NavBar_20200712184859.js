import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col col-4">
                    <NavLink key={"1"} to={"/#id1"}>{"LINK1"}</NavLink>
                    <NavLink key={"2"} to={"/#id2"}>{"LINK2"}</NavLink>
                    <NavLink key={"3"} to={"/#id3"}>{"LINK3"}</NavLink>
                    <NavLink key={"4"} to={"/#id4"}>{"LINK4"}</NavLink>
                </div>
            </div>
        </div>
    )
}
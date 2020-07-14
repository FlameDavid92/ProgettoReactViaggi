import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar() {
    return (
        <div className="container-fluid my-nav p-1">
            <div className="row align-items-center">
                <div className="col">
                    ciao
                </div>
                <div className="col">
                    cioo
                </div>
                {/*
                <div className="col text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"1"} to={"/#id1"}>{"Mappa"}</NavLink>
                </div>
                <div className="col text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"2"} to={"/#id2"}>{"Referente"}</NavLink>
                </div>
                <div className="col text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"3"} to={"/#id3"}>{"Viaggio"}</NavLink>
                </div>
                <div className="col text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"4"} to={"/#id4"}>{"Info"}</NavLink>
                </div>
                */}
            </div>
        </div>
    )
}
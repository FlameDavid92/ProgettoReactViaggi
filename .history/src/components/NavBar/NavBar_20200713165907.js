import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar() {
    return (
        <div className="container-fluid my-nav p-2">
            <div className="row justify-content-center">
                <div className="col-2 text-center">
                    <NavLink class="btn btn-sm btn-outline-info" key={"1"} to={"/#id1"}>{"LINK1"}</NavLink>
                </div>
                <div className="col-2 text-center">
                    <NavLink class="btn btn-sm btn-outline-info" key={"2"} to={"/#id2"}>{"LINK2"}</NavLink>
                </div>
                <div className="col-2 text-center">
                    <NavLink class="btn btn-sm btn-outline-info" key={"3"} to={"/#id3"}>{"LINK3"}</NavLink>
                </div>
                <div className="col-2 text-center">
                    <NavLink class="btn btn-sm btn-outline-info" key={"4"} to={"/#id4"}>{"LINK4"}</NavLink>
                </div>
            </div>
        </div>
    )
}
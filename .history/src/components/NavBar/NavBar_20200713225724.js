import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar() {
    return (
        <div className="container">
            <div class="row align-items-center">
                <div class="col">
                    One of three columns
                </div>
                <div class="col">
                    One of three columns
                </div>
                <div class="col">
                    One of three columns
                </div>
            </div>
        </div>
    )
}
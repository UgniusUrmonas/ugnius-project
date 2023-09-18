import React from 'react';

export function Header() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
            <a className="navbar-brand text-black" href="#">Miestas</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Pagrindinis</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Apie mus</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Paslaugos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Kontaktai</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>

        
    );
}
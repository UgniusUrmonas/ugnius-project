import React from 'react';

export function Footer() {
    return (
        <footer className="bg-danger text-black py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Susisiekite su mumis</h5>
                        <p>Ugnius Urmonas, ISKP-21. Panevėžio kolegija</p>
                        <p>Email: ugnius.urmonas@panko.lt</p>
                        <p>Phone: (99) 999-9999</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Sekite Mus:</h5>
                        <ul>
                        <li>
                        <a href="https://www.facebook.com" className="text-black">Facebook</a>
                        </li>
                        <li>
                        <a href="https://twitter.com" className="text-black ml-3">Twitter</a>
                        </li>
                        <li>
                        <a  href="https://www.linkedin.com/feed/" className="text-black ml-3">LinkedIn</a>
                        </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}
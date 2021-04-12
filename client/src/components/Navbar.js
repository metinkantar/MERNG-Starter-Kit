import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-dark fs-3" href="/">KANTARSOFT</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">{' '}
                                <Link to="/" className="nav-link fw-bold active">Makale Listesi</Link>
                            </li>
                            <li className="nav-item">{' '}
                                <Link to="/ekle" className="nav-link fw-bold">Makale Ekle</Link>
                            </li>
                            <li className="nav-item">{' '}
                                <Link to="/makale/:id" className="nav-link fw-bold">Makale Detay</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div>
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kullanıcı
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
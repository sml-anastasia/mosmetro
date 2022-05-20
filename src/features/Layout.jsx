import React from 'react';
import { Nav } from 'react-bootstrap';
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return(
        <main className="container py-5 my-5">
            <Nav className="justify-content-end">
                <Nav.Item className="me-5">
                    <NavLink to="/events"
                        className={({isActive}) => isActive ? '' : 'link'}>
                        События
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/calendar"
                    className={({isActive}) => isActive ? '' : 'link'}>
                        Календарь
                    </NavLink>
                </Nav.Item>
            </Nav>
            <Outlet />
        </main>
    )
}

export default Layout;
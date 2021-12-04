import { NavLink, Outlet } from 'react-router-dom'
import s from './Layout.module.css'
export default function Layout() {
    return (
        <>
        <header className={s.container}>
        <NavLink  className={s.link} to='/' >Main</NavLink>
        <NavLink  className={s.link} to='/search' >Search</NavLink>
        </header>
            <Outlet />
        </>
    ) 
};

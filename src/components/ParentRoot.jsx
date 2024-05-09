import Navbar from '../components/Navbar.jsx';
import { Outlet } from 'react-router-dom';

export default function ParentRoot() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
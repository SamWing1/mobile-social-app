import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';

export default function NavBar() {
    return(
        <nav>
            <Link class='link' to='/'>Home</Link>
            <Link class='link' to='/Notifications'>Notifications</Link>
            <Link class='link' to='Messages'>Messages</Link>
            <Link class='link' to='/Profile'>Profile</Link>
        </nav>
    )
}
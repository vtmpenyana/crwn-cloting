import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
// a way to import SVGs in React ^
import './header.styles.scss';

const Header = () => {
    return(
        <div className="header">
            <Link className='logo' to='/' >
                <Logo />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}


export default Header;
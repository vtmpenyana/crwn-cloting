import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
// a way to import SVGs in React ^
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {

    return(
        <div className="header">
            <Link className='logo' to='/' >
                <Logo />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                {                
                    currentUser ? <Link className='option' onClick={() => {auth.signOut()}}>
                    SIGN OUT</Link> : (<Link className='option' to='/signin'>
                    SIGNIN
                </Link>)
                }
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}


export default Header;
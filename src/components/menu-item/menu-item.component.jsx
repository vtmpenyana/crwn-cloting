import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) =>{
    console.log(match.url);
    return(<div className={`${size} background-image menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className='background-image'/>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>)
}

export default withRouter(MenuItem); 
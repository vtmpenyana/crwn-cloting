import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
import DirectoryMenu from '../../components/directory/directory.component';


const HomePage = () =>{
    return(
        <div className='homepage'>
            <DirectoryMenu />
        </div>
    )
}


export default HomePage; 
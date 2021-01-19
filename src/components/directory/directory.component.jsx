import React from 'react';
import MenuItem  from '../menu-item/menu-item.component'
import './directory.styles.scss';

class DirectoryMenu extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                },
                {
                  title: 'women',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                },
                {
                  title: 'men',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                }
              ]
              
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {
                    // map over the sections and display menu-items
                this.state.sections.map(({title, id, imageUrl, size}) => (<MenuItem size={size} title={title.toUpperCase()} id={id} imageUrl={imageUrl}/>))
                }
            </div>
        );
    }
}

export default DirectoryMenu;
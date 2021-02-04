import {Component} from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

class Shop extends Component{
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }


    render(){
      const {collections} = this.state;
      return(
        <div className='shop-page'>
          {collections.map(({id, ...otherCollectionProps}) => {
            return <CollectionPreview key={id} {...otherCollectionProps} />
          })}
        </div>
      )
    }

    
} 


export default Shop;
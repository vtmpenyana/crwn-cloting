import './collection-item.styles.scss';


const CollectionItem = ({imageUrl, name, price, id}) => {

    return(
        <div className='collection-item'>
            <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            >
                {/* just here to contain backround image... */}
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )

}



export default CollectionItem;
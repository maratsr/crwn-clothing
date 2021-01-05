import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss'

// Ограничим просмотр первыми 4мя товарами из каждой категории
const CollectionPreview = ({ title, items }) => {
    console.log(`title= ${title}`)
    console.log(`items= ${items}`)
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx<4 )
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
};

export default  CollectionPreview;
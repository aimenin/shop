import React, {Component} from 'react';

import SHOP_DATA from './shop.data.js';

import PreviewCollection from '../../components/preview-collection/preview-collection.component'

export default class ShopPage  extends Component {

    state = {
        collections: SHOP_DATA
    }

    render() {
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection
                            key = {id}
                            {...otherCollectionProps}
                        />
                    ))
                }
            </div>
        )
    }

}

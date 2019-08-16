import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overwiew/collections-ovewiew.component';
import CategoryPage from '../../pages/category/category.component';

const ShopPage  = ({ match }) => {
    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
        </div>
    )
};

export default ShopPage;


import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collections-overwiew/collections-ovewiew.component';
import CategoryPage from '../../pages/category/category.component';

import { updateCollections } from "../../redux/shop/shop.actions";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends Component {
   state = {
       loading: true
   };

   unsubscribeFromSnapshot = null;

   componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({
                loading: false
            });
        });
   }

    render() {
       const { match } = this.props;
       const { loading } = this.state;
       return(
           <div className='shop-page'>
               <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
               <Route path={`${match.path}/:collectionId`} render={(props) => <CategoryPageWithSpinner isLoading={loading} {...props} />}/>
           </div>
       )
   }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);


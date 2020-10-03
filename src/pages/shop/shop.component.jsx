import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shops.actions";
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount(){
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props; 
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionsPageWithSpinner isLoading={isCollectionFetching} {...props}/>}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => (fetchCollectionsStartAsync()(dispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

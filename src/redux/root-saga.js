import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop/shop.sagas";
import { userSagas } from './user/user.sagas';
import { cartSaga } from './cart/cart.sagas';
import { shopSagas } from './shop/shop.sagas';

export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart),
        call(userSagas),
        call(cartSaga),
        call(shopSagas)
    ])
}
import REACT_APP_BASE_URL from '../config';

export const ORDERS_HAS_ERRORED = 'ORDERS_HAS_ERRORED';
export const ordersHasErrored = (hasErrored) => ({
    type: ORDERS_HAS_ERRORED,
    hasErrored
});
export const ORDERS_IS_LOADING = 'ORDERS_IS_LOADING'; 
export const ordersIsLoading = (isLoading) => ({
    type: ORDERS_IS_LOADING,
    isLoading
});
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS'; 
export const addOrderSuccess = (newOrder) => ({
    type: ADD_ORDER_SUCCESS,
    newOrder
});
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const fetchOrderSuccess = (orders) => ({
    type: FETCH_ORDER_SUCCESS,
    orders
});

export const LOAD_TEST_DATA = 'LOAD_TEST_DATA';
export const loadTestData = (testData) => ({
    type: LOAD_TEST_DATA,
    testData
});
// Async actions

// export const addOrder = () => dispatch => {
  // fetch(`${REACT_APP_BASE_URL}/orders`)
  // .then(res => {
  //     if (!res.ok) {
  //         return Promise.reject(res.statusText);
  //     }
  //     return res.json();
  // }).then(newOrder => {
  //     dispatch(addOrderSuccess(newOrder));
  // });
// };
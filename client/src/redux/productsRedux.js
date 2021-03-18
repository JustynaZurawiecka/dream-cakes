import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;

export const getRequest = ({ products }) => products.request;

export const getProduct = ({ products }) => products.singleProduct;

export const getCart = ({ products }) => products.cart;

/* ACTIONS */

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const LOAD_PRODUCT = createActionName('LOAD_PRODUCT');

const CLEAR_CART = createActionName('CLEAR_CART');
const UPDATE_CART = createActionName('UPDATE_CART');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadProduct = payload => ({ payload, type: LOAD_PRODUCT });

export const clearCart = payload => ({ payload, type: CLEAR_CART });
export const updateCart = payload => ({ payload, type: UPDATE_CART });

/* THUNKS */

export const loadProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/products`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadProducts(res.data));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadProductRequest = (id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/products/${id}`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadProduct(res.data));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  singleProduct: null,
  cart: null
};

console.log(initialState, 'initialState');
/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_CART:
      return { ...statePart, cart: action.payload };
    case CLEAR_CART:
      return { ...statePart, singleProduct: null };
    case LOAD_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case LOAD_PRODUCTS:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default:
      return statePart;
  }
}

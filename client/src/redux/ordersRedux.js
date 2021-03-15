import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getOrders = ({ orders }) => orders.data;
export const getRequests = ({ orders }) => orders.requests;

/* ACTIONS */

// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const ADD_ORDER = createActionName('ADD_ORDER');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addOrder = payload => ({ payload, type: ADD_ORDER });

/* THUNKS */

export const addOrderRequest = (order) => {
  return async dispatch => {

    dispatch(startRequest({ name: 'ADD_ORDER' }));
    try {

      let res = await axios.post(`${API_URL}/orders`, order);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(addOrder(res));
      dispatch(endRequest({ name: 'ADD_ORDER' }));

    } catch (e) {
      dispatch(errorRequest({ name: 'ADD_ORDER', error: e.message }));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  requests: [],
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_ORDER:
      return { ...statePart, data: [...statePart.data, action.payload] }
    case START_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false } } };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true } } };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false } } };
    default:
      return statePart;
  }
}

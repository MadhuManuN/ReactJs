const redux = require("redux");
const createStore = redux.legacy_createStore;

const bindActionCreators = redux.bindActionCreators;

const combineReducer=redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOKED = "CAKE_RESTOKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOKED = "ICECREAM_RESTOKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restokCake(qty = 1) {
  return {
    type: CAKE_RESTOKED,
    payload: qty,
  };
}
function orderIceCream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}
function restokIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOKED,
    payload: qty,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
    numOfIceCreams: 20,
  };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case ICECREAM_ORDERED:
        return {
          ...state,
          numOfIceCreams: state.numOfIceCreams - 1,
        };
      case ICECREAM_RESTOKED:
        return {
          ...state,
          numOfIceCreams: state.numOfIceCreams + action.payload,
        };
      default:
        return state;
    }
  };

const rootReducer=combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer);
console.log("initial state", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

// store.dispatch(orderCake());
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restokCake(5))

const actions = bindActionCreators(
  { orderCake, restokCake, orderIceCream, restokIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restokIceCream(3);
unSubscribe();

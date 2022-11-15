const initialState = {
  isLoading: true,
  counter: 0,
  name:"Abhilash"
};

//Pure function -
const Auth = (state = initialState, { type, payload = null }) => {
 
  console.log(type,payload);
  switch (type) {
    case "incrementOrdecrement":
      return Object.assign({}, state, {
        counter: payload,
      });

    default:
      return state;
  }
};

export default Auth;

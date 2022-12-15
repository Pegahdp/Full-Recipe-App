import { useReducer } from "react";
const budgetReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "Buying_Ingredient":
      return { money: state.money + 100 };

    case "Serving_Meals":
      return { money: state.money - 100 };

    case "Celebirty_Visit":
      return { money: state.money + 500 };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const App = () => {
  const initState = { money: 100 };
  const [state, dispatch] = useReducer(budgetReducer, initState);

  return (
    <div>
      <h1>Wallet:{state.money} </h1>
      <button onClick={() => dispatch({ type: "Buying_Ingredient" })}>
        Buying Ingredient
      </button>
      <button onClick={() => dispatch({ type: "Serving_Meals" })}>
        Serving Meals
      </button>
      <button onClick={() => dispatch({ type: "Celebirty_Visit" })}>
        Celebirty Visit
      </button>
    </div>
  );
};

export default App;

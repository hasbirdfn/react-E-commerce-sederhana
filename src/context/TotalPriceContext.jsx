import {createContext, useContext, useReducer} from "react";

// Buat dua context
const TotalPriceContext = createContext(null); // Untuk menyimpan state
const TotalPriceDispatchContext = createContext(); // Untuk menyimpan action

// Reducer untuk mengelola aksi
const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw new Error("unknown action: " + action.type);
    }
  }
};

// Komponen Provider
export function TotalPriceProvider({children}) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, {total: 0});
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

// Mengambil nilai dari TotalPriceContext
export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

// Mengambil dispatch dari TotalPriceDispatchContext
export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}

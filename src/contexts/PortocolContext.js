import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  portocols: [],
  assets: [],
  filter: "all",
  isLoading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataLoading":
      return { ...state, isLoading: true };
    case "dataFetched":
      return {
        ...state,
        isLoading: false,
        assets: action.payload.assets,
        portocols: [
          { ...action.payload.cloud, portocolName: "Cloud" },
          { ...action.payload.domain, portocolName: "Domain" },
          { ...action.payload.ip, portocolName: "Ip" },
        ],
      };
    case "dataFailed":
      return {
        ...state,
        isLoading: false,
        error: "There is an problem while getting data!",
      };
    case "filter":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      throw new Error("Unkown action type");
  }
}

const ContextProvider = createContext();

function PortocolContext({ children }) {
  const [{ portocols, assets, filter, isLoading, error }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(function () {
    async function getData() {
      try {
        const res = await fetch(
          "https://run.mocky.io/v3/cf756b59-d746-4518-8221-55de4a7a8611"
        );

        if (!res.ok) throw new Error("There is a problem while loading data!");

        const data = await res.json();
        dispatch({ type: "dataFetched", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    getData();
  }, []);
  return (
    <ContextProvider.Provider
      value={{
        portocols,
        assets,
        filter,
        isLoading,
        error,
        dispatch,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

const usePortocol = function () {
  const data = useContext(ContextProvider);

  return data;
};

export { PortocolContext, usePortocol };

import React, { createContext, useReducer, useEffect } from "react";
import { contactReducer, initialContactState } from "./contactReducer";

export const AppContext = createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        
        const [state, dispatch] = useReducer(contactReducer, initialContactState);

        return (
            <AppContext.Provider value={{ contacts: state, dispatch }}>
                <PassedComponent {...props} />
            </AppContext.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
import React, { createContext, useReducer } from "react";
import { Action, IState} from "../state/modalReducer";
import reducer from "../state/modalReducer";
interface IStateContext {
    state:IState, 
    dispatch:React.Dispatch<Action>

}

interface IProps {
    children: React.ReactNode;
}

const initialState: IState = {
    open: false,
    symptom: "",
    note: "",
    mode: "SYMPTOM",
  };
  
  export const ModalContext = createContext<IStateContext>({
    state: initialState,
    dispatch: () => {}
  });

  export const ModalProvider = (props: IProps)=>{
    const [state, dispatch] = useReducer(reducer,initialState);

    return <ModalContext.Provider value={{state, dispatch}}>{props.children}</ModalContext.Provider>
  }
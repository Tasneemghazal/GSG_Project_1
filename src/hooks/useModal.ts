import { useContext } from "react"
import { ModalContext } from "../providers/modalProvider";

const useModal = ()=>{
    const {state, dispatch}= useContext(ModalContext);
    return {state, dispatch};
}

export default useModal;
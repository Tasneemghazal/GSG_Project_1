import { ModalMode } from "../types/@types";

export interface IState {
  open: boolean;
  mode: ModalMode;
  symptom: string;
  appointId:string;
}

export type Action =
  | { type: "OPEN_MODAL"; payload: string }
  | { type: "CLOSE_MODAL" }
  | { type: "OPEN_NOTE_MODAL", payload: string }|
  {type: "OPEN_BOOKING_MODAL"}
  | { type: "ADD_NOTE"; payload: string };

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "OPEN_MODAL": {
      return { ...state, open: true, symptom: action.payload, mode: ModalMode.SYMPTOM };
    }
    case "CLOSE_MODAL": {
      return { ...state, open: false, mode: ModalMode.SYMPTOM };
    }
    case "OPEN_NOTE_MODAL": {
      return { ...state, open: true, mode: ModalMode.NOTE, appointId: action.payload}
    }
    default: {
      return state;
    }
  }
};
export default reducer;

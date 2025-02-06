export interface IState {
  open: boolean;
  mode: "SYMPTOM" | "NOTE";
  symptom: string;
  note: string;
}

export type Action =
  | { type: "OPEN_MODAL"; payload: string }
  | { type: "CLOSE_MODAL" }
  | { type: "OPEN_NOTE_MODAL" }
  | { type: "ADD_NOTE"; payload: string };

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "OPEN_MODAL": {
      return { ...state, open: true, symptom: action.payload, mode: "SYMPTOM" };
    }
    case "CLOSE_MODAL": {
      return { ...state, open: false, mode: "SYMPTOM" };
    }
    case "OPEN_NOTE_MODAL": {
      return { ...state, open: true, mode: "NOTE" };
    }
    case "ADD_NOTE": {
      return { ...state, note: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default reducer;

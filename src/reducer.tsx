interface State {
    count: number;
}

type Action =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" };

const initialState: State = { count: 0 };

const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

export { counterReducer, initialState };

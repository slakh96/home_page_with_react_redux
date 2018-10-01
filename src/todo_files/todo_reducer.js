
export default function(state = [], action){
    let state_set;
    switch(action.type){
        case "ADD":
            state = [...state, action.payload];
            state_set = new Set(state);
            state = [...state_set];
            return state;
        case "CHECKED":
            state_set = new Set(state);
            state = [...state_set];
            let y = state.indexOf(action.payload);
            if (y >= 0){
                state.splice(y, 1);
                return state;
            }
            else {
                alert('Not found');
            }
            return state;
        default: return state;
        }
}
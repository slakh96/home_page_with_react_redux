
export default function(state = [], action){
    let state_set;
    switch(action.type){
        case "ADD":
            state = [...state, action.payload];
            state_set = new Set(state);
            state = [...state_set];
            return state;
        case "CHECKED":
            state_set = new Set(state);//Remove duplicate values from list of todos
            state = [...state_set];//spread syntax, makes state hold all the values of state_set
            let y = state.indexOf(action.payload);
            if (y >= 0){
                state.splice(y, 1);//removes the todo at index y
                return state;
            }
            else {
                alert('Not found');
            }
            return state;
        default: return state;
        }
}
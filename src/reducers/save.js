export default function(state = [], action){
    switch(action.type){
        case 'SET_NAME':
            return [
                    ...state
                    ,
                    action.payload
                    ];
            break;
    }
    return state;
}

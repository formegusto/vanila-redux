const INIT_FORM = 'INIT_FORM';
const CHANGE_FIELD = 'CHANGE_FIELD';

const initForm = (initState) => ({type: 'INIT_FORM', initState});
const changeField = (event) => ({type: 'CHANGE_FIELD', event});

const initialState = {
    name: 'form',
    form: {}
};

function reducer (state = initForm, action) {
    switch(action.type) {
        case INIT_FORM :
            return {
                ...state,
                form: action.initState
            };
        case CHANGE_FIELD :
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.event.name]: action.event.value
                }
            };
        default:
            return state;
    }
}

const store = Redux.createStore(reducer);

const render = () => {
    const state = store.getState();
};

render();
store.subscribe(render);

onInit = (initState) => {
    store.dispatch(initForm(initState));
};

onChange = (event) => {
    store.dispatch(changeField(event));
};

onConfirm = () => store.getState();
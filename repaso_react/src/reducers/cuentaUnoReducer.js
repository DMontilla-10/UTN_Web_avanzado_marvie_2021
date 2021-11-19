const cuentaUnoReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENTAR':
            return state + 1
        case 'DISMINUIR':
            return state - 1
        default:
            return state
    }
}

export default cuentaUnoReducer
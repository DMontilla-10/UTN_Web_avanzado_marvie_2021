const cuentaDosReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENTAR_CUENTA_DOS':
            return state + 1
        case 'DISMINUIR_CUENTA_DOS':
            return state - 1
        default:
            return state
    }
}

export default cuentaDosReducer
export default new class  Dispatcher {
    constructor () {
        this.__listners = [];
    }

    // хранит callback,
    // берет action, запускает его
    dispatch (action) {
        // пропускаем через все слушатели

        debugger;
        this.__listners.forEach((listeners) => listeners(action));
    }

    // регистрирует store, как слушаетль dispatcher вызывается там же
    register (listener) {
        debugger;
        this.__listners.push(listener);
    }
}();

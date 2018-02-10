export default new class  Dispatcher {
    constructor () {
        this.__listeners = [];
    }

    // хранит callback,
    // берет action, запускает его
    dispatch (action) {
        // пропускаем через все слушатели

        debugger;
        this.__listeners.forEach((listener) => listener(action));
    }

    // регистрирует store, как слушаетль dispatcher вызывается там же
    register (listener) {
        debugger;
        this.__listeners.push(listener);
    }
}();

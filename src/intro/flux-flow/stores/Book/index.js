// Store с большой буквы
import { EventEmitter } from 'events';

import dispatcher from '../../dispatcher';
import { CHANGE_PAGE } from '../../actions/book/types';

// new - инкапсулируем вызов в этом классе
export default new class BookStore extends EventEmitter {

    constructor (){
        super ();

        debugger;

        this.state = {
            currentPage: 0,
            totalPages:  698,
            title:       'Magic and Enchantment',
        };

        dispatcher.register((action) => {
            switch (action.type) {
                case CHANGE_PAGE:
                    this.changePage(action.payload);
                    break;

                default:
                    return false;
            }
        })
    }

    subscribe (callback) {
        debugger;
        this.on('change', callback);
    }

    unsubscribe (callback) {

        this.removeListener('change', callback);
    }

    update () {
        debugger;
        this.emit('change')
    }

    getState () {
        debugger;
        return this.state;
    }

    getCurrentPage () {
        debugger;
        return this.state.currentPage;
    }

    changePage (newPage) {
        debugger;
        this.state.currentPage = newPage;
        debugger;
        this.update();
        debugger;
    }
}();
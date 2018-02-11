// Instrumnets
import store from './store';
import { createPost } from '../core/actions/posts';
import { render, createPostButton } from '../core/render';

// Create post on click, первая кнопка, на клик диспатчится экшен
createPostButton.addEventListener('click', () => {
    store.dispatch(createPost());
});

// render(store)();
// из рендера берем сторе из замыкания
store.subscribe(render(store));

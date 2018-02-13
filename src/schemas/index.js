// Core
import { schema } from 'normalizr';

const user = new schema.Entity('users');

export const postSchema = new schema.Entity('posts', {
    author: user,
    likes:  [user],
});

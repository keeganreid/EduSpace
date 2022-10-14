import {collection} from 'firebase/firestore';
import {db} from './init-firebase';

export const users = collection(db, 'user');
export const forums = collection(db, 'forum');
export const messages = collection(db, 'message');
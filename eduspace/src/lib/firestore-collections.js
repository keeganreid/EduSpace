import {collection} from 'firebase/firestore';
import {db} from './init-firebase';

export const users = collection(db, 'user');

export const forum = collection(db, 'forum');

export const allSessions = collection(db, 'sessions');





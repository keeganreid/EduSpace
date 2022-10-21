import {collection} from 'firebase/firestore';
import {db} from './init-firebase';

export const users = collection(db, 'user');

export const forums = collection(db, 'forum');
//export const forums = collection(db, 'forums');

export const allSessions = collection(db, 'sessions');

export const allQuiz = collection(db, 'quiz');



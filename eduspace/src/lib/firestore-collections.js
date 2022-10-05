import {collection} from 'firebase/firestore';
import {db} from './init-firebase';

export const users = collection(db, 'user');
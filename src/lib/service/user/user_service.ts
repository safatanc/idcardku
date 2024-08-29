import type { UserCreate, UserLogin } from '$lib/model/user';
import { pb } from '../pocketbase/pocketbase';
import { type RecordAuthResponse, type RecordModel } from 'pocketbase';

let collection = pb.collection('users');

export async function register(userCreate: UserCreate): Promise<RecordModel> {
	const user = await collection.create(userCreate);
	return user;
}

export async function login(userLogin: UserLogin): Promise<RecordAuthResponse> {
	const auth = await collection.authWithPassword(userLogin.username, userLogin.password);
	return auth;
}

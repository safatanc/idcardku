import { PUBLIC_PB_HOST } from '$env/static/public';
import PocketBase from 'pocketbase';

export const pb = new PocketBase(PUBLIC_PB_HOST);

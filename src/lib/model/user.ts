export type User = {
	id: string;
	username: string;
	full_name: string;
	email: string;
	verified: boolean;
	avatar: string;
	description?: string;
	created: string;
	updated: string;
};

export type UserCreate = {
	username: string;
	full_name: string;
	email: string;
	password: string;
	passwordConfirm: string;
};

export type UserLogin = {
	username: string;
	password: string;
};

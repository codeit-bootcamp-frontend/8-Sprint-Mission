import { axiosInstance } from "./axiosInstance";

export type LoginType = {
	email: string,
	password: string,
}

export type SignUpType = LoginType & {
	nickname: string,
	passwordConfirmation: string,
}

export const postLogin = async ({email, password}: LoginType) => {
	try {
		const response = await axiosInstance.post('/auth/signIn', {
			email,
			password
		})

		return response.data;
	} catch (err) {
		console.error("로그인 오류" + err)
	}
}

export const postSignUp = async ({email, nickname, password, passwordConfirmation }: SignUpType) => {
	try {
		const response = await axiosInstance.post('/auth/signUp', {
			email,
			nickname,
			password, 
			passwordConfirmation
		})

		return response;
	} catch (err) {
		console.error("회원가입 오류" + err)
	}
}
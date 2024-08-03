export enum SignupFormProps {
    email = "email",
    nickname = "nickname",
    password = "password",
    verifyPassword = "verifyPassword",
}

export interface SignupFormType {
    [SignupFormProps.email]: string;
    [SignupFormProps.nickname]?: string;
    [SignupFormProps.password]: string;
    [SignupFormProps.verifyPassword]?: string;
}
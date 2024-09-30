export interface SignUpValue {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export interface LoginValue {
  email: string;
  password: string;
}

export async function postSignUp({
  email,
  nickname,
  password,
  passwordConfirmation,
}: SignUpValue) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/auth/signUp`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, nickname, password, passwordConfirmation }),
    }
  );
  const result = await response.json();

  if (!response.ok) {
    throw new Error("오류가 발생했습니다.");
  }
  return result;
}

export async function postLogin({ email, password }: LoginValue) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/auth/signIn`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );
  const result = await response.json();

  if (!response.ok) {
    throw new Error("오류가 발생했습니다.");
  }
  return result;
}

import instance from '.';

async function postSignIn(
  body = {
    email: 'example@email.com',
    password: 'password',
  }
) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await instance.post('/auth/signIn', body, { headers });
  const { accessToken } = res.data;
  return accessToken;
}

export default postSignIn;

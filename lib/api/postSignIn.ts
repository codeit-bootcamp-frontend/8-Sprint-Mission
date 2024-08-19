import instance from '.';

async function postSignIn(
  body = {
    email: 'example@email.com',
    password: 'password',
  }
) {
  const res = await instance.post('/auth/signIn', body);
  const { accessToken } = res.data;
  return accessToken;
}

export default postSignIn;

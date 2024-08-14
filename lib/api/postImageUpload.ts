import instance from '.';

async function postImageUpload(formData: FormData, token: string) {
  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  };
  const res = await instance.post('/images/upload', formData, {
    headers,
  });
  return res.data.url;
}

export default postImageUpload;

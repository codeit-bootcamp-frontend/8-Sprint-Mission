import instance from '.';

async function postImageUpload(formData: FormData) {
  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  const res = await instance.post('/images/upload', formData, {
    headers,
  });
  return res.data.url;
}

export default postImageUpload;

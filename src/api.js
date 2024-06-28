const BASE_URL = 'https://panda-market-api.vercel.app';

export async function getProducts(order = 'recent') {

    const query = `orderBy=${order}`;
    const response = await fetch(`${BASE_URL}/products?${query}`);
    const body = await response.json();
    return body;

}

export async function createProducts(formData) {


    const response = await fetch(`${BASE_URL}/products?`,
        {
            method: 'POST',
            body: formData,

        });
    const body = await response.json();
    return body;

}


const BASE_URL = 'https://panda-market-api.vercel.app';

export async function getProducts({ order = 'recent', page = 1, pageSize }) {

    const query = `orderBy=${order}`;
    const response = await fetch(`${BASE_URL}/products?${query}&page=${page}&pageSize=${pageSize}`);
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


export async function getProducts(order = 'recent') {

    const query = `orderBy=${order}`;
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    const body = await response.json();
    return body;

}


const BASE_URL = "https://panda-market-api.vercel.app";

async function getProducts({ page = 1, pageSize = 10, orderBy = '', keyword = '' }) {
    
    const query = `?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    const response = await fetch(`${BASE_URL}/products` + query);
    if (!response.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
    const result = await response.json()

    return result;
}

async function postProducts(formData) {
    
    const response = await fetch('', {
        method:"POST",
        body:formData,
    });
    if (!response.ok) throw new Error("상품을 등록하는데 실패했습니다.");
    const result = await response.json()

    return result;
}

async function getProductById(id) {

    const response = await fetch(`${BASE_URL}/products/${id}`)
    if (!response.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
    const result = await response.json();

    return result;
}

export  { getProducts, postProducts, getProductById };
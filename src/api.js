export async function getReviews(){
    const response = await fetch('');
    const body = await response.json();
    return body;
}
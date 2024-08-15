import ArticlePost from "@/DTO/articlePost";
import LoginFormType from "@/DTO/loginFormType";

const BASE_URL = "https://panda-market-api.vercel.app";

export async function getArticles(page: number, pageSize: number, orderBy?: "recent" | "like", keyword?: string) {
  const orderByQuery = orderBy ? `&orderBy=${orderBy}` : '';
  const keywordQuery = keyword ? `&keyword=${keyword}` : '';

  const response = await fetch(`${BASE_URL}/articles?page=${page}&pageSize=${pageSize}${orderByQuery}${keywordQuery}`);
  if(!response.ok) throw new Error("getArticles api 실행중 오류 발생");
  const result = await response.json();

  return result;
}

export async function getArticle(id: string) {
  const response = await fetch(`${BASE_URL}/articles/${id}`);
  if(!response.ok) throw new Error("getArticle api 실행중 오류 발생");
  const result = await response.json();

  return result;
}

export async function getArticleComments(articleId: string, limit: number, cursor?: number) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}/comments?limit=${limit}${cursor ? `&cursor=${cursor}`: ''}`);
  if(!response.ok) throw new Error("getArticleComments api 실행중 오류 발생");
  const result = await response.json();

  return result;
}

export async function sendLoginForm(loginForm: LoginFormType) {
  const response = await fetch(`${BASE_URL}/auth/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginForm),
  });
  if(!response.ok) throw new Error("sendLoginForm api 실행중 오류 발생");
  const result = await response.json();

  return result;
}

export async function postArticle(articleForm: ArticlePost, accessToken: string) {
  let formData = articleForm;
  if(!formData.image) {
    formData = {
      ...formData,
      image: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png"
    }
  }
  const formString = JSON.stringify(formData);
  const response = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: formString
  });
  if(!response.ok) throw new Error(`postArticle api 실행중 오류 발생: ${response.status}`)
  const result = await response.json();

  return result;
}

export async function postArticleComment(articleId: string, commentForm: { content: string }, accessToken: string) {
  const formString = JSON.stringify(commentForm);
  const response = await fetch(`${BASE_URL}/articles/${articleId}/comments`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: formString
  });
  if(!response.ok) throw new Error(`postArticleComment api 실행중 오류 발생: ${response.status}`);
  const result = await response.json();

  return result;
}
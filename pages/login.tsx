import Link from "next/link"
import { ChangeEvent, MouseEvent, useState } from "react"
import LoginFormType from "@/DTO/loginFormType";
import { sendLoginForm } from "@/pages/api/apis";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  
  const [loginForm, setLoginForm] = useState<LoginFormType>({ email: '', password: '' });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async () => {
    const result = await sendLoginForm(loginForm);
    if(result.accessToken) {
      localStorage.setItem("access_token", result.accessToken);
      router.push('/');
      return;
    }
    alert("로그인 미작동");
  }

  const handleButtonClick = (e:MouseEvent) => {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <>
      <Link href="/">홈으로</Link>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>이메일</h3>
          <input name="email" onChange={handleChange} value={loginForm.email} />
        </label>
        <label>
          <h3>패스워드</h3>
          <input name="password" onChange={handleChange} value={loginForm.password} />
        </label>
        <button onClick={handleButtonClick}>로그인</button>
      </form>
      <Link href="/signup">회원가입</Link>
    </>
  )
}
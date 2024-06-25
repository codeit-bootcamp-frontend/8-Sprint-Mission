import styles from "./Main.module.scss";
import googleSvg from "assets/svg/google.svg";
import kakaotalkSvg from "assets/svg/kakaotalk.svg";
import visibilityOffSvg from "assets/svg/visibility-off.svg";
import visibilityOnSvg from "assets/svg/visibility-on.svg";
import React from "react";
import RoutePath from "RoutePath";
import CustomInput from "components/CustomInput";
import { Link } from "react-router-dom";
import { RenderDataArray, RenderDataType } from "custom.t";

const ICONS: ReadonlyArray<{ [key in string]: any }> = [
  {
    src: googleSvg,
    alt: "구글",
  },
  {
    src: kakaotalkSvg,
    alt: "카카오톡",
  },
];

const Main: React.FC = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<Record<string, boolean>>({
    password: true,
  });

  const [formData, setFormData] = React.useState<Record<string, string>>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const renderData = React.useMemo(
    () => [
      {
        label: "이메일",
        id: "email",
        type: "email",
        placeholder: "이메일을 입력해주세요",
        autoComplete: "email",
      },
      {
        label: "비밀번호",
        id: "password",
        type: isVisible.password ? "password" : "text",
        placeholder: "비밀번호를 입력해주세요",
        autoComplete: "new-password",
        src: isVisible.password ? visibilityOnSvg : visibilityOffSvg,
      },
    ],
    [isVisible.password]
  ) as RenderDataArray;

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <ul className={styles.list}>
          {renderData.map((data: RenderDataType, index: number) => (
            <li className={styles.item} key={index}>
              <CustomInput
                data={data}
                formData={formData}
                setIsActive={setIsActive}
                setFormData={setFormData}
                setIsVisible={setIsVisible}
              />
            </li>
          ))}
          <li className={styles.item}>
            <button
              type="submit"
              className={`${styles.signIn} ${
                isActive ? "primary" : "inactive"
              }`}
            >
              로그인
            </button>
          </li>
          <li className={styles.item}>
            <p className={styles.instruction}>간편 로그인하기</p>
            <div className={styles.iconBox}>
              {ICONS.map(({ src, alt }, i) => (
                <img className={styles.icon} key={i} src={src} alt={alt} />
              ))}
            </div>
          </li>
          <li className={styles.item}>
            <p>
              판다마켓이 처음이신가요?{" "}
              <Link className={styles.link} to={RoutePath.signUp}>
                회원가입
              </Link>
            </p>
          </li>
        </ul>
      </form>
    </main>
  );
};

export default Main;

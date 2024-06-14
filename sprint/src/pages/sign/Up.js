"use strict";

import Event from "../../constant/Event.js";
import ID from "../../constant/ID.js";

export default function () {
  async function css(root) {
    const response = await fetch(`./src/pages/sign/Up.css`);
    const css = await response.text();
    const style = root.querySelector("style");
    style.textContent = css;
  }

  function event(root) {
    const container = root.querySelector(ID.SIGN_UP_CONTAINER);
    Object.entries(Event[ID.SIGN_UP_CONTAINER]).forEach(([type, action]) => {
      container.addEventListener(type, (e) => action(e, container));
    });
  }

  function template(root) {
    root.innerHTML = `
    <style></style>
    <div id="sign-up-container" class="container">
    <header class="header">
        <div class="wrap">
          <a role="link">
            <img data-to="home" src="/assets/svg/logo.svg" width="396" height="132" />
          </a>
        </div>
      </header>
      <main class="main">
        <form class="wrap">
          <section class="form-item">
            <label class="form-label" for="email">이메일</label>
            <input
              class="form-input"
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              autocomplete="email"
            />
            <small class="form-desc"></small>
          </section>
          <section class="form-item">
            <label class="form-label" for="nickname">닉네임</label>
            <input
              class="form-input"
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
              autocomplete="nickname"
            />
            <small class="form-desc"></small>
          </section>
          <section class="form-item">
            <label class="form-label" for="password">비밀번호</label>
            <input
              class="form-input"
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              autocomplete="new-password"
            />
            <img 
              class="password-icon" 
              src="./assets/svg/ic_visibility_off.svg" 
              width="20.47" 
              height="18.07"
              data-visible="true"
            />
            <small class="form-desc"></small>
          </section>
          <section class="form-item">
            <label class="form-label" for="_password">비밀번호 확인</label>
            <input
              class="form-input"
              type="password"
              id="_password"
              name="_password"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              autocomplete="current-password"
            />
            <img 
              class="password-icon" 
              src="./assets/svg/ic_visibility_off.svg" 
              width="20.47" 
              height="18.07"
              data-visible="true"
            />
            <small class="form-desc"></small>
          </section>
          <section class="form-item">
            <button type="submit" class="btn btn-submit btn-inactive">
              회원가입
            </button>
          </section>
          <section class="form-item">
            <h2 class="h2">간편 로그인하기</h2>
            <div class="site">
              <a>
                <img src="/assets/svg/ic_google.svg" width="42" height="42" />
              </a>
              <a>
                <img
                  src="/assets/svg/ic_kakaotalk.svg"
                  width="42"
                  height="42"
                />
              </a>
            </div>
          </section>
          <section class="form-item">
            <p>
              이미 회원이신가요?
              <a role="link" data-to="sign-in">로그인</a>
            </p>
          </section>
        </form>
      </main>
    </div>
    `;
  }

  return { css, event, template };
}

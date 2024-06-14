"use strict";

import Event from "../constant/Event.js";
import ID from "../constant/ID.js";

export default function () {
  async function css(root) {
    const response = await fetch(`./src/pages/Home.css`);
    const css = await response.text();
    const style = root.querySelector("style");
    style.textContent = css;
  }

  function event(root) {
    const container = root.querySelector(ID.HOME_CONTAINER);
    Object.entries(Event[ID.HOME_CONTAINER]).forEach(([type, action]) => {
      container.addEventListener(type, (e) => action(e, container));
    });
  }

  function template(root) {
    root.innerHTML = `
    <style></style>
    <div id="home-container" class="container">
      <header class="header">
        <div class="wrap">
          <a class="logo">
            <img data-to="home" src="/assets/svg/logo.svg" width="153" height="51" />
          </a>
          <a class="btn btn-small btn-primary" data-to="sign-in"> 로그인 </a>
        </div>
      </header>
      <main class="main">
        <section class="banner-top">
          <div class="wrap">
            <div class="left">
              <h1 class="h1">일상의 모든 물건을<br />거래해 보세요</h1>
              <a class="btn btn-large btn-primary"
                >구경하러 가기</a
              >
            </div>
            <div class="right">
              <img
                class="img"
                src="/assets/img/banner_top/1x.png"
                width="996"
                height="447"
              />
            </div>
          </div>
        </section>
        <section class="content">
          <div class="wrap">
            <article class="left">
              <small class="small small-primary">Hot Item</small>
              <h1 class="h1">인기 상품을<br />확인해 보세요</h1>
              <p class="p">
                가장 HOT한 중고거래 물품을<br />판다 마켓에서 확인해 보세요
              </p>
            </article>
            <article class="right">
              <img
                class="img"
                src="/assets/img/contents/01/1x.png"
                width="588"
                height="444"
              />
            </article>
          </div>
        </section>
        <section class="content reverse">
          <div class="wrap">
            <article class="left">
              <small class="small small-primary">Search</small>
              <h1 class="h1">구매를 원하는<br />상품을 검색하세요</h1>
              <p class="p">
                구매하고 싶은 물품은 검색해서<br />쉽게 찾아보세요
              </p>
            </article>
            <article class="right">
              <img
                class="img"
                src="/assets/img/contents/02/1x.png"
                width="588"
                height="444"
              />
            </article>
          </div>
        </section>
        <section class="content">
          <div class="wrap">
            <article class="left">
              <small class="small small-primary">Register</small>
              <h1 class="h1">판매를 원하는<br />상품을 등록하세요</h1>
              <p class="p">
                어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요
              </p>
            </article>
            <article class="right">
              <img
                class="img"
                src="/assets/img/contents/03/1x.png"
                width="588"
                height="444"
              />
            </article>
          </div>
        </section>
        <section class="banner-bottom">
          <div class="wrap">
            <h1 class="h1">믿을 수 있는<br />판다마켓 중고거래</h1>
            <img
              class="img"
              src="/assets/img/banner_bottom/1x.png"
              width="996"
              height="540"
            />
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="wrap">
          <span class="origin">@codeit - 2024</span>
          <nav class="nav">
            <a role="link">Privacy Policy</a>
            <a role="link">FAQ</a>
          </nav>
          <nav class="nav">
            <a href="https://www.facebook.com" target="_blank" role="link"
              ><img src="/assets/svg/ic_facebook.svg" width="18" height="18"
            /></a>
            <a href="https://www.x.com" target="_blank" role="link">
              <img src="/assets/svg/ic_x.svg" width="18" height="18"
            /></a>
            <a href="https://www.youtube.com" target="_blank" role="link"
              ><img src="/assets/svg/ic_youtube.svg" width="18" height="18"
            /></a>
            <a href="https://www.instagram.com/" target="_blank"
              ><img src="/assets/svg/ic_instagram.svg" width="18" height="18"
            /></a>
          </nav>
        </div>
      </footer>   
    </div>   
    `;
  }

  return { event, css, template };
}

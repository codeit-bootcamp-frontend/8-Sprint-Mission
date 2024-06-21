function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrap">
          <p>©codeit - 2024</p>
          <ul className="footer-menu">
            <li>
              <a href="/privacy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="/faq.html">FAQ</a>
            </li>
          </ul>
          <ul className="sns">
            <li>
              <a
                href="https://www.facebook.com/?locale=ko_KR"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/images/i-facebook-small.png" alt="페이스북 이미지" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/?locale=ko_KR"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/images/i-twitter-small.png" alt="트위터 이미지" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/?app=desktop&hl=ko&gl=KR"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/images/i-youtube-small.png" alt="유튜브 이미지" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="/images/i-instagram-small.png"
                  alt="인스타그램 이미지"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;

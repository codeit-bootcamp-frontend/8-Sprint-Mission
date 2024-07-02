import './PaginationBar.css';
import pageNationLeftIcon from '../../assets/images/icon/btn_icon/ic_page_left_arrow.png';
import pageNationRightIcon from '../../assets/images/icon/btn_icon/ic_page_right_arrow.png';
import { useEffect, useRef, useState } from 'react';

function PaginationBar({ pageBy, handlePaginationChange }) {
  const firstTarget = useRef(null);
  const [navClick, setNavClick] = useState(null);

  const onClickNum = (e) => {
    const $target = e.target;
    if ($target.tagName !== 'LI') return;
    if (navClick !== $target) {
      navClick.classList.remove('pagiation-target');
    }
    $target.classList.add('pagiation-target');
    setNavClick($target);
  };

  const onClickLeft = (e) => {};

  const onClickRight = (e) => {};

  useEffect(() => {
    const $firstTarget = firstTarget.current;
    $firstTarget.classList.add('pagiation-target');
    setNavClick($firstTarget);
  }, []);

  return (
    <div className="pagiation-bar">
      <div className="pagiation-arrow" onClick={onClickLeft}>
        <img
          src={pageNationLeftIcon}
          alt="페이지 네이션바 왼쪽 이동 화살표"
          width="16px"
          height="16px"
        />
      </div>
      <ul className="pagiation-num" onClick={onClickNum}>
        <li ref={firstTarget}>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <div className="pagiation-arrow" onClick={onClickRight}>
        <img
          src={pageNationRightIcon}
          alt="페이지 네이션바 오른쪽 이동 화살표"
          width="16px"
          height="16px"
        />
      </div>
    </div>
  );
}
export default PaginationBar;

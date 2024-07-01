import styles from "./OnSalesNow.module.scss";
import sortImg from "assets/svg/sort.svg";
import likeSvg from "assets/svg/like.svg";
import React from "react";
import { PageInfoType, PageResponseType, PageType } from "custom.t";

const OnSalesNow: React.FC<{
  data?: PageResponseType;
  isLoading?: boolean;
}> = ({ data, isLoading }) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.instruction1}>
          <h2 className={styles.title}>판매 중인 상품</h2>
          <button className={`${styles.add} primary`}>상품 등록하기</button>
        </div>
        <div className={styles.instruction2}>
          <input
            className={styles.input}
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          />
          <img className={styles.sort} src={sortImg} alt="정렬" />
        </div>
        <ul className={styles.list}>
          {!isLoading
            ? data?.list
              ? data.list.map(
                  ({
                    id,
                    images,
                    description,
                    price,
                    favoriteCount,
                  }: PageType) => (
                    <li className={styles.item} key={id}>
                      <img
                        className={styles.img}
                        src={images[0]}
                        alt="이미지를 불러올 수 없습니다."
                      />
                      <p className={styles.description}>{description}</p>
                      <p className={styles.price}>{price}원</p>
                      <div className={styles.likeWrap}>
                        <img src={likeSvg} width={16} height={16} alt="" />
                        <span className={styles.likeText}>{favoriteCount}</span>
                      </div>
                    </li>
                  )
                )
              : "로딩 중..."
            : ""}
        </ul>
        <ul className={styles.pages}>
          {!isLoading
            ? data?.info.pageList.map((pageNum) => (
                <PageLi key={pageNum} pageNum={pageNum} pageInfo={data.info} />
              ))
            : ""}
        </ul>
      </div>
    </section>
  );
};

const PageLi: React.FC<{
  pageNum: number;
  pageInfo: PageInfoType;
}> = ({ pageNum, pageInfo }) => {
  const { current, start, end, prev, next } = pageInfo as PageInfoType;
  return (
    <>
      {prev && pageNum === start ? (
        <li
          className={styles.page}
          data-page={Number(start - 1)}
          data-role="page"
        >
          {"<"}
        </li>
      ) : (
        ""
      )}
      <li
        className={`${styles.page} ${
          current === pageNum ? styles.current : ""
        }`}
        data-page={pageNum}
        data-role="page"
      >
        {pageNum}
      </li>
      {next && pageNum === end ? (
        <li
          className={styles.page}
          data-page={Number(end + 1)}
          data-role="page"
        >
          {">"}
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default OnSalesNow;

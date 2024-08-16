import React from "react";
import Image from "next/image";
import TextArea from "@/components/form/TextArea";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import Icon from "@/components/ui/Icon";
import styles from "./Inquery.module.scss";

function Inquery() {
  return (
    <>
      <form>
        <TextArea
          label="댓글달기"
          name="new-comment"
          placeholder="댓글을 입력해주세요"
          rows={3}
        />
        <Button size="sm" color="primary" type="submit" className="ml-auto">
          등록
        </Button>
      </form>
      <div className={styles["inquiry-list"]}>
        <ul>
          <li>
            <div className={styles["comment"]}>
              혹시 사용기간이 어떻게 되실까요?
            </div>
            <div className={styles["profile-info"]}>
              <div className={styles["profile-wrap"]}>
                <Image
                  src="/img/profile.png"
                  alt="프로필 이미지"
                  className={styles["profile-image"]}
                  fill
                />
              </div>
              <div>
                <div className={styles["profile-id"]}>상큼한판다</div>
                <div className={styles["time-log"]}>1시간 전</div>
              </div>
            </div>
          </li>
        </ul>
        <LinkButton
          href="/boards"
          size="lg"
          color="primary"
          style={{
            fontSize: "18px",
            width: "240px",
            margin: "40px auto 150px",
          }}
        >
          목록으로 돌아가기&nbsp;&nbsp;
          <Icon type="back" size="md" />
        </LinkButton>
      </div>
    </>
  );
}

export default Inquery;

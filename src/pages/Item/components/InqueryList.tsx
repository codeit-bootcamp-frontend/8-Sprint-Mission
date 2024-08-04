import React from "react";
import { Link } from "react-router-dom";
import Img_inquiry_empty from "../../../assets/img/Img_inquiry_empty.png";
import timeAgo from "../../../utils/timeAgo";
import { Inquiry } from "../../../types/inquiryTypes";

interface InquiryListProps {
  inquiries: Inquiry[];
}

const InquiryList: React.FC<InquiryListProps> = ({ inquiries }) => {
  const InqueryNone = (
    <div className="inquiry-none">
      <img src={Img_inquiry_empty} alt="이미지" />
      <p>아직 문의가 없습니다.</p>
    </div>
  );

  return (
    <div className="inquiry-list">
      {inquiries.length === 0 ? (
        InqueryNone
      ) : (
        <ul>
          {inquiries.map((inquiry) => (
            <li key={inquiry.id}>
              <div className="comment">{inquiry.content}</div>
              <div className="profile-info">
                <div className="profile-img">
                  <img src={inquiry.writer.image} alt="프로필 이미지" />
                </div>
                <div>
                  <div className="profile-id">{inquiry.writer.nickname}</div>
                  <div className="time-log">{timeAgo(inquiry.createdAt)}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/items" className="btn-lg btn-primary back">
        목록으로 돌아가기&nbsp;&nbsp;<i className="icon ic_back"></i>
      </Link>
    </div>
  );
};

export default InquiryList;

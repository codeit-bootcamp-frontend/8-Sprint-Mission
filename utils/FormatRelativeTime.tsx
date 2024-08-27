interface FormatRelativeTimeProps {
  time: string;
}

function FormatRelativeTime({ time }: FormatRelativeTimeProps) {
  const dateObject = new Date(time);
  const targetDate = dateObject.getTime();
  const liveDateObject = new Date();
  const now = liveDateObject.getTime();
  const diff = now - targetDate;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

  if (minutes < 60) {
    return <p>{`${minutes}분 전`}</p>;
  } else if (hours < 24) {
    return <p>{`${hours}시간 전`}</p>;
  } else if (days < 31) {
    return <p>{`${days}일 전`}</p>;
  } else {
    return <p>{`${months}개월 전`}</p>;
  }
}

export default FormatRelativeTime;

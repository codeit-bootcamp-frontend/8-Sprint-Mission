function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const units = [
    { name: '년', seconds: 60 * 60 * 24 * 365 },
    { name: '개월', seconds: 60 * 60 * 24 * 30 },
    { name: '일', seconds: 60 * 60 * 24 },
    { name: '시간', seconds: 60 * 60 },
    { name: '분', seconds: 60 },
    { name: '초', seconds: 1 },
  ];

  for (const unit of units) {
    const value = Math.floor(diffInSeconds / unit.seconds);
    if (value > 0) {
      return `${value}${unit.name} 전`;
    }
  }
  return '방금 전';
}

export default timeAgo;

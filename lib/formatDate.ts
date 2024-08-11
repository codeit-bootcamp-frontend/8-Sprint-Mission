function formatDate(createdAt: string) {
  const uploadDate = new Date(createdAt);

  const formattedDate = uploadDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const finalDate = formattedDate.replace(/\.$/, "");

  return finalDate;
}

export default formatDate;

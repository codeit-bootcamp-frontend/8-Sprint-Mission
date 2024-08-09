export default function getRenderedPages(page: number, totalPages: number) {
  let renderedPages: number[] = [];
  
  if(totalPages <= 9) {
    for(let i = 1; i <= totalPages; i++)
      renderedPages.push(i);
    return renderedPages;
  }

  if(page <= 5) {
    for(let i = 1; i <= 9; i++)
      renderedPages.push(i);
    return renderedPages;
  }
  else if(page >= totalPages - 4) {
    for(let i = totalPages - 8; i <= totalPages; i++)
      renderedPages.push(i);
    return renderedPages;
  }
  else {
    for(let i = page - 4; i <= page + 4; i++)
      renderedPages.push(i);
    return renderedPages;
  }
}
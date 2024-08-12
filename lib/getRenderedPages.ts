export default function getRenderedPages(page: number, totalPages: number, howMany?: number) {
  if(!howMany) howMany = 9;
  let renderedPages: number[] = [];
  
  if(totalPages <= howMany) {
    for(let i = 1; i <= totalPages; i++)
      renderedPages.push(i);
    return renderedPages;
  }

  if(page <= Math.ceil(howMany / 2)) {
    for(let i = 1; i <= howMany; i++)
      renderedPages.push(i);
    return renderedPages;
  }
  else if(page >= totalPages - Math.floor(howMany / 2)) {
    for(let i = totalPages - howMany + 1; i <= totalPages; i++)
      renderedPages.push(i);
    return renderedPages;
  }
  else {
    for(let i = page - Math.ceil(howMany / 2) + 1; i <= page + Math.floor(howMany / 2); i++)
      renderedPages.push(i);
    return renderedPages;
  }
}
declare module "*.bmp" {
  const value: string;
  export default value;
}

// 기존의 다른 타입 선언들
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

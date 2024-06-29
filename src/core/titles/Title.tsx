import "./title.css";

interface TitleProps {
  children: string | React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="title">{children}</h1>;
};

export default Title;

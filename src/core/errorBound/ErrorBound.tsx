interface ErrorBoundProps {
  isError: boolean;
  children: React.ReactNode;
  instead: React.ReactNode;
}

const ErrorBound = ({ isError, children, instead }: ErrorBoundProps) => {
  return <>{isError ? instead : children}</>;
};

export default ErrorBound;

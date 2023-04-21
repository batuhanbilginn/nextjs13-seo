interface PaddingContainerProps {
  children: React.ReactNode;
}

const PaddingContainer = ({ children }: PaddingContainerProps) => {
  return <div className="w-full px-5 mx-auto max-w-7xl">{children}</div>;
};

export default PaddingContainer;

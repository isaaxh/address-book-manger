interface SerparatorProps {
  children?: string;
}

const Separator = ({ children }: SerparatorProps) => {
  return children ? (
    <div>
      <hr />
      {children}
      <hr />
    </div>
  ) : (
    <hr className="mx-2" />
  );
};

export default Separator;

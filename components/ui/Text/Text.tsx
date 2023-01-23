type Props = {
  check: string;
  children: React.ReactNode;
};

const Text: React.FC<Props> = ({ check, children }) => {
  return <>{check && check?.toString()?.length ? children : null}</>;
};

export default Text;

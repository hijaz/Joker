type Props = {
  children: JSX.Element | JSX.Element[];
};

function Header({ children }: Props) {
  return (
    <div className="flex justify-between border-b-2 pb-10">{children}</div>
  );
}

export default Header;

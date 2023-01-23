import Link from 'next/link';
import { Logo } from 'components/icons';

const Header = () => (
  <header
    role="banner"
    className="py-6 h-fit w-full z-10 flex items-center justify-center relative"
  >
    <div className="container">
      <div className="flex flex-col">
        <div className="flex items-center	justify-between gap-2">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

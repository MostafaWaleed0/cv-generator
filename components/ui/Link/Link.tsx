import Link from 'next/link';
import { Arrow } from 'components/icons';

type Props = {
  href: string;
  children: React.ReactNode;
  [x: string]: any;
};

const NextLink: React.FC<Props> = ({ href, children, ...props }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-between w-[15rem] bg-base-0 py-3 px-4 rounded border-2 border-base-450 focus-visible:border-base-700 hover:border-base-700 transition-all"
      {...props}
    >
      <span className="whitespace-nowrap font-mono uppercase text-lg tracking-wider">
        {children}
      </span>
      <Arrow />
    </Link>
  );
};

export default NextLink;

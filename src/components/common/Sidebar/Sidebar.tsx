import { BaseLink } from '@components/base/BaseLink';

interface Props {
  navItem?: Array<{
    name: string;
  }>;
  showNav: boolean;
}

export const Sidebar = ({ navItem, showNav }: Props) => {
  return (
    <aside
      className={`absolute flex flex-col text-center bg-dark-300 top-0 right-0 left-0 gap-3 py-6 pt-24 ${
        !showNav && 'hidden'
      }`}
    >
      {navItem &&
        navItem.map((item) => <BaseLink name={item.name} key={item.name} />)}
    </aside>
  );
};

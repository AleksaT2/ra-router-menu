import { NavLink } from 'react-router-dom';

export interface INavItemProps {
    label: string;
    link: string;
  }

function NavItem({ label, link }: INavItemProps) {
    const active = ({isActive}: {isActive: boolean}) => isActive ?
        'menu__item-active':'menu__item'

    return (
            <NavLink className={active} to={link}>
                {label.toLocaleUpperCase()}
            </NavLink>
    );
}

export default NavItem;
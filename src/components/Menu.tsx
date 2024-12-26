import NavItem from "./NavItem";

function Menu() {
  const navItems = [
    { label: "home", link: "/" },
    { label: "drift", link: "/drift" },
    { label: "timeattack", link: "/timeattack" },
    { label: "forza", link: "/forza" },
  ];

  return (
    <nav className="menu">
        {navItems.map(({ label, link }) => (
          <NavItem key={label} label={label} link={link} />
        ))}
    </nav>
  );
};

export default Menu;
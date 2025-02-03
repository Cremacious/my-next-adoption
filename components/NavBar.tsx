const NavBar = () => {
  return (
    <nav className="flex relative bg-blue-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
      <h1 className="text-lg font-semibold">My Next Adoption</h1>
      <ul className="flex gap-[40px] text-m">
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default NavBar;

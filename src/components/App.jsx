import { NavLink, Outlet } from "react-router-dom";

export const App = () => {
  return (<>

<NavLink to='/login'>Log in</NavLink>
<Outlet></Outlet>
  </>



  );
};

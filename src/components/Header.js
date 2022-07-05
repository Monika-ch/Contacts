import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar dark color='primary' sticky='top' expand='md' className='pb-0 pt-1'>
      <NavbarBrand className='logo'>
        <a className='btn pb-0'>
          <i
            className='fa fa-2x fa-sm-3x fa-user-circle-o text-light bg-primary pb-3 pe-sm-1 pb-sm-4'
            aria-hidden='true'
          ></i>
        </a>
        Contacts
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;

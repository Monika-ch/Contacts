import { Navbar, NavbarBrand } from "reactstrap";
import './Header.css'

const Header = () => {
  return (
    <Navbar dark color='primary' sticky='top' expand='md' className='ps-4 p-2'>
      <NavbarBrand href='/' className='logo'>
        <a
          className='btn'
        >
          <i className='fa fa-3x fa-user-circle-o text-light pb-3' aria-hidden='true'></i>
        </a>
        Contacts
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;

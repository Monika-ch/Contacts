import { Navbar, NavbarBrand } from "reactstrap";
import './Header.css'

const Header = () => {
  return (
    <Navbar dark color='primary' sticky='top' expand='md' className='pb-0 pt-1'>
      <NavbarBrand href='/' className='logo'>
        <a className='btn pb-0'>
          <i
            className='fa fa-3x fa-user-circle-o text-light bg-primary pe-1 pb-4'
            aria-hidden='true'
          ></i>
        </a>
        Contacts
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;

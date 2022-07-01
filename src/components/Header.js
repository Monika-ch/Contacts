import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <Navbar dark color='primary' sticky='top' expand='md' className='p-4'>
      <NavbarBrand href='/' className='h6 ml-5'>
        Contacts
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;

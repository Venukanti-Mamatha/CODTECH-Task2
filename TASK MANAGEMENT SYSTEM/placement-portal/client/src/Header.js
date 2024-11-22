
/*import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar bg-dark justify-content-center" style={{ backgroundColor: 'grey' }}>
      <li className="nav-link ">
        <NavLink to="/dashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'blue' : 'blue' })}>
          Companies Hub
        </NavLink>
      </li>
      <li className="nav-link ">
        <NavLink to="/ComplaintForm" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'blue' : 'blue' })}>
          Questions?
        </NavLink>
      </li>
      
      <NavDropdown title="PreparationKit" id="basic-nav-dropdown" className="nav-link" >
        <NavDropdown.Item href='./dsa'>DSA</NavDropdown.Item>
        <NavDropdown.Item href='./Dbms'>DBMS</NavDropdown.Item>
        <NavDropdown.Item href="./Os">OS</NavDropdown.Item>
      </NavDropdown>
      <li className="nav-link">
        <NavLink to="/login" className="nav-link" onClick={() => localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'blue' : 'blue' })}>
          Logout
        </NavLink>
      </li>
    </nav>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar bg-dark justify-content-center" style={{ backgroundColor: 'grey', color: 'white' }}>
      <li className="nav-link">
        <NavLink to="/dashboard" className="nav-link">
          Companies Hub
        </NavLink>
      </li>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <li className="nav-link">
        <NavLink to="/ComplaintForm" className="nav-link">
          Questions?
        </NavLink>
      </li>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
      <NavDropdown title="PreparationKit" id="basic-nav-dropdown" className="nav-link">
        <NavDropdown.Item href='./dsa'>DSA</NavDropdown.Item>
        <NavDropdown.Item href='./Dbms'>DBMS</NavDropdown.Item>
        <NavDropdown.Item href="./Os">OS</NavDropdown.Item>
      </NavDropdown>
      <li className="nav-link">
        <NavLink to="/login" className="nav-link" onClick={() => localStorage.clear()}>
          Logout
        </NavLink>
      </li>
    </nav>
  );
};

export default Header;
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar bg-dark justify-content-center" style={{ backgroundColor: 'grey', color: 'white' }}>
      <li className="nav-link">
        <NavLink to="/dashboard" className="nav-link">
          Companies Hub
        </NavLink>
      </li>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <li className="nav-link">
        <NavLink to="/ComplaintForm" className="nav-link">
          Questions?
        </NavLink>
      </li>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
      <NavDropdown title="PreparationKit" id="basic-nav-dropdown" className="nav-link">
        <NavDropdown.Item href='./dsa'>DSA</NavDropdown.Item>
        <NavDropdown.Item href='./Dbms'>DBMS</NavDropdown.Item>
        <NavDropdown.Item href="./Os">OS</NavDropdown.Item>
      </NavDropdown>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> {/* Add space here */}
      <li className="nav-link">
        <NavLink to="/login" className="nav-link" onClick={() => localStorage.clear()}>
          Logout
        </NavLink>
      </li>
    </nav>
  );
};

export default Header;






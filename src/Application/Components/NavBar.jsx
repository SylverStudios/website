import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavBar = React.createClass({
  propTypes: {
    activeTab: React.PropTypes.string.isRequired,
    onActiveTabChange: React.PropTypes.func.isRequired,
  },

  render: function() {
    const activeTab = this.props.activeTab;
    const onSelectFxn = this.props.onActiveTabChange;

    return (
      <Nav bsStyle="tabs" activeKey={activeTab} onSelect={onSelectFxn}>
        <NavItem eventKey={'home'} >Home</NavItem>
        <NavItem eventKey={'games'} >Games</NavItem>
        <NavItem eventKey={'videos'} >Videos</NavItem>

        <NavDropdown eventKey={'about'} id="nav-dropdown" title="About">
          <MenuItem eventKey={"sam"}>Sam</MenuItem>
          <MenuItem eventKey={"aaron"}>Aaron</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={"sylverStudios"}>Sylver Studios</MenuItem>
        </NavDropdown>

      </Nav>
    );
  }
});

export default NavBar;
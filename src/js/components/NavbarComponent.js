import * as React from 'react';
import * as _ from 'underscore';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
const FontAwesome = require('react-fontawesome');
const AppsModalComponent = require('./AppsModalComponent');
const FeedbackModalComponent = require('./FeedbackModalComponent');

module.exports = React.createBackboneClass({
  links: {
    courses: ['is_instructor', 'is_admin'],
    admin: ['is_admin']
  },

  getInitialState() {
    return {
      showAppsModal: false,
      showFeedbackModal: false
    };
  },

  closeAppsModal() {
    this.setState({ showAppsModal: false });
  },

  openAppsModal(e) {
    e.preventDefault();
    this.setState({ showAppsModal: true });
  },

  closeFeedbackModal() {
    this.setState({ showFeedbackModal: false });
  },

  openFeedbackModal(e) {
    e.preventDefault();
    this.setState({ showFeedbackModal: true });
  },

  display(link) {
    var show = _.some(this.links[link], function(level) {
      return this.getModel().get(level);
    }, this);
    return show || this.getModel().get('is_client') ? 'initial' : 'none';
  },

  render () {
    return(
      <div>
        <Navbar collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                <img
                  src="/img/ACA_standard_mark_small.png"
                  style={{ maxHeight: '25px', display: 'inline', marginRight: '10px' }}
                />
                Campus Manager
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <li role="presentation">
                <a href='#' onClick={this.openAppsModal}>
                  <FontAwesome name="th" />
                </a>
              </li>
              <li role="presentation"><a href='#'>Dashboard</a></li>
              <li role="presentation" style={{ display: this.display('courses') }}><a href='#courses'>Courses</a></li>
              <NavDropdown eventKey={3} title="Admin" id="admin-dropdown" style={{ display: this.display('admin') }}>
                <MenuItem eventKey={3.1} href="#users">Users</MenuItem>
                <MenuItem eventKey={3.2} href="#terms">Terms</MenuItem>
                <MenuItem eventKey={3.3} href="#locations">Locations</MenuItem>
                <MenuItem eventKey={3.4} href="#textbooks">Textbooks</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.5} href="#registration">Registration</MenuItem>
                <MenuItem eventKey={3.6} href="#report">Report</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={4} title={`${this.getModel().get('first_name')} ${this.getModel().get('last_name')}`} id="user-dropdown">
                <MenuItem eventKey={4.1} href="logout">Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Button className="btn-feedback" bsStyle="warning" onClick={this.openFeedbackModal}>
          <FontAwesome name="comments-o" />
        </Button>
        <AppsModalComponent
          show={this.state.showAppsModal}
          onHide={this.closeAppsModal}
        />
        <FeedbackModalComponent
          show={this.state.showFeedbackModal}
          onHide={this.closeFeedbackModal}
        />
      </div>
    )
  }
});

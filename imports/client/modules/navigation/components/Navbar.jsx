import React from 'react';
import MenuItem from './MenuItem.jsx';

const Navbar = ({children, content = () => null }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed"
                data-toggle="collapse" data-target="#mynavbar"
                aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">
          <img style={{verticalAlign: "middle", paddingRight: "-15px", paddingLeft: "5px"}} height="20px" width="20px"
               src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2046%2044%22%3E%3Cpath%20fill%3D%22%23d00000%22%20d%3D%22M45.9%200H25.1v10.4h5.2v10.5C29%2019.2%2013.7%200%2013.7%200H0v10.4h5.2v23.2H0V44h20.8V33.6h-5.2V23.1C16.9%2024.8%2032.2%2044%2032.2%2044h13.7V33.6h-5.2V10.4h5.2V0z%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M37.8%206.5c.6-.5%201.4-.7%202.3-.7h1.5V4.7h-12v1.2h1.7c.6%200%201.4.1%202%20.6.6.5%201.1%201.3%201.1%202.9V32L12.6%204.7H4.4v1.1c.6%200%201.8.4%202.9%201%201%20.6%201.9%201.4%201.9%202.4v25.7c0%201.4-.4%202.3-1%202.8s-1.4.7-2.3.7H4.4v1.2h12v-1.2h-1.7c-.6%200-1.4-.1-2-.6-.6-.5-1.1-1.3-1.1-2.9V12.1l21.8%2027.4h8.1v-1.1c-.6%200-1.8-.4-2.8-1-1-.6-1.9-1.4-1.9-2.4V9.3c0-1.4.4-2.3%201-2.8z%22%2F%3E%3C%2Fsvg%3E" />
        </a>
      </div>

      {/* Collect the nav links, forms, and other content for toggling */}
      <div className="collapse navbar-collapse" id="mynavbar">
        {children}
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
               aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider" />
              <li><a href="#">Separated link</a></li>
              <li role="separator" className="divider" />
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
               aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider" />
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>{/* /.navbar-collapse */}
    </div>{/* /.container-fluid */}
  </nav>
);

export default Navbar;

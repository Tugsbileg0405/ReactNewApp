import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Nav extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div id="navbar-full">

          <div id="navbar">

            <nav className="navbar navbar-ct-blue navbar-fixed-top" role="navigation">

              <div className="container">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand navbar-brand-logo" href="http://www.creative-tim.com">
                    <div className="logo">
                      <img src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" />
                    </div>
                    <div className="brand"> Logo </div>
                  </a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="javascript:void(0);" data-toggle="search" className="hidden-xs">
                        <i className="pe-7s-search" />
                        <p>Search</p>
                      </a>
                    </li>
                    <li>
                      <Link to="home">
                        <i className="pe-7s-home">
                        </i>
                        <p>Home</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="about">
                        <i className="pe-7s-info">
                        </i>
                        <p>About</p>
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <i className="pe-7s-mail">
                        </i>
                        <p>Contact</p>
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="pe-7s-user" />
                        <p>Account</p>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something</a></li>
                        <li className="divider" />
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="signin">
                        <i className="pe-7s-users">
                        </i>
                        <p>Sign in</p>
                      </Link>
                    </li>
                  </ul>
                  <form className="navbar-form navbar-right navbar-search-form" role="search">
                    <div className="form-group">
                      <input type="text" defaultValue className="form-control" placeholder="Search..." />
                    </div>
                  </form>
                </div>{/* /.navbar-collapse */}
              </div>{/* /.container-fluid */}
            </nav>
            <div className="blurred-container">
              <div className="img-src" style={{ backgroundImage: 'url(' + require('file!../../assets/img/bg.jpg') + ')' }} />
            </div>
          </div>{/*  end navbar */}
        </div>
        <div className="main" style={{ paddingTop: 25 }}>
          <div className="wrapper" >
            <div className="container">
                {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;
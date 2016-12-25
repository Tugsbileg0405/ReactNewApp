import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


class Nav extends React.Component {
   render() {
      return (
         <div>
            <ul>
                 <Link to="/home" ><li>Home</li></Link>
               <li>About</li>
               <li>Contact</li>
            </ul>
           {this.props.children}
         </div>
      )
   }
}

export default Nav;
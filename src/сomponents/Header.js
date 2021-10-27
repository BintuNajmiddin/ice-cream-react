import { Link } from "react-router-dom";
function Header (){
    return (
      <header className="header">
        <div className="container">
        <div className="row">
          <Link className="logo link" to="/">IceCreams</Link>  
          <div className="nav-link">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to='/AddIceCream'>Add Ice Cream</Link>
          </div>
        </div>
        </div>
      </header>
    );
}

export default Header;



<nav>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/AddIceCream">Add Ice Cream</Link>
  </li>
 
</ul>
</nav>
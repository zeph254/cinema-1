import { NavLink } from "react-router-dom"


export default function  NavBar (){

return (
        <div classNameName="NavBar">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="./" className="nav-link active" aria-current="page" href="#">Home</NavLink>
        <NavLink to="About" className="nav-link" href="#">About</NavLink>
        <NavLink to="add" className="nav-link" href="#">Add</NavLink>
        <NavLink to="Help" className="nav-link" href="#">Help</NavLink>
        <NavLink to="Snacks" className="nav-link ">Snacks</NavLink>
      </div>
    </div>
  </div>
</nav>

        </div>
    )
}
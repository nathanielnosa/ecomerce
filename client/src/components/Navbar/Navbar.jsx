import { Link } from 'react-router-dom'
import NAV_LINKS from './navlink'
import { FaRegHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-white navbar-white shadow">
      <div className="container-fluid">

        <div className="row justify-content-between align-items-center">
          <div className="col-md-4">
            <div className="d-flex align-items-center">
              <Link className="navbar-brand" to="/"><img src="/img/logo.png" className="img-fluid d-md-none d-sm-block" style={{ width: '50%' }} alt="logo" /></Link>
              <div className="category">
                <Link className='pe-1 text-dark text-decoration-none' to="/products/1">Women</Link>
                <Link className='px-1 text-dark text-decoration-none' to="/products/2">Men</Link>
                <Link className='px-1 text-dark text-decoration-none' to="/products/3">Kid</Link>
                <Link className='px-1 text-dark text-decoration-none' to="/products/4">Accessories</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <Link to="/" className="navbar-brand" href="#"><img src="/img/logo.png" className="img-fluid d-none d-md-block mx-auto" style={{ width: '15%' }} alt="logo" /></Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav w-100 d-flex justify-content-center align-items-center">
                {
                  NAV_LINKS.map(({ id, title, link }) => (
                    <li className="nav-item" key={id}>
                      <Link to={link} className="nav-link">{title}</Link>
                    </li>
                  ))
                }

                <div style={{ width: '100%' }} className="icons d-flex gap-3 align-items-center justify-content-center">
                  <FaSearch />
                  <FaUser />
                  <FaRegHeart />
                  <div className="cart position-relative">
                    <FaShoppingCart />
                    <span className="badge bg-secondary position-absolute top-0 start-100 translate-middle">0</span>
                  </div>
                </div>

              </ul>
            </div>
          </div>
        </div>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}


export default Navbar
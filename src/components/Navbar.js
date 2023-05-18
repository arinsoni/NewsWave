import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import blackDownArrow from './blackDownArrow.png'
import whiteDownArrow from './whiteDownArrow.png'
import logo from './logo.png'

const Navbar = (props) => {



  let navLinkStyle = {
    color: props.mode === 'light' ? '#5b0e2d' : 'white',
    fontSize: '20px'
  }

  let toggleStyle = {
    backgroundColor: props.mode === 'light' ? 'transparent' : 'transparent',
    borderColor: props.mode === 'light' ? '#7db0de' : '#F87D51'
  }

  return (
    <>

      <nav className={`navbar navbar-expand-lg sticky-top navbar-${props.mode === 'dark' ? 'dark' : 'light'} `} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#1E2B33' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ color: props.mode === 'light' ? 'black' : 'white', fontSize: '25px' }} to="/technology"> <img className='logo' src={logo} alt="" /> NewsWave</Link>

          <button className="navbar-toggler" type="button" style={toggleStyle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>



          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container navLinks">
              <button class="infoBtn" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" >
                <img src={props.mode === 'light' ? blackDownArrow : whiteDownArrow} alt="" />
              </button>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
                <li className="nav-item"><Link className="nav-link active" style={navLinkStyle} aria-current="page" to="/technology">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" style={navLinkStyle} to="/business">business</Link></li>
                <li className="nav-item"><Link className="nav-link" style={navLinkStyle} to="/entertainment">entertainment</Link></li>
                {/* <li className="nav-item"><Link className="nav-link" style={navLinkStyle} to="/general">general</Link></li> */}
                <li className="nav-item"><Link className="nav-link" style={navLinkStyle} to="/health">health</Link></li>
                <li className="nav-item"><Link className="nav-link" style={navLinkStyle} to="/science">science</Link></li>
                <li className="nav-item"><Link className="nav-link" style={navLinkStyle} to="/sports">sports</Link></li>
                <li className="nav-item"><Link className="nav-link" style={navLinkStyle} to="/technology">technology</Link></li>
              </ul>
            </div>
            <div className={`form-check form-switch  mx-2 text-${props.mode}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={navLinkStyle} >{props.mode === 'light' ? 'Dark' : 'Light'} mode </label>
            </div>
          </div>
        </div>
      </nav>
      <div class="collapse downInfo" id="navbarToggleExternalContent"  >
        <div className="row" style={{display:'flex', flexDirection: 'row',  backgroundColor: props.mode === 'light' ? '#F87D51' : '#7db0de'}}>


        <div class=" p-4" style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
        }}>


          <h5 class="text-white h4 text-center " >NewsWave Features:</h5>
          <div className="points" style={{ display: 'flex', justifyContent: 'space-between', }} >
            <div className="div1 ">
              <h6>Confidential API</h6>
              <h6>Routing</h6>
              <h6>Infinite Scrolling</h6>
              <h6>Theme Mode</h6>
              <h6>Responsiveness</h6>
            </div>
            <div className="div2">
              <h6>Confidential API</h6>
              <h6>News across various </h6>
              <h6>Spinner Loading</h6>
              <h6>Top Loading Bar</h6>
            </div>


            {/* categories with Author and Published date mentioned */}
          </div>
        </div>
        <div className="DevInfo text-center" style={{display: 'flex',  flexDirection: 'row', justifyContent: 'center'}}>

          <a href='https://github.com/arinsoni/NewsWave' ><i class="fa fa-github mx-4" style={{ fontSize: '36px', color: 'white' }}></i></a>

          <a href='https://www.linkedin.com/in/arin-soni-1bab321ba/' ><i class="fa fa-linkedin mx-4" style={{ fontSize: '36px', color: 'white' }}></i></a>
        </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

// import MainHeader from './MainHeader/MainHeader'

// const Header = () => {
//   return (
//     <div>
//       <MainHeader />
//     </div>
//   )
// }

// export default Header


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import hero from '../../assets/hero.mp4';
import './Header.css';
function header() {
  return (
    <>
   
<nav className="navbar navbar-expand-lg bg-color py-4 pt-lg-5">
    <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">Indian Intelligence Test</a>
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                className="navbar-toggler"
                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className=" nav-item">
                    <a aria-current="page" className="nav-link active" href="#">Home</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="#about">About IIT</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="#about">Test Pattern</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="#about">Registration Process</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="#about">Testimonials</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="#about">FAQs</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="#about">Take Exam</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="#online_services">Login</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="/contact.html">Result</a>
                </li>


            </ul>

        </div>
    </div>
</nav>
    <section className="bg-main bg-color hero-section ">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start text-md-start text-center">
            <h1 className='text-capitalize fw-bolder text-white'> We Collect High quality Leads</h1>
            <p className='mt-3 mb-5 para-width text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <div className="text-center w-100 text-md-start">
              <Button className='btn btn-primary px-5 py-2'>Get Started</Button>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 col-12 xol-lg-6 order-0 order-lg-1 hero-image--section ">
            <div className="text-center text-md-end mb-5">
            <video src={hero} autoPlay loop muted className='hero-video--section'>
              Your browser does not support the video tag.
            </video>

                     
            </div>  
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1696123427">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </section>
    </>
  );
}

export default header;
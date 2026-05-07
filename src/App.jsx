// App.js
import {
  BrowserRouter as Router,
  Routes,
  Route as RouteElement,
  Link,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Carousel } from "react-bootstrap";
import DestinationList from "./DestinationList.jsx";
import DestinationDetail from "./DestinationDetail.jsx";
import ContactForm from "./ContactForm.jsx";
// Import the custom CSS file
import "./App.css";

const bannerImages = [
  {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2400&q=85",
    alt: "Taj Mahal at sunrise",
    position: "center 45%",
  },
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=85",
    alt: "Kerala backwaters and palm trees",
    position: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=85",
    alt: "Indian heritage architecture",
    position: "center 40%",
  },
  {
    src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2400&q=85",
    alt: "Goa beach shoreline",
    position: "center",
  },
];

const App = () => {
  return (
    <Router>
      <div className="app-shell">
        <Navbar className="custom-navbar" expand="lg">
          <Navbar.Brand className="brand-heading">
            INCREDIBLE INDIA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <Link to="/travel" className="dropdown-item">
                  Travel
                </Link>
                <Link to="/destinations" className="dropdown-item">
                  Destinations
                </Link>
                <Link to="/experience" className="dropdown-item">
                  Experience
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Carousel */}
        <Carousel className="custom-carousel">
          {bannerImages.map((image) => (
            <Carousel.Item key={image.src}>
              <img
                className="d-block w-100 carousel-image"
                src={image.src}
                alt={image.alt}
                style={{ objectPosition: image.position }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* Content of your app (unchanged) */}
        <Routes>
          <RouteElement path="/" element={<DestinationList />} />
          <RouteElement
            path="/destination/:id"
            element={<DestinationDetail />}
          />
          <RouteElement path="/contact" element={<ContactForm />} />
          {/* Add routes for travel, destinations, and experience */}
        </Routes>
        {/* Footer */}
        <div className="custom-footer">
          <div className="footer-section">
            <h3>Connect with us</h3>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact us</h3>
            <p>Email: contact@incredibleindia.com</p>
            <p>Phone: +91 123 456 7890</p>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and offers.</p>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App;

import React from "react";
import { Link } from 'react-router-dom';
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h2>Do You Have Questions ?</h2>
              <p>Unlock the Door to Your Perfect Stay: Where Homes Become Havens!</p>
            </div>
            <Link to='/contact'>
              <button className='btn5'>Contact Us Today</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <Link to='/'>
                <img src='../images/logo-light.png' alt='' />
              </Link>
              <h2>Need help?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>** Discover the Perfect Stay, Your Home Away from Home! **</span>
      </div>
    </>
  )
}

export default Footer;

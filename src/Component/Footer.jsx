import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import '../Css/Footer.scss'
import { logo } from "../Assets";


const Footer = () => {
    return(
      <div className=" col footer_main_div">
        <div className="icon_div">
          <p>TERMINATE PVT LTD</p>
        </div>

        <div className="col footer_detials_div">
          <div className="row logo_div">
            <div>
              <img src={logo}></img>
            </div>
            <div>

            </div>
          </div>
          <div className="row description_div">
            <p>At [Your Company Name], we specialize in delivering top-notch web development, mobile app development, and comprehensive web maintenance services. Our expert team is dedicated to creating innovative, efficient, and user-friendly solutions tailored to meet your unique business needs. Partner with us to transform your digital presence and drive your business forward.</p>
          </div>
          <div className="row contact_div">
            <div className="col contact_details_div">

              <div className="row contact_details_logo">
                        <a href="https://www.facebook.com/Vidusah D Ariyarathna" target="_blank" rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faFacebookF} size="2x" style={{ color: '#F6F1EE' }}/>
                        </a>

                </div>

                <div className="row contact_details_information">
                  <a href="https://www.facebook.com/Vidusah D Ariyarathna" style={{ color: '#F6F1EE' }}>Faceboook</a>
                </div>
              </div>

              <div className="col contact_details_div">

                <div className="row contact_details_logo">

                        <a href="https://github.com//pgvda" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#F6F1EE' }}/>
                        </a>
   
                </div>
                <div className="row contact_details_information">
                  <a href="https://github.com//pgvda" style={{ color: '#F6F1EE' }}>Github</a>
                </div>
              </div>

              <div className="col contact_details_div">

                <div className="row contact_details_logo">

                        <a href="https://www.linkedin.com/in/ariyarathna-pgrvd/" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#F6F1EE' }} />
                        </a>

                </div>
                <div className="row contact_details_information">
                  <a href="https://www.linkedin.com/in/ariyarathna-pgrvd/" style={{ color: '#F6F1EE' }}>Linkedin</a>
                </div>
              </div>

              <div className="col contact_details_div">

                <div className="row contact_details_logo">

                        <a href="https://wa.me/0769342644" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#F6F1EE' }}/>
                        </a>
                </div>
                <div className="row contact_details_information">
                  <a href="https://wa.me/0705083933" style={{ color: '#F6F1EE' }}>Whatsapp</a>
                </div>
            </div>
          </div>
        </div>

        <div className="footer_end_div">end</div>

      </div>
    )
}

export default Footer;
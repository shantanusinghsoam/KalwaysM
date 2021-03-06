import React from 'react';
import {
  ContactContainer,
  ContactForm,
  ContactImage,
  FotterNav,
  WWOCCButton,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  Heading,
} from './ContactSEctionElements';

import { animateScroll as scroll, Link } from 'react-scroll';
const ContactSectio = ({ isOpen, toggle }) => {
  function refreshPage() {
    hide = 'lol';
    window.location.reload();
  }

  var hide = 'ContactUs';
  return (
    <ContactContainer id="ContactUs">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="pt-20"> </div>
      <ContactForm>
        <Heading style={{ paddingTop: '6rem' }}>Contact Us</Heading>
        <div
          data-aidaform-widget="form-2019-12"
          data-url="https://shantanu.aidaform.com/contact-us-kalways"
          data-width="100%"
          data-height="500px"
          data-do-resize
        ></div>
        {/* <WWOCCButton className="" onClick={refreshPage} id={`${hide}`}>
          Contact Us
        </WWOCCButton> */}
      </ContactForm>

      <ContactImage>
        <footerMobileContainer>
          <FotterNav>
            <FotterContact>
              <FotterContactlist>
                <FotterContactName>Address</FotterContactName>
                <FotterContactNo>
                  10156 Live Oak Ave, Fontana, CA 92335
                </FotterContactNo>

                <FotterContactName>United states</FotterContactName>
                <FotterContactNo>
                  California
                  {/* Finsweet@gmail.com */}
                </FotterContactNo>
              </FotterContactlist>
            </FotterContact>
            {/* <hr align="left" width="100%"></hr> */}
            <FotterContact>
              <FotterContactlist>
                <FotterContactName>Contact Details</FotterContactName>
                <FotterContactNo>
                  1-800-502-7000
                  {/* Finsweet@gmail.com */}
                </FotterContactNo>
              </FotterContactlist>
            </FotterContact>
            {/* <hr align="left" width="100%"></hr> */}
            <FotterContact>
              <FotterContactlist>
                <FotterContactName>Opening Hours</FotterContactName>
                <FotterContactNo>
                  Monday to Friday 8:00 AM to 5:00 PM
                </FotterContactNo>
              </FotterContactlist>
            </FotterContact>
            {/* <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions> */}
            {/* <FotterNavH>Email</FotterNavH> */}
            {/* <FotterNavH>Company</FotterNavH>
                <FotterNavH>Advantages</FotterNavH>
                <FotterNavH>Products</FotterNavH>
                <FotterNavH>Contact</FotterNavH> */}
          </FotterNav>
        </footerMobileContainer>
      </ContactImage>
    </ContactContainer>
  );
};
class ContactSection extends React.Component {
  // componentDidMount() {
  //   window.location.reload(false);
  // }

  render() {
    return <ContactSectio />;
  }
}
export default ContactSection;

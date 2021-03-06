import React from 'react';   
import {
  AboutContainer,
  TextContaner,
  TextContanerS,
} from './AboutMainElements';
import whitetruck from '../../images/AP.jpeg';
const AboutMain = ({ isOpen, toggle }) => {
  return (
    <AboutContainer id="About">
      <img
        src={whitetruck}
        alt="Our services Truck on black road "
        height="90vh"
      />
      <TextContaner className="align-left">
        <h1 className="md:text-4xl text-left text-white lg:text-7xl p-8 ">
          Together, we'll drive a more sustainable global supply chain.
        </h1>
      </TextContaner>

      <TextContanerS>
        <h1 className="text-left text-black  text-4xl pb-8 ">KALWAY</h1>     
        <p className="text-left text-gray-800 text-2xl   ">
          KALWAY’s mission is to move business forward with expertise and
          integrity. That’s why we’re committed to creating smarter, less
          environmentally impactful solutions for our network. Between 2019 and
          2020, we reduced network CO2 emissions by 18% and improved our
          SmartWay rankings. From environmental responsibility and sustainable
          supply chain solutions, to industry insights and partnerships that
          drive innovative thinking – we’re committed to moving towards a     
          greener future.    
        </p>
      </TextContanerS>
    </AboutContainer>
  );
};

export default AboutMain;




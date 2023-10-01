import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
const About = () => {
  return (
    <>
      <div class="container">
      <div class="image">
        <img
          src="https://indianintelligencetest.com/assets/images/aboutimg.webp"
          class="rounded float-start"
          alt="..."
        />
      </div>
      <div class="text">
        <h1>About IIT</h1>
        <p>
          Indian Intelligence Test, an initiative of Jagran Group, is one of the
          most innovative tests which identifies the intelligence type of each
          child so that the most suited learning method is used and eventually
          the best career option is selected. It also identifies the scholastic
          abilities of participants and rewards the meritorious students.
        </p>
        <p>
          In the past 8 years, more than 5.75 Lakhs students from 1000+ Schools
          across 8 states have participated in Indian Intelligence Test
          conducted by our Jagran Group.
        </p>
        <p>
          The Main Objective of the Indian Intelligence Test is to motivate the
          students to understand the in-depth knowledge of the subject and to
          enhance their factual, conceptual, reasoning, logical, analytical, and
          problem-solving skills. This may help the students to realize their
          true intellectual potential. We hereby proudly announce the 9th Season
          of IIT - A pathway to your child right career.
        </p>
      </div>
      </div>
      </>
  )
}

export default About

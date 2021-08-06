import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack"
import Toolstack from "./Toolstack"
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import { FaLinkedinIn} from 'react-icons/fa'
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc'

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='orange'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I'm a 3rd Year,
              <b className='orange'> Computer Science and Engineering (Core)</b>
              , student from SRMIST, Chennai.
              <br />
              <br />
              Fluent in classics like
              <i>
                <b className='orange'> C++, Python and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='orange'>Web Technologies and Products </b> and
                also in areas related to{' '}
                <b className='orange'>Blockchain Tech.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className='orange'>Node.js</b> and
              <i>
                <b className='orange'>
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='orange'> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1 className='project-heading'>
              Professional <strong className='purple'>Skillset </strong>
            </h1>
            <Techstack />
            <h1 className='project-heading'>
              <strong className='purple'>Tools</strong> I use
            </h1>
            <Toolstack />
            <div className='home-about-body'>
              <p>
                Apart from coding, some
                <span className='orange'> other activities</span> that I love to
                do!
              </p>
              <ul>
                <li className='about-activity'>
                  <VscDebugBreakpointDataUnverified /> Stock Trading
                </li>
                <li className='about-activity'>
                  <VscDebugBreakpointDataUnverified /> Teecha help
                </li>
                <li className='about-activity'>
                  <VscDebugBreakpointDataUnverified /> cos you know me
                  better(sketching?)
                </li>
              </ul>
            </div>
            <br></br>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='orange'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='mailto:priyadarsh2001@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <SiGmail />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://github.com/priyadarshss'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/priyadarshss'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/priyadarsh-s-s-7974431b0/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/priyadarsh_ss/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2;

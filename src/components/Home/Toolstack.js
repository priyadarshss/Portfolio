import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiNetlify,
} from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { CgFigma } from 'react-icons/cg'
import { FaGitAlt } from 'react-icons/fa'

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <CgFigma />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaGitAlt />
      </Col>
    </Row>
  )
}

export default Toolstack;

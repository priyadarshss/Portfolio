import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
  DiBootstrap,
} from 'react-icons/di'
import {
  SiNextDotJs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from 'react-icons/si'
import { FaAws, FaDocker } from 'react-icons/fa'

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextDotJs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaAws />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
      </Col>
    </Row>
  )
}

export default Techstack

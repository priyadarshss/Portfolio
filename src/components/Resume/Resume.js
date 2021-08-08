import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/pd-resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const url1 = 'https://competitive-coding-api.herokuapp.com/api/codechef/pd28'
  const url2 = 'https://codeforces.com/api/user.info?handles=priyadarshss'

  const [codechefRank, upadteCodechefRank] = useState(0);
  const [codeforcesRank, upadteCodeforcesRank] = useState(0);
  const [sem, upadateSem] = useState(4);
  const [cgpa, upadteCgpa] = useState(9.5);

  useEffect(() => {
    axios
      .get(url1)
      .then((res) => {
        upadteCodechefRank(res.data.rating);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(url2)
      .then((res) => {
        console.log(res)
        upadteCodeforcesRank(res.data.result[0].rating)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Container fluid className='resume-section'>
      <Particle />
      <Container>
        <Row className='resume'>
          <Col md={2} className='resume-left'>
            {/* <h3 className='resume-title'>Experience</h3>
            <Resumecontent
              title='Fill title'
              date='Fill date'
              content={[
                'Fill description(add , for multiple points'),
                ' another point',
              ]}
            />
            <h3 className='resume-title'>Extracurricular Activities</h3>
            <Resumecontent
              title='Fill title'
              content={[
                'Fill description',
              ]}
            />
            <Resumecontent
              title='Fill title'
              content={[
                'Fill description',
              ]}
            /> */}
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Education</h3>
            <Resumecontent
              title='Computer Science & Engineering [SRM IST, Chennai] '
              date='2019 - Present'
              content={[`CGPA: ${cgpa} (For ${sem} Semesters)`]}
            />
            <Resumecontent
              title='12TH CBSE BOARD [Global Indian International School, Kuala Lumpur]'
              date='2018 - 2019'
              content={['Percentage: 77%']}
            />
            <Resumecontent
              title='10TH CBSE BOARD [Global Indian International School, Kuala Lumpur] '
              date='2016 - 2017'
              content={['10 CGPA']}
            />
            <h3 className='resume-title'>Ranks and Achivements</h3>
            <Resumecontent
              title=''
              content={[
                `Current rank in Codechef: ${codechefRank}`,
                `Current rank in Codeforces: ${codeforcesRank}`,
                'Participant in Bajaj Finserv HackRx 2021',
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Resume_2022.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const url1 = 'https://competitive-coding-api.herokuapp.com/api/codechef/pd28'
  const url2 = 'https://codeforces.com/api/user.info?handles=priyadarshss'

  const [codechefRating, upadteCodechefRating] = useState(0);
  const [codeforcesRating, upadteCodeforcesRating] = useState(0);
  const sem=5;
  const cgpa=9.45;

  useEffect(() => {
    axios
      .get(url1)
      .then((res) => {
        upadteCodechefRating(res.data.rating);
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
        upadteCodeforcesRating(res.data.result[0].rating)
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
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>Experience</h3>
            <Resumecontent
              title='Legal Factory'
              date='November 2021 - May 2022'
              content={[
                ' Designed and developed a Full-stack website.',
                ' Created admin and client dashboards and added functionality using MUI-Datatables.',
                ' Integrated payment gateway.',
                ' Tech Stack: Reactjs, MUI-V5, redux-thunk, firebase, figma',
              ]}
            />
            <Resumecontent
              title='Integrum Technologies'
              date='January 2022 - Present'
              content={[
                'To create a Decision Support System that can rank candidates or clients based on their Job Profiles and company requirements respectively.',
                'Tech Stack: Python, AWS',
              ]}
            />
            {/* <h3 className='resume-title'>Extracurricular Activities</h3>
            <Resumecontent title='Fill title' content={['Fill description']} />
            <Resumecontent title='Fill title' content={['Fill description']} /> */}
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
            <h3 className='resume-title'>Ratings and Achivements</h3>
            <Resumecontent
              title=''
              content={[
                `Current rating in Codechef: ${codechefRating}`,
                `Current rating in Codeforces: ${codeforcesRating}`,
                `Participant in Bajaj Finserv HackRx 2021`,
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

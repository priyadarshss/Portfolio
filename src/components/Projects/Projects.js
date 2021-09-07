import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import stockpedia from '../../Assets/Projects/stockpedia.png'
import sticky from '../../Assets/Projects/sticky-notes.png'
import coinWatch from '../../Assets/Projects/coin-watch.png'

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='orange'>Works</strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={coinWatch}
              title='CoinWatch'
              description='A cryptocurrency price tracker app made using React.js and Next.js. API calls to get the crypto data made from CoinGecko using Next.js functions. Hosted using Vercel platform.'
              code='https://github.com/priyadarshss/CoinWatch'
              website='https://coin-watch.vercel.app/'
              twoButtons='yes'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={sticky}
              title='Sticky Notes'
              description='A web browser extension that lets you annotate web pages and persists those annotations across page visits. Made using ReactJS and Chrome local storage.'
              code='https://github.com/priyadarshss/Sticky-Notes-Browser-Extension'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={stockpedia}
              title='Stockpedia'
              description='This web-app shows details about stocks/cryptocurrencies such as the opening , closing price, and more for technical analysis. Libraries used in this project include Bokeh, Pandas, Streamlit and Finnhub-python.'
              code='https://github.com/priyadarshss/Stockpedia'
              website='https://share.streamlit.io/priyadarshss/stockpedia/main.py'
              twoButtons='yes'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects

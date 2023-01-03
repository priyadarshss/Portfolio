import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import Stockpedia from '../../Assets/Projects/stockpedia.png'
import Sticky from '../../Assets/Projects/sticky-notes.png'
import CoinWatch from '../../Assets/Projects/coin-watch.png'
import Krate from '../../Assets/Projects/krate.png'
import Sav from '../../Assets/Projects/sorting-visualizer.png'
import Groove from '../../Assets/Projects/groove.png'
import Sociopad from '../../Assets/Projects/sociopad.png'

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
              imgPath={Groove}
              title='Groove'
              description='Groove is a music player built with ReactJS and blockchain technology. It utilizes IPFS for music file storage and Solidity for the backend. The app is powered by Hardhat and features login and transactions through Metamask. The user interface is designed with Material-UI.'
              code='https://github.com/priyadarshss/Groove'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Sociopad}
              title='Sociopad'
              description='A social media platform was developed using NextJS and Spring Boot. Data was fetched using Axios and state management was implemented with redux toolkit. User authentication was implemented using OAuth 2.0 and next-auth, and the UI was designed with Tailwind CSS and react icons.'
              code='https://github.com/priyadarshss/Sociopad'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Krate}
              title='Krate'
              description='A Web3.0 E-commerce website made using Reactjs; Moralis for backend.
                           Metamask for Authentication and as a payment gateway.
                           APIs for products, categories and Ethereum price were used.
                           Hosted using AWS Amplify and used Ant Design as the UI library'
              code='https://github.com/priyadarshss/Krate'
              website='https://main-b.d3f0uwwfr5gqzp.amplifyapp.com/'
              twoButtons='yes'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={CoinWatch}
              title='CoinWatch'
              description='A cryptocurrency price tracker app made using React.js and Next.js. API calls to get the crypto data made from CoinGecko using Next.js functions. Hosted using Vercel platform.'
              code='https://github.com/priyadarshss/CoinWatch'
              website='https://coin-watch.vercel.app/'
              twoButtons='yes'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Sticky}
              title='Sticky Notes'
              description='A web browser extension that lets you annotate web pages and persists those annotations across page visits. Made using ReactJS and Chrome local storage.'
              code='https://github.com/priyadarshss/Sticky-Notes-Browser-Extension'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Sav}
              title='Sorting Visualizer'
              description='An Algorithm based sorting visualizer made using Pygame module. Used concepts of in-place sorting algorithms such as Bubble sort and Insertion sort. Converted into an executable file using pyinstaller module'
              code='https://github.com/priyadarshss/Sorting-Visualizer'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Stockpedia}
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

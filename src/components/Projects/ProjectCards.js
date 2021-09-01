import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  if(props.twoButtons){
    return (
      <Card style={{ width: '23rem' }} className='project-card-view'>
        <Card.Img variant='top' src={props.imgPath} alt='card-img' />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            {props.description}
          </Card.Text>
          <Button
            variant='primary'
            href={props.website}
            target='_blank'
            rel='noopener'
          >
            <BiLinkExternal /> &nbsp;
            {'View Website'}
          </Button>
          {'. . .'}
          <Button
            variant='primary'
            href={props.code}
            target='_blank'
            rel='noopener'
          >
            <BiLinkExternal /> &nbsp;
            {'Source Code'}
          </Button>
        </Card.Body>
      </Card>
    )
  }
  else{
    return (
      <Card style={{ width: '23rem' }} className='project-card-view'>
        <Card.Img variant='top' src={props.imgPath} alt='card-img' />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            {props.description}
          </Card.Text>
          
          <Button
            variant='primary'
            href={props.code}
            target='_blank'
            rel='noopener'
          >
            <BiLinkExternal /> &nbsp;
            {'Source Code'}
          </Button>
        </Card.Body>
      </Card>
    )
  }
}
export default ProjectCards;

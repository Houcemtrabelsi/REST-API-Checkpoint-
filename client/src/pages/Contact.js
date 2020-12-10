import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, CommentAction, Image } from 'semantic-ui-react'
import {deleteContact}from "../js/actions/Contact"

const Contact = ({contact}) => {
    const dispatch = useDispatch()
    return(
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Description>
          {contact.phone}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button inverted color='green'>
            EDIT
          </Button>
          <Button inverted color='red'onClick={dispatch(deleteContact(contact._id))}>
            DELETE
          </Button>
        </div>
      </Card.Content>
    </Card>
   
  </Card.Group>
)}

export default Contact

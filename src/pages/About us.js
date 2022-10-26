import React from 'react'
  import {Segment, Grid, Button, Checkbox, Comment, Container, Form, GridColumn, GridRow } from 'semantic-ui-react'

export default function Aboutus() 
{
  return (
  
     <Container>
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <h3>DKV-SANGAM KEELKATTALAI</h3>
              <h3>Contact details:</h3>
              Address info:
            </Grid.Column>
  
            <Grid.Column>
  
            <Form widths='11'>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Input label='Email' placeholder='joe@schmoe.com' />
    </Form>
      <Comment.Group>
          <Comment.Content>
            <Comment.Author as='a'>Member's</Comment.Author>
            <Comment.Actions>
              <Comment.Action active>Querys</Comment.Action>
            </Comment.Actions>
            <Form reply>
              <Form.TextArea />
              <Button
                content='Add Reply'
                labelPosition='left'
                icon='edit'
                primary />
                 <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
            </Form>
          </Comment.Content>
      </Comment.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
        </Container>
  )

  
}

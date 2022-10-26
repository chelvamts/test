import React, { Component } from 'react';
import "./styles.css"
import { Button,  Menu ,Container,segment,Form,Checkbox,Table,Grid} from 'semantic-ui-react';

export default function Home() {
  return (

        <segment>
        
      <Table>
     
   
     <Table.Body>
       <Table.Row>
       <Table.Cell width={10}>
   <img src="/MCCG3.jpg" alt='gallerynew' width={350}/>
   </Table.Cell>
  
   <Table.Cell>
     <h1>Login</h1>
   <Form widths='5'>
   <Form.Field>
       <label> Name</label>
       <input placeholder=' Name' />
       We'll never share your email with anyone else.
     </Form.Field>
     <Form.Field>
       <label>Password</label>
       <input placeholder='Password' />
       </Form.Field>
     <Form.Input>
       <Checkbox label='I agree to the Terms and Conditions' />
       </Form.Input>
  
     <Button  type='submit'   color='blue'>Submit</Button>
   </Form>
   </Table.Cell>
   </Table.Row>
   </Table.Body>
   </Table>
  
   <div className="footer">
  <Grid>
  
  <Grid.Row>
    <Grid.Column widescreen={4}>
   
      <p> <h3> DKV Sangam-Keelkattalai </h3> </p>
      </Grid.Column>
      <Grid.Column>
      <p>    <Button circular color='google plus' icon='google plus' /> </p>
      </Grid.Column>
      <Grid.Column>
      <p><Button circular color='facebook' icon='facebook' /></p>
      </Grid.Column>
      <Grid.Column>
      <p>   <Button circular color='linkedin' icon='linkedin' /> </p>  
    </Grid.Column>
    <Grid.Column>
      <p>  <Button circular color='twitter' icon='twitter' /></p>
      </Grid.Column>
    </Grid.Row>
   
  
    </Grid>
    </div>
     
      </segment>
  )
    }


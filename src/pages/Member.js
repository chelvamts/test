import { Button,  Menu ,Container,Item,Image,Table,Input,Grid} from 'semantic-ui-react'
import React from 'react'

export default function Member() {
  return <div><h1>List of Member</h1>

  <segment>

<h1><center> Member List </center></h1>

<Button Align ='right'  color='green'>Add new</Button>

<Input
      action={{ color: 'blue', content: 'Search' }}
      icon='search'
      iconPosition='left'
      placeholder='Search #'
    />


<Table celled  selectable>
    <Table.Header >
      <Table.Row>
        <Table.HeaderCell>Member:ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Mobile:No</Table.HeaderCell>
        <Table.HeaderCell>Membership:plan</Table.HeaderCell>
        <Table.HeaderCell>DATE:join</Table.HeaderCell>
        <Table.HeaderCell>Address     :</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell> 
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
 

</segment></div>
}

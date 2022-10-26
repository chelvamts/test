import { Button,  Menu ,Container,segment,Checkbox,Table,Input} from 'semantic-ui-react'



export default function Committee()
 {
  return <Container className='membck'>

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
          <Table.HeaderCell>Member ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Mobile No</Table.HeaderCell>
          <Table.HeaderCell>Membership plan</Table.HeaderCell>
          <Table.HeaderCell>Date of joining</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
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
        <Table.Cell textAlign='left'> <i class="edit icon" Bordered></i>
        <i class="trash icon" Bordered></i></Table.Cell>
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
        
        <Table.Cell textAlign='left'> <i class="edit icon" bordered></i>
        <i class="trash icon" bordered></i></Table.Cell> 
        </Table.Row>
      </Table.Body>
    </Table>
  <div>


    <h1>
      <br>
      
      
      
      
      
      
      
      
      </br>













    </h1>
  </div>
  
  </Container>
}

import Table from 'react-bootstrap/Table';


function Table_data(actual_students){

    return (
      <Row style={{marginTop:"20px"}}>
          <Col className="mb-3">
          <Table striped bordered hover variant="dark" className="mb-3">
        <thead>
          <tr className="mb-3">
            <th>#</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          
  
  
        {actual_students.map((listValue, index) => (  
            
                <tr key={index}>
                  
                <td>{listValue.id}</td>
                <td>{listValue.name}</td>
                <td>{listValue.roll_no}</td>
                <td>{listValue.marks}</td>
              </tr>
             
          ))}  
  
          
          
        </tbody>
      </Table>
          </Col>
        </Row>
    )
  
  
  }



  export default Table_data;
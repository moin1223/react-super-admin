import React from 'react'
import { Table } from 'react-bootstrap'

const CustomTable = () => {
    let testData = [

        {
          "id": "1",
        
          "name": "test",
          "namespace": "test",
          "description": "test",
        },
        {
          "id": "2",
          "name": "test2",
          "namespace": "test2",
          "description": "test2",
        } ]
        let headers = Object.keys(testData[0]);
  return (
<>
<Table striped bordered hover size="sm">
<thead>
      <tr>
       {
         headers.map(header => {
          return <th>{header}</th>
        })
        }
      </tr>
    </thead>
    <tbody>
      { 
        testData.map(({id, name, namespace, description}) => {
          return <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{namespace}</td>
            <td>{description}</td>
        </tr>
      })
      }
      
    </tbody>
    </Table>
</>
  )
}

export default CustomTable
import React from 'react'
import LoginForm from './componenrs/form/loginform/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomTable from './componenrs/CustomTable';
import { BiShow} from 'react-icons/bi';
import { BiEdit} from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { Table } from 'react-bootstrap';

const App = () => {
 const buttons = 
 [
  {
    key:'show',
    path:'/',
    icon:<BiShow />,
    className:'btn btn-sm btn-info',
  
   },
 {
key:'edit',
path:'/',
icon:<BiEdit />,
className:'btn btn-sm btn-info'

 },
 {
  key:'delete',
  type:'submit',
  icon:<MdDeleteOutline />,
  className:'btn btn-sm btn-info',
 }

 ]

  
  return (
<>

      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
            <a>azb</a>
            <a>azb</a>
            <a>azb</a>
            </td>
            </tr>

            </tbody>
      </Table>

</>
  )
}

export default App
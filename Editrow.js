// import React from 'react'
import React from 'react'
export const Editrow = ({ AllData, editForm, edit}) => {


return (


    <tr>
        {
             AllData.map((e)=>
                 <td><input type="text" name={e.name} id="editInput" value={edit[e.name]}  onChange={(E)=>editForm(e.name, E.target.value)}/></td>
             )
           

 
        }
<td>
<button type='submit'>Save</button>
    </td>
    </tr>
  )
}
// ReactDOM.render(<Editrow/>, document.querySelector('.box1'))
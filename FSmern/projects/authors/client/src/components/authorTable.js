import React from 'react'
import Edit from '../components/editButton'
import Delete from '../components/deleteButton'

const Table = () => {
  return (
    <div>
        <div className='authorTable'>
              <tr>
                  <th>
                      author
                  </th>
                  <th>
                      actions available
                  </th>
              </tr>
              <tr>
                  <td>
                      author one
                  </td>
                  <td>
                      <Edit /> / <Delete />
                  </td>
              </tr>
          </div>
    </div>
  )
}

export default Table
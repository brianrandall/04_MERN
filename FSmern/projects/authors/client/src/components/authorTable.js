import React, { useState, useEffect } from 'react'
import Edit from '../components/editButton'
import Delete from '../components/deleteButton'
import axios from 'axios'

const Table = () => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8007/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [authors])

  return (
      <div>
        <div className='authorTable'>
            <table className='authTable'>
            <tr>
                  <th>
                      author
                  </th>
                  <th>
                      actions available
                  </th>
            </tr>
            {authors.map((author, i) => {
                return (
                    <tr key={i}>
                        <td>
                            {author.name}
                        </td>
                        <td>
                            <div className='tableButtons'>
                            <Edit id={author._id} /> <Delete id={author._id} />
                            </div>
                        </td>
                    </tr>
                )
            }
            )}
            </table>
        </div>
      </div>
  )
}

export default Table

{/* <div className='authorTable'>
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
          </div>  */}
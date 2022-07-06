import React from 'react'

export default function MyTable({data}) {
  return (
    <tr>
        <td>
            {data.id}

        </td>

        <td>
            {data.title}

        </td>

        <td>
            {data.description}

        </td>

        <td>
            {data.price}

        </td>

        <td>
            <img src={data.image} width="200" height="200" />
        </td>



    </tr>
  )
}

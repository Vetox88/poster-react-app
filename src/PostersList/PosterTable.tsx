import React from 'react'
import './style.css'
import { TableContainer } from './TableContainer'

const PosterTable = (props: any) => (
    <TableContainer style={{ display: 'flex' }}>
        <table style={{}} >
            <thead >
                <tr style={{ background: 'black', color: 'white' }}>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Artist</th>

                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody >
                {props.users.length > 0 ? (
                    props.users.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.type}</td>
                            <td>{user.artist}</td>

                            <td>{user.status}</td>
                            <td>


                                <button style={{ margin: '5px' }} onClick={() => props.deleteUser(user.id)}
                                    className="button muted-button" >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td colSpan={3}>No Art</td>
                        </tr>
                    )}
            </tbody>
        </table >
    </TableContainer >
)

export default PosterTable

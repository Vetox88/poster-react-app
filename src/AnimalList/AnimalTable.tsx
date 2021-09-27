import React from 'react'
import './style.css'
import { TableContainer } from './TableContainer'

const AnimalTable = (props: any) => (
    <TableContainer style={{ display: 'flex' }}>
        <table style={{}} >
            <thead >
                <tr style={{ background: 'black', color: 'white' }}>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Breed</th>
                    <th>Age</th>
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
                            <td>{user.breed}</td>
                            <td>{user.age}</td>
                            <td>{user.status}</td>
                            <td>
                                {user.status === 'booked'
                                    ? <button style={{ margin: '5px' }} className="button muted-button" >
                                        Adopt
                                    </button>
                                    : <button disabled style={{ margin: '5px' }}>
                                        Adopt
                                    </button>}

                                <button style={{ margin: '5px' }} onClick={() => props.deleteUser(user.id)}
                                    className="button muted-button" >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
            </tbody>
        </table >
    </TableContainer >
)

export default AnimalTable

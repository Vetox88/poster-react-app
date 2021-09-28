import React, { useState } from 'react'
import AnimalTable from './PosterTable'
import NavigationBar from '../CardView/NavigationBar'

const PostersCrudMain = () => {
  // Data
  const usersData = [
    { id: 1, name: 'streetArt', type: 'Abstract', artist: 'Chris', status: 'sold' },
    { id: 2, name: 'Cat picture', type: 'Art', artist: 'Mouna', status: 'sold' },
    { id: 3, name: 'Hello', type: 'Portrait', artist: 'Ben', status: 'in stock' },
    { id: 4, name: 'Dog picture', type: 'Portrait', artist: 'Sam', status: 'sold' },
    { id: 5, name: 'Motivation', type: 'Art', artist: 'Emil', status: 'in stock' },
    { id: 6, name: 'Car', type: 'Portrait', artist: 'Jose', status: 'in stock' },
    { id: 7, name: 'Ferrari', type: 'Portrait', artist: 'Dexter', status: 'sold' },
    { id: 8, name: ' Jack Sparrow', type: 'Art', artist: 'Rex', status: 'in stock' },
    { id: 9, name: 'Paris', type: 'Art', artist: 'Adam smith', status: 'sold' },
    { id: 10, name: 'New York', type: 'Portrait', artist: 'Kim', status: 'in stock' },
    { id: 11, name: 'Rio', type: 'Art', artist: 'Sarra', status: 'sold' },
    { id: 12, name: 'Tokyo', type: 'Art', artist: 'Lars', status: 'in stock' },
  ]

  const [users, setUsers] = useState(usersData)

  const deleteUser = (id) => {

    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <div >
        <div className="flex-large">
          < NavigationBar />
          <AnimalTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default PostersCrudMain

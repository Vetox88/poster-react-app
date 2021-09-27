import React, { useState } from 'react'
import AnimalTable from './AnimalTable'
import NavigationBar from '../AnimalCardView/NavigationBar'

const AnimalCrudMain = () => {
  // Data
  const usersData = [
    { id: 1, name: 'Tania', type: 'Dog', breed: 'Airedale Terrier', age: '1', status: 'Unadopted' },
    { id: 2, name: 'Rambo', type: 'Dog', breed: 'Australian Shepherd', age: '1', status: 'booked' },
    { id: 3, name: 'Rico', type: 'Cat', breed: 'Cornish Rex', age: '1', status: 'adopted' },
    { id: 4, name: 'Pam', type: 'Cat', breed: 'Birman', age: '1', status: 'booked' },
    { id: 5, name: 'Ferrari', type: 'Dog', breed: 'Beagle', age: '1', status: 'adopted' },
    { id: 6, name: 'Riri', type: 'Cat', breed: 'Burmese', age: '1', status: 'Unadopted' },
    { id: 7, name: 'Kato', type: 'Cat', breed: 'Devon Rex', age: '1', status: 'booked' },
    { id: 8, name: 'Sparrow', type: 'Dog', breed: 'Bichon Frise', age: '1', status: 'Unadopted' },
    { id: 9, name: 'Lou', type: 'Dog', breed: 'French Bulldog', age: '1', status: 'booked' },
    { id: 10, name: 'Britney', type: 'Cat', breed: 'Sphynx', age: '1', status: 'adopted' },
    { id: 11, name: 'Bill', type: 'Dog', breed: 'Chihuahua', age: '1', status: 'booked' },
    { id: 12, name: 'Tokyo', type: 'Dog', breed: 'German Shepherd', age: '1', status: 'Unadopted' },
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

export default AnimalCrudMain

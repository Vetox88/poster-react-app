import React, { useState, useEffect } from 'react'
import axios from "axios";
import Loading from '../components/Loading'
import AnimalList from './AnimalList'
import NavigationBar from './NavigationBar'
import { Link } from 'react-router-dom'
/* eslint-disable jsx-a11y/img-redundant-alt */

import { Image } from '../components/Image'
import { DogCard } from '../components/DogCard'
import { HeaderCard } from '../Header/HeaderCard'
import { Card } from '../components/Card'
import { CatHead } from '../components/CatHead'
import { DogHead } from '../components/DogHead'
import { IconContainer } from '../components/IconContainer'
import { HeaderContainer } from '../Header/HeaderContainer'
import { Row } from '../components/Row'
import { Column } from '../components/Column'
import { Title } from '../components/Title'
import { Name } from '../components/Name'
import moment from 'moment'
import { Break } from '../components/Break'

const url = 'http://localhost:3000/animals';
function App() {

  const [animals, setanimals] = useState();
  const [search, setSearch] = useState(animals);

  useEffect(() => {
    axios.get(url).then((result) => {
      setanimals(result.data);

    });
    setanimals()
  }, [search]);

  function handleEventSearch(event) {
    setSearch(event.target.value)
  }

  return (

    <>
      <div style={styles.container}>
        <div style={styles.companyTitle}>
          Wall-Posters
        </div>
        <input
          type='text'
          placeholder='search...'
          onChange={handleEventSearch}
        ></input>
        <Link style={{ padding: '0 20px' }} to="/">List Of Posters</Link>

        < Link to="/admin">administration</Link>
      </div>

      {animals ? < Card className="list-group" >
        {animals.filter((value) => {
          if (search === " ") {
            return value
          }
          if (value.title.toLowerCase().startsWith(search)) {
            return value
          }

        }).map((animals) => {

          return <DogCard  >
            <HeaderContainer >
              <HeaderCard >
                <Image>
                  <img src={animals.photo}
                    width='120px'
                    height='120px'
                    alt=''
                  />
                </Image>

                <Name>{animals.title}</Name>
                <Name style={{
                  fontSize: '60px',
                  color: '#FF10F0',
                  textAlign: 'center'
                }}>{animals.description}</Name>

              </HeaderCard>
            </HeaderContainer>
          </DogCard>
        })
        }
      </Card > : < Loading />}
    </>
  );
}

export default App;

const styles = {
  companyTitle: {
    marginBottom: '8px',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'flex',
  },

  container: {
    paddingTop: '8px',
    background: '#C9C9C9',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center'

  },
  button: {

    marginTop: '12px',
    color: 'black',
    fontSize: '16px',
    marginBottom: '18px',
    background: 'transparent',
    paddingLeft: '10px',

    border: 'none',
  },
  button2: {

    marginTop: '12px',
    color: 'black',
    fontSize: '16px',
    marginBottom: '18px',
    background: 'transparent',
    paddingLeft: '40px',
    border: 'none',
  },

  title: {
    color: '#A9A9A9',
    fontSize: '14px',
    textAlign: 'start',
    fontWeight: 'bold',
    marginTop: '4px',
  },
  subTitle: {
    color: 'black',
    fontSize: '18px',
    textAlign: 'justify',
  },
  button: {
    color: 'black',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid black',
    paddingTop: '8px',
    fontWeight: '500',
    background: 'white',
    width: '100%',
    border: 'none',
  },
  buttonAdpot: {
    color: 'black',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid black',
    paddingTop: '8px',
    fontWeight: 'bold',
    background: 'white',
    width: '30%',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 5px -1px rgba(0,0,0,0.2)',
  },


}





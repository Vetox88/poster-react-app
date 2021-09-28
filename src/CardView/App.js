import React, { useState, useEffect } from 'react'
import axios from "axios";
import Loading from '../components/Loading'
import NoResults from '../components/NoResults'
import { Link } from 'react-router-dom'
/* eslint-disable jsx-a11y/img-redundant-alt */

import { Image } from '../components/Image'
import { MainCard } from '../components/MainCard'
import { HeaderCard } from '../Header/HeaderCard'
import { Card } from '../components/Card'
import { HeaderContainer } from '../Header/HeaderContainer'
import { Name } from '../components/Name'

const url = 'http://localhost:3000/posters';
function App() {

  const [posters, setposters] = useState();
  const [search, setSearch] = useState([posters]);


  useEffect(() => {
    axios.get(url).then((result) => {
      setposters(result.data);

    });
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
        <Link to="/admin">administration</Link>
      </div>

      {posters ? < Card className="list-group" >
        {posters.filter((value) => {
          if (search === '' || value.title.toLowerCase().includes(search)) {
            return value
          }
        }).map((posters) => {
          return (<MainCard >
            <HeaderContainer >
              <HeaderCard >
                <Image>
                  <img src={posters.photo}
                    width='120px'
                    height='120px'
                    alt=''
                  />
                </Image>
                <Name>{posters.title}</Name>
                <Name style={{
                  fontSize: '60px',
                  color: '#FF10F0',
                  textAlign: 'center'
                }}>{posters.description}</Name>

              </HeaderCard>
            </HeaderContainer>
          </MainCard>)
        })
        }
      </Card >
        : <Loading />}
    </>
  );
}

export default App;

const styles = {
  companyTitle: {

    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'flex',
    padding: '0 20px'
  },

  container: {
    paddingTop: '8px',
    background: '#C9C9C9',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center'

  },

  title: {
    color: '#A9A9A9',
    fontSize: '14px',
    textAlign: 'start',
    fontWeight: 'bold',
    marginTop: '4px',
  },

}





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

const AnimalList = ({ animals }) => {
    return (
        < Card className="list-group" >
            {
                animals.map((animals) => (
                    <DogCard  >
                        <HeaderContainer >
                            <HeaderCard >
                                <Image>
                                    <img src={animals.photo}
                                        width='120px'
                                        height='120px'
                                        alt='Picture of a cute animal' />
                                </Image>

                                <Name>{animals.title}</Name>
                                <Name style={{ fontSize: '60px', color: '#FF10F0', textAlign: 'center' }}>{animals.description}</Name>

                            </HeaderCard>
                        </HeaderContainer>




                    </DogCard>
                ))
            }
        </Card >
    );
};

export default AnimalList;

const styles = {

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



};
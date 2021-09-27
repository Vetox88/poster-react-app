import React from "react";
import { Link } from 'react-router-dom'

function NavigationBar(props) {
    return (
        <div style={styles.container}>
            <div style={styles.companyTitle}>
                IPosters
            </div>
            <input
                type='text'
                placeholder='search...'
                onChange={props.handleEventSearch}
            ></input>
            <Link style={styles.button} to="/">Adopt an animal</Link>

            < Link style={styles.button2} to="/admin">administration</Link>
        </div>
    );
}
export default NavigationBar;

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
    }

}
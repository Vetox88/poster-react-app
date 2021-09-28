import React from "react";
import { Link } from 'react-router-dom'

function NavigationBar(props) {
    return (
        <div style={styles.container}>
            <div style={styles.companyTitle}>
                Wall-Posters
            </div>

            <Link style={{ padding: '0 20px' }} to="/">back</Link>

            < Link style={styles.button2} to="/admin"></Link>
        </div>
    );
}
export default NavigationBar;

const styles = {
    companyTitle: {
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

}
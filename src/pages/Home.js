import React from 'react'
import { connect } from 'react-redux';

function Home(props) {

    return (
        <div style={styles.root}>
            <h1>This is redux object</h1>
            <div>{JSON.stringify(props.user)}</div>
        </div>
    )
}
const styles = {
    root: {
        marginTop:50
    }
}
const mapStateToProps = () => state => {
    return {
        user: state.auth
    };
};

export default connect(mapStateToProps)(Home);

import React from 'react'
import { connect } from 'react-redux';
import CreateProduct from '../sections/CreateProduct'
function Home(props) {

    return (
        <div style={styles.root}>
            <h1>This is redux object</h1>
            
            <div>
            {/* <Slider /> */}
            <CreateProduct />

            </div>
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

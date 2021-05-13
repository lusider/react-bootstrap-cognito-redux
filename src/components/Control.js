import React from 'react'
import { connect } from 'react-redux'



function Control() {
    return (
        <ItemCard />
    )
}

const mapStateToProps = state => {
    return {
      croppedImage: state.pendant.croppedImage
    }
  }
  export default connect(mapStateToProps)(Control)
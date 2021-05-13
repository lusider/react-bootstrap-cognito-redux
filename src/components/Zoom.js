import React from 'react'
import { connect } from 'react-redux'
import { onZoomChange } from '../backend/redux/actions'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import { styles } from './styles'

const Zoom = (props) => {
	
	const handleChange = (zoom) => {
    	props.onZoomChange(zoom)
  	}

	return (
        <div className="controls">
            <Typography variant="overline" classes={{ root: styles.sliderLabel }}>
                Zoom
            </Typography>
            <Slider
                value={props.zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e, zoom) => handleChange(zoom)}
                classes={{ container: styles.slider }}
            />
      </div>
	)
}

const mapStateToProps = state => {
	return {
		zoom: state.createPendant.zoom
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onZoomChange: zoom => dispatch(onZoomChange(zoom))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Zoom)
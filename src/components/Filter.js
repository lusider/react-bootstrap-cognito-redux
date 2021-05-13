import React from 'react'
import { connect } from 'react-redux'
import { onFilterChange } from '../backend/redux/actions'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import { styles } from './styles'



const Filter = (props) => {

    const handleChange = (filter) => {
    	props.onFilterChange(filter)
  	}
	return (
        <div>
          	<div className={styles.controls}>
            	<div className={styles.sliderContainer}>
	              	<Typography
		                variant="overline"
		                classes={{ root: styles.sliderLabel }}
	                >
	               		Select Filter
	              	</Typography>
	          		<Slider
		                value={props.filter}
		                min={0}
		                max={4}
		                step={1}
		                aria-labelledby="Select Filter"
		                classes={{ container: styles.slider }}
	            	    onChange={(e, filter) => handleChange(filter)}
	          		/>
	            </div>
        	</div>
      	</div>
	)
}

const mapStateToProps = state => {
	return {
		filter: state.createPendant.filter

	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFilterChange: filter => dispatch(onFilterChange(filter))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
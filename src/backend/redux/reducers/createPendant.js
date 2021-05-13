import { 
	ON_CROP_CHANGE, 
	ON_CROP_COMPLETE, 
	ON_FILTER_CHANGE, 
	ON_PENDANT_CHANGE, 
	ON_STEP_CHANGE, 
	ON_IMAGE_UPLOAD, 
	ON_ZOOM_CHANGE, 
	SHOW_CROPPED_IMAGE, 
	RESET_PRODUCT, 
	ON_TITLE_CHANGE, 
	ON_DESCRIPTION_CHANGE } from '../types'

const intialState = {
	crop: { x: 0, y: 0 },
    croppedAreaPixels: null,
    image: 'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000',
    zoom: 1,
    croppedImage: '',
    step: "upload",
    pendant: 0,
    filter: 0,
	title: "",
	description: ""
}

const createPendant = (state = intialState, action) => {
	switch(action.type) {
		case ON_CROP_CHANGE: 
			return {
			...state, 
			crop: action.payload }
        case ON_FILTER_CHANGE: 
			return {
			...state, 
			filter: action.payload }
        case ON_CROP_COMPLETE: 
			return {
			...state, 
			croppedAreaPixels: action.payload }
        case ON_IMAGE_UPLOAD: 
			return {
			...state, 
			image: action.payload }
        case ON_ZOOM_CHANGE: 
			return {
			...state, 
			zoom: action.payload }
        case ON_PENDANT_CHANGE: 
			return {
			...state, 
			pendant: action.payload }
        case SHOW_CROPPED_IMAGE: 
			return {
			...state, 
			croppedImage: action.payload }
	    case ON_TITLE_CHANGE: 
			return {
			...state, 
			title: action.payload }	
		case ON_DESCRIPTION_CHANGE: 
			return {
			...state, 
			description: action.payload }
        case ON_STEP_CHANGE: 
			return {
			...state, 
			step: action.payload }
		case RESET_PRODUCT:
			return {
				...intialState,
			}
		default:
			return state
	}
}

export default createPendant
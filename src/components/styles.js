export const styles = theme => ({
    container: {
      position: 'relative',
      height: 120,
      width: 208,
      marginLeft: 46,
      marginTop: 20
    },
    media: {
  
    },
    previewStyle: {
      height: 150,
      width: 150,
    },
    
    previewContainer: {
      position: 'relative',
      width: 150,
      height: 50,
      background: '#333',
      [theme.breakpoints.up('sm')]: {
        height: 50,
      },
    },
    cropStyle: {
      height: 'auto',
      width: '100%',
    },
    
    cropContainer: {
      position: 'relative',
      width: '18 rem',
      height: 'auto',
      background: '#333',
      [theme.breakpoints.up('sm')]: {
        height: 50,
      },
    },
    cropButton: {
      flexShrink: 0,
      marginLeft: 16,
    },
    controls: {

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    sliderContainer: {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
    },
    sliderLabel: {
      [theme.breakpoints.down('xs')]: {
        minWidth: 65,
      },
    },
    slider: {
      padding: '0px',
      marginLeft: 16,
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 16px',
      },
    },
  })
  


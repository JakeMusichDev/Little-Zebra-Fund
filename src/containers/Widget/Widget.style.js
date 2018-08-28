import { StyleSheet  } from 'aphrodite'
import {breakPoints, colors} from '../../utils/styles'

export const widgetStyles = StyleSheet.create({
  widgetContainer: {
    height: '100%',
    background: `white`,
    display: 'flex',
    flexDirection: 'row',
    [breakPoints.tablet]: {
      flexDirection: 'column',
    },
    [breakPoints.mobile]: {
      flexDirection: 'column',
    }
  },
  header: {
    textAlign: 'center',
    color: `${colors.green}`,
    fontSize: 18,
    margin: '25px 0px'
  },
  formContainer: {
    width: '60%',
    height: '100%',
    margin: '25px',
    [breakPoints.tablet]: {
      margin: '0px',
      width: '100%',
    },
    [breakPoints.mobile]: {
      margin: '0px',
      width: '100%',
    }
  },
  imageContainer: {
    width: '40%',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    [breakPoints.tablet]: {
    height: '250px',
      width: '100%',
    },
    [breakPoints.mobile]: {
    height: '250px',
      width: '100%',
      padding: '0',
    }
  },
})
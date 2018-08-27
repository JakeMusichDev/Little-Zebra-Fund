import { StyleSheet  } from 'aphrodite'
import {breakPoints, colors} from '../../utils/styles'

export const widgetStyles = StyleSheet.create({
  widgetContainer: {
    border: '1px solid pink',
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
    background: 'pink',
    width: '40%',
    height: '250px',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    [breakPoints.tablet]: {
      width: '100%',
    },
    [breakPoints.mobile]: {
      width: '100%',
      padding: '0',
    }
  },
})
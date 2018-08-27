const MOBILE_MAX = '480px'
const TABLET_MIN = '481px'
const TABLET_MAX = '800px'
const DESKTOP_MIN = '1200px'

export const breakPoints = {
  mobile: `@media only screen and (max-width:${MOBILE_MAX})`,
  tablet: `@media only screen and (min-width:${TABLET_MIN}) and (max-width: ${TABLET_MAX})`,
  desktop: `@media only screen and (min-width:${DESKTOP_MIN})`,
}

export const colors = {
  offWhite: '#f4f4f4', //(Page Background)
  widgetWhite: '#ffffff)', //(Widget Background)
  grey: '#474c55', // (Text, Secondary Buttons) 
  green: '#6db420', // (Primary Buttons, Widget Title)
  yellow: '#fec01e', // (Tertiary Buttons, Page Border)
  white: '#fff'
}
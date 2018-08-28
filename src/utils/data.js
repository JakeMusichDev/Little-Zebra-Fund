import twitter from '../assets/twitter-logo.svg'
import fb from '../assets/facebook-logo.svg'
import youtube from '../assets/youtube-logo.svg'
import giraffe from '../assets/giraffe-image.jpg'
import tiger from '../assets/tiger-image.jpg'
import rhino from '../assets/rhino-image.jpg'


const whoWeAre = ['Our history', 'Press centre', 'Contact us']
const involved = ['Join us', 'Donate', 'Careers', 'Shop']
const socials = [twitter, fb, youtube]

export const footerData = [{
    header: 'who we are',
    links: whoWeAre,
    vertical: true,
    type: 'text'
  },
  {
    header: 'get involved',
    links: involved,
    vertical: true,
    type: 'text'
  },
  {
    header: 'follow us',
    links: socials,
    vertical: true,
    type: 'image'
  },
]

export const headerMenuItems = ['What We Do', 'Get Involved', 'Shop', 'News']


export const animalFormData = [{
    name: 'giraffe',
    image: giraffe
  },
  {
    name: 'rhino',
    image: rhino
  },
  {
    name: 'tiger',
    image: tiger
  }
]
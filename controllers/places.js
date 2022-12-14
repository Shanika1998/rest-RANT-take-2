const router = require('express').Router()
const places = require('../models/places')

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
router.get('/', (req, res) => {
    let places = [{
        name: 'Pressed Cafe',
        city: 'Burlington',
        state: 'MA',
        cuisines: 'Health Drinks, American',
        pic: 'images/pressed_cafe.jpg'
      }, {
        name: 'Footprints Cafe',
        city: 'Brooklyn',
        state: 'NY',
        cuisines: 'Jamaican',
        pic: 'images/footprints-cafe.jpg'
      }]
      
    res.render('places/index', { places })
})
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  

module.exports = router

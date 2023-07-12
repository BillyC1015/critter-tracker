const router = require('express').Router();
const { Project, User, Animal } = require('../models');
const withAuth = require('../utils/auth');

router.get('/maps', withAuth, async (req, res) => {
  MAPQUEST_API_KEY = process.env.MAPQUEST_API_KEY;
  const animalData = await Animal.findAll({
    // include user data here-Billy
  })
  const animals = animalData.map(animal => animal.get({
    plain: true
  }))
  res.render('maps', {
    MAPQUEST_API_KEY,
    animals,
    logged_in: req.session.user_id ? true : false
  })
})

router.get('/upload-pic', withAuth, async (req, res) => {
  const animalData = await Animal.findAll({
  })
  const animals = animalData.map(animal => animal.get({
    plain: true
  }))
  console.log(animals)
  res.render('upload-pic', {
    animals
  })
});


// the following lines set up a way to get the information of a single animal to put on a card on the map then we can access that info when it is clicked on
router.get('/animalProfile/:id', withAuth, async (req, res) => {

  const animalData = await Animal.findOne({
    where: { id: req.params.id }
  })

  const animal = animalData.get({ plain: true })
  

  console.log(animalData)
  res.render('animalProfile', {
    animal,
    ...User,
    logged_in: req.session.user_id ? true : false
  })
});

router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in
  });
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Animal }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: req.session.user_id ? true : false
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/animal', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Animal }],
    });

    const user = userData.get({ plain: true });

    res.render('animal', {
      ...user,
      logged_in: req.session.user_id ? true : false
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

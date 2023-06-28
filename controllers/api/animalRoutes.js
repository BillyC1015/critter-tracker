const router = require('express').Router();
const { Animal } = require('../../models');
// const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newAnimal = await Animal.create({
      ...req.body,
    //   user_id: req.session.user_id,
    });

    res.status(200).json(newAnimal);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const animalData = await Animal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!animalDataData) {
      res.status(404).json({ message: 'No animal found with this id!' });
      return;
    }

    res.status(200).json(animalDataData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
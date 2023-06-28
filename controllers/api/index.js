const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const seedDbRoute = require("./seedDB");
const animalRoutes = require("./animalRoutes")
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/seedDb', seedDbRoute);
router.use('/animals', animalRoutes);
module.exports = router;
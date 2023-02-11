const express = require('express');
const router = express.Router();
const testimonialsController = require('../controllers/testimonials.controller');

router.get('/testimonials/random', testimonialsController.getRandom);
router.get('/testimonials', testimonialsController.getAll);
router.get('/testimonials/:id', testimonialsController.getById);
router.post('/testimonials', testimonialsController.add);
router.put('/testimonials/:id', testimonialsController.edit);
router.delete('/testimonials/:id', testimonialsController.remove);

module.exports = router;
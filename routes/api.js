const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
//const authMiddleware = require('../middleware/authMiddleware');


/*router.post('/items', authMiddleware, itemController.createItem);
router.get('/items', authMiddleware, itemController.getAllItems);
router.get('/items/:id', authMiddleware, itemController.getItem);
router.put('/items/:id', authMiddleware, itemController.updateItem);
router.delete('/items/:id', authMiddleware, itemController.deleteItem);*/

router.post('/items/:token', itemController.createItem);
router.get('/items/:token', itemController.getAllItems);
router.get('/items/:id/:token', itemController.getItem);
router.put('/items/:id/:token', itemController.updateItem);
router.delete('/items/:id/:token', itemController.deleteItem);

module.exports = router;
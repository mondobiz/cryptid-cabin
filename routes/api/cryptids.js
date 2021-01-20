
const express = require('express');
const router = express.Router();
const cryptidData = require('../../controllers/cryptids');

router.get('/', cryptidData.getCryptids);
router.post('/', cryptidData.createCryptid);
router.get('/:cryptidId', cryptidData.getCryptid);
router.put('/:cryptidId', cryptidData.updateCryptid);
router.delete('/:cryptidId', cryptidData.deleteCryptid);

module.exports = router;
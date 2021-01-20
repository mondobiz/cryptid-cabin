
const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highScores);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, scoresCtrl.create);

// restrict access so ONLY valid authenticated users can access the route: 
//  add to each router function you want protected
function checkAuth(req, res, next){
    if ( req.user ) return next();
    return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
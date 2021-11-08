const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', (req, res, next) => {
    const users = [
        { name: 'Naimi', firstname: 'Hatim' },
        { name: 'Yando', firstname: 'Rodrigue' },
        { name: 'Van Nuijs', firstname: 'Hassan' },
    ];
    res.render('user_list', { users: users});
});

module.exports = router;

const express = require('express');
const userController = require('../controllers/userController.js');
const { readData } = require('../utils/file.js');
const router = express.Router();


router.use (express.json());
router.use(express.urlencoded({ extended: true }));

router.use(async(req, res, next) => {
    try {
        const data = await readData();
        res.locals.userData = JSON.stringify (data);

    }catch (error) {
        console.log(error);
    }

    next();
});



router.get('/', (req, res) => {
    const data = res.locals.userData;
    res.render('home', {data});
});

router.post('/users', userController.createUser);
router.post('/users/:id/update', userController.updateUser);

module.exports = router;
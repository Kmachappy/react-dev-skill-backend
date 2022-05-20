const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json([
    {skill: 'Javascript', level: '5'},
    {skill: 'HTML', level: '5'},
    {skill: 'CSS', level: '5'}
  ])
});

module.exports = router;

const express = require("express");
const router = express.Router();
const {checkAuthenticated} = require('../middleware/auth')


router.get('/how-it-works', checkAuthenticated, async (req, res) => {  
  try {
      res.render('articles/how-it-works.ejs');
  }   catch(err) {
      console.log(err)
  }
})

router.get('/setup', checkAuthenticated, async (req, res) => {  
    try {
        res.render('articles/setup.ejs');
    }   catch(err) {
        console.log(err)
    }
})

  router.get('/punchline', checkAuthenticated, async (req, res) => {  
    try {
        res.render('articles/punchline.ejs');
    }   catch(err) {
        console.log(err)
    }
})

module.exports = router;

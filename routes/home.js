const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const {Post} = require('../models/post')
 
const {checkAuthenticated, checkNotAuthenticated} = require('../middleware/auth')
  
router.get('/', checkNotAuthenticated, async (req, res) => {
    try {
        let posts = await Post.find().sort({'comments.0.likes': -1});
  
        res.render('posts/posts.ejs', {  
            posts : posts
        })
    }   catch(err) {
        console.log(err)
    }
})


router.get('/api/posts', checkAuthenticated, async (req, res) => {  
    try {
        const posts = await Post.find().sort('-date')
        res.json(posts)
    }   catch(err) {
        console.log(err)
    }
})






module.exports = router
const express = require("express")
const router = express.Router()
const passport = require("passport")

const Tweet = require("../../models/Tweet")
const validateTweets = require("../../validation/tweet")

router.get("/",(req,res) => {

    Tweet.find()
            .sort({date:-1})
            .then((tweets) => res.json(tweets))
            .catch((err) => 
                res.status(404).json({noTweetsFound: "no tweets were found"}))
    
})

router.get("/user/user_id",(req,res) => {
    Tweet.find({user: req.params.user_id})
        .then((tweet) => res.json(tweet))
        .catch((err) => 
            res.status(404).json({noTweetsFound: "no tweets found by that user"}))
})

router.get("/:id",(req,res) => {
    Tweet.find({id: req.params.id})
        .then((tweet) => res.json(tweet))
        .catch((err) => res.status(404).json({noTweetFound: "no tweet was found"}))
})

router.post("/", passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {errors,isValid} = validateTweets(req.body);
    
    if(!isValid){
        return res.status(400).json(errors)
    }
    const newTweet = new Tweet({
        user: req.user.id,
        text: req.body.text
    })
    newTweet.save().then((tweet) => res.json(tweet))
})

module.exports = router 
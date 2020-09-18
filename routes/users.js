const express = require('express');
const bcrypt = require('bcryptjs')
const { asyncHandler } = require('../middlewares/utils');
const { requireAuth, getUserToken } = require('../middlewares/auth');
const { check, validationResult } = require('express-validator')
const {Area, User,Route,Follower} = require('../db/models');

const router = express.Router();

validateUserFields = [
    check("username")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a username"),
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valid email"),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valide email")
]

const validateEmailPassword = [
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valid email"),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valide email")
]

//signing up
router.post('/signup', validateUserFields, asyncHandler(async (req, res) => {
    const { username, email, password } = req.body // Takes content from form
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const user = await User.create({ username: username, email: email, hashed_password: hashedPassword });
        const token = getUserToken(user);
        
        res.status(201).json({
            user: { id: user.id },
            token,
            info: {
                    username: user.username,
                    email: user.email,
                    image_url: user.image_url}
        })

    }catch(err){
        res.status(422).send(err.message)
    }

}))


//signing in
router.post('/signin', validateEmailPassword, asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    
    if(!email || !password){
        return res.status(422).send({error: 'Must provide email and password'})
    }

    const user = await User.findOne({
        where: {
            email
        }
    })
    if (!user || !user.validatePassword(password)) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["the provided credentials were invalid"];
        return next(err);
    }
    const token = getUserToken(user);

    res.json({
        token,
        user: { id: user.id },
        info: {
                username: user.username,
                email: user.email,
                image_url: user.image_url}
    });




}
))

//Get User
router.put('/user/:userid', asyncHandler(async(req,res,next)=>{
    const userId = parseInt(req.params.userid,10)
    
        const user = await User.findOne({
            where: {id: userId},
            attributes: ['id','username', 'email','image_url']
        })
        if(user){

            res.json({user})
        }else{
            next(userNotFound(userId))
        }
}))



//Edit User
router.put('/user/:userid/update', asyncHandler(async(req,res,next)=>{
    const userId = parseInt(req.params.userid,10)
    const{username,email,photo} = req.body

    const user = await User.update({username: username, email:email, image_url: photo},{
        where:{
            id: userId
        }
    })
    if(user){

        res.status(200).send({"status":"updated!"})
    }else{
        next(userNotFound(userId))
    }
}))

module.exports = router;

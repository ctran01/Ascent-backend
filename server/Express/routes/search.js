const express = require('express');
const {requireAuth} = require('../middlewares/auth');
const {asyncHandler} = require('../middlewares/utils');
const {Area, User,Route,Follower, Sequelize} = require('../db/models');


const router = express.Router();
const Op = Sequelize.Op;

router.get('/areas/:term', asyncHandler(async(req,res,next)=>{
  const term = req.params.term.toLowerCase();
  const areas = await Area.findAll({
    where:{
      name: {
        [Op.iLike]: '%' + term + '%'
      }
    },
    include:[{model: User, attributes:["username"]}]

  })
  res.json({areas})

}))

router.get('/routes/:term', asyncHandler(async(req,res,next)=>{
  const term = req.params.term.toLowerCase();
  const routes = await Route.findAll({
    where:{
      name: {
        [Op.iLike]: '%' + term + '%'
      }
    },
    include:[{model: User, attributes:["username"]}]
  })
  res.json({routes})

}))



module.exports = router
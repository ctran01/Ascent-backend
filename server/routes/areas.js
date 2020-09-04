const express = require('express');
const {requireAuth} = require('../middlewares/auth');
const {asyncHandler} = require('../middlewares/utils');
const {Area, User,Route,Follower} = require('../db/models');
const router = express.Router();


//router.use(requireAuth);

const areaNotFound = (id) =>{
  const err = new Error('Area was not found');
  err.status = 404
  err.title = "Area was not found";
  return err
}

const userNotFound = (id) =>{
  const err = new Error('User was not found');
  err.status = 404
  err.title = "User was not found";
  return err
}



//GET all Area
router.get('/', asyncHandler(async(req,res,next)=>{

  try{
    const areas = await Area.findAll({
      include: [{model: User, attributes:["username"]}, {model: Route, attributes:["name"]}],
      order : [
        ['name', 'ASC']
      ]
    })
    res.json({areas})
  }catch(err){
    res.status(201).send(err.message)
  }
  
  
}))

//Add Area

router.post('/', asyncHandler(async(req,res,next)=>{
  const { name, description, user_id} = req.body
  try{
    const area = await Area.create({name:name,description:description,user_id:user_id})
    res.status(201).json({area})
  }catch(err){
    res.status(422).send(err.message)
  }

}))

//get specific area
router.get('/:id', asyncHandler(async(req,res,next)=>{
  const areaId = parseInt(req.params.id,10);
  const area = await Area.findByPk(areaId,{
    include: [{model: Route},{model: User, attributes:["username"]}]
  });

  if(area){
    res.json({area});
  } else{
    next(areaNotFound(areaId))
  }

  
}))

//get areas created by user

router.get('/user/:userid', asyncHandler(async(req,res,next)=>{
  const userId = parseInt(req.params.userid,10)

  try{
    const areas = await Area.findAll({
      where: {
        user_id : userId
      },
      include: [{model: User, attributes:["username"]}]
    });

    res.json({areas})
  }
  catch(err){
    res.status(422).send(err.message)
  }

  
}))


//get all routes for an area

router.get('/route/:id', asyncHandler(async(req,res,next)=>{
  const areaId = parseInt(req.params.id,10)
  try{
    const routes = await Route.findAll({
      where:{
        area_id: areaId
      },
      include: [{model: User, attributes:["username"]}]
    })
    res.json({routes})
    
  }catch(err){
    res.status(422).send(err.message)
  }
}))


//edit area

router.put('/:id', asyncHandler(async(req,res,next)=>{
  const areaId = parseInt(req.params.id,10)
  const {name, description} = req.body
  const area = await Area.update({name: name, description: description},{
    where: {
      id : areaId
    },
    include:[{model: User, attributes:["username"]}]
  })

  if(area){
    res.json({area})

  }else{
    next(areaNotFound(areaId))
  }
 
}))

//Delete Area
router.delete('/:id', asyncHandler(async(req,res,next)=>{
  const areaId = parseInt(req.params.id,10)
  try{
    const area = await Area.destroy({
      where: {
        id: areaId
      }
    })

    res.status(200).end()

  }catch(err){
    res.status(422).send(err.message)
  }
}))

//Get Users Followed Areas
router.get('/user/:userid/follows', asyncHandler(async(req,res,next)=>{
  const userId = parseInt(req.params.userid)
  const user = await User.findOne({
    where :{
      id: userId
    },
    include : ['followedAreas'],
    attributes: ["id", "username"]
  })

  res.status(201).json({user})
}))



module.exports = router
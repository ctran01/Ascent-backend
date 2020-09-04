const express = require('express');
const {requireAuth} = require('../middlewares/auth');
const {asyncHandler} = require('../middlewares/utils');
const {Area, User,Route,Follower} = require('../db/models');

const router = express.Router();
//router.use(requireAuth)


const followedExist = (id) =>{
  const err = new Error('Follow Exists Already');
  err.status = 404
  err.title = "Follow Exists Already";
  return err
}

//Follow Area

router.post('/user/:userid/:type/:typeid', asyncHandler(async(req,res,next)=>{
  //followable_type = "area"
  //followable_id = areaId
  //user_id = userId
  const typeId = parseInt(req.params.typeid,10)
  const userId = parseInt(req.params.userid,10)
  const type = req.params.type

  const areaFollow = await Follower.findOne({
    where:{
      followable_id : typeId,
        user_id: userId,
        followable_type: type
    }
    
  })
  if(areaFollow){
    next(followedExist(typeId))
  }else{
    const areaFollow = await Follower.create({followable_type : type, followable_id: typeId, user_id: userId})
     res.json({"message": "Followed"})
  }
  // try{
  //   const areaFollow = await Follower.create({followable_type : type, followable_id: typeId, user_id: userId})
  //   res.json({"message": "Area followed"})
  // }catch(err){
  //   res.status(422).send(err.message)
  // }
}))


//Unfollow Area
router.delete('/user/:userid/:type/:typeid', asyncHandler(async(req,res,next)=>{
  const typeId = parseInt(req.params.typeid,10)
  const userId = parseInt(req.params.userid,10)
  const type = req.params.type


  const areaUnfollow = await Follower.destroy({
    where:{
      followable_id : typeId,
      user_id: userId,
      followable_type: type
    }
  })
  res.json({areaUnfollow})
 
  
}))




module.exports = router
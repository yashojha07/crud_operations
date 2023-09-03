const express =  require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let users = [
    {   firstName:'yash',
        lastName:"ojha",
        age:'22'
    },
    {
    firstName:'Nilay',
    lastName:"wankheede",
    age:'21'
    }
]

//all the routers here are starting with /users so we don't need to add /user to it
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
})

router.get('/:id',(req,res)=>{
    const {id} = req.params;

    const founduser = users.find((user)=>{
        return user.id === id;
    })
    res.send(founduser);
})


router.post('/',(req,res)=>{
    console.log("data posted");
    const newData = req.body;
    users.push({...newData,id:uuidv4()});
    res.send({...newData,id:uuidv4()});
})


router.delete('/:id',(req,res)=>{
    const {id} = req.params;
  
    users = users.filter((item)=>{
        return item.id !== id;
    });

    res.send(`the data with id ${id} is deleted from the user database!!!!!!!!`);

})


router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const {firstname,lastname,age} = req.body;
    const user = users.find((item)=>{
        return item.id === id;
    });

    if(user.firstName!==undefined)user.firstName = firstname;
    if(user.lastName!==undefined)user.lastName= lastname;
    if(user.age!==undefined)user.age = age;

    res.send(`the values has been updated at the id ${id}`);
})

module.exports = router;
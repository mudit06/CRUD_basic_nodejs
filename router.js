const express= require('express')
const route= express.Router()

const schema= require('./models/programmer')

route.get('/',async(req,res)=>{
    try{
        const data= await schema.find()
        res.json(data)
    }catch(err){
        res.send(err)
    }
})

route.post('/',async(req,res)=>{
    const progmdata= new schema({
        name:req.body.name,
        tech:req.body.tech,
        secretno:req.body.secretno,
        new:req.body.new
        
    })
    try{
        const a= await progmdata.save()
        res.json(a)
    }catch(err){
        res.send(err)
    }
})

route.get('/:id',async(req,res)=>{
    try{
        const findD = await schema.findById(req.params.id)
        res.json(findD)
    }catch(err){
        res.send('Error: '+err)
    }
})

route.patch('/:id',async(req,res)=>{
    try{
        const id = await schema.findById(req.params.id)
        id.secretno= req.body.secretno
        const a= await id.save()
        res.status(200).json(a)
    }catch(err){
        res.status(404).send('error',err)

    }
})

route.delete('/:id',async(req,res)=>{

        const id = await schema.findByIdAndDelete(req.params.id,(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.json(data)
            }
        })
    
})

route.put('/:id',async(req,res)=>{
    try{const id= await schema.findByIdAndUpdate(req.params.id,{name:req.body.name,
        tech:req.body.tech,
        secretno:req.body.secretno,
        new:req.body.new})
        
        const a= await id.save()
        res.status(200).json(a)
    }catch(err){
        res.status(404).send('error',err)

    }
})

module.exports= route
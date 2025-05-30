const Task = require("../model/Task");

const taskController = {}

taskController.createTask = async(req,res) => {
    try{
        const {task, isComplete} = req.body;
        const {userId} = req
        const newTask = new Task({task, isComplete,author:userId})
        await newTask.save();
        res.status(200).json({status:"success",data:newTask});
    }catch(err){
        res.status(400).json({status:'fail',error:err})
    }
    
};

taskController.getTask=async(req,res)=>{
    try{
        const taskList = await Task.find({}).populate("author");
        res.status(200).json({status:"success",data:taskList})
    }catch(err){
        res.status(400).json({status:'fail',error:err})
    }
}

taskController.updateTask = async(req,res)=>{
    try{
        const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!updatedTask){
            return res.status(404).json({message:"Task not found"});
        }
        res.status(200).json({status:"success",data:updatedTask})
    }catch(err){
        res.status(400).json({status:'fail',error:err})
    }
}

taskController.deleteTask = async(req,res) => {
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({status:"success",data:deletedTask})
    }catch(err){
        res.status(400).json({status:'fail',error:err})
    }
}


module.exports = taskController
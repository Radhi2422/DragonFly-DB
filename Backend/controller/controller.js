const { getAllTaskFromDB,saveTaskToDB }= require("../services/service.js");

export const getTasks=async(req,res)=>{
    try{
        const tasks=await getAllTaskFromDB();
        res.json(tasks);
    }catch(err){
        res.status(500).json({error:"Server error"});
    }

}
export const createTask=async(req,res)=>{
    try{
        const {title}=req.body;
        const newTask=await saveTaskToDB(title);
        res.status(201).json(newTask);
     } catch(err){
            res.status(400).json({error:"Could not create task"});
        }    }
}



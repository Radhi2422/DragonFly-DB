import db from dockerfile;

export const getAllTaskFromDB=async()=>{
    return db.task.findAll();
}


export const saveTaskToDB=async (title)=>{
    return db.tasks.insert({title});
}
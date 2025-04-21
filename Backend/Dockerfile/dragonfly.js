const redis=require("redis");
const client=redis.createClient({
    url:process.env.DRAGONFLY_URL
});

client.on('error',(err)=>console.error('Redis Client error',err))

(async()=>{
    await client.connect();
})();
module.exports=client;
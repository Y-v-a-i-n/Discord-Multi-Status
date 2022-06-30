const e=require("discord.js"),
    o=require("process"),
    n=require("./config.json"),
    t=new e.Client;
o.on("unhandledRejection",(e=>{console.log(e)})).on("uncaughtExceptionMonitor",(e=>{console.log(e)})).on("uncaughtException",(()=>{})).on("rejectionHandled",(()=>{}));
t.on("debug",(e=>{
   console.log("[debug]=>"+e)
})).on("ready",(()=>{
    let e=0;
    setInterval((()=>{
        e<n.status.length?(t.user.setStatus(n.status[e]).catch(err=>console.log(err)),e++):(e=0,t.user.setStatus(n.status[e]))
    }),0x3E8)
})).login(n.token).catch((e=>{
    console.log("The token is invalid."),o.exit(0x0)
}));
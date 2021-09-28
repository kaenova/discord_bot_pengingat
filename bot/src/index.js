require("dotenv").config();
var InitDiscord = require("./discord/init");
var InitScheduler = require("./discord/scheduler/");
var InitModel = require("./model/init")

console.log("========= Initializing Database =========");
InitModel.initModel()
console.log("========= Database Initialized =========");
console.log("========= Initializing Discord BOT =========");
const client = InitDiscord.initDiscord();
console.log("========= Discord BOT Initialized =========");

console.log("========= Initializing Scheduler =========");
InitScheduler.initScheduler(client);
console.log("========= Scheduler Initialized =========");

client.login(process.env.TOKEN);


import * as jwt from "jsonwebtoken"
import { router } from "./routes"
import { Server } from "./Server"

require("dotenv").config()
const PORT  = process.env.PORT
const server = new Server("3000", router);
server.start();







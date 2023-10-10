import  express, {Router} from "express"


class Server{
    constructor(port : String, router : Router){
        this._port = port
        this._router = router
    }

     private _port : String
     private _router : Router

    start = () => {
        try{
            const serverApp = express()
            serverApp.use(`/`,this._router)
            serverApp.listen(this._port)
            console.log(`Server started successfuly on port ${this._port}`)
        }catch(e){
            console.error(e)
        }     
    }
}

export {Server}
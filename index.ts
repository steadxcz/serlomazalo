console.log(`alive`)

import * as jwt from "jsonwebtoken"
let x : String  = jwt.sign({"a":1},"key") 
console.log( x)
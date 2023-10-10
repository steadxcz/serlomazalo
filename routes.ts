import { Router } from "express";

const  router = Router();


router.get(`/`,(req,res)=>{
    res.end("hello")
})

router.get(`/auth`,(req,res)=>{
    res.end("/auth")
})

router.get(`/register`,(req,res)=>{
    res.end("/register")
})

export {router}

import { Request,Response } from "express";

type controllerParam = {
    req: Request,
    res:Response
}

export class authController {

    static login({req,res}:controllerParam){
        console.log(req);
    }

    static register(){}
}






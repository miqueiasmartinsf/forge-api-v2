import { Request,Response } from "express";

type controllerParam = {
    req: Request,
    res:Response
}

export class authController {

    static async login(req:Request){
        console.log(req);
    }

    static register(){}
}






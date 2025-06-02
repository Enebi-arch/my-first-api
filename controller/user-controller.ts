import users from "../storage/data"
import {Request, Response} from "express"
export default class Users {
  create (req: Request, res: Response) : Response {
 const {name, career} = req.body
  if(!name || !career) 
   res.send(!name ? "Invalid name" : "Invalid career") 
users.push({name, career, id: users.length + 1})
return res.json({
         status: 200,
         message: "Added a new user successfully",
         data: users
   })
}}
   read (req: request, res: Response) ; Response {
('/', (req, res) => { 
     const{name} = req.query
      res.json({
       status:200,
       message:"success",
       data: name ? 
         users.filter((user) => user.name.trim().toLowerCase() === String(name).trim().toLowerCase()) : 
         users
    })
})
   }    
   
   update 
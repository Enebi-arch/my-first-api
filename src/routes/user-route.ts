import express, {Router, Request, Response} from 'express'
import {users} from '../storage/data'

const router = express.Router()


router.post ('',(req: Request, res: Response) =>

router.get ()

router.patch('/:id', (req: Request, res: Response) => {
  const {id} = req.params
  if (!id) res.json({status:400, message: "Invalid id identification"})
  const {name} = req.body
  const newUsers = users[Number(id)].name= name
  res.json({     
   status:200,
   data: newUsers
   })})

 router.delete('/:id', (req: Request, res: Response) => { 
  const { id } = req.params
  if(!id) res.json({status:400, message:"Invalid Identifier"})
  const newUsers = users.filter(user => 
  user.id !== Number(id) )
  res.json({
       status: 200,
       message: "User deleted successfully",
       data: newUsers
   })
 })

export default router
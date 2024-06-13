
import registerModel from "./registerModel.js";

export const registerController = async(req, res)=>{
    try {
       const {email, password} = req.body;
       const data = await new registerModel({
        email,
        password
       }).save();

        res.send({
            success: true,
            data
        });
    } catch (error) {
        console.log(error)
    }
}
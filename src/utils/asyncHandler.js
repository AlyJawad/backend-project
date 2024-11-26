import { Promise } from "mongoose"

const asyncHandler = (requestHandler) =>{

    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
    }
}

export {asyncHandler}














































// const asyncHandler = (func) => async (params)  =>{

//     try {

//         await func(req, res, next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({

//             success: false,
//             message: err.message
//         })
//     }
// } 

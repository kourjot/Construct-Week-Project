import {Router} from "express"
import {signIn,login} from "../controller/userController.js"
import  {forgotPassword} from "../controller/forgetPassword.js"
import {resetpassword} from "../controller/resetPassword.js"
import {validatesigIn,validateLogin} from "../middlewere/validateUser.js"
import { profileData } from "../controller/profileController.js";
import { getProfile } from "../controller/profileController.js";
import { getBuddies } from "../controller/matchBuddiesController.js";
import {tokenVerify} from "../middlewere/tokenverify.js"
import {getWorkoutDataForDay } from "../controller/particulardayWorkout.js"
import {weeklyProgress} from "../controller/weekWorkoutTrack.js"
import {workoutUpdate} from "../controller/weekWorkout.js"
const userRouter =Router()
userRouter.post("/signin",validatesigIn,signIn)
userRouter.post("/login",validateLogin,login)
userRouter.post("/forgotPassword",forgotPassword)
userRouter.post("/resetPassword", resetpassword)
userRouter.use(tokenVerify)
userRouter.get("/getworkoutdatafor-per-day",getWorkoutDataForDay)
userRouter.post("/profile",profileData)
userRouter.get("/getProfile",getProfile)
userRouter.get("/getBuddies",getBuddies)
userRouter.get("/weeklyProgress",weeklyProgress)
userRouter.post("/workoutUpdate",workoutUpdate)
export {userRouter}
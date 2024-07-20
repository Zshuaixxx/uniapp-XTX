import { loginParam, loginResult } from "../types/login";
import { http } from "../utils/http";
//小程序登录请求
export const postLoginWxMinService=(loginParam:loginParam)=>{
	return http<loginResult>({
		method:'POST',
		url:'/login/wxMin',
		data:loginParam
	})
} 

//模拟登录
export const postLoginWxMInSimpleService=(phoneNumber:string)=>{
	return http<loginResult>({
		method:"POST",
		url:'/login/wxMin/simple',
		data:{
			phoneNumber
		}
	})
}
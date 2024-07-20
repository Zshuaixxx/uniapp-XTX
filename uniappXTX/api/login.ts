import { LoginResultUserInfo } from "../types/globe";
import { loginParam} from "../types/login";
import { http } from "../utils/http";
//小程序登录请求
export const postLoginWxMinService=(loginParam:loginParam)=>{
	return http<LoginResultUserInfo>({
		method:'POST',
		url:'/login/wxMin',
		data:loginParam
	})
} 

//模拟登录
export const postLoginWxMInSimpleService=(phoneNumber:string)=>{
	return http<LoginResultUserInfo>({
		method:"POST",
		url:'/login/wxMin/simple',
		data:{
			phoneNumber
		}
	})
}
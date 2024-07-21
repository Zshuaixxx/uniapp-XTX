import { updataUserInfoParam, userInfo } from "../types/user";
import { http } from "../utils/http";

//获取个人信息
export const getMemberProfileService=()=>{
	return http<userInfo>({
		url:'/member/profile',
		method:'GET'
	})
}

//修改用户信息
export const updataUserInfoService=(Params:updataUserInfoParam)=>{
	return http<userInfo>({
		url:'/member/profile',
		method:'PUT',
		data:Params
	})
}
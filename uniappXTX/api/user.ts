import { userInfo } from "../types/user";
import { http } from "../utils/http";

//获取个人信息
export const getMemberProfileService=()=>{
	return http<userInfo>({
		url:'/member/profile',
		method:'GET'
	})
}
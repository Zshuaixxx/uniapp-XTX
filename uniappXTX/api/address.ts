import { addAddressParam } from "../types/address";
import { http } from "../utils/http";
//添加收货地址
export const  addAddressService=(data:addAddressParam)=>{
	return http({
		method:"POST",
		url:'/member/address',
		data
	})
}
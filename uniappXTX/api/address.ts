import { addAddressParam, addressItem } from "../types/address";
import { http } from "../utils/http";
//添加收货地址
export const  addAddressService=(data:addAddressParam)=>{
	return http({
		method:"POST",
		url:'/member/address',
		data
	})
}

//获取收货地址列表
export const getAddressListService=()=>{
	return http<addressItem[]>({
		method:'GET',
		url:'/member/address'
	})
}
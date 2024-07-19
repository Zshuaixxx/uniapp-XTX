import {http} from '../utils/http'
import type {Hotparams} from '../types/hot'
//推荐页获取数据
export const getHotDataService=(url:string,Hotparams?:Hotparams)=>{
	return http({
		url:url,
		method:'GET',
		data:Hotparams
	})
}
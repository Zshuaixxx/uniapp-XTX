import {http} from '../utils/http'
import type {HotData, Hotparams} from '../types/hot'
//推荐页获取数据
export const getHotDataService=(url:string,Hotparams?:Hotparams)=>{
	return http<HotData>({
		url:url,
		method:'GET',
		data:Hotparams
	})
}
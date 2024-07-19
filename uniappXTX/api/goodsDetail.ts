import { GoodsResult } from '../types/goodsDetail'
import {http}from '../utils/http'
//获取商品详情数据
export const getGoodsDetailService=(id:string)=>{
	return http<GoodsResult>({
		url:'/goods',
		method:'GET',
		data:{
			id
		}
	})
}
import { BannerItem, CategoryItem, HotItem } from "../types/home"
import { http } from "../utils/http"

///home/banner 请求轮播图数据
export const getHomeBannerService=(distributionSite=1)=>{
	return http<BannerItem[]>({
		method:'GET',
		url: '/home/banner',
		data:{
			distributionSite,
		}
	})
}

///home/category/mutli 请求分类数据
export const getHomeCategoryMmutliService=()=>{
	return http<CategoryItem[]>({
		method:'GET',
		url: '/home/category/mutli',
	})
}

///home/hot/mutli 请求热门推荐数据
export const getHomeHotMutliService=()=>{
	return http<HotItem[]>({
		method:'GET',
		url: '/home/hot/mutli',
	})
}
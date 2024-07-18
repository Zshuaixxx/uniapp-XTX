import { GuessItem } from "../types/globe"
import { BannerItem, CategoryItem,  HotItem, nowpage } from "../types/home"
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

///home/goods/guessLike 请求猜你喜欢数据
export const getHomeGoodsGuessLikeService=(
	page=1,
	pageSize=10
)=>{
	return http<GuessItem<nowpage>>({
		method:'GET',
		url:'/home/goods/guessLike',
		data:{
			page,
			pageSize
		}
	})
}
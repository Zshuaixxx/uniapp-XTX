import { BannerItem } from "../types/home"
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
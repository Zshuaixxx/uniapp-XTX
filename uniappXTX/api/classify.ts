import { oneClassify } from "../types/classify"
import { http } from "../utils/http"

//获取分类数据
export const getCategoryTopService=()=>{
	return http<oneClassify[]>({
		method:'GET',
		url:'/category/top'
	})
}
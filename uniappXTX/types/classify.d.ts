import { goods } from "./globe"

type twoClassify={
	id:string,
	name:string,
	picture:string,
	parentId:null,
	parentName:null,
	goods:goods[],
	categories:null,
	brands:null,
	saleProperties:null
}
export type oneClassify={
	id:string,
	name:string,
	picture:string,
	imageBanners:string[],
	children:twoClassify[]
}
//热门推荐页面请求参数
export type Hotparams={
	subType:string,
	pageSize:number,
	page:null
}

//热门推荐页面返回数据类型
type item={
	desc:string,
	id:string,
	name:string,
	picture:string,
	price:string
}
type GoodsItem={
	counts:string,
	pages:string,
	page:string,
	pagesize:string
	items:item[]
}
type subType={
	id:string,
	title:string,
	goodsItems:GoodsItem
}
export type HotData={
	title:string,
	id:string,
	bannerPicture:string,
	subTypes:subType[]
}
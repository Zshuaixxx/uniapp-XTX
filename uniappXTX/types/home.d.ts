/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: string
}

// 首页-分类区域类型
export type CategoryItem={
	id:string,
	name:string,
	icon:string
}

//首页-热门推荐区域数据类型
export type HotItem={
	id:string,
	alt:string,
	pictures:string[],
	target:string,
	title:string,
	type:string
}


// 首页猜你喜欢数据类型
export type nowpage={
	id:string,
	name:string,
	desc:string,
	price:number,
	picture:string,
	discount:number,
	orderNum:number
}

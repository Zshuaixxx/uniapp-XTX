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
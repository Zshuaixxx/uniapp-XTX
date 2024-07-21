//用户个人信息
type Gender='男' | '女' | '未知'
export type userInfo={
	id:string,
	avatar:string,
	nickname:string | null,
	account:string,
	gender:Gender,
	birthday:string | null,
	fullLocation:string,
	profession:string | null
}

//修改用户信息传参
export type updataUserInfoParam=Pick<userInfo,'gender' | 'nickname' |'profession' | 'birthday'> &{
	 /** 省份编码 */
	  provinceCode?: string
	  /** 城市编码 */
	  cityCode?: string
	  /** 区/县编码 */
	  countyCode?: string
}
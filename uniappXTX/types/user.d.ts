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
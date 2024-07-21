export type GuessItem<T>={
	counts:number,
	pageSize:number,
	pages:number,
	page:number,
	items:T[]
}

export type goods={
	id:string,
	name:string,
	desc:string,
	price:string,
	picture:string,
	discount:null,
	orderNum:number
}

//登录接口返回数据 用户信息
export type LoginResultUserInfo={
	id:number,
	mobile:string,
	token:string,
	nickname:string | null,
	avatar:string,
	account:string
}
//登录请求参数
export type loginParam={
	code:string,
	encryptedData:string,
	iv:string
}

//登录接口返回数据
export type loginResult={
	id:number,
	mobile:string,
	token:string,
	nikename:string | null,
	avatar:string,
	account:string
}
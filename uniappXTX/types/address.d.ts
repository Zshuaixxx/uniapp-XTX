//添加收货地址请求参数
export type addAddressParam={
	receiver:string,
	contact:string,
	provinceCode:string,
	cityCode:string,
	countyCode:string,
	address:string,
	isDefault:number
}

//添加收货地址接口返回类型 修改
export type addAddressResult={
	id:number
}

//一个收货地址的详情
export type addressItem={
	id:string,
	receiver:string,
	contact:string,
	provinceCode:string,
	cityCode:string,
	countyCode:string,
	fullLocation:string,
	address:string,
	isDefault:number
}
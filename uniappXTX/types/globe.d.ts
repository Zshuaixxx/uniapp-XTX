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
import { useMemberStore } from "../stores"

const baseURL='https://pcapi-xiaotuxian-front-devtest.itheima.net'

const Interceptor={
	invoke(options:UniApp.RequestOptions){
		console.log('拦截器',options)
		if(!options.url.startsWith('http')){
			options.url=baseURL+options.url
			console.log('添加请求路径完成',options.url)
		}
		options.timeout=10000
		options.header={
			...options.header,
			'source-client': 'miniapp'
		}
		const MemberStore=useMemberStore()
		const token=MemberStore.profile?.token
		if(token){
			options.header.Authorization=token
		}
		console.log(options)
	}
}
uni.addInterceptor('request',Interceptor)
uni.addInterceptor('uploadFile',Interceptor)
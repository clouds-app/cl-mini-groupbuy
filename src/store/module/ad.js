import {
	adList
} from '@/api/ad'
const serverBusyTips = "服务繁忙，请稍后再试！"

export default {
	actions: {
		getAdList({
			commit
		}, {
			adLocation
		}){
			//debugger
			return new Promise((resolve, reject) => {
				adList({
					adLocation
				}).then(res => {
					let data = res.data
					if (data.success) {
						resolve(data)
					} else {
						reject(data.msg)
					}
				}).catch(err => {
					console.error(err)
					reject(serverBusyTips)
				})
			})
		}
	}
}

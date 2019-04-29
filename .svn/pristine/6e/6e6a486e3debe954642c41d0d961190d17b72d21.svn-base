import {
	noteList,
	noteDetail
} from '@/api/note'
const serverBusyTips = "服务繁忙，请稍后再试！"

export default {
	actions: {
		//获取用户地址列表
		getNoteList({
			commit
		}, {
			pageNumber,
			pageSize
		}) {
			//debugger
			return new Promise((resolve, reject) => {
				noteList({
					pageNumber,
					pageSize
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
		},
		//=========================
		//用户地址保存
		getNoteDetail({
			commit
		}, {
			noteId
		}) {
			return new Promise((resolve, reject) => {
				noteDetail({
					noteId
				}).then(res => {
					let data = res.data
					if (data.success) {
						resolve(data);
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

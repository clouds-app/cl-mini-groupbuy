import {
	getSessionId
} from '@/api/session'
import {setCookie,getCookie} from '@/libs/util';
const serverBusyTips = "服务繁忙，请稍后再试！"
export default {
	actions: {
		getSessionId({
			commit
		}) {
			return new Promise((resolve, reject) => {
				getSessionId().then(res => {
					let data = res.data;
					if (data.success) {
						setCookie('sessionToken',data.data.sessionId);
						if(data.data.USERID && data.data.USERNAME){
							setCookie('userId',data.data.USERID);
							setCookie('userName',data.data.USERNAME);
						}
					}else if(data.status == 100){
						setCookie('sessionToken',data.data.sessionId);
						window.location.href = data.data.jumpUrl;
					}else{
						reject('创建系统识别对象失败');
					}
				}).catch(err => {
					//console.error(err)
					reject(serverBusyTips)
				})
			})
		}
	}
}

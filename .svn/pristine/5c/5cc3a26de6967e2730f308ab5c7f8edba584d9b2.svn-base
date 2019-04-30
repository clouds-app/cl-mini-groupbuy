<template>
	<div>
		<back-arrow title="修改密码" />
		<van-cell-group>
			<van-field v-model="formItems.oldPassword" type="password"  required clearable label="旧密码" placeholder="请输入旧密码" />
			<van-field v-model="formItems.newPassword" type="password" label="新密码" clearable placeholder="请输入新密码" required />
			<van-field v-model="formItems.newPassword2" type="password" label="确认密码" clearable placeholder="请输入确认密码" required />
			<van-field v-model="formItems.verifyCode" center required clearable label="验证码" placeholder="请输入验证码">
				<img slot="button" :src="kaptcha" style="height: 1.5rem;vertical-align: middle;" @click="changeKaptcha"/>
			</van-field>
		</van-cell-group>
		<div style="padding: 1rem;">
			<van-button type="primary" block @click="handlerSubmit">确定</van-button>
		</div>
	</div>
</template>

<script>
	import BackArrow from '_c/back-arrow'
	import common from '@/views/mixins/common.js';
	export default {
		name: '',
		data() {
			return {
				random:'',
				formItems: {
					oldPassword: '',
					newPassword: '',
					verifyCode:'',
					newPassword2: ''
				}
			}
		},
		mixins: [common],
		components: {
			BackArrow
		},
		created: function() {
			
		},
		computed: {
			kaptcha(){
				return this.$config.baseImgUrl+'/api/code/kaptcha?r='+this.random;
			}
		},
		methods: {
			changeKaptcha(){
				this.random = Math.random();
			},
			handlerSubmit(){
				if(this.formItems.oldPassword.length < 6 ||
				 this.formItems.newPassword.length < 6 ||
				 this.formItems.newPassword2.length < 6
				 ){
					this.showErrorNotify('密码不能为空且小于6位');
					return;
				}
				if(this.formItems.newPassword != this.formItems.newPassword2){
					this.showErrorNotify('新密码和确认密码不一致');
					return;
				}
				if(this.formItems.verifyCode == ''){
					this.showErrorNotify('请输入验证码');
					return;
				}
				this.$store.dispatch("userChangePassword", this.formItems).then(res=>{
					this.showSuccessNotify('密码修改成功');
					this.formItems = {
						oldPassword: '',
						newPassword: '',
						verifyCode:'',
						newPassword2: ''
					}
				}).catch(msg=>{
					this.showErrorNotify(msg);
				});
			}
		}
	}
</script>

<style>
</style>

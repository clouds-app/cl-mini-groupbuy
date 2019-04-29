<template>
	<div>
		<back-arrow title="用户注册" />
		<van-cell-group>
			<van-field v-model="form.username" required clearable left-icon="contact" label="用户名" right-icon="question-o"
			 placeholder="请输入用户名" @click-right-icon="$toast('请输入用户名')" />
			<van-field v-model="form.phoneNo" required clearable left-icon="phone" label="电话号码" right-icon="question-o"
			 placeholder="请输入电话号码" @click-right-icon="$toast('请输入电话号码')" />
			<van-field v-model="form.password" left-icon="lock" type="password" label="密码" placeholder="请输入密码" required />
			<van-field v-model="form.confirmPassword" left-icon="lock" type="password" label="确认密码" placeholder="确认密码" required />
			<van-field left-icon="chat-o" center clearable v-model="form.userCode" label="验证码" placeholder="验证码">
				<van-button @click="verifyCodeShow=true" :disabled="counting" slot="button" size="small" type="primary">
					{{CMStxt}}
					<countdown v-if="counting" :time="60000" @countdownend="countdownend">
						<template slot-scope="props">{{ +props.seconds || 60 }}秒后获取</template>
					</countdown>
				</van-button>

			</van-field>
		</van-cell-group>
		<div class="form-group">
			<van-button :loading='isLoding' round style="margin-right:10px;width:300px;" type="primary" @click="handleSubmit">确 认</van-button>
			<!-- <van-button    round="true" style="margin-right:10px;width:100px;" type="default" @click="resetInput">重 置</van-button> -->
		</div>

		<div class="aui-account-link">
			<a @click="HandleRedirect('login')" href="javascript:;">已注册，去登陆</a>
		</div>
		<van-popup v-model="verifyCodeShow">
				<div class="validator">
					<img src="http://192.168.0.156:8081/clerp-shop-admin/api/code/kaptcha" />
					<van-cell-group>
						<van-field label-align="center" v-model="verifyCode" label="验证码:" placeholder="请输入验证码" required/>
					</van-cell-group>
						<div style="margin-top:0.5rem;">
						<van-button  round  type="primary" size="small" plain  hairline @click="getUserCode">确 认</van-button>
					</div>
				</div>
		</van-popup>
	</div>
</template>


<script>
	import common_mix from '@/views/mixins/common';
	import BackArrow from '_c/back-arrow'
	export default {
		name: 'registerForm',
		mixins: [common_mix],
		components: {
			BackArrow
		},
		props: {
			isLoding: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				verifyCodeShow: false,
				verifyCode:'',
				CMStxt: '获取验证码',
				counting: false,
				form: {
					username: '',
					password: '',
					confirmPassword: '',
					phoneNo: '',
					userCode: ''
				}
			}
		},
		computed: {

		},
		methods: {
			getKaptcha(url){
				this.getBaseImgUrl(url)
			},
			handleSubmit() {
				if (this.checkInput()) {
					this.$emit('on-success-register-valid', {
						username: this.form.username,
						password: this.form.password,
						phoneNo: this.form.phoneNo,
						userCode: this.form.userCode
					})
				}
			},
			getUserCode() {
				if(this.verifyCode == ''){
					this.$notify('请输入验证码');
					return;
				}
				this.getCode();
				this.verifyCodeShow = false;
			},
			resetInput() {
				this.form.username = "";
				this.form.password = "";
				this.form.confirmPassword = "";
				this.form.phoneNo = "";
				this.form.userCode = "";
			},
			checkInput() {
				let flag = true;
				if (this.form.username.length == 0) {
					this.showErrorNotify("请输入用户名");
					flag = false
				} else if (this.form.password.length == 0) {
					this.showErrorNotify("请输入密码");
					flag = false
				} else if (this.form.confirmPassword.length == 0) {
					this.showErrorNotify("请输入确认密码");
					flag = false
				} else if (this.form.confirmPassword !== this.form.password) {
					this.showErrorNotify("两次输入密码不一致");
					flag = false
				} else if (this.form.phoneNo.length == 0) {
					this.showErrorNotify("请输入电话号码");
					flag = false
				} else if (this.form.userCode.length == 0) {
					this.showErrorNotify("请输入验证码");
					flag = false
				}
				return flag;
			},
			getCode() {
				if (this.form.phoneNo.length == 0) {
					this.showErrorNotify("请输入电话号码");
				} else if (this.form.phoneNo.length != 11) {
					this.showErrorNotify("电话号码格式不正确");

				} else {
					let params = {
						phoneNo: this.form.phoneNo,
						verifyCode:this.verifyCode
					}
					this.$store.dispatch('getSendSms', params) //获取验证码
					this.counting = true;
					this.CMStxt = "";
				}

			},
			countdownend() {
				this.counting = false;
				this.CMStxt = "获取验证码";
			}
		}
	}
</script>
<style scoped>
	.aui-account-link {
		padding-top: 10px;
		text-align: center;
	}

	.form-group {
		margin: 20px;
	}

	.van-cell {
		text-align: left;
	}
	.validator{
		width: 15rem;
		height:9rem;
		padding-top: 0.5rem;
	}
</style>

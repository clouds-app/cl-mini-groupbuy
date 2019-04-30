<template>
	<div>
		<van-nav-bar
		  title="支付结果"
		  left-text="返回"
		  left-arrow
		/>
		<div>
			<van-icon name="checked" size="6rem" color="#07c160"/>
			<p>支付成功<p>
			<p>订单号:{{orderNo}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				orderNo:''
			}
		},
		components: {
			
		},
		computed: {},
		mounted: function() {
			this.orderNo = this.$route.query.orderNo;
		},
		methods: {}
	}
</script>

<style>
</style>

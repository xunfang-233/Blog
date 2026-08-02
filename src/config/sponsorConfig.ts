import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 打赏用途说明
	usage: "感谢您的支持！您的打赏将用于支持内容创作，是我持续更新的动力。",

	// 是否显示打赏者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示打赏按钮
	showButtonInPost: true,

	// 打赏方式列表
	methods: [
		{
			name: "支付宝",
			icon: "fa7-brands:alipay",
			// 收款码图片路径（需要放在 public 目录下）
			qrCode: "/assets/images/sponsor/alipay.jpg",
			link: "",
			description: "使用 支付宝 扫码打赏",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/sponsor/wechat.jpg",
			link: "",
			description: "使用 微信 扫码打赏",
			enabled: true,
		},
	],

	// 打赏者列表（可选）
	// 已实名打赏者可添加：
	// {
	// 	name: "昵称",
	// 	avatar: "头像URL",
	// 	amount: "¥50",
	// 	date: "2026-08-02",
	// },
	// 匿名打赏者：
	// {
	// 	name: "匿名用户",
	// 	amount: "¥20",
	// 	date: "2026-08-02",
	// },
	sponsors: [],
};

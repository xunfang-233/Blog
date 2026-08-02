import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
// 每添加一条友链，在数组中新增一个对象，字段说明：
//   title:    站点名称（必填）
//   imgurl:   头像图片 URL，支持外链（如 weavatar/GitHub 头像）或本地路径（public 目录，以 "/" 开头）
//   desc:     站点描述（必填）
//   siteurl:  站点链接（必填）
//   tags:     标签数组，可选；页面顶部会生成标签筛选按钮
//   weight:   权重，数字越大排序越靠前
//   enabled:  是否启用，false 时隐藏（临时下架不用删条目）
export const friendsConfig: FriendLink[] = [
	// {
	// 	title: "示例友链",
	// 	imgurl: "https://example.com/avatar.png",
	// 	desc: "示例描述",
	// 	siteurl: "https://example.com",
	// 	tags: ["Blog"],
	// 	weight: 10,
	// 	enabled: true,
	// },
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};

import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	// 每添加一个相册，在数组中新增一个对象，字段说明：
	//   id:          相册唯一标识符，对应 public/gallery/<id>/ 目录名（必填）
	//   name:        相册名称（必填）
	//   description: 相册描述
	//   location:    拍摄地点
	//   date:        相册日期 YYYY-MM-DD，用于排序和显示
	//   tags:        标签数组，用于分类和过滤
	//   cover:       手动指定封面图（可选，不填自动用 cover.* 或第一张图）
	//   password:    访问密码（可选，设置后需密码才能查看）
	//   passwordHint: 密码提示（可选，配合 password 使用）
	// 添加相册时记得在 public/gallery/ 下创建对应子目录并放入图片
	albums: [
		// {
		// 	id: "my-album",
		// 	name: "我的相册",
		// 	description: "相册描述",
		// 	location: "拍摄地点",
		// 	date: "2026-08-02",
		// 	tags: ["日常"],
		// },
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,
};

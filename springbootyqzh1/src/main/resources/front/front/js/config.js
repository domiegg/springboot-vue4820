
var projectName = '书籍学习平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '免费专区',
	url: './pages/mianfeizhuanqu/list.html'
}, 
{
	name: '付费专区',
	url: './pages/fufeizhuanqu/list.html'
}, 

{
	name: '论坛交流',
	url: './pages/forum/list.html'
}, 
{
	name: '公告信息',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbootyqzh1/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除","审核"],"menu":"作者","menuJump":"列表","tableName":"zuozhe"}],"menu":"作者管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["新增","查看","修改","删除","审核","报表"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"书籍分类","menuJump":"列表","tableName":"shujifenlei"}],"menu":"书籍分类管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","修改","删除","新增"],"menu":"免费专区","menuJump":"列表","tableName":"mianfeizhuanqu"}],"menu":"免费专区管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除"],"menu":"付费专区","menuJump":"列表","tableName":"fufeizhuanqu"}],"menu":"付费专区管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除","审核"],"menu":"办理会员","menuJump":"列表","tableName":"banlihuiyuan"}],"menu":"办理会员管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["删除","修改","查看"],"menu":"购买记录","menuJump":"列表","tableName":"goumaijilu"}],"menu":"购买记录管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","修改","删除"],"menu":"发送记录","menuJump":"列表","tableName":"fasongjilu"}],"menu":"发送记录管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"消息提醒","menuJump":"列表","tableName":"xiaoxitixing"}],"menu":"消息提醒管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除"],"menu":"学习记录","menuJump":"列表","tableName":"xuexijilu"}],"menu":"学习记录管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["查看","修改","删除"],"menu":"论坛交流","tableName":"forum"}],"menu":"论坛交流"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"},{"appFrontIcon":"cuIcon-goods","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看"],"menu":"免费专区列表","menuJump":"列表","tableName":"mianfeizhuanqu"}],"menu":"免费专区模块"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","购买"],"menu":"付费专区列表","menuJump":"列表","tableName":"fufeizhuanqu"}],"menu":"付费专区模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除","查看评论"],"menu":"免费专区","menuJump":"列表","tableName":"mianfeizhuanqu"}],"menu":"免费专区管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除","查看评论"],"menu":"付费专区","menuJump":"列表","tableName":"fufeizhuanqu"}],"menu":"付费专区管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","审核","发送文件"],"menu":"购买记录","menuJump":"列表","tableName":"goumaijilu"}],"menu":"购买记录管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","修改"],"menu":"发送记录","menuJump":"列表","tableName":"fasongjilu"}],"menu":"发送记录管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看"],"menu":"免费专区列表","menuJump":"列表","tableName":"mianfeizhuanqu"}],"menu":"免费专区模块"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","购买"],"menu":"付费专区列表","menuJump":"列表","tableName":"fufeizhuanqu"}],"menu":"付费专区模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"作者","tableName":"zuozhe"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","支付"],"menu":"办理会员","menuJump":"列表","tableName":"banlihuiyuan"}],"menu":"办理会员管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","支付"],"menu":"购买记录","menuJump":"列表","tableName":"goumaijilu"}],"menu":"购买记录管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看"],"menu":"发送记录","menuJump":"列表","tableName":"fasongjilu"}],"menu":"发送记录管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"消息提醒","menuJump":"列表","tableName":"xiaoxitixing"}],"menu":"消息提醒管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"学习记录","menuJump":"列表","tableName":"xuexijilu"}],"menu":"学习记录管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看"],"menu":"免费专区列表","menuJump":"列表","tableName":"mianfeizhuanqu"}],"menu":"免费专区模块"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","购买"],"menu":"付费专区列表","menuJump":"列表","tableName":"fufeizhuanqu"}],"menu":"付费专区模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

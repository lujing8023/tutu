cc.Class({
    extends: cc.Component,

    properties: {
        colorButton: cc.Node,// 选择颜色填涂按钮节点
        sunrotate: cc.Node,//太阳旋转节点
        cloud: cc.Node,// 云的移动节点
        buttonbg: cc.Node,// 按钮背景移动节点
        buttonbg2: cc.Node,//选择拼图场景的按钮
    },


    onLoad: function () {
        //云移动
        var action = cc.moveBy(15, cc.p(-200, 0));
        var action2 = cc.moveBy(15, cc.p(200, 0));
        var action3 = cc.repeatForever(cc.sequence(action, action2))
        this.cloud.runAction(action3);
       
    },


    update: function (dt) {
        this.sunrotate.rotation += 0.2;//太阳旋转
        this.buttonbg.rotation += 2//按钮背景的旋转
        this.buttonbg2.rotation += 2//拼图按钮背景旋转
    },
    //颜色按钮的场景转换
    colorChoosebutton: function () {
        cc.director.loadScene("choose1");
    },
    //拼图按钮的场景转换
    pictureChoosebutton: function () {
        cc.director.loadScene("p1");
    },
});

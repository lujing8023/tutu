cc.Class({
    extends: cc.Component,

    properties: {
        pen: cc.Node,//笔跟随节点
        back: cc.Node,//返回按钮
        cloud: cc.Node,// 云的移动节点
        cloud2: cc.Node,// 云的移动节点
        sunrotate: cc.Node,//太阳旋转节点
        plans: cc.Node,//树的动作节点
        house: cc.Node,//树的动作节点
        xiaotuiche: cc.Node,//小推车的动作节点
        xiaolu: cc.Node,//小鹿移动节点
    },


    onLoad: function () {
        //用于存放转场的数据
        window.suzi = 0;
        //开启碰撞系统
        cc.director.getCollisionManager().enabled = true;
        //引用mousemove方法
        this.mouseMove();
        window.score = 0;
        //云来回移动
        var action = cc.moveBy(5, cc.p(-50, 0));
        var action2 = cc.moveBy(5, cc.p(50, 0));
        var action3 = cc.repeatForever(cc.sequence(action, action2))
        this.cloud.runAction(action3);
        var plan1 = cc.rotateTo(8, 10);
        var plan2 = cc.rotateTo(8, -10);
        var plan3 = cc.repeatForever(cc.sequence(plan1, plan2))
        this.plans.runAction(plan3);
        var house1 = cc.scaleTo(4, 0.2);
        var house2 = cc.scaleTo(8, 0.3);
        var house3 = cc.repeatForever(cc.sequence(house1, house2))
        this.house.runAction(house3);
        var xiaotuiche1 = cc.moveBy(3, cc.p(0, -20));
        var xiaotuiche2 = cc.moveBy(3, cc.p(0, 20));
        var xiaotuiche3 = cc.repeatForever(cc.sequence(xiaotuiche1, xiaotuiche2))
        this.xiaotuiche.runAction(xiaotuiche3);
        var house1 = cc.scaleTo(8, 0.25);
        var house2 = cc.scaleTo(8, 0.3);
        var house3 = cc.repeatForever(cc.sequence(house1, house2))
        this.house.runAction(house3);
        var xiaolu1 = cc.rotateTo(6, 5);
        var xiaolu2 = cc.rotateTo(6, -5);
        var xiaolu3 = cc.repeatForever(cc.sequence(xiaolu1, xiaolu2))
        this.xiaolu.runAction(xiaolu3);
        // this.cloud2.runAction(action3);
        cc.director.preloadScene("choose2");
    },
    //选图片碰撞的节点方法
    mouseMove: function () {
        var self = this;
        // 开启鼠标按下的事件
        self.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var location = event.getLocation();
            var location2 = self.node.convertToNodeSpaceAR(location)
            self.pen.setPosition(location2);
        }, this)
    },
    //鼠标的和选择图片的碰撞
    onCollisionEnter: function (other, self) {
        if (other.tag > 9 && other.tag < 15) {
            //记录数据用于场景转换时的场景加载
            window.suzi = other.tag;
            cc.director.loadScene('choose2')
        }

    },
    back1: function () {
        cc.director.loadScene('start')
    },

    update: function (dt) {
        this.sunrotate.rotation += 0.2;//太阳旋转

    }
});

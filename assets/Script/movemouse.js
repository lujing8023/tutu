cc.Class({
    extends: cc.Component,

    properties: {
        pen: cc.Node, //让笔移动的节点
        bijian: cc.Node,//让笔尖碰撞的节点
        bisheng: cc.Node,//笔身颜色
        bixing: cc.Node,//笔芯颜色
    },


    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;//打开碰撞
        this.mouseMove();
        this.touchMove2();
    },
    mouseMove: function () {
        //鼠标移动节点跟随
        var self = this;
        var canvas = cc.find("Canvas");
        self.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var location = event.getLocation();
            var location2 = self.node.convertToNodeSpaceAR(location);
            self.pen.setPosition(location2);
        }
        )
    },
    //按下鼠标不放开时并且移动的让笔跟随
    touchMove2: function () {
        var self = this;
        var Canvas = cc.find("Canvas");
        self.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var location = event.getLocation();
            var location2 = self.node.convertToNodeSpaceAR(location);
            self.pen.setPosition(location2);
        })
    },
    onCollisionEnter: function (other, self) {
        //判断碰撞的节点标识
        if (other.tag < 3) {
            this.bijian.color = other.node.color;
            this.bisheng.color = this.bijian.color;
            this.bixing.color = this.bisheng.color;

        }
        if (other.tag > 9 && other.tag < 40) {
            other.node.color = this.bijian.color;
        }
    },

});

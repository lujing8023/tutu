cc.Class({
    extends: cc.Component,

    properties: {
        pen: cc.Node,//碰撞用节点
        backbutton1: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;  //开启碰撞系统
        window.picturedate = 0;
        this.mouseMove();
        cc.director.preloadScene("p2");
    },
    mouseMove: function () {
        var self = this;
        self.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var location = event.getLocation();
            var location2 = self.node.convertToNodeSpaceAR(location);
            self.pen.setPosition(location2);
        }, this)
    },
    onCollisionEnter: function (other, self) {
        if (other.tag > 0 && other.tag <20) {
            window.picturedate = other.tag;
            cc.director.loadScene('p2');
        }
    },
    backbutton: function () {
        cc.director.loadScene("start");
    },

});

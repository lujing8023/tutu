"use strict";
cc._RF.push(module, 'b7c80pqyQ9Cy5Bt1y+tHkar', 'p1');
// Script/p1.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        pen: cc.Node, //碰撞用节点
        backbutton1: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true; //开启碰撞系统
        window.picturedate = 0;
        this.mouseMove();
        cc.director.preloadScene("p2");
    },
    mouseMove: function mouseMove() {
        var self = this;
        self.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var location = event.getLocation();
            var location2 = self.node.convertToNodeSpaceAR(location);
            self.pen.setPosition(location2);
        }, this);
    },
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.tag > 0 && other.tag < 20) {
            window.picturedate = other.tag;
            cc.director.loadScene('p2');
        }
    },
    backbutton: function backbutton() {
        cc.director.loadScene("start");
    }

});

cc._RF.pop();
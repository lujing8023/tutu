(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/p1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b7c80pqyQ9Cy5Bt1y+tHkar', 'p1', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=p1.js.map
        
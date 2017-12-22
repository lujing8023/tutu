(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/choose.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fc315i/zDpNhJrUwkWZQk2Q', 'choose', __filename);
// Script/choose.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        fruit: cc.Node, //水果选择按钮
        pen: cc.Node, //笔跟随节点
        box1: cc.Node, //选择图片预设节点1
        box2: cc.Node, //选择图片预设节点2
        box3: cc.Node, //选择图片预设节点3
        box4: cc.Node, //选择图片预设节点4
        back: cc.Node, //选择图片预设节点5
        cloud: cc.Node // 云的移动节点
    },

    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true; //开启碰撞系统
        this.mouseMove();
        //设置预设节点的位置
        if (window.suzi == 11) {
            this.box1.setPosition(0, 0);
        }
        if (window.suzi == 13) {
            this.box2.setPosition(0, 0);
        }
        if (window.suzi == 12) {
            this.box3.setPosition(0, 0);
        }
        if (window.suzi == 14) {
            this.box4.setPosition(0, 0);
        }
        //云移动
        var action = cc.moveBy(15, cc.p(-50, 0));
        var action2 = cc.moveBy(15, cc.p(50, 0));
        var action3 = cc.repeatForever(cc.sequence(action, action2));
        this.cloud.runAction(action3);
        cc.director.preloadScene("game1");
    },
    //选图片碰撞的节点方法
    mouseMove: function mouseMove() {
        var self = this;
        self.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var location = event.getLocation();
            var location2 = self.node.convertToNodeSpaceAR(location);
            self.pen.setPosition(location2);
        }, this);
    },
    //记录预设节点与鼠标跟随点的碰撞并且记录数据，并且用于加载下一场景使用
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.tag > 0 && other.tag < 60) {
            window.score = other.tag;
            cc.director.loadScene('game1');
        }
    },
    //返回按钮
    back1: function back1() {
        cc.director.loadScene('choose1');
    },

    update: function update() {}
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
        //# sourceMappingURL=choose.js.map
        
"use strict";
cc._RF.push(module, '27cb7qWja9NzrEWp/fD/6DK', 'movepicture');
// Script/movepicture.js

"use strict";

var _properties;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cc.Class({
    extends: cc.Component,

    properties: (_properties = {
        p1: cc.Node, //图片节点
        p2: cc.Node, //碰撞节点
        p3: cc.Node, //图片节点
        p4: cc.Node }, _defineProperty(_properties, "p4", cc.Node), _defineProperty(_properties, "donghua", cc.Node), _defineProperty(_properties, "zhezhao", cc.Node), _defineProperty(_properties, "bgmusic", cc.AudioClip), _properties),

    onLoad: function onLoad() {
        //按住图片拖动图片移动
        this.a = false;
        this.b = false;
        this.aniFlag = false;
        this.fangfa = function (event) {
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
        };
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.fangfa);
        this.setpicture();
    },
    setpicture: function setpicture() {
        var self = this;
        this.fangfa2 = function (event) {
            var p1Box = self.p1.getBoundingBox();
            var p2Box = self.p2.getBoundingBox();
            var p3Box = self.p3.getBoundingBox();
            var p4Box = self.p4.getBoundingBox();
            if (cc.Intersection.rectRect(p1Box, p2Box)) {
                self.p1.setPosition(110, 120);
            }
            if (cc.Intersection.rectRect(p3Box, p4Box)) {
                self.p3.setPosition(110, -99);
            }
        };
        //拖动图片进行拼然后在某一范围会吸附
        this.node.on(cc.Node.EventType.TOUCH_END, this.fangfa2, this);
    },
    update: function update(dt) {
        if (this.p1.x == 110 && this.p1.y == 120) {
            this.a = true;
        }
        if (this.p3.x == 110 && this.p3.y == -99) {
            this.b = true;
        }
        if (this.a == true && this.b == true) {
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this.fangfa);
            if (this.aniFlag == false) {
                this.donghua.getComponent(cc.Animation).play();
                window.audioID1 = cc.audioEngine.play(this.bgmusic, false, 1);
                this.aniFlag = true;
            }
            this.node.off(cc.Node.EventType.TOUCH_END, this.fangfa2, this);
        }
    }
});

cc._RF.pop();
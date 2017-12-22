cc.Class({
    extends: cc.Component,

    properties: {
        p1: cc.Node,
        p2: cc.Node,
        p3: cc.Node,
        p4: cc.Node,
        donghua: cc.Node,
        bgm: cc.AudioClip,
    },

    // use this for initialization
    onLoad: function () {
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
    setpicture: function () {
        var self = this;
        this.fangfa2 = function (event) {
            var p1Box = self.p1.getBoundingBox();
            var p2Box = self.p2.getBoundingBox();
            var p3Box = self.p3.getBoundingBox();
            var p4Box = self.p4.getBoundingBox();
            if (cc.Intersection.rectRect(p1Box, p2Box)) {
                self.p1.setPosition(36, 104);
            }
            if (cc.Intersection.rectRect(p3Box, p4Box)) {
                self.p3.setPosition(36, -106);
            }
        };
        this.node.on(cc.Node.EventType.TOUCH_END, this.fangfa2, this);
    },
    update: function (dt) {
        if (this.p1.x == 36 && this.p1.y == 104) {
            this.a = true;
        }
        if (this.p3.x == 36 && this.p3.y == -106) {
            this.b = true;
        }
        if (this.a == true && this.b == true) {
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this.fangfa);
            if (this.aniFlag == false) {
                this.donghua.getComponent(cc.Animation).play();
                window.date2 = cc.audioEngine.play(this.bgm,false, 1);
                this.aniFlag = true;
            }
            this.node.off(cc.Node.EventType.TOUCH_END, this.fangfa2, this);
        }
    },
});

cc.Class({
    extends: cc.Component,

    properties: {
        p1: cc.Node,
        p2: cc.Node,
        p3: cc.Node,
        p4: cc.Node,
        p5: cc.Node,
        p6: cc.Node,
        p7: cc.Node,
        p8: cc.Node,
        donghua: cc.Node,
        bgm: cc.AudioClip,
    },

    onLoad: function () {
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = false;
        this.aniFlag = false;
        this.fangfa = function (event) {
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;

        }
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
            var p5Box = self.p5.getBoundingBox();
            var p6Box = self.p6.getBoundingBox();
            var p7Box = self.p7.getBoundingBox();
            var p8Box = self.p8.getBoundingBox();
            if (cc.Intersection.rectRect(p1Box, p2Box)) {
                self.p1.setPosition(-130, 83);
            }
            if (cc.Intersection.rectRect(p3Box, p4Box)) {
                self.p3.setPosition(61, 83);
            }
            if (cc.Intersection.rectRect(p5Box, p6Box)) {
                self.p5.setPosition(-130, -109);
            }
            if (cc.Intersection.rectRect(p7Box, p8Box)) {
                self.p7.setPosition(61, -109);
            }

        }
        self.node.on(cc.Node.EventType.TOUCH_END, this.fangfa2, this);
    },
    update: function (dt) {
        if (this.p1.x == -130 && this.p1.y == 83) {
            this.a = true;
        }
        if (this.p3.x == 61 && this.p3.y == 83) {
            this.b = true;
        }
        if (this.p5.x == -130 && this.p5.y == -109) {
            this.c = true;
        }
        if (this.p7.x == 61 && this.p7.y == -109) {
            this.d = true;
        }
        if (this.a == true && this.b == true && this.c == true && this.d == true) {
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this.fangfa);
            if (this.aniFlag == false) {
                 window.audioID4 = cc.audioEngine.play(this.bgm, false, 1);
                 this.donghua.getComponent(cc.Animation).play();
                 console.log(window.audioID4)
                this.aniFlag = true;
            }
            this.node.off(cc.Node.EventType.TOUCH_END, this.fangfa2, this);
        }
    },
});

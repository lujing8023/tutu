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
        p9: cc.Node,
        p10: cc.Node,
        p11: cc.Node,
        p12: cc.Node,
        donghua: cc.Node,
        bgm: cc.AudioClip,
    },

    onLoad: function () {
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = false;
        this.e = false;
        this.f = false;
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
            var p9Box = self.p9.getBoundingBox();
            var p10Box = self.p10.getBoundingBox();
            var p11Box = self.p11.getBoundingBox();
            var p12Box = self.p12.getBoundingBox();
            if (cc.Intersection.rectRect(p1Box, p2Box)) {
                self.p1.setPosition(424, 469);
            }
            if (cc.Intersection.rectRect(p3Box, p4Box)) {
                self.p3.setPosition(581, 469);
            }
            if (cc.Intersection.rectRect(p5Box, p6Box)) {
                self.p5.setPosition(424, 319);
            }
            if (cc.Intersection.rectRect(p7Box, p8Box)) {
                self.p7.setPosition(581, 319);
            }
            if (cc.Intersection.rectRect(p9Box, p10Box)) {
                self.p9.setPosition(424, 169);
            }
            if (cc.Intersection.rectRect(p11Box, p12Box)) {
                self.p11.setPosition(581, 169);
            }

        };
        self.node.on(cc.Node.EventType.TOUCH_END, this.fangfa2, this);
    },
    update: function (dt) {
        if (this.p1.x == 424 && this.p1.y == 469) {
            this.a = true;
        }
        if (this.p3.x == 581 && this.p3.y == 469) {
            this.b = true;
        }
        if (this.p5.x == 424 && this.p5.y == 319) {
            this.c = true;
        }
        if (this.p7.x == 581 && this.p7.y == 319) {
            this.d = true;
        }
        if (this.p9.x == 424 && this.p9.y == 169) {
            this.e = true;
        }
        if (this.p11.x == 581 && this.p11.y == 169) {
            this.f = true;
        }
        if (this.a == true && this.b == true && this.c == true && this.d == true && this.e == true && this.f == true) {
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this.fangfa);
            if (this.aniFlag == false) {
                 window.audioID5 = cc.audioEngine.play(this.bgm, false, 1);
                this.donghua.getComponent(cc.Animation).play();
                this.aniFlag = true;
            }
            this.node.off(cc.Node.EventType.TOUCH_END, this.fangfa2, this);
        }
    },
});
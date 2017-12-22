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
        p13: cc.Node,
        p14: cc.Node,
        p15: cc.Node,
        p16: cc.Node,
        p17: cc.Node,
        p18: cc.Node,
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
        this.g = false;
        this.h = false;
        this.i = false;
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
            var p13Box = self.p13.getBoundingBox();
            var p14Box = self.p14.getBoundingBox();
            var p15Box = self.p15.getBoundingBox();
            var p16Box = self.p16.getBoundingBox();
            var p17Box = self.p17.getBoundingBox();
            var p18Box = self.p18.getBoundingBox();
            if (cc.Intersection.rectRect(p1Box, p2Box)) {
                self.p1.setPosition(-113, 167);
            }
            if (cc.Intersection.rectRect(p3Box, p4Box)) {
                self.p3.setPosition(6.5, 167);
            }
            if (cc.Intersection.rectRect(p5Box, p6Box)) {
                self.p5.setPosition(126, 167);
            }
            if (cc.Intersection.rectRect(p7Box, p8Box)) {
                self.p7.setPosition(-113, 47);
            }
            if (cc.Intersection.rectRect(p9Box, p10Box)) {
                self.p9.setPosition(6.5, 47);
            }
            if (cc.Intersection.rectRect(p11Box, p12Box)) {
                self.p11.setPosition(126.4, 47);
            }
            if (cc.Intersection.rectRect(p13Box, p14Box)) {
                self.p13.setPosition(-113, -72.6);
            }
            if (cc.Intersection.rectRect(p15Box, p16Box)) {
                self.p15.setPosition(6.5, -72.6);
            }
            if (cc.Intersection.rectRect(p17Box, p18Box)) {
                self.p17.setPosition(126.4, -72.6);
            }

        }
        self.node.on(cc.Node.EventType.TOUCH_END, this.fangfa2, this)
    },
    update: function (dt) {
        if (this.p1.x == -113 && this.p1.y == 167) {
            this.a = true;
        }
        if (this.p3.x == 6.5 && this.p3.y == 167) {
            this.b = true;
        }
        if (this.p5.x == 126 && this.p5.y == 167) {
            this.c = true;
        }
        if (this.p7.x == -113 && this.p7.y == 47) {
            this.d = true;
        }
        if (this.p9.x == 6.5&& this.p9.y == 47) {
            this.e = true;
        }
        if (this.p11.x == 126.4 && this.p11.y ==47) {
            this.f = true;
        }
        if (this.p13.x == -113 && this.p13.y == -72.6) {
            this.g = true;
        }
        if (this.p15.x == 6.5 && this.p15.y == -72.6) {
            this.h = true;
        }
        if (this.p17.x == 126.4 && this.p17.y == -72.6) {
            this.i = true;
        }
        if (this.a == true && this.b == true && this.c == true && this.d == true && this.e == true && this.f == true && this.g == true && this.h == true && this.i == true) {
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this.fangfa);
            if (this.aniFlag == false) {
                window.audioID7 = cc.audioEngine.play(this.bgm, false, 1);
                this.donghua.getComponent(cc.Animation).play();
                this.aniFlag = true;
            }
            this.node.off(cc.Node.EventType.TOUCH_END, this.fangfa2, this);
        }
    },
});
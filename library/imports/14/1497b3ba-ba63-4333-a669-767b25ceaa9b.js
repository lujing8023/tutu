"use strict";
cc._RF.push(module, '1497bO6umNDM6Zpdnslzqqb', 'game');
// Script/game.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        preApricot: cc.Prefab, //杏子预设节点

        prePeach: cc.Prefab, //桃子预设节点

        precherry: cc.Prefab, //樱桃预设节点

        prePersimmon: cc.Prefab, // 柿子预设节点

        preApple: cc.Prefab, // 苹果预设节点

        prehbc: cc.Prefab, //滑板车

        prehc: cc.Prefab, //火车

        prefc: cc.Prefab, //帆船

        prezxc: cc.Prefab, //自行车

        prefj: cc.Prefab, //飞机

        precb: cc.Prefab, //城堡

        predfc: cc.Prefab, //大风车

        premgfz: cc.Prefab, //蘑菇房

        preta: cc.Prefab, //塔

        prezp: cc.Prefab, //帐篷

        preshe: cc.Prefab, //蛇

        prelong: cc.Prefab, //龙

        preji: cc.Prefab, //鸡

        prezhu: cc.Prefab, //猪

        pretuzi: cc.Prefab, //兔子

        homebutton: cc.Node, //返回按钮

        back: cc.Node, //返回按钮

        addpicture1: cc.Node, //添加图片节点

        sunrotate: cc.Node, //太阳旋转节点

        cloud: cc.Node, // 云的移动节点

        cunben: cc.Node, //保存图片的框

        paitupianjiedian: cc.Node, //排版图片的节点

        baocunbutton: cc.Node, //保存按钮

        cunbenbutton: cc.Node, //弹出保存框的按钮

        guanbicunbenbutton: cc.Node, //关闭保存框

        preyt: cc.Prefab, //樱桃的保存节点

        pen: cc.Node, //笔移动
        closebox: cc.Node, //yichuhezi

        kong: cc.Node,
        jieping: cc.Node,
        Canvas: cc.Node

    },

    onLoad: function onLoad() {
        //云移动
        var action = cc.moveBy(5, cc.p(-30, 0));
        var action2 = cc.moveBy(5, cc.p(30, 0));
        var action3 = cc.repeatForever(cc.sequence(action, action2));
        this.cloud.runAction(action3);
        //设置预设的位置
        if (window.score == 1) {
            var newNode = cc.instantiate(this.preApricot);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 2) {
            var _newNode = cc.instantiate(this.prePeach);
            _newNode.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode);
        }
        if (window.score == 5) {
            var _newNode2 = cc.instantiate(this.precherry);
            _newNode2.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode2);
        }
        if (window.score == 3) {
            var _newNode3 = cc.instantiate(this.prePersimmon);
            _newNode3.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode3);
        }
        if (window.score == 4) {
            var _newNode4 = cc.instantiate(this.preApple);
            _newNode4.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode4);
        }
        if (window.score == 45) {
            var _newNode5 = cc.instantiate(this.prezxc);
            _newNode5.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode5);
        }
        if (window.score == 46) {
            var _newNode6 = cc.instantiate(this.prefc);
            _newNode6.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode6);
        }
        if (window.score == 47) {
            var _newNode7 = cc.instantiate(this.prehc);
            _newNode7.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode7);
        }
        if (window.score == 48) {
            var _newNode8 = cc.instantiate(this.prehbc);
            _newNode8.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode8);
        }
        if (window.score == 49) {
            var _newNode9 = cc.instantiate(this.prefj);
            _newNode9.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode9);
        }
        if (window.score == 40) {
            var _newNode10 = cc.instantiate(this.preta);
            _newNode10.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode10);
        }
        if (window.score == 41) {
            var _newNode11 = cc.instantiate(this.premgfz);
            _newNode11.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode11);
        }
        if (window.score == 42) {
            var _newNode12 = cc.instantiate(this.predfc);
            _newNode12.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode12);
        }
        if (window.score == 43) {
            var _newNode13 = cc.instantiate(this.precb);
            _newNode13.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode13);
        }
        if (window.score == 44) {
            var _newNode14 = cc.instantiate(this.prezp);
            _newNode14.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode14);
        }
        if (window.score == 50) {
            var _newNode15 = cc.instantiate(this.prezhu);
            _newNode15.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode15);
        }
        if (window.score == 51) {
            var _newNode16 = cc.instantiate(this.preji);
            _newNode16.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode16);
        }
        if (window.score == 52) {
            var _newNode17 = cc.instantiate(this.prelong);
            _newNode17.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode17);
        }
        if (window.score == 53) {
            var _newNode18 = cc.instantiate(this.preshe);
            _newNode18.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode18);
        }
        if (window.score == 54) {
            var _newNode19 = cc.instantiate(this.pretuzi);
            _newNode19.setPosition(-100, 20);
            this.addpicture1.addChild(_newNode19);
        }
        this.date = JSON.parse(cc.sys.localStorage.getItem("color")) || [];
        console.log(JSON.parse(cc.sys.localStorage.getItem("color")));
        for (var i = 0; i < this.date.length; i++) {
            var yt = cc.instantiate(this.preyt);
            this.paitupianjiedian.addChild(yt);
            for (var j = 0; j < this.date[i].length; j++) {
                yt.children[j].color = this.date[i][j];
                //console.log(this.date);
            }
        }
    },
    update: function update(dt) {
        this.sunrotate.rotation += 0.2; //太阳旋转
    },
    backbutton: function backbutton() {
        cc.director.loadScene('choose2');
    },
    homebutton1: function homebutton1() {
        cc.director.loadScene('start');
    },
    cunbenbutton1: function cunbenbutton1() {
        this.cunben.setPosition(0, 0);
        this.pen.setPosition(-1000, 0);
    },
    guanbicunbenbutton1: function guanbicunbenbutton1() {
        this.cunben.setPosition(1500, 0);
    },
    baocunbutton1: function baocunbutton1() {
        var self = this;
        this.color = [];

        switch (window.score) {
            case 5:
                //樱桃
                var newNode = cc.instantiate(this.preyt);
                self.paitupianjiedian.addChild(newNode);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    newNode.children[b].color = this.color[b];
                }
                console.log(this.color);
                //var colorDate = {colorsate:this.color}
                this.date.push(this.color);
                var colorDate = { colorsate: this.date };
                cc.sys.localStorage.setItem("color", JSON.stringify(colorDate));
                console.log(JSON.stringify(colorDate));
                break;
            case 1:
                var n1 = cc.instantiate(this.preApricot);
                self.paitupianjiedian.addChild(n1);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n1.children[b].color = this.color[b];
                }
                break;
            case 2:
                var n2 = cc.instantiate(this.prePeach);
                self.paitupianjiedian.addChild(n2);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n2.children[b].color = this.color[b];
                }
                break;
            case 3:
                var n3 = cc.instantiate(this.prePersimmon);
                self.paitupianjiedian.addChild(n3);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n3.children[b].color = this.color[b];
                }
                break;
            case 4:
                var n4 = cc.instantiate(this.preApple);
                self.paitupianjiedian.addChild(n4);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n4.children[b].color = this.color[b];
                }
                break;
            case 45:
                var n45 = cc.instantiate(this.prezxc);
                self.paitupianjiedian.addChild(n45);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n45.children[b].color = this.color[b];
                }
                break;
            case 46:
                var n46 = cc.instantiate(this.prefc);
                self.paitupianjiedian.addChild(n46);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n46.children[b].color = this.color[b];
                }
                break;
            case 47:
                var n47 = cc.instantiate(this.prehc);
                self.paitupianjiedian.addChild(n47);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n47.children[b].color = this.color[b];
                }
                break;
            case 48:
                var n48 = cc.instantiate(this.prehbc);
                self.paitupianjiedian.addChild(n48);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n48.children[b].color = this.color[b];
                }
                break;
            case 49:
                var n49 = cc.instantiate(this.prefj);
                self.paitupianjiedian.addChild(n49);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n49.children[b].color = this.color[b];
                }
                break;
            case 40:
                var n40 = cc.instantiate(this.preta);
                self.paitupianjiedian.addChild(n40);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n40.children[b].color = this.color[b];
                }
                break;
            case 41:
                var n41 = cc.instantiate(this.premgfz);
                self.paitupianjiedian.addChild(n41);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n41.children[b].color = this.color[b];
                }
                break;
            case 42:
                var n42 = cc.instantiate(this.predfc);
                self.paitupianjiedian.addChild(n42);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n42.children[b].color = this.color[b];
                }
                break;
            case 43:
                var n43 = cc.instantiate(this.precb);
                self.paitupianjiedian.addChild(n43);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n43.children[b].color = this.color[b];
                }
                break;
            case 44:
                var n44 = cc.instantiate(this.prezp);
                self.paitupianjiedian.addChild(n44);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n44.children[b].color = this.color[b];
                }
                break;
            case 50:
                var n50 = cc.instantiate(this.prezhu);
                self.paitupianjiedian.addChild(n50);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n50.children[b].color = this.color[b];
                }
                break;
            case 51:
                var n51 = cc.instantiate(this.preji);
                self.paitupianjiedian.addChild(n51);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n51.children[b].color = this.color[b];
                }
                break;
            case 52:
                var n52 = cc.instantiate(this.prelong);
                self.paitupianjiedian.addChild(n52);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n52.children[b].color = this.color[b];
                }
                break;
            case 53:
                var n53 = cc.instantiate(this.preshe);
                self.paitupianjiedian.addChild(n53);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n53.children[b].color = this.color[b];
                }
                break;
            case 54:
                var n54 = cc.instantiate(this.pretuzi);
                self.paitupianjiedian.addChild(n54);
                this.preNode1 = self.addpicture1.children[0];
                for (var a = 0; a < this.preNode1.children.length; a++) {
                    this.color.push(this.preNode1.children[a].color);
                }
                for (var b = 0; b < this.color.length && this.color.length > 0; b++) {
                    n54.children[b].color = this.color[b];
                }
                break;
        }
    },
    captureScreen: function captureScreen() {
        if (CC_JSB) {
            var render = cc.RenderTexture.create(960, 640, cc.Texture2D.PIXEL_FORMAT_RGBA8888, gl.DEPTH24_STENCIL8_OES);
            render.begin();
            //this.richText.node 是我们要截图的节点，如果要截整个屏幕，可以把 this.richText 换成 Canvas 切点即可
            console.log(this.Canvas);
            this.Canvas._sgNode.visit();
            render.end();
            console.log(render);
            render.saveToFile("demo.png", cc.ImageFormat.PNG, true, function () {
                console.log("capture screen successfully!");
            });
            //打印截图路径
            console.log(jsb.fileUtils.getWritablePath());
        }
    }
});

cc._RF.pop();
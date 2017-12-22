cc.Class({
    extends: cc.Component,

    properties: {
        preApricot: cc.Prefab,//杏子预设节点

        prePeach: cc.Prefab,//桃子预设节点

        precherry: cc.Prefab,//樱桃预设节点

        prePersimmon: cc.Prefab,// 柿子预设节点

        preApple: cc.Prefab,// 苹果预设节点

        prehbc: cc.Prefab,//滑板车

        prehc: cc.Prefab,//火车

        prefc: cc.Prefab,//帆船

        prezxc: cc.Prefab,//自行车

        prefj: cc.Prefab,//飞机

        precb: cc.Prefab,//城堡

        predfc: cc.Prefab,//大风车

        premgfz: cc.Prefab,//蘑菇房

        preta: cc.Prefab,//塔

        prezp: cc.Prefab,//帐篷

        preshe: cc.Prefab,//蛇

        prelong: cc.Prefab,//龙

        preji: cc.Prefab,//鸡

        prezhu: cc.Prefab,//猪

        pretuzi: cc.Prefab,//兔子

        homebutton: cc.Node,//返回按钮

        back: cc.Node,//返回按钮

        addpicture1: cc.Node,//添加图片节点

        sunrotate: cc.Node,//太阳旋转节点

        cloud: cc.Node,// 云的移动节点

        cunben: cc.Node,//保存图片的框

        paitupianjiedian: cc.Node,//排版图片的节点

        baocunbutton: cc.Node,//保存按钮

        cunbenbutton: cc.Node,//弹出保存框的按钮

        guanbicunbenbutton: cc.Node,//关闭保存框

        preyt: cc.Prefab,//樱桃的保存节点

        pen: cc.Node,//笔移动
        closebox: cc.Node,//yichuhezi

        kong: cc.Node,
        jieping: cc.Node,
        Canvas: cc.Node,

    },


    onLoad: function () {
        //云移动
        var action = cc.moveBy(5, cc.p(-30, 0));
        var action2 = cc.moveBy(5, cc.p(30, 0));
        var action3 = cc.repeatForever(cc.sequence(action, action2))
        this.cloud.runAction(action3);
        //设置预设的位置
        if (window.score == 1) {
            let newNode = cc.instantiate(this.preApricot);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 2) {
            let newNode = cc.instantiate(this.prePeach);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 5) {
            let newNode = cc.instantiate(this.precherry);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 3) {
            let newNode = cc.instantiate(this.prePersimmon);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 4) {
            let newNode = cc.instantiate(this.preApple);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 45) {
            let newNode = cc.instantiate(this.prezxc);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 46) {
            let newNode = cc.instantiate(this.prefc);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 47) {
            let newNode = cc.instantiate(this.prehc);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 48) {
            let newNode = cc.instantiate(this.prehbc);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 49) {
            let newNode = cc.instantiate(this.prefj);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 40) {
            let newNode = cc.instantiate(this.preta);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 41) {
            let newNode = cc.instantiate(this.premgfz);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 42) {
            let newNode = cc.instantiate(this.predfc);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 43) {
            let newNode = cc.instantiate(this.precb);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 44) {
            let newNode = cc.instantiate(this.prezp);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 50) {
            let newNode = cc.instantiate(this.prezhu);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 51) {
            let newNode = cc.instantiate(this.preji);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 52) {
            let newNode = cc.instantiate(this.prelong);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.score == 53) {
            let newNode = cc.instantiate(this.preshe);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);

        }
        if (window.score == 54) {
            let newNode = cc.instantiate(this.pretuzi);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
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
    update: function (dt) {
        this.sunrotate.rotation += 0.2;//太阳旋转
    },
    backbutton: function () {
        cc.director.loadScene('choose2')
    },
    homebutton1: function () {
        cc.director.loadScene('start')
    },
    cunbenbutton1: function () {
        this.cunben.setPosition(0, 0);
        this.pen.setPosition(-1000, 0)
    },
    guanbicunbenbutton1: function () {
        this.cunben.setPosition(1500, 0);
    },
    baocunbutton1: function () {
        var self = this;
        this.color = [];

        switch (window.score) {
            case 5://樱桃
                let newNode = cc.instantiate(this.preyt);
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
                var colorDate = { colorsate: this.date }
                cc.sys.localStorage.setItem("color", JSON.stringify(colorDate))
                console.log(JSON.stringify(colorDate))
                break;
            case 1:
                let n1 = cc.instantiate(this.preApricot);
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
                let n2 = cc.instantiate(this.prePeach);
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
                let n3 = cc.instantiate(this.prePersimmon);
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
                let n4 = cc.instantiate(this.preApple);
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
                let n45 = cc.instantiate(this.prezxc);
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
                let n46 = cc.instantiate(this.prefc);
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
                let n47 = cc.instantiate(this.prehc);
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
                let n48 = cc.instantiate(this.prehbc);
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
                let n49 = cc.instantiate(this.prefj);
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
                let n40 = cc.instantiate(this.preta);
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
                let n41 = cc.instantiate(this.premgfz);
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
                let n42 = cc.instantiate(this.predfc);
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
                let n43 = cc.instantiate(this.precb);
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
                let n44 = cc.instantiate(this.prezp);
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
                let n50 = cc.instantiate(this.prezhu);
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
                let n51 = cc.instantiate(this.preji);
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
                let n52 = cc.instantiate(this.prelong);
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
                let n53 = cc.instantiate(this.preshe);
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
                let n54 = cc.instantiate(this.pretuzi);
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
    captureScreen: function () {
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

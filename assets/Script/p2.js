cc.Class({
    extends: cc.Component,

    properties: {
        backbutton: cc.Node,
        prep1: cc.Prefab,
        prep2: cc.Prefab,
        prep3: cc.Prefab,
        prep4: cc.Prefab,
        prep5: cc.Prefab,
        prep6: cc.Prefab,
        prep7: cc.Prefab,
        addpicture1: cc.Node,
        sunrotate: cc.Node,//太阳旋转节点
    },
    update: function (dt) {
        this.sunrotate.rotation += 0.2;//太阳旋转
    },

    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;  //开启碰撞系统
        if (window.picturedate == 1) {
            let newNode = cc.instantiate(this.prep1);
            newNode.setPosition(-100, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.picturedate == 2) {
            let newNode = cc.instantiate(this.prep2);
            newNode.setPosition(0, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.picturedate == 3) {
            let newNode = cc.instantiate(this.prep3);
            newNode.setPosition(0, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.picturedate == 4) {
            let newNode = cc.instantiate(this.prep4);
            newNode.setPosition(0, 20);
            this.addpicture1.addChild(newNode);
        }
        if (window.picturedate == 5) {
            let newNode = cc.instantiate(this.prep5);
            newNode.setPosition(-450, -350);
            this.addpicture1.addChild(newNode);
        }
        if (window.picturedate == 6) {
            let newNode = cc.instantiate(this.prep6);
            newNode.setPosition(0, 0);
            this.addpicture1.addChild(newNode);
        }
        if (window.picturedate == 7) {
            let newNode = cc.instantiate(this.prep7);
            newNode.setPosition(0, 0);
            this.addpicture1.addChild(newNode);
        }
    },
    backbutton1: function () {
        var a = this.addpicture1.children[0].name;
        var b = a - 0;
        switch (b) {
            case 1:
                if (this.aniFlag = false) {
                    cc.audioEngine.stop(window.audioID1);
                    cc.audioEngine.stop(window.audioID1 - 1);
                }
                break;
            case 2:
                if (this.aniFlag = false) {
                    cc.audioEngine.stop(window.date2);
                    cc.audioEngine.stop(window.date2 - 1);
                }
                break;
            // case 3:
            // if(this.aniFlag = true){
            //     cc.audioEngine.stop(window.audioID3);
            //     cc.audioEngine.stop(window.audioID3 - 1);
            //     cc.audioEngine.stop(window.audioID3 - 2);
            //     cc.audioEngine.stop(window.audioID3 - 3);
            // }
            //     break;

            // case 4:
            // if(this.aniFlag = true){
            //     cc.audioEngine.stop(window.audioID4);
            //     cc.audioEngine.stop(window.audioID4 - 1);
            //     cc.audioEngine.stop(window.audioID4 - 2);
            //     cc.audioEngine.stop(window.audioID4 - 3);

            // }
            //     break;
            // case 5:
            // if(this.aniFlag = true){
            //     cc.audioEngine.stop(window.audioID5);
            //     cc.audioEngine.stop(window.audioID5 - 1);
            //     cc.audioEngine.stop(window.audioID5 - 2);
            //     cc.audioEngine.stop(window.audioID5 - 3);
            //     cc.audioEngine.stop(window.audioID5 - 4);
            //     cc.audioEngine.stop(window.audioID5 - 5);

            // }
            //     break;
            // case 6:
            // if(this.aniFlag = true){
            //     cc.audioEngine.stop(window.audioID6);
            //     cc.audioEngine.stop(window.audioID6 - 1);
            //     cc.audioEngine.stop(window.audioID6 - 2);
            //     cc.audioEngine.stop(window.audioID6 - 3);
            //     cc.audioEngine.stop(window.audioID6 - 4);
            //     cc.audioEngine.stop(window.audioID6 - 5);

            // }
            //     break;
            // case 7:
            // if(this.aniFlag = true){
            //     cc.audioEngine.stop(window.audioID7);
            //     cc.audioEngine.stop(window.audioID7 - 1);
            //     cc.audioEngine.stop(window.audioID7 - 2);
            //     cc.audioEngine.stop(window.audioID7 - 3);
            //     cc.audioEngine.stop(window.audioID7 - 4);
            //     cc.audioEngine.stop(window.audioID7 - 5);
            //     cc.audioEngine.stop(window.audioID7 - 6);
            //     cc.audioEngine.stop(window.audioID7 - 7);
            //     cc.audioEngine.stop(window.audioID7 - 8);
            // }
            //     break;
            default:

                break;
        }
        cc.director.loadScene('p1');
    },
});
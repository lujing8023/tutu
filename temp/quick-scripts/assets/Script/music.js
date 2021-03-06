(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/music.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '468a9A4fMJMqL2RROfn67SL', 'music', __filename);
// Script/music.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        bgm: cc.AudioClip,
        node1: cc.Node
        // musicButton: cc.Node,
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node1);
        cc.audioEngine.play(this.bgm, true, 1);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    // musicbutton1: function () {
    //     console.log("111")
    //     if (window.music1 === undefined || false) {

    //         window.music1 = true;
    //         cc.audioEngine.play(this.bgm, true, 1);
    //     } else if (window.music1 === true) {

    //         window.music1 = false;
    //         cc.audioEngine.stopAll();
    //     }

    // }
    // },
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
        //# sourceMappingURL=music.js.map
        
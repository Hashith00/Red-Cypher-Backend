const express = require("express");
const router = express.Router();

router.get("/getFlag", (req, res) => {
  try {
    res.send({ Flag: "flag one" });
  } catch (e) {
    res.send(e);
  }
});

router.get("/getFlagUncry", (req, res) => {
  try {
    let hexString =
      "x#pd|#eh#dgglfwhg#wr#sruqrjudsklf#pdwhuldo#li#|rx#frqvwdqwo|#fudyh#hurwlf#glvsod|v#ghvslwh#dwwhpswv#wr#uhgxfh#|rxu#xujhv1#x#pd|#dovr#ilqg#rwkhu#duhdv#ri#olih#olnh#zrun/#dfdghplfv/#dqg#vrfldo#lqwhudfwlrqv#olplwhg#e|#wkh#frqvwdqw#qhhg#wr#frqvxph#sruq1#Zdwfklqj#sruq#pd|#dovr#wdnh#ryhu#dq|#rwkhu#lqwhuhvwv1#Li#|rx*uh#dgglfwhg#wr#sruq/#|rx#fdq#eh#vr#~iodjVXE4'~XNX887U6Wx:QMRLQQRZ#ryhuwdnhq#e|#wkh#qhhg#wr#frqvxph#sruq#wkdw#|rx#pd|#ehjlq#wr#zdwfk#lw#lq#sxeolf#vsdfhv#olnh#dw#zrun#ru#rq#sxeolf#wudqvlw1#Vwdwlvwlfv#rq#sruq#dgglfwlrq#ydu|#e|#vrxufh/#exw#rqh#vwxg|#hvwlpdwhg#wkdw#sruq#dgglfwlrq#diihfwv#dssur{lpdwho|#6#wr#9(#ri#dgxowv1#Lw#lv#ylhzhg#pruh#e|#|rxqj#dgxowv/#zlwk#phq#ylhzlqj#lw#pruh#iuhtxhqwo|#wkdq#zrphq1#Xvh#whqgv#wr#ghfolqh#zlwk#djh";
    res.send({ Flag: hexString });
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;

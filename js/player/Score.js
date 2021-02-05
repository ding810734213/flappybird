// 得分

import { DataStore } from "../base/DataStore";

// 得分不是一个图片,所以不需要继承Sprite
export class Score {
  constructor(){
    this.scoreNumber = 0; // 计分器
    this.dataStore = DataStore.getInstance();
    this.ctx = this.dataStore.ctx;
    this.canAdd = true; // 是否可以加分
  }
  // 画分数
  draw(){
    this.ctx.font = "25px 微软雅黑";
    this.ctx.fillStyle = "#de335e";
    this.ctx.fillText(
      this.scoreNumber, // 得分的数字
      this.dataStore.canvas.width / 2 , // 分数水平居中
      this.dataStore.canvas.height / 9 // 垂直距离
    );
  }
}
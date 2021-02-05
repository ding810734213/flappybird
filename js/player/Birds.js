import { DataStore } from "../base/DataStore";
// 小鸟类

import { Sprite } from "../base/Sprite";

export class Birds extends Sprite{
  constructor(){
    let img = Sprite.getImage("birds");
    super(img,0,0,img.width,img.height,0,0,img.width,img.height);
    // 裁剪小鸟图
    // 小鸟的宽34, 高24, 上下边距10, 左右边距9
    this.clippingX = [9, 9+34+18, 9+34+18+34+18]; // 裁剪的x坐标
    this.clippingY = [10, 10, 10]; // 裁剪的y坐标
    this.clippingWidth = [34, 34, 34]; // 裁剪的宽度
    this.clippingHeight = [24, 24, 24]; // 裁剪的高度
    let canvas = DataStore.getInstance().canvas;
    let birdsX = canvas.width / 4; // 小鸟在画布上的初始x坐标
    this.birdsX = [birdsX, birdsX, birdsX];
    let birdsY = (canvas.height - DataStore.getInstance().res.get("land").height) / 2; // 小鸟在画布上的初始y坐标
    this.birdsY = [birdsY, birdsY, birdsY];
    this.birdsWidth = [34, 34, 34]; // 小鸟在画布上的宽度
    this.birdsHeight = [24, 24, 24]; // 小鸟在画布上的高度
    this.y = [birdsY, birdsY, birdsY]; // 小鸟的实时y坐标
    this.index = 0; // 小鸟切换下标
    this.count = 0; // 计数器
    this.time = 0; // 计时器,计算自由落体的时间
  }
  // 重写draw方法,让小鸟能动起来
  draw(){
    // 切换小鸟下标实现小鸟扇翅膀
    this.count++;
    this.index = Math.floor(this.count / 5);
    if(this.index>=3){
      this.count = 0;
      this.index = 0;
    }
    // 不操作的时候,小鸟做自由落体运动
    let g = 0.98 / 2.4 ; // 模拟的重力加速度
    let offset = 30 ; // 向上的偏移量
    let offsetY = g*this.time*(this.time-offset) / 2;
    for(let i=0;i<3;i++){
      this.birdsY[i] = this.y[i] + offsetY;
    }
    this.time++;

    super.draw(
      this.img,
      this.clippingX[this.index], // 裁剪的x坐标
      this.clippingY[this.index], // 裁剪的y坐标
      this.clippingWidth[this.index], // 裁剪的宽度
      this.clippingHeight[this.index], // 裁剪的高度
      this.birdsX[this.index], // 画布上的x坐标
      this.birdsY[this.index], // 画布上的y坐标
      this.birdsWidth[this.index], // 在画布上的宽
      this.birdsHeight[this.index] // 在画布上的高
    );
  }
}
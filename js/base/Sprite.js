// 图片的基类,所有图片类的父类

import { DataStore } from "./DataStore";

export class Sprite{
  constructor(
    img = null, // 图片对象
    srcX = 0, // 初始x坐标
    srcY = 0, // 初始y坐标
    srcW = 0, // 图片宽度
    srcH = 0, // 图片高度
    x = 0, // 图片在画布上的初始x坐标
    y = 0, // 图片在画布上的初始y坐标
    w = 0, // 图片在画布上的宽度
    h = 0 // 图片在画布上的高度
  ){
    // 获取变量池中的ctx对象
    this.ctx = DataStore.getInstance().ctx;
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  // 画图
  draw(
    img = this.img,
    srcX = this.srcX,
    srcY = this.srcY,
    srcW = this.srcW,
    srcH = this.srcH,
    x = this.x,
    y = this.y,
    w = this.w,
    h = this.h
  ){
    this.ctx.drawImage(img,srcX,srcY,srcW,srcH,x,y,w,h);
  }

  // 获取某个图片
  static getImage(key){
    return DataStore.getInstance().res.get(key);
  }
}
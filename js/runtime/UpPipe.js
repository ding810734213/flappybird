import { Sprite } from "../base/Sprite";
// 上半部的水管

import { Pipe } from "./Pipe";

export class UpPipe extends Pipe{
  constructor(top){
    // 获取上水管的图片对象
    let img = Sprite.getImage("upPie");
    // 重写父类构造
    super(img, top);
  }

  draw(){
    this.y = this.top - this.h; // 实际上水管出现时的初始y坐标
    super.draw();
  }
}
import { DataStore } from "../base/DataStore";
// 重新开始按钮

import { Sprite } from "../base/Sprite";

export class StartButton extends Sprite{
  constructor(){
    let img = Sprite.getImage("startButton");
    let canvas = DataStore.getInstance().canvas;
    let land = Sprite.getImage("land");
    let x = (canvas.width - img.width)/2;
    let y = (canvas.height - img.height - land.height) / 2;
    // 重写父类构造
    super(img,0,0,img.width,img.height,x,y,img.width,img.height);
  }
}
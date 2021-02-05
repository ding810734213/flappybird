// 资源加载器,保证所有图片都是在加载完成之后才开始渲染

import { Resources } from "./Resources";

export class ResourceLoader{
  constructor(){
    // 创建资源对象
    this.map = new Map(Resources);
    // console.log(this.map);
    // 遍历map,将其中的字符串路径全部替换为对应的图片对象
    for(let [key,val] of this.map){
      // key: 图片的键名, val: 字符串路径
      // 创建图片对象
      let img = wx.createImage(); // 不能使用new Image(),没有Image对象
      img.src = val; // 将路径赋值给图片的src属性
      // 替换map中的字符串(重新设值,相同的key,后设置的值会覆盖前面的值)
      this.map.set(key, img);
    }
    // console.log(this.map)
  }

  // 所有图片加载完成后
  onloaded(){
    // 加载图片是一个异步操作,可以使用回调的方式,也可以使用promise
    /* 下面的代码中,不能使用function,否则this指向会发生改变 */
    return new Promise(resolve=>{
      let count = 0; // 计数器,统计加载完成的图片的数量
      // 遍历map中所有的图片对象(map的值)
      for(let img of this.map.values()){
        img.onload = ()=>{
          // 加载完成,count自增
          count++;
          // 加载完成的条件: count值和map的个数相等
          if(count >= this.map.size){
            // 加载完成,返回map数据
            resolve(this.map);
          }
        }
      }
    })
  }
}
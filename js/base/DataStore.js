// 变量池,保存游戏过程中用到的数据,方便我们在不同的类中访问和修改变量

export class DataStore{
  constructor(){
    // console.log("创建了一个变量池");
    this.map = new Map();
  }
  // 使用单例模式创建变量池,保证所有类获取到的变量池都是同一个
  // 这样可以保证所有类取到的数据都是从相同的变量池中取的
  // static修饰的方法不能通过实例对象访问,只能通过类访问
  static getInstance(){
    if(!DataStore.instance){ // 如果instance不存在
      // 创建一个新的DataStore对象,绑定上去
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }

  // 存数据
  put(key,val){
    this.map.set(key,val);
    return this; // 返回原对象,方便链式调用
  }
  // 取数据
  get(key){
    return this.map.get(key);
  }
  // 销毁数据
  destroy(){
    this.map.clear();
  }
}





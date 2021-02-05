// 获取用户信息
function getUserInfo(){
  wx.getUserInfo({
    // success: function(res){},
    success(res){
      console.log(res)
    },
    fail(err){
      console.log(err)
    }
  })
}
// 获取系统信息(获取的是手机的信息)
function getTelInfo(){
  wx.getSystemInfo({
    success(res){
      console.log(res);
    },
    fail(err){
      console.log(err)
    }
  })
}

// 创建用户信息按钮
function createUserInfoButton(){
  let button = wx.createUserInfoButton({
    type: 'text',
    text: '获取用户信息',
    style: {
      left: 10,
      top: 76,
      width: 200,
      height: 40,
      lineHeight: 40,
      backgroundColor: '#ff0000',
      color: '#ffffff',
      textAlign: 'center',
      fontSize: 16,
      borderRadius: 4
    }
  })
  button.onTap((res) => {
    console.log(res)
  })
  
}

// 弹出键盘
function showKeyboard(){
  wx.showKeyboard({
    defaultValue: "",
    maxLength: 50,
    multiple: true,
    confirmHold: true,
    confirmType: "send",
    success(res){
      console.log(res);
    }
  })
}

export default {
  getUserInfo,
  getTelInfo,
  createUserInfoButton,
  showKeyboard
}




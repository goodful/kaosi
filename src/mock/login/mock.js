let Mock =require("mockjs");
Mock.mock("/api/login","post",function(config){
    console.log(config);
    // 拿到的config的body为字符串格式，要转化为JSON对象使用
    let object=JSON.parse(config.body);
    let username=object.username;
    let password=password;
    // 判断，mock模拟虚假正则
    if(username=="admin"&&password=="123456"){
        return{
            message:"NO",
            // 如果成功设置token权限
            // data:{token:"qqqqqqq"}
        }
    }else{
        return{
            message:"OK"
        }
    }
})
<template>
    <div>
        <el-form ref="form" label-width="80px">
            <el-form-item>
                <h1>Login Form</h1>
            </el-form-item>
            <el-form-item>
                <el-input type="text" v-model="username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">Login</el-button>
            </el-form-item>
            <p>username:admin password:123456</p>
        </el-form>
    </div>
</template>
<script>
import instance from "./../api/index"
    export default ({
        name: "LoginView",
        data() {
            return {
                username:"admin",
                password:"123456",
                rules:{
                    username:[{
                        type:"String",
                        required:true,
                        pattern:/^\w{3,8}\w$/,
                        message:"用户名格式错误，请输入5-10个字符"
                    }],
                    password:[{
                        type:"String",
                        required:true,
                        pattern:/^\d{4,8}\d$/,
                        message:"用户名格式错误，请输入6-10个字符"
                    }]
                }
            }

        },
        methods: {
            async submit(){
                let username=this.username;
                let password=this.password;
                console.log(username,password);
                // 异步post拿到login登录页的用户名和密码
                let {data}=await instance.post("/login",{username,password});
                // 根据拿到的data数据的内容判断类型（成功OK或者失败NO）
                if(data.message==="OK"){
                    // localStorage.setItem("token",data.data.token)
                    this.$message({
                        type:"success",
                        message:"登录成功",
                        onClose:()=>{
                            // 编程式跳转到指定路径：home页面
                            this.$router.push("/home")
                        }
                    })
                }else if(data.message==="NO"){
                    return this.$message.error("输入账号或密码有误");
                }
            }
        },
        created:{

        }
    })
</script>
<style scoped>

    .el-form{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        background:#2d3a4b;
        height:100vh;
    }
    h1{
        color:white;
        text-align:center;
        font-size:30px;
    }
    .el-input{
        width:600px;
    }
    .el-button{
        width:600px;
    }
    p{
        color:white;
        text-align:left;
    }
</style>
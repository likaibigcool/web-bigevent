$(function () {
    // 点击注册账号的廉价而
    $("#link-reg").on("click",function () {
        $(".login-box").hide()
        $(".reg-box").show()
    })
        // 点击去登陆的链接
        $("#link-login").on("click",function () {
            $(".login-box").show()
            $(".reg-box").hide()
        })


        
    })
            // 监听登录页面提交事件
        $("#form-login").on("submit" , function (e) {
        e.preventDefault()
        $.ajax({
            url:"http://www.liulongbin.top:3007/api/login",
            method:"POST",
            data:$(this).serialize(),
            success:function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return alert("失败")
                }
                    alert("登录成功")
                    location.href  = "/index.html"
            }
        })
        })
    // 获取 layui 弹窗
    //   const layer = layui.layer;
    // 监听注册表单的提交事件
    $("#from-reg").on("submit",function (e) {
        e.preventDefault()
        $.ajax({
            type:"POST",
            url:"http://www.liulongbin.top:3007/api/reguser",
            data:{
                username:$("#from-reg [name=username]").val(),
                password:$("#from-reg [name=password]").val(),
            },
            success:function (res) {
                console.log(res);
                if (res.status !==0 ) {
                    // return console.log(res.massage);
            //    return  layer.msg();
               alert(res.massage)
                    
                }
                console.log("成功");
                // layer.msg('成功');
                alert("成功")
            }
        })
    })


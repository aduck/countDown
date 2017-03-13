# countDown倒计时

        countDown({
            "time" : "2017/3/14",  // 终止时间 String 必须
            "format" : "dd天hh时mm分ss秒",  // 输出格式化 String 可选 默认dd天 hh时 mm分 ss秒
            "container" : document.getElementById('box')  // 容器 Object 可选 默认 document.getElementById('countDown')
        },function(){  // 回调函数 Function 可选
            alert('done')
        })

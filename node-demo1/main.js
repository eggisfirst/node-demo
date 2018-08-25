window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}

window.jQuery.ajax = function(options){
  // let url = options.url
  // let method = options.method
  // let successFn = options.successFn
  // let body = options.body
  // let failFn = options.failFn
  // let headers = options.headers
  //ES6 析构赋值
  let {url,method,successFn,failFn,headers,body} = options
  let request = new XMLHttpRequest()
  request.open(method,url) //配置request
  for(let key in headers){              //设置请求头
    let value = headers[key]
    request.setRequestHeader(key,value)
  }

  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        successFn.call(undefined,request.responseText)   //call
      }else if(request.status >= 400){
        failFn.call(undefined,request)
      }
    }
  }
  request.send(body)
}

function f1(responseText){
  console.log(1)
}
function f2(responseText){
  console.log(2)
}
window.$ = window.jQuery

myBtn.addEventListener('click',(e)=>{
  window.jQuery.ajax({
    url : '/xxx',
    method : 'post',
    body : 'a=1&b=2',
    headers : {
      "Content-Type" : "x-www-form-urlencoded",
      "chen" : "18"
    },
    successFn : (x)=>{    //需要多个函数
      f1.call(undefined,x)
      f2.call(undefined,x)
    },   //callback
    failFn : (x)=>{console.log(x)}
  })
})








// myBtn.addEventListener('click',(e)=>{
//   let request = new XMLHttpRequest()
//   request.open('POST','/xxx') //配置request
//   request.setRequestHeader("cc","18")
//   request.setRequestHeader("Content-Type","x-www-form-urlenconded")
//   request.send('我偏要设置第四部分')
//   request.onreadystatechange = ()=>{
//     if(request.readyState === 4){
//       console.log('请求响应完毕')
//       if(request.status >= 200 && request.status < 300){
//         console.log('请求成功')
//         console.log(request.status)
//         console.log(request.getResponseHeader('Content-Type'))
//         console.log(request.statusText)
//         let string = request.responseText
//         //把符合json语法的字符串转换成js对应的值
//         let object = window.JSON.parse(string) 
//         console.log(object)
//         console.log(object.note)
//         console.log(object.note.from)
//       }else if(request.status >= 400){
//         console.log('请求失败')
//       }
//     }
//   }
// })

































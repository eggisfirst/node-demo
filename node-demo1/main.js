window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}
window.jQuery.ajax = function(options){
  let {url,method,headers,body} = options         //es6解构赋值
  return new Promise(function(resolve,reject){    //success,fail
    let request = new XMLHttpRequest()            //创建对象
    request.open(method,url)                      //配置request
    for(let key in headers){                      //设置请求头
      let value = headers[key]
      request.setRequestHeader(key,value)
    }
    request.onreadystatechange = ()=>{             
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined,request.responseText)   //call
        }else if(request.status >= 400){
          reject.call(undefined,request)
        }
      }
    }
    request.send(body)
  })
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
    }
  }).then(             //利用Promise.then().then() 因为 return promise
    (text)=>{console.log(text)},
    (request)=>{console.log(request)}
  )
})


//JQ库的AJAX用法
// myBtn.addEventListener('click',(e)=>{
//   $.ajax({
//     url:'/xxx',
//     method:'post'
//   }).then(
//     (responseText)=>{console.log(responseText)},
//     (request)=>{console.log('error')}
//   )   //promise  不用给success和fail起名字
// })





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

































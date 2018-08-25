myBtn.addEventListener('click',(e)=>{
  let request = new XMLHttpRequest()
  request.open('POST','/xxx') //配置request
  request.setRequestHeader("cc","18")
  request.setRequestHeader("Content-Type","x-www-form-urlenconded")
  request.send('我偏要设置第四部分')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log('请求响应完毕')
      if(request.status >= 200 && request.status < 300){
        console.log('请求成功')
        console.log(request.status)
        console.log(request.getResponseHeader('Content-Type'))
        console.log(request.statusText)
        let string = request.responseText
        //把符合json语法的字符串转换成js对应的值
        let object = window.JSON.parse(string) 
        console.log(object)
        console.log(object.note)
        console.log(object.note.from)
      }else if(request.status >= 400){
        console.log('请求失败')
      }
    }
  }
})

































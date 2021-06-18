//AJAX 加载
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET",`/page${n+1}`);
    request.onreadystatechange = () => 
    {
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response);
            array.forEach(
                item => {
                    
                    const li = document.createElement("li");
                    li.textContent = item.id;
                    xxx.appendChild(li);

                });
            n += 1
        }
    };
    request.send();
};


//AJAX 加载JSON
getJSON.onclick = () =>{
    const request =  new XMLHttpRequest();
    request.open("GET", "/four.json");
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            //myName.textContent = Object.name
        }
    };
    request.send();
};



//AJAX 加载HTML
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/three.xml");
    request.onreadystatechange = () => {
        if( request.readyState === 4 && request.status === 200  ){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim()) 
            console.log('成功运行到这里')
        } 
    };
    request.send();
};

//AJAX 加载HTML  
getHTML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET', '/two.html');
    request.onload=()=>{
      const div = document.createElement('div')
      div.innerHTML = request.response
      document.body.appendChild(div)
      console.log('成功运行完onload')
    };
    request.onerror = () =>{
        console.log('出错了！')
    };
    request.send();
};

//AJAX 加载CSS

getCSS.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onreadystatechange =() =>{
    if(request.readyState === 4){
    if(request.status >= 200 && request.status <300){
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);   
    }else{
        alert('加载CSS失败')
    }
  }  
}
    // request.onload=()=>{
    // console.log('成功改变颜色！')
    // console.log(request.response)

//    //创建style标签
//    const style = document.createElement('style')
//    //填写style内容
//    style.innerHTML = request.response
//    //插入到头部里
//    document.head.appendChild(style)
// };
// request.onerror=()=>{
//     console.log('错误了')
// }
request.send();
};
//AJAX 加载JS
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','./one.js');
    request.onload=()=>{
        console.log('成功执行JS部分代码')
        console.log(request.response)
    
       //创建script标签
       const script = document.createElement('script')
       //填写script内容
       script.innerHTML = request.response
       //插入到身体里
       document.body.appendChild(script)
    };
    
    
    request.onerror=()=>{
        console.log('错误了')
    }
    request.send()
    }



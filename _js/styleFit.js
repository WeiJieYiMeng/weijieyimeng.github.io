window.addEventListener("message",(event)=>{
  if(event.origin!=location.origin)throw new Error("通信非同源");
  if(event.data.styleFit)eval("styleFit."+event.data.styleFit+"()");
})
var styleFit={
  fontSize : (h=1)=>{
    let customFontSize = JSON.parse( localStorage.getItem("fontSize") || 16);
    document.documentElement.style.fontSize=customFontSize+"px";
    if(h){window.top.hint("字号："+customFontSize+"px");}
  },
  lineHeight : (h=1)=>{
    let customLineHeight = JSON.parse( localStorage.getItem("lineHeight") || 1.3);
    document.documentElement.style.lineHeight=customLineHeight;
    if(h){window.top.hint("行距："+customLineHeight+"倍行距");}
  },
  paddingMode : (h=1)=>{
    let customPaddingMode = JSON.parse(localStorage.getItem("paddingMode"));
    // if(h){window.top.eval("hint(\"边框模式：\"+uiPaddingMode("+customPaddingMode+"))")}
    if(h){window.top.hint("边框模式暂未开放")}
  },
  chapterAlways : (h=1)=>{
    let customChapterAlways = JSON.parse(localStorage.getItem("chapterAlways")) === true;
    try{
      document.querySelector(".chapter-bar").classList.toggle('chapter-always', customChapterAlways);
      if(h){window.top.hint(customChapterAlways?"强制显示切换键\n再次点击按钮以取消":"取消强制显示切换键"); }
    }catch{window.top.hint("StyleFit:\nNo chapter-bar")}
  },
  darkMode : (h=1)=>{
    let customDarkMode = JSON.parse(localStorage.getItem("darkMode")) === true;
    document.body.classList.toggle('dark-mode', customDarkMode);
    if(h){window.top.hint(customDarkMode?"深色模式":"浅色模式"); }
  },
  all : ()=>{
    Object.keys(styleFit).forEach(key => {
      if(key=="all")return 0;
      eval("styleFit."+key+"(0)")
    });
  }
}
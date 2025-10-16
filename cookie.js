function setCookie(key,value,maxAge=8640000,path='/'){
  if(getCookie("ifCookie")==null){
    alert("欢迎您使用本站！\n本站使用Cookie记录ui设置、上次阅读等信息，若Cookie被清除，将丢失个性化信息，请您知悉。");
    document.cookie = `ifCookie=1; max-age=86400000; path=/;`;
  }
  document.cookie = `${key}=${value}; max-age=${maxAge}; path=${path};`;
}

function getCookie(name) {
  const cookiePairs = document.cookie.split('; ');
  for (const pair of cookiePairs) {
    const [key, value] = pair.split('=');
    if (key === name) return decodeURIComponent(value); // 注意：值可能被encodeURIComponent编码
  }
  return null;
}
const $ = (s) => document.querySelector(s)
const $$ = (s) => document.querySelectorAll(s)

const $pre = $('.carousel .arrow-pre')
const $next = $('.carousel .arrow-next')  
const $$indicators = $$('.carousel .indicators > li')

//点击 pre 展示 上一页 并设置 indicators
//点击 next 展示 下一页 并设置 indicators
//点击 indicators 展示 第 n 页

//const getIndex = $$indicators.indexOf()
//const getPreIndex = 
//const getNextIndex = 

//const setPage = 


//const setIndicator = 


$pre.onclick = function(){
  //先获得上一页页码
  let index = getPreIndex()
  //设置当前页面
  setPage(index)
  setIndicator(index)
}

$next.onclick = function(){
  //先获得上一页页码
  let index = getNextIndex()
  //设置当前页面
  setPage(index)
  setIndicator(index)
}

$$indicators.array.forEach($Indicator => {
  $Indicator.onclick = function(e){
    
  }
});
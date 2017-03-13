function countDown(opts,cb){
  var opts=opts || {}
  var time=opts.time || null
  var format=opts.format || 'dd天 hh时 mm分 ss秒'
  var container=opts.container || document.getElementById('countDown')
  var nowTime=new Date().getTime()
  var endTime=new Date(time).getTime()
  var leftTime=endTime-nowTime
  if(leftTime<=0){
    cb && cb()
    return
  }  
  var day=Math.floor(leftTime/(24*60*60*1000))
  var hour=Math.floor((leftTime-day*24*60*60*1000)/(60*60*1000))
  var minute=Math.floor((leftTime-day*24*60*60*1000-hour*60*60*1000)/(60*1000))
  var seconds=Math.floor((leftTime-day*24*60*60*1000-hour*60*60*1000-minute*60*1000)/1000)
  var mseconds=leftTime-day*24*60*60*1000-hour*60*60*1000-minute*60*1000-seconds*1000
  hour=hour>=10 ? hour : ('0'+hour)
  minute=minute>=10 ? minute : ('0'+minute)
  seconds=seconds>=10 ? seconds : ('0'+seconds)
  container.innerHTML=format
    .replace(/dd/,day)
    .replace(/hh/,hour)
    .replace(/mm/,minute)
    .replace(/ss/,seconds)
    .replace(/ms/,mseconds)
  setTimeout(function(){
    countDown(opts,cb)
  },16)
}
function CountDown(t,opt){
	var opt=opt||{};
		box=opt.box||{},
		day_box=opt.day_box||{},
		hour_box=opt.hour_box||{},
		minute_box=opt.minute_box||{},
		second_box=opt.second_box||{};
	var endTime=Date.parse(t),
		nowTime=new Date().getTime();
		leftTime=endTime-nowTime;
	if(nowTime>=endTime){
		box.innerHTML="开始抢购";
		return;
	}
	var leftTime_day=Math.floor(leftTime/86400000),
		leftTime_h=Math.floor((leftTime-leftTime_day*86400000)/3600000),
		leftTime_m=Math.floor((leftTime-leftTime_day*86400000-leftTime_h*3600000)/60000),
		leftTime_s=Math.floor((leftTime-leftTime_day*86400000-leftTime_h*3600000-leftTime_m*60000)/1000);
	day_box.innerHTML=leftTime_day>=10?leftTime_day:"0"+leftTime_day;
	hour_box.innerHTML=leftTime_h>=10?leftTime_h:"0"+leftTime_h;
	minute_box.innerHTML=leftTime_m>=10?leftTime_m:"0"+leftTime_m;
	second_box.innerHTML=leftTime_s>=10?leftTime_s:"0"+leftTime_s;
	setTimeout(function(){
		CountDown(t,opt);
	},20);
}
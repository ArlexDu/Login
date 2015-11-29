//记录城市的名字数组
cityareaname = new Array(35);
var u_username="";
var u_email="";
var u_password="";
var u_repassword="";
var u_area="";
var u_sex="";
//保证只有一个被选中
function changeRadio(name) {
	document.getElementById("male").checked = false;
	document.getElementById("female").checked = false;
	document.getElementById(name).checked = true;
}

//new Option("文本","值",true,true)
//后面两个true分别表示默认被选中和有效!
//eval 执行里面的string语句
function firstArea(preP, selectP) {
	var exe;
	a = 0;
	//初始化数组，建立第一个省区选项库
	if (selectP == '01') {
		a = 1;
		tempoption = new Option('北京', '北京', false, true);
	} else {
		tempoption = new Option('北京', '北京');
	}
	exe = executePString(preP, 1);
	eval(exe);
	cityareaname[0] = new Array('东城区', '西城区', '崇文区', '宣武区', '朝阳区', '海淀区', '丰台区', '石景山');
	if (selectP == '02') {
		a = 2;
		tempoption = new Option('上海', '上海', false, true);
	} else {
		tempoption = new Option('上海', '上海');
	}
	exe = executePString(preP, 2);
	eval(exe);
	cityareaname[1] = new Array('宝山', '金山', '南市', '长宁', '静安', '青浦', '崇明', '卢湾', '松江', '奉贤', '浦东', '杨浦', '虹口', '普陀', '闸北', '黄浦', '闵行', '徐汇', '嘉定', '南汇');
	if (selectP == '03') {
		a = 3;
		tempoption = new Option('深圳', '深圳', false, true);
	} else {
		tempoption = new Option('深圳', '深圳');
	}
	exe = executePString(preP, 3);
	eval(exe);
	cityareaname[2] = new Array('罗湖', '福田', '南山', '盐田', '宝安', '龙岗');
	if (selectP == '04') {
		a = 4;
		tempoption = new Option('重庆', '重庆', false, true);
	} else {
		tempoption = new Option('重庆', '重庆');
	}
	exe = executePString(preP, 4);
	eval(exe);
	cityareaname[3] = new Array('渝中', '江北', '沙坪坝', '南岸', '九龙坡', '大渡口');
	if (selectP == '05') {
		a = 5;
		tempoption = new Option('天津', '天津', false, true);
	} else {
		tempoption = new Option('天津', '天津');
	}
	exe = executePString(preP, 5);
	eval(exe);
	cityareaname[4] = new Array('和平', '河北', '河西', '河东', '南开', '红桥', '塘沽', '汉沽', '大港', '东丽', '西青', '津南', '北辰', '武清', '滨海');
	if (selectP == '06') {
		a = 6;
		tempoption = new Option('广东', '广东', false, true);
	} else {
		tempoption = new Option('广东', '广东');
	}
	exe = executePString(preP, 6);
	eval(exe);
	cityareaname[5] = new Array('广州', '珠海', '中山', '佛山', '东莞', '清远', '肇庆', '阳江', '湛江', '韶关', '惠州', '河源', '汕尾', '汕头', '梅州');
	if (selectP == '07') {
		a = 7;
		tempoption = new Option('河北', '河北', false, true);
	} else {
		tempoption = new Option('河北', '河北');
	}
	exe = executePString(preP, 7);
	eval(exe);
	cityareaname[6] = new Array('石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '张家口', '承德', '廊坊', '沧州', '保定', '衡水');
	if (selectP == '08') {
		a = 8;
		tempoption = new Option('山西', '山西', false, true);
	} else {
		tempoption = new Option('山西', '山西');
	}
	exe = executePString(preP, 8);
	eval(exe);
	cityareaname[7] = new Array('太原', '大同', '阳泉', '朔州', '长治', '临汾', '晋城');
	if (selectP == '09') {
		a = 9;
		tempoption = new Option('内蒙古', '内蒙古', false, true);
	} else {
		tempoption = new Option('内蒙古', '内蒙古');
	}
	exe = executePString(preP, 9);
	eval(exe);
	cityareaname[8] = new Array('呼和浩特', '包头', '乌海', '临河', '东胜', '集宁', '锡林浩特', '通辽', '赤峰', '海拉尔', '乌兰浩特');
	if (selectP == '10') {
		a = 10;
		tempoption = new Option('辽宁', '辽宁', false, true);
	} else {
		tempoption = new Option('辽宁', '辽宁');
	}
	exe = executePString(preP, 10);
	eval(exe);
	cityareaname[9] = new Array('沈阳', '大连', '鞍山', '锦州', '丹东', '盘锦', '铁岭', '抚顺', '营口', '辽阳', '阜新', '本溪', '朝阳', '葫芦岛');
	if (selectP == '11') {
		a = 11;
		tempoption = new Option('吉林', '吉林', false, true);
	} else {
		tempoption = new Option('吉林', '吉林');
	}
	exe = executePString(preP, 11);
	eval(exe);
	cityareaname[10] = new Array('长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边');
	if (selectP == '12') {
		a = 12;
		tempoption = new Option('黑龙江', '黑龙江', false, true);
	} else {
		tempoption = new Option('黑龙江', '黑龙江');
	}
	exe = executePString(preP, 12);
	eval(exe);
	cityareaname[11] = new Array('哈尔滨', '齐齐哈尔', '牡丹江', '佳木斯', '大庆', '伊春', '黑河', '鸡西', '鹤岗', '双鸭山', '七台河', '绥化', '大兴安岭');
	if (selectP == '13') {
		a = 13;
		tempoption = new Option('江苏', '江苏', false, true);
	} else {
		tempoption = new Option('江苏', '江苏');
	}
	exe = executePString(preP, 13);
	eval(exe);
	cityareaname[12] = new Array('南京', '苏州', '无锡', '常州', '镇江', '连云港 ', '扬州', '徐州 ', '南通', '盐城', '淮阴', '泰州', '宿迁');
	if (selectP == '14') {
		a = 14;
		tempoption = new Option('浙江', '浙江', false, true);
	} else {
		tempoption = new Option('浙江', '浙江');
	}
	exe = executePString(preP, 14);
	eval(exe);
	cityareaname[13] = new Array('杭州', '湖州', '丽水', '温州', '绍兴', '舟山', '嘉兴', '金华', '台州', '衢州', '宁波');
	if (selectP == '15') {
		a = 15;
		tempoption = new Option('安徽', '安徽', false, true);
	} else {
		tempoption = new Option('安徽', '安徽');
	}
	exe = executePString(preP, 15);
	eval(exe);
	cityareaname[14] = new Array('合肥  ', '芜湖 ', '蚌埠 ', '滁州 ', '安庆 ', '六安 ', '黄山 ', '宣城 ', '淮南 ', '宿州 ', '马鞍山 ', '铜陵', '淮北 ', '阜阳 ', '池州 ', '巢湖 ', '亳州');
	if (selectP == '16') {
		a = 16;
		tempoption = new Option('福建', '福建', false, true);
	} else {
		tempoption = new Option('福建', '福建');
	}
	exe = executePString(preP, 16);
	eval(exe);
	cityareaname[15] = new Array('福州 ', '厦门 ', '泉州 ', '漳州 ', '龙岩 ', '南平 ', '宁德 ', '莆田 ', '三明');
	if (selectP == '17') {
		a = 17;
		tempoption = new Option('江西', '江西', false, true);
	} else {
		tempoption = new Option('江西', '江西');
	}
	exe = executePString(preP, 17);
	eval(exe);
	cityareaname[16] = new Array('南昌', '景德镇', '九江', '萍乡', '新余', '鹰潭', '赣州', '宜春', '吉安', '上饶', '抚州');
	if (selectP == '18') {
		a = 18;
		tempoption = new Option('山东', '山东', false, true);
	} else {
		tempoption = new Option('山东', '山东');
	}
	exe = executePString(preP, 18);
	eval(exe);
	cityareaname[17] = new Array('济南', '青岛', '淄博', '德州', '烟台', '潍坊', '济宁', '泰安', '临沂', '菏泽', '威海', '枣庄', '日照', '莱芜', '聊城', '滨州', '东营');
	if (selectP == '19') {
		a = 19;
		tempoption = new Option('河南', '河南', false, true);
	} else {
		tempoption = new Option('河南', '河南');
	}
	exe = executePString(preP, 19);
	eval(exe);
	cityareaname[18] = new Array('郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '周口', '驻马店', '信阳', '济源');
	if (selectP == '20') {
		a = 20;
		tempoption = new Option('湖北', '湖北', false, true);
	} else {
		tempoption = new Option('湖北', '湖北');
	}
	exe = executePString(preP, 20);
	eval(exe);
	cityareaname[19] = new Array('武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '恩施', '随州', '仙桃', '天门', '潜江', '神农架');
	if (selectP == '21') {
		a = 21;
		tempoption = new Option('湖南', '湖南', false, true);
	} else {
		tempoption = new Option('湖南', '湖南');
	}
	exe = executePString(preP, 21);
	eval(exe);
	cityareaname[20] = new Array('长沙', '株州', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '郴州', '益阳', '永州', '怀化', '娄底', '湘西 ');
	if (selectP == '22') {
		a = 22;
		tempoption = new Option('广西', '广西', false, true);
	} else {
		tempoption = new Option('广西', '广西');
	}
	exe = executePString(preP, 22);
	eval(exe);
	cityareaname[21] = new Array('南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '贺州', '百色', '河池');
	if (selectP == '23') {
		a = 23;
		tempoption = new Option('海南', '海南', false, true);
	} else {
		tempoption = new Option('海南', '海南');
	}
	exe = executePString(preP, 23);
	eval(exe);
	cityareaname[22] = new Array('海口 ', '三亚', '通什', '琼海', '琼山', '文昌', '万宁', '东方', '儋州');
	if (selectP == '24') {
		a = 24;
		tempoption = new Option('四川', '四川', false, true);
	} else {
		tempoption = new Option('四川', '四川');
	}
	exe = executePString(preP, 24);
	eval(exe);
	cityareaname[23] = new Array('成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充  ', '宜宾', '广安', '达川', '巴中', '雅安', '眉山  ', '阿坝 ', '甘孜 ', '凉山 ');
	if (selectP == '25') {
		a = 25;
		tempoption = new Option('贵州', '贵州', false, true);
	} else {
		tempoption = new Option('贵州', '贵州');
	}
	exe = executePString(preP, 25);
	eval(exe);
	cityareaname[24] = new Array('贵阳 ', '六盘水', '遵义', '铜仁', '毕节', '安顺', '黔西南 ', '黔东南', '黔南');
	if (selectP == '26') {
		a = 26;
		tempoption = new Option('云南', '云南', false, true);
	} else {
		tempoption = new Option('云南', '云南');
	}
	exe = executePString(preP, 26);
	eval(exe);
	cityareaname[25] = new Array('昆明', '东川', '曲靖', '玉溪', '昭通', '思茅', '临沧', '保山', '丽江', '文山 ', '红河 ', '西双版纳 ', '楚雄 ', '大理 ', '德宏 ', '怒江', '迪庆');
	if (selectP == '27') {
		a = 27;
		tempoption = new Option('西藏', '西藏', false, true);
	} else {
		tempoption = new Option('西藏', '西藏');
	}
	exe = executePString(preP, 27);
	eval(exe);
	cityareaname[26] = new Array('拉萨', '那曲', '昌都', '山南', '日喀则', '阿里', '林芝');
	if (selectP == '28') {
		a = 28;
		tempoption = new Option('陕西', '陕西', false, true);
	} else {
		tempoption = new Option('陕西', '陕西');
	}
	exe = executePString(preP, 28);
	eval(exe);
	cityareaname[27] = new Array('西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '商洛', '安康');
	if (selectP == '29') {
		a = 29;
		tempoption = new Option('甘肃', '甘肃', false, true);
	} else {
		tempoption = new Option('甘肃', '甘肃');
	}
	exe = executePString(preP, 29);
	eval(exe);
	cityareaname[28] = new Array('兰州', '金昌', '白银', '天水', '嘉峪关', '定西', '平凉', '庆阳', '陇南', '武威', '张掖', '酒泉', '甘南 ', '临夏');
	if (selectP == '30') {
		a = 30;
		tempoption = new Option('青海', '青海', false, true);
	} else {
		tempoption = new Option('青海', '青海');
	}
	exe = executePString(preP, 30);
	eval(exe);
	cityareaname[29] = new Array('西宁', '海东', ' 海北 ', '黄南', '海南', '果洛', '玉树', '海西');
	if (selectP == '31') {
		a = 31;
		tempoption = new Option('宁夏', '宁夏', false, true);
	} else {
		tempoption = new Option('宁夏', '宁夏');
	}
	exe = executePString(preP, 31);
	eval(exe);
	cityareaname[30] = new Array('银川', '石嘴山', '银南', '固原');
	if (selectP == '32') {
		a = 32;
		tempoption = new Option('新疆', '新疆', false, true);
	} else {
		tempoption = new Option('新疆', '新疆');
	}
	exe = executePString(preP, 32);
	eval(exe);
	cityareaname[31] = new Array('乌鲁木齐', '克拉玛依', '石河子', '吐鲁番', '哈密', '和田', '阿克苏', '喀什', '克孜勒苏', '巴音郭楞', '昌吉', '博尔塔拉', '伊犁');
	if (selectP == '33') {
		a = 33;
		tempoption = new Option('香港', '香港', false, true);
	} else {
		tempoption = new Option('香港', '香港');
	}
	exe = executePString(preP, 33);
	eval(exe);
	cityareaname[32] = new Array();
	if (selectP == '34') {
		a = 34;
		tempoption = new Option('澳门', '澳门', false, true);
	} else {
		tempoption = new Option('澳门', '澳门');
	}
	exe = executePString(preP, 34);
	eval(exe);
	cityareaname[33] = new Array();
	if (selectP == '35') {
		a = 35;
		tempoption = new Option('台湾', '台湾', false, true);
	} else {
		tempoption = new Option('台湾', '台湾');
	}
	exe = executePString(preP, 35);
	eval(exe);
	cityareaname[34] = new Array();
}

//返回要执行的js语句
function executePString(preP, num) {
	return 'document.getElementById("' + preP + '").options[' + num + ']=tempoption;';
}
//根据省份的改变，城市也要跟着改变
function selectcity(PreP, PreC) {
	cityid = eval('document.getElementById("' + PreP + '").selectedIndex;');
	j = eval('document.getElementById("' + PreC + '").length;');
	//把上一次的查询结果清零
	for (i = 1; i < j; i++) {
		eval('document.getElementById("' + PreC + '").options[j-i]=null;')
	}
	if (cityid != "0") //当前有选择的省份的时候
	{
		for (i = 0; i < cityareaname[cityid - 1].length; i++) {
			tempoption = new Option(cityareaname[cityid - 1][i], cityareaname[cityid - 1][i]);
			eval('document.getElementById("' + PreC + '").options[i+1]=tempoption;');
		}
	}

}

//初始化生日的年月日
function firstDate(Year,Month,Day){
	for(var y= 26;y>0;y--){
		tempoption = new Option((2016-y),(2016-y),false,true);	
		eval('document.getElementById("'+Year+'").options['+(26-y)+']=tempoption;');
	}
	for(var m=1;m<13;m++){
		tempoption = new Option(m,m,false,true);
		eval('document.getElementById("'+Month+'").options['+(m-1)+']=tempoption;');
	}
	for(var d=1;d<32;d++){
		tempoption = new Option(d,d,false,true);
		eval('document.getElementById("'+Day+'").options['+(d-1)+']=tempoption;');
	}
	//初始化1990.1.1为默认值
	eval('document.getElementById("'+Year+'").options[0].selected = true');
	eval('document.getElementById("'+Month+'").options[0].selected = true');
	eval('document.getElementById("'+Day+'").options[0].selected = true');
}

//根据月份的改变，日也要变化
function selectday(Year,Month,Day){
	var j = eval('document.getElementById("' + Day + '").length;');
	//把上一次的查询结果清零
	for (i = 0; i < j; i++) {
		eval('document.getElementById("' + Day + '").options[j-i]=null;')
	}
	var year = eval('document.getElementById("'+Year+'").value;');
	var month = eval('document.getElementById("'+Month+'").value;');
//	console.log("year is "+year + " month is "+month);
    switch(parseInt(month)){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12://31天
		     for(var d=1;d<32;d++){
		     tempoption = new Option(d,d,false,true);
		     eval('document.getElementById("'+Day+'").options['+(d-1)+']=tempoption;');
	         }
			 break;
	    case 2: //平年 28天，闰年 29天
		     var all; 
		     if((year%4==0)||(year%400==0)){//闰年
				 all=29;
			 }else{//平年
				 all=28;
			 }
			  for(var d=1;d<=all;d++){
		     tempoption = new Option(d,d,false,true);
		     eval('document.getElementById("'+Day+'").options['+(d-1)+']=tempoption;');
	         }
		     break;
		default: //30天
		     for(var d=1;d<31;d++){
		     tempoption = new Option(d,d,false,true);
		     eval('document.getElementById("'+Day+'").options['+(d-1)+']=tempoption;');
	         }
			 break;
	}
	eval('document.getElementById("'+Day+'").options[0].selected = true');
    
}

//全选按钮
function changeall(){
	var ischecked = document.getElementById("all").checked;
	console.log("ischecked is "+ischecked);
	var result;
	if(ischecked){//若是全选则全部取消勾选
		result = true;
	}else{
	    result = false;
	}
	document.getElementById("basketball").checked = result;
	document.getElementById("football").checked = result;
	document.getElementById("swimming").checked = result;
	document.getElementById("singing").checked = result;
}
function emptytext(ID){
  console.log("e   "+ID);
   switch(ID){
	   case 'u_username':
	      u_username="";
		  document.getElementById("u_username").value = "";
	      break;
	   case 'u_password':
	      u_password="";
		  document.getElementById("u_password").value = "";
	      break;
	   case 'u_repassword':
	      u_repassword="";
		  document.getElementById("u_repassword").value = "";
	      break;
       case 'u_email':
	      u_email="";
		  document.getElementById("u_email").value = "";
	      break;
   }
}

function gettext(ID){
	console.log("g  "+ID);
   switch(ID){
	   case 'u_username':
	      u_username=document.getElementById("u_username").value;
		//  console.log("username is "+u_username);
	      break;
	   case 'u_password':
	      u_password=document.getElementById("u_password").value;
		//  console.log("password is "+u_password);
	      break;
	   case 'u_repassword':
	      u_repassword=document.getElementById("u_repassword").value;
		  if(u_password != u_repassword){
             alert("您输入的密码不一致！");
		  }
	      break;
       case 'u_email':
	      u_email=document.getElementById("u_email").value;
		  if(!isEmail(u_email)){
			  alert("您输入的邮箱格式不合法！");
		  }
	//	  console.log("email is "+u_email);
	      break;
   }
}
//验证邮箱输入是否合法
function isEmail(str){
   var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
   return reg.test(str);
} 
//点击添加按钮之后展示出信息
function minesubmit(){
	if((u_username=="")||(u_password=="")||(u_email=="")||(u_email=="")){
		alert("您输入的信息不完全！");
		return;
	}
	if(u_repassword!=u_password){
		alert("您两次输入的密码不一致！");
	    return;
	}
	if(document.getElementById("man").checked){
		u_sex = "man"
	}else{
		u_sex = "woman"
	}
	provinceid = document.getElementById("selectp").value;
	cityid=document.getElementById("selectc").value;
	u_area = provinceid+"."+cityid;
	console.log("username :"+u_username+"  email :"+u_email+"  sex :"  +u_sex+" area: "+u_area);
	document.getElementById("t_uname").innerHTML=u_username;
	document.getElementById("t_uemail").innerHTML=u_email;
	document.getElementById("t_usex").innerHTML=u_sex;
	document.getElementById("t_uarea").innerHTML=u_area;
    document.getElementById("add").style.display="none";
	document.getElementById("result").style.display="block";
	minedelete();
}

//全部回复初始化
function minedelete(){
	document.getElementById("u_username").value="";
	document.getElementById("u_password").value = "";
	document.getElementById("u_repassword").value = "";
	document.getElementById("u_email").value = "";
	document.getElementById("woman").checked = false;
	document.getElementById("man").checked = true;
	document.getElementById("Year").options[0].selected = true;
	document.getElementById("Month").options[0].selected = true;
	document.getElementById("Day").options[0].selected = true;
	document.getElementById("selectp").options[0].selected = true;
	document.getElementById("selectc").options[0].selected = true;
	var result = false;
	document.getElementById("all").checked = result;
	document.getElementById("basketball").checked = result;
	document.getElementById("football").checked = result;
	document.getElementById("swimming").checked = result;
	document.getElementById("singing").checked = result;
}

function deleteinfo(classname){
	//隐藏信息
	eval('document.getElementById("'+classname+'").style.display="none";');
	switch(classname){
		case 'uname':
		  u_username = "";
		  break;
		case 'uemail':
		  u_email = "";
		  break;
		case 'usex':
		  u_sex = "";
		  break;
		case 'uarea':
		  u_area = "";
		  break;
	}
	console.log("username ："+ u_username+" u_email : "+u_email+" sex : "+u_sex+" area : "+u_area);
	if((u_username == "")&&(u_email == "")&&(u_sex == "")&&(u_area == "")){
		   console.log("show add");
		   document.getElementById("result").style.display = "none";
		   document.getElementById("uname").style.display = "block";
		   document.getElementById("uemail").style.display = "block";
		   document.getElementById("usex").style.display = "block";
		   document.getElementById("uarea").style.display = "block";
		   document.getElementById("add").style.display = "block";
	}
	
}

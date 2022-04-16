function insertAtCursor(t, e) {
	var n = t.scrollTop,
	o = document.documentElement.scrollTop;
	if (document.selection) {
		t.focus();
		var s = document.selection.createRange();
		s.text = e,
		s.select()
	} else if (t.selectionStart || "0" == t.selectionStart) {
		var l = t.selectionStart,
		c = t.selectionEnd;
		t.value = t.value.substring(0, l) + e + t.value.substring(c, t.value.length),
		t.focus(),
		t.selectionStart = l + e.length,
		t.selectionEnd = l + e.length
	} else t.value += e,
	t.focus();
	t.scrollTop = n,
	document.documentElement.scrollTop = o
}

function bqbName(name) {
    let result = encodeURI(name);
    result = result.replaceAll(/%/ig, '');
    return result+'.png';
}


$(function() {

	Smilies = {
			dom: function(id) {
					return document.getElementById(id);
			},
			grin: function(tag) {
					tag = " "  + tag + " ";
					myField = this.dom("text");
					document.selection ? (myField.focus(), sel = document.selection.createRange(), sel.text = tag, myField.focus()) : this.insertTag(tag);
			},
			insertTag: function(tag) {
					myField = Smilies.dom("text");
					myField.selectionStart || myField.selectionStart == "0" ? (startPos = myField.selectionStart, endPos = myField.selectionEnd, cursorPos = startPos, myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length), cursorPos += tag.length, myField.focus(), myField.selectionStart = cursorPos, myField.selectionEnd = cursorPos) : (myField.value += tag, myField.focus());
			}
	}

	$("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-sc-button" style="" title="插入短代码">短代码</li>');
	$("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-owo-button" style="" title="插入表情">OWO</span></li>');
	$("#wmd-button-row").append(`
		<div id="OwO-editor" style="display:none"><div class="OwO OwO-open" id="qaq">
	   <div class="OwO-body" id="OwO-body">
	    <ul id="OwO-pp" class="OwO-items OwO-items-emoticon OwO-items-show" style="max-height: 197px;">
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_han)');"><img src="${window.G_CONFIG.bqb.paopao}huaji_han.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_mj)');"><img src="${window.G_CONFIG.bqb.paopao}huaji_mj.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_djy)');"><img src="${window.G_CONFIG.bqb.paopao}huaji_djy.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_pc)');"><img src="${window.G_CONFIG.bqb.paopao}huaji_pc.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_shang)');"><img src="${window.G_CONFIG.bqb.paopao}huaji_shang.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_xiao)');"><img src="${window.G_CONFIG.bqb.paopao}huaji_xiao.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(toukan)');"><img src="${window.G_CONFIG.bqb.paopao}toukan.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(biexiao)');"><img src="${window.G_CONFIG.bqb.paopao}biexiao.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(hemenjiu)');"><img src="${window.G_CONFIG.bqb.paopao}hemenjiu.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chigua2)');"><img src="${window.G_CONFIG.bqb.paopao}chigua2.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_love)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquan_love.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_red_1)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquan_red_1.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_melon)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquan_melon.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_mask)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquan_mask.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_hufen)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquan_hufen.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_han)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquan_han.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_gh)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquan_gh.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_3)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquan_3.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chaiquan)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquan.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chaiquanbugaoxin)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquanbugaoxin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chaiquanzaijian)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquanzaijian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chaiquanku)');"><img src="${window.G_CONFIG.bqb.paopao}chaiquanku.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(hehe)');"><img src="${window.G_CONFIG.bqb.paopao}hehe.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(tushe)');"><img src="${window.G_CONFIG.bqb.paopao}tushe.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(taikaixin)');"><img src="${window.G_CONFIG.bqb.paopao}taikaixin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiaoyan)');"><img src="${window.G_CONFIG.bqb.paopao}xiaoyan.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(huaxin)');"><img src="${window.G_CONFIG.bqb.paopao}huaxin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiaoguai)');"><img src="${window.G_CONFIG.bqb.paopao}xiaoguai.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(guai)');"><img src="${window.G_CONFIG.bqb.paopao}guai.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(wuzuixiao)');"><img src="${window.G_CONFIG.bqb.paopao}wuzuixiao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(huaji)');"><img src="${window.G_CONFIG.bqb.paopao}huaji.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(nidongde)');"><img src="${window.G_CONFIG.bqb.paopao}nidongde.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(bugaoxin)');"><img src="${window.G_CONFIG.bqb.paopao}bugaoxin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(nu)');"><img src="${window.G_CONFIG.bqb.paopao}nu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(han)');"><img src="${window.G_CONFIG.bqb.paopao}han.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(heixian)');"><img src="${window.G_CONFIG.bqb.paopao}heixian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(lei)');"><img src="${window.G_CONFIG.bqb.paopao}lei.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(zhenbang)');"><img src="${window.G_CONFIG.bqb.paopao}zhenbang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(pen)');"><img src="${window.G_CONFIG.bqb.paopao}pen.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(jingku)');"><img src="${window.G_CONFIG.bqb.paopao}jingku.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yinxian)');"><img src="${window.G_CONFIG.bqb.paopao}yinxian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(bishi)');"><img src="${window.G_CONFIG.bqb.paopao}bishi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(ku)');"><img src="${window.G_CONFIG.bqb.paopao}ku.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(a)');"><img src="${window.G_CONFIG.bqb.paopao}a.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(kuanghan)');"><img src="${window.G_CONFIG.bqb.paopao}kuanghan.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(what)');"><img src="${window.G_CONFIG.bqb.paopao}what.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yiwen)');"><img src="${window.G_CONFIG.bqb.paopao}yiwen.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(suanshuang)');"><img src="${window.G_CONFIG.bqb.paopao}suanshuang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yamiedie)');"><img src="${window.G_CONFIG.bqb.paopao}yamiedie.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(weiqu)');"><img src="${window.G_CONFIG.bqb.paopao}weiqu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(jingya)');"><img src="${window.G_CONFIG.bqb.paopao}jingya.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(shuijiao)');"><img src="${window.G_CONFIG.bqb.paopao}shuijiao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiaoniao)');"><img src="${window.G_CONFIG.bqb.paopao}xiaoniao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(wabi)');"><img src="${window.G_CONFIG.bqb.paopao}wabi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(tu)');"><img src="${window.G_CONFIG.bqb.paopao}tu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xili)');"><img src="${window.G_CONFIG.bqb.paopao}xili.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiaohonglian)');"><img src="${window.G_CONFIG.bqb.paopao}xiaohonglian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(landeli)');"><img src="${window.G_CONFIG.bqb.paopao}landeli.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(mianqiang)');"><img src="${window.G_CONFIG.bqb.paopao}mianqiang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(aixin)');"><img src="${window.G_CONFIG.bqb.paopao}aixin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xinsui)');"><img src="${window.G_CONFIG.bqb.paopao}xinsui.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(meigui)');"><img src="${window.G_CONFIG.bqb.paopao}meigui.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(liwu)');"><img src="${window.G_CONFIG.bqb.paopao}liwu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(caihong)');"><img src="${window.G_CONFIG.bqb.paopao}caihong.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(taiyang)');"><img src="${window.G_CONFIG.bqb.paopao}taiyang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xinxinyueliang)');"><img src="${window.G_CONFIG.bqb.paopao}xinxinyueliang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(qianbi)');"><img src="${window.G_CONFIG.bqb.paopao}qianbi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chabei)');"><img src="${window.G_CONFIG.bqb.paopao}chabei.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(dangao)');"><img src="${window.G_CONFIG.bqb.paopao}dangao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(damuzhi)');"><img src="${window.G_CONFIG.bqb.paopao}damuzhi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(shengli)');"><img src="${window.G_CONFIG.bqb.paopao}shengli.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(OK)');"><img src="${window.G_CONFIG.bqb.paopao}OK.png" /></li>
         <li class="OwO-item" onclick="Smilies.grin('@(yo)');"><img src="${window.G_CONFIG.bqb.paopao}yo.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(shafa)');"><img src="${window.G_CONFIG.bqb.paopao}shafa.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(shouzhi)');"><img src="${window.G_CONFIG.bqb.paopao}shouzhi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiangjiao)');"><img src="${window.G_CONFIG.bqb.paopao}xiangjiao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(bianbian)');"><img src="${window.G_CONFIG.bqb.paopao}bianbian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yaowan)');"><img src="${window.G_CONFIG.bqb.paopao}yaowan.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(hlj)');"><img src="${window.G_CONFIG.bqb.paopao}hlj.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(lazhu)');"><img src="${window.G_CONFIG.bqb.paopao}lazhu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yingyue)');"><img src="${window.G_CONFIG.bqb.paopao}yingyue.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(dengpao)');"><img src="${window.G_CONFIG.bqb.paopao}dengpao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('::ys:安详::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('安详')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:不要啊::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('不要啊')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:交给我吧::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('交给我吧')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:你真幽默::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('你真幽默')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:出货吧::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('出货吧')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:吃惊::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('吃惊')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:咕咕咕::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('咕咕咕')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:哼哼::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('哼哼')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:唔::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('唔')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:大哭::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('大哭')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:小事一桩::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('小事一桩')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:干得漂亮::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('干得漂亮')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:干杯::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('干杯')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:愤怒::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('愤怒')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:拜托::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('拜托')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:救救我::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('救救我')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:睡着了::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('睡着了')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:给我走开::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('给我走开')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:警觉::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('警觉')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:该吃饭了::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('该吃饭了')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:请投币::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('请投币')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:问号::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('问号')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:黑线::');"><img src="${window.G_CONFIG.bqb.ys}${bqbName('黑线')}" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[doge]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[doge]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[偷笑]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[偷笑]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[傲娇]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[傲娇]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[冷]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[冷]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[吃瓜]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[吃瓜]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[吐]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[吐]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[吓]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[吓]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[呆]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[呆]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[响指]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[响指]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[喜极而泣]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[喜极而泣]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[喜欢]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[喜欢]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[嘘声]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[嘘声]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[囧]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[囧]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[大哭]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[大哭]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[大笑]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[大笑]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[奸笑]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[奸笑]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[妙啊]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[妙啊]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[委屈]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[委屈]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[嫌弃]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[嫌弃]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[害羞]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[害羞]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[尴尬]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[尴尬]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[微笑]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[微笑]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[惊喜]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[惊喜]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[惊讶]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[惊讶]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[打call]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[打call]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[抠鼻]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[抠鼻]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[捂脸]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[捂脸]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[支持]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[支持]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[无语]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[无语]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[滑稽]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[滑稽]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[灵魂出窍]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[灵魂出窍]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[点赞]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[点赞]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[爱心]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[爱心]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[生气]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[生气]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[生病]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[生病]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[画风突变]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[画风突变]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[疼]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[疼]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[福]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[福]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[福到了]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[福到了]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[笑哭]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[笑哭]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[调皮]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[调皮]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[酸了]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[酸了]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[锦鲤]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[锦鲤]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[阴险]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[阴险]')}" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[黑洞]::');"><img src="${window.G_CONFIG.bqb.xhl}${bqbName('[黑洞]')}" /></li>
	    </ul>
	   </div>
	  </div>
</div>`);
	$("#wmd-button-row").append(`
		<div id="g-shortcode" style="display:none">
			<a id="g-video">视频</a>
			<a id="g-collapse">折叠框</a>
			<a id="g-bili">B站视频</a>
			<a id="g-art">文章跳转</a>
			<a id="g-notice">提示框</a>
			<a id="g-warn">警告框</a>
			<a id="g-tag">标签</a>
			<a id="g-photos">相册</a>
	</div>
		`);

	function OwO_show(){
		if($("#OwO-editor").css("display")=='none'){
			 $("#OwO-editor").slideDown();
		}else{
			 $("#OwO-editor").slideUp();
		 }
	}
	function sc_show(){
		if($("#g-shortcode").css("display")=='none'){
			 $("#g-shortcode").slideDown();
		}else{
			 $("#g-shortcode").slideUp();
		 }
	}

	$(document).on("click", "#g-video",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '\n\n[dplayer id="" url="" pic=""]\n\n[/dplayer]\n\n')
	});

	$(document).on("click", "#g-collapse",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '\n\n[collapse title=""]\n\n[/collapse]')
	});

	$(document).on("click", "#g-art",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[art]文章ID[/art]')
	});
	$(document).on("click", "#g-bili",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[bili]BV/AV[/bili]')
	});
	$(document).on("click", "#g-notice",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[notice]内容[/notice]')
	});
	$(document).on("click", "#g-warn",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[warn]内容[/warn]')
	});
	$(document).on("click", "#g-tag",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[tag]内容[/tag]')
	});
	$(document).on("click", "#g-photos",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '\n[photos]\n图片1描述,图片1链接|\n图片2描述,图片2链接|\n以此类推，以 | 符号分割\n[/photos]\n')
	});

	$(document).on("click","#wmd-owo-button",function(){OwO_show();});
	$(document).on("click","#wmd-sc-button",function(){sc_show();});




});
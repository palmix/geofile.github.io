function disabletextselect() {
	return !1
}

function renabletextselect() {
	return !0
}
var cardinfonewlength = $("#FastFactsTableNoShow").find("#cardinfonew").length,
	getAnimalFamilylength = $("#FastFactsTableNoShow").find("#getAnimalFamily").length;
if (1 === cardinfonewlength || cardinfonewlength === !0) var cardinfonew = document.getElementById("cardinfonew").innerHTML;
else var cardinfonew = "";
if (1 === getAnimalFamilylength || getAnimalFamilylength === !0) var getAnimalFamily = "<tr><td class='cardinfoname'>الفصيلة</td><td class='answercardinfo'>" + document.getElementById("getAnimalFamily").innerHTML + "</td></tr>";
else var getAnimalFamily = "";
var setcardinfo1 = document.getElementById("cardinfo1"),
	cardinfo1 = setcardinfo1.textContent,
	cardinfonume1 = cardinfo1.length;
cardinfo1 = 3 > cardinfonume1 ? "لا يتوفر معلومات كافية" : cardinfo1;
var setcardinfo2 = document.getElementById("cardinfo2"),
	cardinfo2 = setcardinfo2.textContent,
	cardinfonume2 = cardinfo2.length;
cardinfo2 = 3 > cardinfonume2 ? "لا يتوفر معلومات كافية" : cardinfo2;
var setcardinfo3 = document.getElementById("cardinfo3"),
	cardinfo3 = setcardinfo3.textContent,
	cardinfonume3 = cardinfo3.length;
cardinfo3 = 3 > cardinfonume3 ? "لا يتوفر معلومات كافية" : cardinfo3;
var setcardinfo4 = document.getElementById("cardinfo4"),
	cardinfo4 = setcardinfo4.textContent,
	cardinfonume4 = cardinfo4.length;
cardinfo4 = 3 > cardinfonume4 ? "لا يتوفر معلومات كافية" : cardinfo4;
var setcardinfo5 = document.getElementById("cardinfo5"),
	cardinfo5 = setcardinfo5.textContent,
	cardinfonume5 = cardinfo5.length;
cardinfo5 = 3 > cardinfonume5 ? "لا يتوفر معلومات كافية" : cardinfo5;
var setcardinfo6 = document.getElementById("cardinfo6"),
	cardinfo6 = setcardinfo6.textContent,
	cardinfonume6 = cardinfo6.length;
cardinfo6 = 3 > cardinfonume6 ? "لا يتوفر معلومات كافية" : cardinfo6;
var setcardinfo7 = document.getElementById("cardinfo7"),
	cardinfo7 = setcardinfo7.textContent,
	cardinfonume7 = cardinfo7.length;
if (cardinfo7 = 3 > cardinfonume7 ? "لا يتوفر معلومات كافية" : cardinfo7, document.getElementById("cardinfo08")) var setcardinfo08 = document.getElementById("cardinfo08"),
	cardinfo08 = setcardinfo08.textContent;
else var cardinfo08 = "الحجم بالنسبة للإنسان";
var setcardinfo10 = document.getElementById("cardinfo10"),
	cardinfo10 = setcardinfo10.textContent;
cardinfo10 = "+" === cardinfo10 ? "<span class='cardinfo_increase'>إزدياد</span>" : "-" === cardinfo10 ? "<span class='cardinfo_decreasing'>تناقص</span>" : "+-" === cardinfo10 ? "<span class='cardinfo_stable'>مستقر</span>" : "-+" === cardinfo10 ? "<span class='cardinfo_stable'>مستقر</span>" : "غير معروف";
var cardinfo8_rs = $("#cardinfo8").find("img").attr("src"),
	cardinfo8_r = cardinfo8_rs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/s160/"),
	setcardinfo8 = document.getElementById("cardinfo8"),
	cardinfo8 = '<img border="0" data-original-height="101" data-original-width="162" src="' + cardinfo8_r + '"/>',
	cardinfonume8 = cardinfo8.length;
cardinfo8 = 3 > cardinfonume8 ? "لا يتوفر معلومات كافية" : cardinfo8, document.getElementById("cardinfo").innerHTML = "<span class='incardbackgroundimage'><span class='cardbackgroundimage'></span></span><table class='FastFactsTable' style='overflow-x:auto'><tr><td class='cardinfoname'> الاسم الشائع</td><td class='answercardinfo'>" + cardinfo1 + "</td></tr><tr><td class='cardinfoname'> الاسم العلمي</td><td class='answercardinfo'>" + cardinfo2 + "</td></tr><tr><td class='cardinfoname'> النوع</td><td class='answercardinfo'>" + cardinfo3 + "</td></tr>" + getAnimalFamily + "<tr><td class='cardinfoname'> النظام الغذائي</td><td class='answercardinfo'>" + cardinfo4 + "</td></tr><tr><td class='cardinfoname'>متوسط العمر</td><td class='answercardinfo'>" + cardinfo5 + "</td></tr><tr><td class='cardinfoname'> الحجم</td><td class='answercardinfo'>" + cardinfo6 + "</td></tr><tr><td class='cardinfoname'> الوزن</td><td class='answercardinfo'>" + cardinfo7 + "</td></tr>" + cardinfonew + "<tr><td class='cardinfoname'>إتجاه السكان الحالي</td><td class='answercardinfo' id='cardinfopopulationtrend'>" + cardinfo10 + "</td></tr><tr style='width:100%'><td class='cardinfoname'>" + cardinfo08 + "</td><td></td></tr></table><tr><td class='answercardinfo' id='answercardinfoimgsize'>" + cardinfo8 + "</td></tr><hr/><div class='FastFactsmodalcardinfListContainer'><div class='factsLabel_3x2xkx'><span class='factsKey_rambtt'>حالة القائمة الحمراء لـ<span title='الإتحاد الدولي لحفظ الطبيعة'>IUCN<span>: </span></span><span class='factsKeyValue_card'><div id='mymodalcardinf' class='modalcardinf'><div class='modalcardinf-content'><div class='modalcardinf-header'><span class='close'>&times;</span></div><div class='modalcardinf-body'><div class='container_9m9ayv'><amp-img class='image_IUCN i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout' layout='fixed' src='https://lh3.googleusercontent.com/-zK8mjZ6lD-s/XW7RGgx5YAI/AAAAAAAADEo/AJsZz1IUNg0HDrSU7nbZd3PUJD-xPkB6QCLcBGAs/s70/iucn.adapt.133.png' width='70' height='64' i-amphtml-layout='fixed' style='width:70px;height:64px;--loader-delay-offset:0ms!important'><img decoding='async' src='https://lh3.googleusercontent.com/-zK8mjZ6lD-s/XW7RGgx5YAI/AAAAAAAADEo/AJsZz1IUNg0HDrSU7nbZd3PUJD-xPkB6QCLcBGAs/s70/iucn.adapt.133.png' class='i-amphtml-fill-content i-amphtml-replaced-content' /></amp-img><p class='descriptionaboutIUCN'>القائمة الحمراء للأنواع المهددة بالانقراض من الاتحاد الدولي لحفظ الطبيعة (IUCN) هي النهج العالمي الأكثر شمولية وموضوعية لتقييم حالة حفظ الأنواع النباتية والحيوانية.</p><div class='dividerredlist'></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor160'><span>غم</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع غير المهددة</p><p class='descriptionredlist'>الأنواع المنتشرة والمتوفرة في الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor174'><span>قخ</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع القريبة من التهديد</p><p class='descriptionredlist'>الأنواع التي لا تتأهل كي تصنف ضمن الفئات المذكورة في التالي ولكنها من المرجح أن تصل إلى إحدى هذه الفئات في المستقبل القريب</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor249'><span>خد</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المعرضة للانقراض</p><p class='descriptionredlist'>الأنواع المعرضة لخطورة الانقراض من الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor235'><span>خم</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المهددة بالانقراض</p><p class='descriptionredlist'>الأنواع المعرضة بشكل كبير لخطورة الانقراض من الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor215'><span>خق</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المهددة بشكل حرج بالانقراض</p><p class='descriptionredlist'>الأنواع المعرضة بشدة كبيرة جدا لخطورة الانقراض من الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor60'><span>قب</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المنقرضة من الحياة البرية</p><p class='descriptionredlist'>الأنواع التي تتواجد فقط في الأسر أو التربية الداخلية أو تتواجد في تجمعات غير طبيعية (تتواجد بعيدا عن التوزيع الطبيعي الأصلي لهذه الفئة)</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor25'><span>نق</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المنقرضة</p><p class='descriptionredlist'>لا يوجد في البرية او في الأسر من هذا الفصيل على قيد الحياة</p></div></div><div class='itemredList'><div class='itemredListtext'><p class='nameredlist'>الأنواع التي لا تتوفر عنها معلومات كافية</p><p class='descriptionredlist'>لا تتوفر عنها معلومات عن توزيعها في الطبيعة أو تعرضها للتهديدات</p></div></div><div class='itemredList'><div class='itemredListtext'><p class='nameredlist'>الأنواع التي لم تقيَّم</p><p class='descriptionredlist'>الأنواع التي لم يتم تقييمها بعد</p></div></div></div></div></div></div><a href='#IUCN' id='Btnscardinfcardinf' class='btncardinfOpenmodalcardinfcard'></a></span><span id='settextstatus' class='statusValueText'></span></div></div><div class='factsextinctionsContainer000'><span class='factsextinctionsLine000'></span><div class='factsextinctions0001'><div id='setclassList1' class='extinction_notthis'><span>غم</span></div><div id='setclassList2' class='extinction_notthis'><span>قخ</span></div><div id='setclassList3' class='extinction_notthis'><span>خد</span></div><div id='setclassList4' class='extinction_notthis'><span>خم</span></div><div id='setclassList5' class='extinction_notthis'><span>خق</span></div><div id='setclassList6' class='extinction_notthis'><span>قب</span></div><div id='setclassList7' class='extinction_notthis'><span>نق</span></div></div><span class='Labelcard0001'>أقل خطورة</span><span class='Labelcard0002'>منقرضة</span></div>";
var setcardinfo9 = document.getElementById("cardinfo9"),
	cardinfo9 = setcardinfo9.textContent;
1 == cardinfo9 ? (document.getElementById("setclassList1").className = "extinction_this extinctionbackgroundcolor160", document.getElementById("settextstatus").textContent = "غير مهدد", document.getElementById("settextstatus").style.color = "rgb(0, 160, 0)") : 2 == cardinfo9 ? (document.getElementById("setclassList2").className = "extinction_this extinctionbackgroundcolor174", document.getElementById("settextstatus").textContent = "قريب من التهديد", document.getElementById("settextstatus").style.color = "rgb(174, 202, 0)") : 3 == cardinfo9 ? (document.getElementById("setclassList3").className = "extinction_this extinctionbackgroundcolor249", document.getElementById("settextstatus").textContent = "معرض للإنقراض", document.getElementById("settextstatus").style.color = "rgb(249, 190, 2)") : 4 == cardinfo9 ? (document.getElementById("setclassList4").className = "extinction_this extinctionbackgroundcolor235", document.getElementById("settextstatus").textContent = "مهدد بالإنقراض", document.getElementById("settextstatus").style.color = "rgb(235, 120, 0)") : 5 == cardinfo9 ? (document.getElementById("setclassList5").className = "extinction_this extinctionbackgroundcolor215", document.getElementById("settextstatus").textContent = "مهدد بشكل حرج بالانقراض", document.getElementById("settextstatus").style.color = "rgb(215, 41, 0)") : 6 == cardinfo9 ? (document.getElementById("setclassList6").className = "extinction_this extinctionbackgroundcolor60", document.getElementById("settextstatus").textContent = "منقرض من الحياة البرية", document.getElementById("settextstatus").style.color = "rgb(60, 0, 168)") : 7 == cardinfo9 ? (document.getElementById("setclassList7").className = "extinction_this extinctionbackgroundcolor25", document.getElementById("settextstatus").textContent = "منقرض تماماً", document.getElementById("settextstatus").style.color = "rgb(25, 25, 25)") : 8 == cardinfo9 ? (document.getElementById("settextstatus").textContent = "لا يتوفر عنه معلومات كافية", document.getElementById("settextstatus").style.color = "000000") : 9 == cardinfo9 ? (document.getElementById("settextstatus").textContent = "لم يقيَّم بعد", document.getElementById("settextstatus").style.color = "000000") : document.getElementById("settextstatus").textContent = "لم يتم تحديد المعلومات";
var modalcardinf = document.getElementById("mymodalcardinf"),
	btncardinf = document.getElementById("Btnscardinfcardinf"),
	spancardinfo = document.getElementsByClassName("close")[0];
btncardinf.onclick = function() {
	modalcardinf.style.display = "block"
}, spancardinfo.onclick = function() {
	modalcardinf.style.display = "none", history.pushState("", document.title, window.location.pathname + window.location.search)
}, window.onclick = function(t) {
	t.target == modalcardinf && (modalcardinf.style.display = "none")
}, document.getElementById("answercardinfoimgsize") && $("#answercardinfoimgsize a").replaceWith(function() {
	return "<span>" + this.innerHTML + "</span>"
});
var noselectscard = document.getElementById("cardinfo");
noselectscard.onselectstart = new Function("return false"), window.sidebar && (noselectscard.onmousedown = disabletextselect, noselectscard.onclick = renabletextselect);
var cardinfo0 = document.getElementById("cardinfo0").innerHTML,
	cardinfonume0 = cardinfo0.length;
if (cardinfonume0 > 20) {
	var cardinfonume0noimgurl = $("#cardinfo0").find("img").attr("src"),
		cardinfonume0noimgurls = cardinfonume0noimgurl.replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/w136-h136-p/"),
		cardinfonume0noimgclass = document.getElementsByClassName("cardbackgroundimage")[0];
	cardinfonume0noimgclass.style.backgroundImage = "url(" + cardinfonume0noimgurls + ")"
}
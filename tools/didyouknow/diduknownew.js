var setcardinfo11 = document.getElementById("cardinfo11");
var ifgetcardinfo112 = setcardinfo11.getElementsByTagName("UL")[0];
var cardinfo11 = $(ifgetcardinfo112).html();
var getcopylinkpage = $("#copylinkpage").val();
cardinfo11 = cardinfo11.replace("<br/>", "");
cardinfo11 = cardinfo11.replace("<br>", "");
$(cardinfo11).find("li").each(function()
    {
       var tweetthis=$(this);                
			tweetthis.append("<a class='didyouknow-twit' href='https://twitter.com/intent/tweet?url=" + getcopylinkpage + "&amp;text=" + tweetthis.text() + "&amp;via=GeoArabs&amp;related=AdawatWeb' onclick='if (!window.__cfRLUnblockHandlers) return false; window.open(this.href, & quot; popupwindow & quot;, & quot; status = 0, height = 500, width = 500, resizable = 0, top = 50, left = 100 & quot;);return false;' rel='nofollow' target='_blank ' title='Twitter'><i class='fa fa - twitter' aria-hidden='true'></i></a>")});
    
$("#cardinfo").after("<center><div id='didyouknow'><p class='didyouknow0005'>هل تعلم</p><div class='didyouknow0004'></div><div class='owl-carousel owl-theme'>" + cardinfo11 + "</div></div></center>");
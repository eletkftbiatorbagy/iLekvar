var OldalSzam=13;var SorokSzamaMin=5;var SZERVER="http://e-let.hu/koronascukor";var APP_NAME="iLekvár";var APP_HTTP="http://j.mp/ilekvar";var Video=[];Video.push(["kkn7LBWmwd8",16,"Mézes citromos almalekvár"]);Video.push(["Uv_vaHmPrmc",16,"Mokkás körtelekvár"]);Video.push(["8o0c2agqOmA",16,"Vodkás narancslekvár"]);Video.push(["g0W9vsO0pTg",24,"Epres rebarbaralekvár"]);Video.push(["d1Zzdj4AMiU",16,"Mézdinnyelekvár"]);Video.push(["19E5upWWYxE",17,"Málnás mangólekvár"]);Video.push(["is2-Dp9JlUk",24,"Kivis eperlekvár"]);Video.push(["4mUjCQZ4aCY",16,"Karamellás almalekvár"]);Video.push(["BFUXcj6eHgc",16,"Gyömbéres banánlekvár"]);Video.push(["rpnmPncy0Kc",24,"Epres banánlekvár"]);Video.push(["ZmOHvX7VsaQ",16,"Piña colada dzsem"]);Video.push(["qD2LqbSUcYw",16,"Rumos ananász chutney"]);Video.push(["xgyKhj4t8IM",16,"Mangólekvár"]);Video.push(["eRFAD2Cj5T0",16,"Gránátalmalekvár"]);Video.push(["cPUOOb_2daw",32,"Szilvalekvár"]);Video.push(["ZIYCItMD1jg",16,"Passiógyümölcslekvár"]);Video.push(["DZn02D0SRSA", 1,"Kókuszos málnalekvár"]);Video.push(["4emKsuVuDg4", 8,"Eperlekvár"]);Video.push(["khW8MFvFX0o", 2,"Fehércsokoládés áfonyalekvár"]);Video.push(["oeTKsRe3GY0",16,"Nektarinlekvár"]);Video.push(["zx1U38bcaJw",16,"Kivilekvár"]);Video.push(["fxcmr9OjFmc",16,"Cseresznyelekvár"]);Video.push(["I73PE0uckc4", 4,"Vaníliás sárgabaracklekvár"]);Video.push(["OdJuGTd4lWM",16,"Narancs-ananász-mangó dzsem"]);var KepArany=4/3;var sW;var sH;var ReceptMost;var ReceptAZONOSITO;var ReceptIMG;var ReceptIMG2;var ReceptNEV;var ReceptADAG;var ReceptDefADAG;var ReceptME;var ReceptHOZZAVALOK;var ReceptLEIRAS;var ReceptIDO;var EVSZAK;var EVSZAKnr;var UZENETEK;var MSG_CIM;var MSG_TXT;var MSG_IMG;var Elozmenyek=Array();var ElozmenyekMAX=25;var EHistory=Array();var ELOZMENYEK=Array('csak a mai','utolsó 5','utolsó 10');var PS1;var PS3;var PS2;var PS4;var PS5;var PS6;var PS8;var PS10;var PS11;var PS12;var PS13;var RM1;var RM2;var RM3;var Szazalek;var RHatterH;var RCsikH;var RNevH;var RNevT;var RNevT2;var RNevLH;var RIdoH;var RIdoT;var RIdoT2;var RCsiH;var RCsiT;var RCsiT2;var ErtekelesProba;var ErtekelesOK=false;var Ertekelesek=Array();var callback, callback2, callback3;var myID=window.localStorage.getItem("ilekvar_myID");var Kereses_Ido=5;var Kereses_Idok=Array(10,20,30,60,120,999);var Kereses_Fok=5;var VisszaLock=false;var app={initialize: function(){this.bindEvents();function loaded() 
{
}
window.addEventListener('load', loaded, false);},
bindEvents: function(){document.addEventListener('deviceready', this.onDeviceReady, false);},
onDeviceReady: function(){console.log("--- DeviceReady ---");var args={};OrientationReCalc();Lablec(1,1);var TXT=document.getElementById('RECEPTEK').contentWindow.document.body.innerHTML;TXT=TXT.substring(5,TXT.length-6);var R=TXT.split("•");KategoriaID=R[1].split("|");KategoriaNEV=R[2].split("|");EvszakID={};EvszakD1={};EvszakD2={};Receptek=R[6].split("©");var Kedvenceim=[];for (var n=0;n<Receptek.length;n++)
{var Recept=Receptek[n].split("|");if (window.localStorage.getItem("kedvenc"+Recept[0]) && window.localStorage.getItem("kedvenc"+Recept[0])==="1" ){Kedvenceim.push(Recept[0]);}}
var AN={};AN.Platform="PC";AN.Version="-";AN.W=window.innerWidth;AN.H=window.innerHeight;AN.TEST=true;AN.Logins=0;if (window.localStorage.getItem("ilekvar_logins")){AN.Logins=window.localStorage.getItem("ilekvar_logins");}
AN.Logins++;window.localStorage.setItem("ilekvar_logins",AN.Logins);if (window.device)
{AN.TEST=false;AN.Platform=device.platform;AN.Version=device.version;AN.W=document.documentElement.clientWidth;AN.H=document.documentElement.clientHeight;}
callback2=function(response){top5_update('top5_data',response);};ajax_hivas(SZERVER+'/app_ilekvar/code/top5.php?random='+Math.random()+"&myid="+myID+"&kedvenceim="+JSON.stringify(Kedvenceim)+"&analytics="+JSON.stringify(AN), 'callback2','top5_data');var lastM=window.localStorage.getItem("ilekvar_msgnr");if (window.localStorage.getItem("ilekvar_uzenetek")){UZENETEK=JSON.parse(window.localStorage.getItem("ilekvar_uzenetek"));}
Refresh_uzenetek();callback3=function(response){Message_update('message_data',response);};ajax_hivas(SZERVER+'/app_ilekvar/code/message.php?random='+Math.random()+"&msgnr="+lastM, 'callback3','message_data');var element1=document.getElementById('RECEPT_MEZO1');var balra1=Hammer(element1).on("swipeleft", function(event){ReceptMenu(2);});var element2=document.getElementById('RECEPT_MEZO2');var balra2=Hammer(element2).on("swipeleft", function(event){ReceptMenu(3);});var jobbra2=Hammer(element2).on("swiperight", function(event){ReceptMenu(1);});var element3=document.getElementById('RECEPT_MEZO3');var balra3=Hammer(element3).on("swipeleft", function(event){ReceptMenu(4);});var jobbra3=Hammer(element3).on("swiperight", function(event){ReceptMenu(2);});var element4=document.getElementById('RECEPT_MEZO4');var jobbra4=Hammer(element4).on("swiperight", function(event){ReceptMenu(3);});Hammer(document.getElementById("KAT1")).on("tap",function(event){Kat(1);} );Hammer(document.getElementById("KAT2")).on("tap",function(event){Kat(2);} );Hammer(document.getElementById("KAT3")).on("tap",function(event){Kat(3);} );Hammer(document.getElementById("KAT4")).on("tap",function(event){Kat(4);} );Hammer(document.getElementById("KAT5")).on("tap",function(event){Kat(5);} );Hammer(document.getElementById("KAT6")).on("tap",function(event){Kat(6);} );Hammer(document.getElementById("ShareIkon2")).on("tap",function(event){Megoszt(0);} );Hammer(document.getElementById("FacebookIkon2")).on("tap",function(event){Megoszt(1);} );Hammer(document.getElementById("TwitterIkon2")).on("tap",function(event){Megoszt(2);} );for (var e=0;e<ElozmenyekMAX;e++)
{var ER=window.localStorage.getItem("lekvar_erecept"+e);var ED=window.localStorage.getItem("lekvar_edatum"+e);if (ER!=null)
{EHistory[e]=Array();Elozmenyek[e]=Array();EHistory[e][0]=ER;Elozmenyek[e][0]=ER;EHistory[e][1]=ED;Elozmenyek[e][1]=ED;}}
document.addEventListener("backbutton", Vissza, false);var RNEV=document.getElementById("RNEV");RNEV.style.fontSize=RNevH+"px";RNEV.style.lineHeight=RNevLH+"px";var RIDO=document.getElementById("RIDO");RIDO.style.fontSize=RIdoH+"px";var RCSI=document.getElementById("RSIPKA");RCSI.style.height=parseInt(RCsiH)+"px";Ertekeles_letolt();for (var m=1;m<=7;m++)
{Sor(document.getElementById("POROND0"),null,null);}
var K=document.getElementById("KERES");K.parentNode.style.height=Szazalek * 8+"px";K.focus();K.select();document.getElementById("KERES_GOMB").style.height=Szazalek * 10+"px";document.getElementById("IDOVONAL1").style.height=Szazalek * 22+"px";document.getElementById("IDOVONAL2").style.height=Szazalek * 22+"px";document.getElementById("SKALA1").style.height=Szazalek * 6+"px";document.getElementById("SKALA2").style.height=Szazalek * 6+"px";setTimeout(function(){console.log("--- Reklam indul");Reklam();},500);if (window.device){setTimeout(function(){navigator.splashscreen.hide();console.log("SplashScreen KIKAPCS");}, 5000);}
setTimeout( function(){PS1=new iScroll('POROND1',{hScrollbar: false, vScrollbar: false, hScroll: false});PS2=new iScroll('POROND2',{hScrollbar: false, vScrollbar: false, hScroll: false});PS3=new iScroll('POROND3',{hScrollbar: false, vScrollbar: false, hScroll: false});PS4=new iScroll('POROND4',{hScrollbar: false, vScrollbar: false, hScroll: false});PS6=new iScroll('POROND6',{hScrollbar: false, vScrollbar: false, hScroll: false});PS8=new iScroll('POROND8',{hScrollbar: false, vScrollbar: false, hScroll: false});PS10=new iScroll('POROND10',{hScrollbar: false, vScrollbar: false, hScroll: false});PS11=new iScroll('POROND11',{hScrollbar: false, vScrollbar: false, hScroll: false});PS12=new iScroll('POROND12',{hScrollbar: false, vScrollbar: false, hScroll: false});PS13=new iScroll('POROND13',{hScrollbar: false, vScrollbar: false, hScroll: false});RM1=new iScroll('RECEPT_MEZO1',{hScrollbar: false, vScrollbar: false, hScroll: false});RM2=new iScroll('HOZZAVALOK',{hScrollbar: false, vScrollbar: false, hScroll: false});RM3=new iScroll('RECEPT_MEZO3',{hScrollbar: false, vScrollbar: false, hScroll: false});},0);}};var KategoriaID=Array();var KategoriaNEV=Array();var Receptek=Array();var LastPage=[1];var LastLablec=[1];var LastRecept=[0];var LastKategoria=[];var LastKat=0;function Oldal(oldal,lablec)
{document.getElementById("Notification").style.display="none";document.getElementById("VIDEO").innerHTML="";if (!oldal){return;}
if (oldal<0)        
{oldal=Math.abs(oldal);}
else
{LastPage.push(oldal);LastLablec.push(lablec);LastRecept.push(ReceptMost);}
for (var n=1;n<=OldalSzam;n++)
{document.getElementById("Oldal"+n).style.display=(oldal==n)?"block":"none";}
if (!lablec){lablec=0;}
Lablec(oldal,lablec);setTimeout(function(){Oldal2(oldal,lablec);},10);
}
function Oldal2(oldal,lablec)
{
if (oldal==2) 
{
setTimeout(function(){PS2.refresh();},10);}
if (oldal==3){ReceptBeolvasas(3,-1);}
if (oldal==4){ReceptBeolvasas(4, 0);}
if (oldal==7){document.getElementById("NAGYKEP").scrollTop=0;document.getElementById("HOZZAVALOK").scrollTop=0;document.getElementById("ELKESZITES").scrollTop=0;}
if (oldal==8) 
{document.getElementById("RECNUMINFO").innerHTML=Receptek.length-1;document.getElementById("NETWORKSTATUS").innerHTML=network_status();}}
function Vissza()
{if (VisszaLock){return;}
VisszaLock=true;setTimeout(function() {VisszaLock=false;},500);if (LastPage.length==1){return;} 
var LP=LastPage.pop();if (!LP){return;}
var LL=LastLablec.pop();var LR=LastRecept.pop();ReceptMost=LR;if (LastPage[parseInt(LastPage.length-1)]==6){ReceptBeolvasas(6, LastKategoria.pop());}
if (LastPage[parseInt(LastPage.length-1)]==7){Recept_mutat();}
Oldal(-1*LastPage[parseInt(LastPage.length-1)],LastLablec[parseInt(LastLablec.length-1)]);}
function Lablec(oldal,NR)
{var LL=document.getElementById("LABLEC"+oldal);if (!LL){return;}
LL.innerHTML="";for (var n=0;n<5;n++)
{var MENU=document.createElement("div");MENU.className="menu";var IMG=document.createElement("img");IMG.className="ikon";IMG.src="img/menu"+parseInt(n+1)+((n+1==NR)?"1":"0")+".png";IMG.setAttribute("nr",n);MENU.appendChild(IMG);LL.appendChild(MENU);var hammertime=Hammer(MENU).on("tap", function(event){Oldal(parseInt(event.target.getAttribute('nr'))+1,parseInt(event.target.getAttribute('nr'))+1);});}}
function ReceptBeolvasas(oldal,KAT,SEARCH) 
{var CSIK=document.getElementById("CSIK6");if (KAT) 
{CSIK.src="img/fejlec6"+Math.abs(KAT)+".jpg";}
else
{CSIK.src="img/fejlec2t.jpg";}
var PS=document.getElementById("SCROLLER"+oldal);if (PS){PS.innerHTML="<div id='POROND_TERKOZ"+oldal+"' class='porond_terkoz' style='height:"+parseInt(window.innerHeight*0.0001)+"px'></div>";var SorokSzamaMinKorrekcio=0;if (KAT==-1)
{SorokSzamaMinKorrekcio=2;Sor(PS,null);Sor(PS,null);setTimeout( function(){var PSek=document.querySelector("#SCROLLER3").querySelectorAll(".recept_csik");var QS1=PSek[0];Hammer(QS1).on("tap", function(event){top5(2);});Hammer(QS1,{tap_max_touchtime : 300, tap_max_distance  : 5});var RKDO=document.createElement("div");RKDO.className="recept_kisfoto_keret";RKDO.style.height=parseInt(RCsikH*0.82)+"px";RKDO.style.width=parseInt(RCsikH*0.82)+"px";RKDO.style.marginTop=parseInt(RCsikH*0.05)+"px";RKDO.style.border="none";var RKF=document.createElement("img");RKF.className="recept_kisfoto";RKF.setAttribute("src","img/sziv1.png");var RNEV=document.createElement("div");RNEV.innerHTML="Legnépszerűbb receptek";RNEV.className="recept_nev";RNEV.style.fontSize=RNevH+"px";RNEV.style.height=RNevLH+"px";RNEV.style.lineHeight=RNevLH*1.5+"px";RNEV.style.color="#B64E06";RKDO.appendChild(RKF);QS1.appendChild(RKDO);QS1.appendChild(RNEV);var QS2=PSek[1];Hammer(QS2).on("tap", function(event){top5(1);});Hammer(QS2,{tap_max_touchtime : 300, tap_max_distance  : 5});var RKDO2=document.createElement("div");RKDO2.className="recept_kisfoto_keret";RKDO2.style.height=parseInt(RCsikH*0.82)+"px";RKDO2.style.width=parseInt(RCsikH*0.82)+"px";RKDO2.style.marginTop=parseInt(RCsikH*0.05)+"px";RKDO2.style.border="none";var RKF2=document.createElement("img");RKF2.className="recept_kisfoto";RKF2.setAttribute("src","img/sziv1.png");var RNEV2=document.createElement("div");RNEV2.innerHTML="Mások kedvenc receptjei";RNEV2.className="recept_nev";RNEV2.style.fontSize=RNevH+"px";RNEV2.style.height=RNevLH+"px";RNEV2.style.lineHeight=RNevLH*1.5+"px";RNEV2.style.color="#B64E06";RKDO2.appendChild(RKF2);QS2.appendChild(RKDO2);QS2.appendChild(RNEV2);},100);}}
if (SEARCH=="*"){SEARCH=null;}
if (SEARCH){ SEARCH=SEARCH.trim();}
if (KAT>0){LastKat=KAT;LastKategoria.push(KAT);}
var TALALAT=Array();var EREDMENY=0;if (SEARCH!=null)
{for (var x=0;x<Receptek.length-1;x++)
{var Recept=Receptek[x].split("|");var go=true;if (Kereses_Ido!=5)     
{if (parseInt(Recept[5])>Kereses_Idok[Kereses_Ido]){go=false;}}
if (Kereses_Fok!=5)     
{if (parseInt(Recept[4])>parseInt(Kereses_Fok+1)){go=false;}}
var Talalat=0;if (go==true)
{var SZAVAK=SEARCH.split(" ");for (var t=0;t<SZAVAK.length;t++)
{Talalat+=substring_search(Recept[1],SZAVAK[t],true);Talalat+=substring_search(Recept[2],SZAVAK[t],true);Talalat+=substring_search(Recept[8],SZAVAK[t],true);}}
TALALAT[x]=Array();TALALAT[x][0]=x;TALALAT[x][1]=Talalat;TALALAT[x][2]=Recept[0];}
TALALAT.sort(function(a,b){return ((b[1] < a[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0));});}
if (KAT==0)    
{for (var e=0;e<Receptek.length;e++)
{if (e < EHistory.length)
{TALALAT[e]=Array();TALALAT[e][0]=ReceptNum(EHistory[e][0]);TALALAT[e][1]=EHistory[e][0];TALALAT[e][2]=EHistory[e][1];}
else
{TALALAT[e]=Array();TALALAT[e][0]=0;TALALAT[e][1]=0;TALALAT[e][2]=0;}}}
var elso=null;for (var n=0;n<Receptek.length-1;n++)
{if ((SEARCH==null && KAT!=0)||TALALAT[n][1]>0)
{var R=n;if (SEARCH!=null||KAT==0){R=TALALAT[n][0];}
if (Receptek[R])
{var Recept=Receptek[R].split("|");ReceptMost=Recept[0];if (  !KAT||((parseInt(Recept[3]) & Math.pow(2,KAT-1) )>0)||(KAT==-1 && Kedvenc()==1)||(KAT==0 && TALALAT[n][0]!=0 )  )
{EREDMENY++;Sor(PS,Recept);}}}}
var FILMEK=0;if (PS && KAT>0)
{for (var v=0;v<Video.length;v++)
{if ((Video[v][1] & Math.pow(2,KAT-1))>0)
{Sor(PS,null,Video[v][0]+Video[v][2]);}}}
if (PS)
{if (parseInt(EREDMENY+FILMEK)<SorokSzamaMin)
{for (var m=1;m<=SorokSzamaMin-EREDMENY-FILMEK-SorokSzamaMinKorrekcio;m++)
{Sor(PS,null);}}
Sor(PS,null);}
ScrollRefresh(oldal);PS6.scrollTo(0,0);}
function Sor(PS,Recept,VideoCode)
{var RCSI=document.createElement("div");RCSI.className="recept_csik";RCSI.style.height=RCsikH+"px";if (Recept !=null||VideoCode !=null)
{RCSI.style.className="recept_csik ures";var RKDO=document.createElement("div");RKDO.className="recept_kisfoto_keret";RKDO.style.height=parseInt(RCsikH*0.82)+"px";RKDO.style.width=parseInt(RCsikH*0.82)+"px";RKDO.style.marginTop=parseInt(RCsikH*0.05)+"px";var RKF=document.createElement("img");RKF.className="recept_kisfoto";if (Recept !=null){RKF.setAttribute("src","db/"+Recept[9].substring(0,Recept[9].length-4)+".jpg");}
if (VideoCode !=null){RKF.setAttribute("src","img/video.jpg");}
var RNEV=document.createElement("div");RNEV.className="recept_nev";RNEV.style.fontSize=RNevH+"px";RNEV.style.height=RNevLH+"px";RNEV.style.lineHeight=RNevLH+"px";if (Recept !=null) 
{RNEV.innerHTML=Recept[1];RNEV.style.marginTop=parseInt(RNevT/2)+"px";RCSI.setAttribute("receptid",Recept[0]);}
if (VideoCode !=null)  
{RNEV.innerHTML=VideoCode.substring(11);RNEV.style.marginTop=parseInt(RNevT)+"px";RNEV.style.lineHeight=RNevT*1.1+"px";RCSI.setAttribute("receptid",VideoCode.substring(0,11));}
RKDO.appendChild(RKF);RCSI.appendChild(RKDO);RCSI.appendChild(RNEV);if (Recept !=null)
{var REC=null;
var RIDO=document.createElement("div");RIDO.className="recept_ido";RIDO.innerHTML="Elkészítési idő: <span style='color:#704b26;'>"+Recept[5]+" perc</span>";RIDO.style.fontSize=RIdoH+"px";RIDO.style.marginTop=RIdoT+"px";var RCSL=document.createElement("div");RCSL.className="recept_sipka";RCSL.style.height=RCsiH+"px";for (var m=1;m<=3;m++)
{var STR=document.createElement("img");STR.src="img/sipka"+((Recept[4]>=m)?"0":"1")+".png";STR.className="sipka";RCSL.appendChild(STR);}
var RTOUCH=document.createElement("div");RTOUCH.className="recept_touch";
if (REC){RCSI.appendChild(REC);}
RCSI.appendChild(RIDO);RCSI.appendChild(RCSL);
if (Kedvenc(null,Recept[0])>0)
{var RKED=document.createElement("img");RKED.className="kedvencrecept";RKED.setAttribute("src","img/kedvenc1.png");RCSI.appendChild(RKED);}}}
if (PS){PS.appendChild(RCSI);}
if (Recept !=null||VideoCode !=null)
{if (VideoCode !=null)
{Hammer(RCSI).on("tap", function(event){Video_mutat(event.target.getAttribute('receptid'));});Hammer(RCSI,{tap_max_touchtime : 300, tap_max_distance  : 5});Hammer(RKF).on("tap", function(event){Video_mutat(event.target.parentNode.getAttribute('receptid'));});Hammer(RKF,{tap_max_touchtime : 300, tap_max_distance  : 5});Hammer(RNEV).on("tap", function(event){Video_mutat(event.target.parentNode.getAttribute('receptid'));});Hammer(RNEV,{tap_max_touchtime : 300, tap_max_distance  : 5});}
if (Recept !=null)
{Hammer(RCSI).on("tap", function(event){Recept_mutat(parseInt(event.target.getAttribute('receptid')));});Hammer(RCSI,{tap_max_touchtime : 300, tap_max_distance  : 5});Hammer(RKF).on("tap", function(event){Recept_mutat(parseInt(event.target.parentNode.getAttribute('receptid')));});Hammer(RKF,{tap_max_touchtime : 300, tap_max_distance  : 5});Hammer(RNEV).on("tap", function(event){Recept_mutat(parseInt(event.target.parentNode.getAttribute('receptid')));});Hammer(RNEV,{tap_max_touchtime : 300, tap_max_distance  : 5});Hammer(RIDO).on("tap", function(event){Recept_mutat(parseInt(event.target.parentNode.getAttribute('receptid')));});Hammer(RIDO,{tap_max_touchtime : 300, tap_max_distance  : 5});Hammer(RCSL).on("tap", function(event){Recept_mutat(parseInt(event.target.parentNode.getAttribute('receptid')));});Hammer(RCSL,{tap_max_touchtime : 300, tap_max_distance  : 5});}}}
function Kereses(SEARCH)
{Oldal(6,2);setTimeout(function()
{ReceptBeolvasas(6,null,SEARCH);hideKeyboard(document.getElementById('KERES'));},0);}
function KeresesEnter(e)
{if (e.keyCode==13)
{Kereses(document.getElementById('KERES').value);}}
function hideKeyboard(element) 
{element.setAttribute('readonly', 'readonly');element.setAttribute('disabled', 'true');setTimeout(function(){element.blur();element.removeAttribute('readonly');element.removeAttribute('disabled');}, 100);}
function Recalc_enter(e)
{if (e.keyCode==13)
{Recalc();}}
function substring_search(string, subString, allowOverlapping)
{string=string.toLowerCase();subString=subString.toLowerCase();string+="";subString+="";if(subString.length<=0) return string.length+1;var n=0, pos=0;var step=(allowOverlapping)?(1):(subString.length);while(true){pos=string.indexOf(subString,pos);if(pos>=0){n++;pos+=step;} else break;}
return(n);}
function Kat(NR)
{Oldal(6,0);setTimeout(function(){ ReceptBeolvasas(6,NR,null);},100);}
function Recept_mutat(ID)
{if (ID) 
{ReceptMost=ID;ReceptAZONOSITO=ID;Oldal(7,0);} 
else 
{ID=ReceptMost;}
Elozmenyek_lementes();var NR=ReceptNum(ID);var Recept=Receptek[NR].split("|");var ReceptElsoSor=Recept[8].split("∆")[0];ReceptDefADAG=1000;var adagszam=ReceptDefADAG;var adagegyseg="gramm<br>gyümölcs";if (ReceptElsoSor.indexOf("[")!=-1)
{adagszam=ReceptElsoSor.substr(ReceptElsoSor.indexOf("[")+1,parseInt(ReceptElsoSor.indexOf("]")-ReceptElsoSor.indexOf("[")-1));}
document.getElementById("ADAG").value=adagszam;ReceptDefADAG=adagszam;document.getElementById("ADAGME").innerHTML=adagegyseg;ReceptME=adagegyseg;var RNEV=document.getElementById("RNEV");RNEV.innerHTML=Recept[1];ReceptNEV=Recept[1];var RIDO=document.getElementById("RIDO");RIDO.innerHTML="Elkészítés: "+Recept[5]+" perc";ReceptIDO=Recept[5];var CS=document.getElementById("RSIPKA");CS.innerHTML="";for (var m=1;m<=3;m++)
{var STR=document.createElement("img");STR.src="img/sipka"+((Recept[4]>=m)?"1":"0")+".png";STR.className="kissipka";CS.appendChild(STR);}
document.getElementById("NAGYKEP").src="db/"+Recept[9].substring(0,Recept[9].length-4)+".jpg";ReceptIMG=Recept[9].substring(0,Recept[9].length-4)+".jpg";ReceptIMG2=Recept[9].substring(0,Recept[9].length-4)+".THM";Recalc(ID);var Leiras=Recept[2];ReceptLEIRAS=Leiras;var p1=new RegExp("&lt;p&gt;", 'g');Leiras=Leiras.replace(p1,"");var p2=new RegExp("&lt;/p&gt;", 'g');Leiras=Leiras.replace(p2,"<br>");var p3=new RegExp("&lt;sup&gt;", 'g');Leiras=Leiras.replace(p3,"<sup>");var p4=new RegExp("&lt;/sup&gt;", 'g');Leiras=Leiras.replace(p4,"</sup>");var p5=new RegExp("&lt;br&gt;", 'g');Leiras=Leiras.replace(p5,"<br>");var p6=new RegExp("&lt;br/&gt;", 'g');Leiras=Leiras.replace(p6,"<br>");var p7=new RegExp("&lt;br /&gt;", 'g');Leiras=Leiras.replace(p7,"<br>");var pX=new RegExp("&lt;\/?[^&gt;]+(&gt;|$)",'g');Leiras=Leiras.replace(pX, "");document.getElementById("ELKESZITES").innerHTML=Leiras;document.getElementById("ELKESZITES").scrollIntoView (true);ReceptMenu(1);document.getElementById("RKEDVENC").src="img/sziv"+(Kedvenc())+".png";ShowErtekeles();if (RNEV.scrollHeight > RNevH) 
{RNEV.style.marginTop=RNevT2+"px";RIDO.style.marginTop=parseInt(RIdoH/10)+"px";CS.style.marginTop="-"+parseInt(RCsiH*1.2)+"px";}
else
{RNEV.style.marginTop=RNevT+"px";RIDO.style.marginTop=parseInt(RIdoH/2)+"px";CS.style.marginTop="-"+parseInt(RCsiH*1.2)+"px";}
setTimeout(function(){RM1.refresh();},0);setTimeout(function(){RM3.refresh();},0);}
function Recalc(ID)
{if (!ID){ID=ReceptMost;}
var NR=ReceptNum(ID);var R1OL=document.getElementById("SCROLLER_H");R1OL.innerHTML="";var SZEGMENSp=document.createElement("div");SZEGMENSp.setAttribute("style","width:93%;display:block;overflow:hidden;background-color:#faf3de;margin-bottom:2%;padding:2%;");var DIV1p=document.createElement("div");DIV1p.setAttribute("style","width:94%;background-color:#faf3de;padding:1%;");var SZEGMENS=SZEGMENSp.cloneNode(true);var elso=SZEGMENS;var DIV1=DIV1p.cloneNode(true);var ADAG=document.getElementById("ADAG").value/ReceptDefADAG;ReceptADAG=document.getElementById("ADAG").value;if (ADAG)
{if (Number(ADAG)<=0){return;}
var Recept=Receptek[NR].split("|");var SOR=Recept[8].split("∆");if (SOR[0].indexOf("[")!=-1){SOR[0]="";}
var paros=true;var ujsorba=false;ReceptHOZZAVALOK="";for (var m=0;m<SOR.length;m++)
{if (SOR[m]!="")
{var LI1=document.createElement("div");LI1.setAttribute("style","float:left;width:100%;text-align:left;cursor:default;margin-bottom:1%;");var LD1=document.createElement("div");LD1.setAttribute("style","width:32%;float:left;text-align:left;padding-left:2%;");var LD2=document.createElement("div");LD2.setAttribute("style","width:63%;float:left;text-align:left;padding-left:2%;");if (SOR[m].indexOf("=")!=-1)    
{var OSSZETEVO=SOR[m].split("=");var hsor="";var R=OSSZETEVO[0];var RR=R.split(" ");RR[0]=RR[0].replace(/\,/gi,".");RR[0]=RR[0].replace(/fél/gi,"0.5");RR[0]=RR[0].replace(/negyed/gi,"0.25");RR[0]=RR[0].replace(/darab/gi,"db");var P=2;switch(RR[1])
{case "g": P=0;break;case "kg": P=2;break;case "dkg": P=0;break;case "evőkanál": P=1;break;case "ek": P=1;break;case "teáskanál": P=1;break;case "tk": P=1;break;case "cl": P=0;break;case "db": P=1;break;case "rúd": P=1;break;case "ml":P=0;break;case "dl": P=1;break;case "l" :P=2;break;case "liter": P=2;break;case "csipet":P=0;break;case "szem":P=0;break;case "nagy":P=0;break;case "csomag":P=1;break;case "csipetnyi":P=0;break;case "pohár":P=1;break;case "csapott":P=1;break;default:  console.log("Ismeretlen mértékegység : "+RR[1]);}
if (RR[0].indexOf("-")!=-1)
{var vagy=RR[0].split("-");hsor=Math.round(Number(ADAG*Number(vagy[0]))*Math.pow(10,P))/Math.pow(10,P)+"-"+Math.round(Number(ADAG*Number(vagy[1]))*Math.pow(10,P))/Math.pow(10,P);}
else
{hsor=Math.round(Number(ADAG*Number(RR[0]))*Math.pow(10,P))/Math.pow(10,P);}
hsor=hsor+"";hsor=hsor.replace(/0.25$/gi,"negyed");hsor=hsor.replace(/0.5$/gi,"fél");hsor=hsor.replace(/\./gi,",");LD1.innerHTML=hsor+" "+RR[1];ReceptHOZZAVALOK+=hsor+" "+RR[1];var ossz=""+OSSZETEVO[1];ossz=ossz.replace(/\s+$/,"");ossz=ossz.replace(/\,$/,"");ossz=ossz.replace(/\.$/,"");LD2.innerHTML=ossz;ReceptHOZZAVALOK+=" "+ossz+"<br>";LI1.appendChild(LD1);LI1.appendChild(LD2);}
else
{var LD=document.createElement("div");LD.setAttribute("style","width:98%;text-align:left;padding-left:2%;");if (SOR[m].indexOf(":")!=-1)
{LD.innerHTML=SOR[m];LD.style.textAlign="left";LD.style.height="5%";ReceptHOZZAVALOK+="<br>"+SOR[m]+"<br>";LI1.appendChild(LD);} else
{LD1.innerHTML="(ízlés szerint)";LD2.innerHTML=SOR[m];LD.innerHTML=SOR[m];ReceptHOZZAVALOK+="(ízlés szerint) "+SOR[m]+"<br>";LI1.appendChild(LD1);LI1.appendChild(LD2);}
var kpont=SOR[m]+"";kpont=kpont.replace(/\s+$/,"");if (kpont.search(/:$/)!=-1)
{ujsorba=true;LD.style.textDecoration="underline";LD.style.fontWeight="bold";SZEGMENS.appendChild(DIV1);R1OL.appendChild(SZEGMENS);if (DIV1.innerHTML===""){SZEGMENS.style.display="none";}
SZEGMENS=SZEGMENSp.cloneNode(true);DIV1=DIV1p.cloneNode(true);}}
DIV1.appendChild(LI1);if (ujsorba)
{var LIE=document.createElement("div");LIE.setAttribute("style","width:100%;float:left;text-align:left;padding-left:2%;");LIE.innerHTML="&nbsp";ujsorba=false;}}}
SZEGMENS.appendChild(DIV1);R1OL.appendChild(SZEGMENS);var space=document.createElement("div");space.setAttribute("style","display:block;width:100%;height:20%;");R1OL.appendChild(space);}
hideKeyboard(document.getElementById("ADAG"));setTimeout(function(){RM2.refresh();},0);}
function ReceptNum(ID)
{for (var n=0;n<Receptek.length;n++)
{var Recept=Receptek[n].split("|");if (Recept[0]==ID){return n;}}
return -1;}
function ReceptMenu(NR)
{for(var n=1;n<=4;n++)
{document.getElementById("RMENU"+n).className=(n==NR)?"recept_menu selected":"recept_menu";document.getElementById("RECEPT_MEZO"+n).style.display=(n==NR)?"block":"none";if (NR==1){setTimeout(function(){RM1.refresh();},0);}
if (NR==2){setTimeout(function(){RM2.refresh();},0);}
if (NR==3){setTimeout(function(){RM3.refresh();},0);}}}
function Kedvenc(BeKi,ReceptID)
{if (!ReceptID){ReceptID=ReceptMost;} 
var K=window.localStorage.getItem("kedvenc"+ReceptID);if (BeKi){window.localStorage.setItem("kedvenc"+ReceptID, (K==1)?0:1  );K=(K==1)?0:1;document.getElementById("RKEDVENC").src="img/sziv"+K+".png";}
if (K==null){K=0;}
if (BeKi)
{var Kedvenceim=[];for (var n=0;n<Receptek.length;n++)
{var Recept=Receptek[n].split("|");if (window.localStorage.getItem("kedvenc"+Recept[0]) && window.localStorage.getItem("kedvenc"+Recept[0])==="1" ){Kedvenceim.push(Recept[0]);}}
ajax_hivas(SZERVER+'/app_ilekvar/code/top5.php?random='+Math.random()+"&myid="+myID+"&kedvenceim="+JSON.stringify(Kedvenceim)+"&no_analytics=true", 'callback2','top5_data');}
return K;}
function Elozmenyek_beallitas()
{var ELO=document.getElementById("ELOZMENY");var UJ=parseInt(ELO.getAttribute("ertek"));UJ++;if (UJ>ELOZMENYEK.length-1){UJ=0;}
ELO.setAttribute("ertek",UJ);ELO.innerHTML=ELOZMENYEK[UJ];Preferences(3,UJ);}
function Elozmenyek_lementes()
{for (var n=0;n<Elozmenyek.length;n++)
{if (Elozmenyek[n][0]==ReceptMost) 
{Elozmenyek[n][0]=0;Elozmenyek[n][1]="";}}
var d=new Date();var EL=Elozmenyek.length;Elozmenyek[EL]=Array();Elozmenyek[EL][0]=ReceptMost;Elozmenyek[EL][1]=d.toDateString();EHistory.splice(0,EHistory.length);HPos=0;for (var m=0;m<Elozmenyek.length;m++)
{var EPos=Elozmenyek.length-m-1;if (Elozmenyek[EPos][0]!=0 && HPos<ElozmenyekMAX-1 )  
{window.localStorage.setItem("lekvar_erecept"+HPos,Elozmenyek[EPos][0]);window.localStorage.setItem("lekvar_edatum"+HPos,Elozmenyek[EPos][1]);EHistory[HPos]=Array();EHistory[HPos][0]=Elozmenyek[EPos][0];EHistory[HPos][1]=Elozmenyek[EPos][1];HPos++;}}}
function Preferences(PrefNR,Ertek)
{var E=window.localStorage.getItem("lekvar_pref"+PrefNR);if (Ertek!=null){window.localStorage.setItem("lekvar_pref"+PrefNR,Ertek);}
if (E==null){E=-1;}
return E;}
function network_status(OnFF){var networkState=navigator.connection.type;var states={};states[Connection.UNKNOWN]='???';states[Connection.ETHERNET]='Vezetékes';states[Connection.WIFI]='WiFi';states[Connection.CELL_2G]='Mobil';states[Connection.CELL_3G]='Mobil';states[Connection.CELL_4G]='Mobil';states[Connection.CELL]='Mobil';states[Connection.NONE]='nincs';if (!OnFF){ return states[networkState];} else
{return (!(states[networkState]==="nincs"));}}
function Megoszt(MODE)
{var MSG_HTML="<html><head><meta http-equiv='Content-Type'  content='text/html charset=UTF-8' /></head>";MSG_HTML+="<body style='font:12px Arial;'>";ReceptLEIRAS=ReceptLEIRAS.replace(/&lt;/g,'<');ReceptLEIRAS=ReceptLEIRAS.replace(/&gt;/g,'>');MSG_HTML+="<h1 style='font:16px Arial;font-weight:bold;text-decoration:underline;'>"+ReceptNEV+"</h1><br>"+"<img src='"+SZERVER+"/app_ilekvar/media/"+ReceptIMG+"'/><br><br>"+ReceptLEIRAS;MSG_HTML+="<br><br><h2 style='font:13px Arial;font-weight:bold;text-decoration:underline;float:left;display:inline;'>Elkészítési idő :</h2>"+ReceptIDO+' perc<br><br>';MSG_HTML+="<h2 style='font:13px Arial;font-weight:bold;text-decoration:underline;'>Hozzávalók ("+ReceptADAG+" "+ReceptME+") : </h2><br>";MSG_HTML+=ReceptHOZZAVALOK+"<br>";MSG_HTML+="</body></html>";MSG_FB="Az én lekvárom - mobiltelefonra és tabletre - Lekvárreceptek kéznél.";switch (MODE)
{case 0:
window.plugins.EmailComposer.showEmailComposerWithCallback(null,"Az én lekvárom : "+ReceptNEV,MSG_HTML,[],[],[],true,[],[]);break;case 1: 
facebookConnectPlugin.getLoginStatus( 
fbLoginSuccess, 
fbLogin
);break;case 2: 
window.plugins.socialsharing.shareViaTwitter('Az én lekvárom :'+ReceptNEV+'\n', SZERVER+'/app_ilekvar/media/'+ReceptIMG, 'http://azenlekvarom.hu');break;}}
function Megoszt2(MODE)
{var MSG_HTML="<html><head><meta http-equiv='Content-Type'  content='text/html charset=UTF-8' /></head>";MSG_HTML+="<body style='font:12px Arial;'>";MSG_HTML+=MSG_TXT;if (MSG_KEP && MODE==0){MSG_HTML+="<img src='"+MSG_KEP+"'/><br><br>";}
MSG_HTML+="</body></html>";var MSG_FB=MSG_TXT;switch (MODE)
{case 0:
window.plugins.EmailComposer.showEmailComposerWithCallback(null,MSG_CIM,MSG_HTML+"<br>- <a href='"+APP_HTTP+"'>Az én lekvárom</a> -",[],[],[],true,[],[]);break;case 1: 
facebookConnectPlugin.getLoginStatus( 
fbLoginSuccess2, 
fbLogin2
);break;case 2: 
window.plugins.socialsharing.shareViaTwitter(MSG_CIM+'\n'+MSG_TXT.replace(/<(?:.|\n)*?>/gm, ''), MSG_IMG, APP_HTTP);break;}}
var fbLogin=function(){facebookConnectPlugin.login(
["public_profile"], 
fbLoginSuccess,
function (error){console.log(""+error);} 
)
};var fbLoginSuccess=function (userData){var options={"method":"share", 
"app_id":"542071045911013",
"name": ReceptNEV,
"link": APP_HTTP,
"caption": APP_NAME+" mobil alkalmazás",
"description" : MSG_FB,
"picture": SZERVER+'/app_ilekvar/media/'+ReceptIMG
};facebookConnectPlugin.showDialog(
options,
function (result){console.log("Posted. "+JSON.stringify(result));},
function (e){console.log("FB Failed: "+e);} 
);};var fbLogin2=function(){facebookConnectPlugin.login(
["public_profile"], 
fbLoginSuccess2,
function (error){console.log(""+error);} 
)
};var fbLoginSuccess2=function (userData){var options={"method":"share", 
"app_id":"542071045911013",
"caption":APP_NAME+" mobil alkalmazás",
"link":APP_HTTP,
"name": MSG_CIM,
"description" : MSG_TXT,
"picture": MSG_IMG
};facebookConnectPlugin.showDialog(
options,
function (result){console.log("Posted. "+JSON.stringify(result));},
function (e){console.log("FB Failed: "+e);} 
);};var oc_timer;window.addEventListener("orientationchange", function(){clearTimeout(oc_timer);var oc_delay=0;if (device && device.platform=="Android"){oc_delay=500;}
oc_timer=setTimeout(OrientationReCalc,oc_delay);}, false);var firstOrientationRecalc=true;function OrientationReCalc()
{
var PORTRAIT=true;if (window.device)
{
if (document.documentElement.clientWidth > document.documentElement.clientHeight ){PORTRAIT=false;}} 
else
{if (document.documentElement.clientWidth > document.documentElement.clientHeight){PORTRAIT=false;} 
}
if (PORTRAIT) 
{if (window.device)     
{sW=document.documentElement.clientWidth;sH=document.documentElement.clientHeight;KepArany=parseFloat(screen.height/screen.width);}
else
{sW=window.innerWidth;sH=window.innerHeight;KepArany=parseFloat(screen.height/screen.width);}
for (var n=1;n<=OldalSzam;n++)
{document.getElementById("Oldal"+n).style.width=sW+"px";document.getElementById("Oldal"+n).style.height=sH+"px";}
ScreenHeight=sH;Szazalek=parseInt(ScreenHeight/100);RHatterH=parseInt(ScreenHeight*0.1216);RCsikH=parseInt(ScreenHeight*0.13);RNevH=parseInt(ScreenHeight*0.036);RNevT=parseInt(ScreenHeight*0.030);RNevT2=parseInt(ScreenHeight*0.015);RNevLH=parseInt(RNevH*0.85);RIdoH=parseInt(ScreenHeight*0.025);RIdoT=parseInt(ScreenHeight*0.075);RIdoT2=parseInt(ScreenHeight*0.080);RCsiH=parseInt(ScreenHeight*0.027);RCsiT=parseInt(ScreenHeight*0.063);RCsiT2=parseInt(ScreenHeight*0.078);}
if (!firstOrientationRecalc){ScrollRefresh();firstOrientationRecalc=false;}}
function ertekeles(NUM)
{DrawErtekeles(NUM);var MODE="&uj=true&id="+ReceptMost+"&diff="+NUM;var KorabbiErtekeles=window.localStorage.getItem("E"+ReceptMost);if (NUM==KorabbiErtekeles){return;} 
if (KorabbiErtekeles!=null){MODE="&uj=false&id="+ReceptMost+"&diff="+parseInt(NUM-KorabbiErtekeles);} 
window.localStorage.setItem("E"+ReceptMost,NUM);callback=function(response){Atlag_update('ATLAG',response);};ajax_hivas(SZERVER+'/app_ilekvar/code/ertekeles.php?random='+Math.random()+MODE, 'callback','ATLAG');}
function ShowErtekeles()
{var KorabbiErtekeles=window.localStorage.getItem("E"+ReceptMost);DrawErtekeles(KorabbiErtekeles);var E=Ertekeles_keres(ReceptMost);var szavazo=0;if (E[1]>0)
{var atlag=E[2].toFixed(1);szavazo=E[1];}
else
{atlag="-";}
document.getElementById("SZAV_ATLAG").innerHTML=atlag;document.getElementById("SZAV_SZAM").innerHTML=szavazo;}
function DrawErtekeles(NUM)
{if (NUM==null){NUM=0;} 
for (var n=1;n<=5;n++)
{document.getElementById("ECS"+n).className=(n<=NUM)?"ecsillag ecs_on":"ecsillag";}}
function Atlag_update(CMEZO,response)
{if (!response){return;} 
obj=eval( response );var szavazat=obj[0]['n'];var szavazo=obj[0]['e'];var atlag=parseFloat(szavazat/szavazo);document.getElementById("SZAV_ATLAG").innerHTML=atlag.toFixed(1);Ertekelesek[ReceptMost]=Array();Ertekelesek[ReceptMost][0]=szavazat;document.getElementById("SZAV_SZAM").innerHTML=szavazo;Ertekelesek[ReceptMost][1]=szavazo;Ertekelesek[ReceptMost][2]=atlag;FreeCallback(CMEZO);}
function Ertekeles_keres(ID)
{if (Ertekelesek[ID])
{return [Ertekelesek[ID][0],Ertekelesek[ID][1],Ertekelesek[ID][2]];}
else
{return [0,0,0];}}
function Ertekeles_letolt()
{callback=function(response){Ertekeles_feldolgoz('ERTEKELESEK',response);};ajax_hivas(SZERVER+'/app_ilekvar/code/ertekelesek.php?random='+Math.random(), 'callback','ERTEKELESEK');}
var PROBA=1;function Ertekeles_feldolgoz(CMEZO,response)
{if (!response){return;} 
obj=eval( response );for (var n=0;n<obj.length;n++)
{var rid=obj[n]['i'];Ertekelesek[rid]=Array();Ertekelesek[rid][0]=obj[n]['n'];Ertekelesek[rid][1]=obj[n]['e'];var atlag=parseFloat(obj[n]['n']/obj[n]['e']);Ertekelesek[rid][2]=atlag;}
ErtekelesOK=true;FreeCallback(CMEZO);}
var SkalaPoz=Array();SkalaPoz[1]=Array (-4,15,34,53,72,91);SkalaPoz[2]=Array (-4,27,58,91);function Skala(NR,NUM)
{var golyo=document.getElementById("GOLYO"+NR);golyo.style.left=SkalaPoz[NR][NUM]+"%";if (NR==1){Kereses_Ido=NUM;}
if (NR==2){Kereses_Fok=NUM;}}
function ScrollRefresh(oldal)
{if (oldal)
{if (oldal==2){setTimeout(function (){PS2.refresh();},100);}
if (oldal==3){setTimeout(function (){PS3.refresh();},100);}
if (oldal==4){setTimeout(function (){PS4.refresh();},100);}
if (oldal==5){setTimeout(function (){PS5.refresh();},100);}
if (oldal==6){setTimeout(function (){PS6.refresh();},100);}
if (oldal==8){setTimeout(function (){PS8.refresh();},100);}
if (oldal==12){setTimeout(function (){PS12.refresh();},100);}
if (oldal==13){setTimeout(function (){PS13.refresh();},100);}}
else
{setTimeout(function () 
{PS2.refresh();PS3.refresh();PS4.refresh();PS6.refresh();PS8.refresh();},100);}}
function Evszak_Init()
{var D=new Date();var HO=parseInt(D.getMonth()+1);var NAP=D.getDate();EVSZAK=EvszakID[EvszakID.length-1];EVSZAKnr=EvszakID.length-1;var keres=true;for (var n=1;n<EvszakID.length; n++)
{var TOL=EvszakD1[n].substr(5,2)+EvszakD1[n].substr(8,2);var IG=EvszakD2[n].substr(5,2)+EvszakD2[n].substr(8,2);var MA=String(String(HO).length>1?HO:'0'+HO)+String(String(NAP).length>1?NAP:'0'+NAP);if (keres)
{if ( TOL<=MA && IG>=MA)
{keres=false;EVSZAK=EvszakID[n];EVSZAKnr=n;}}}}
var VideoPreventDuplicateCall=false;function Video_mutat(YTCODE)
{if (VideoPreventDuplicateCall||!YTCODE){return;}
Oldal(9,0);VideoPreventDuplicateCall=true;document.getElementById("VIDEO").innerHTML='<iframe src="http://youtube.com/embed/'+YTCODE+'?autoplay=1&autohide=1&rel=0&showinfo=0"  frameborder="0" allowfullscreen width="'+document.documentElement.clientWidth+'" height="'+document.documentElement.clientHeight*0.75+'"></iframe>';setTimeout(function(){VideoPreventDuplicateCall=false;},1000);}
function top5(mode)
{var MemItem="";if (mode==1){Oldal(10,0);MemItem="ilekvar_top5_kedvenc";}
if (mode==2){Oldal(11,0);MemItem="ilekvar_top5_bestof";}
var t5=window.localStorage.getItem(MemItem);if (!t5) 
{document.getElementById("NotificationMessage").innerHTML="A funkció használatához internetkapcsolatra van szükség.";document.getElementById("Notification").setAttribute("onclick","this.style.display='none';");document.getElementById("Notification").style.display="block";return;}
var oldal=parseInt(9+mode);var PS=document.getElementById("SCROLLER"+oldal);if (PS){PS.innerHTML="<div id='POROND_TERKOZ"+oldal+"' class='porond_terkoz' style='height:"+parseInt(window.innerHeight*0.0001)+"px'></div>";}
var I=t5.split(",");for (var n=0;n < SorokSzamaMin;n++)
{var D=null;if (I[n]){D=I[n].split("|");}
if (D && D[0]!="0")
{var Recept=Receptek[ReceptNum(D[0])].split("|");Sor(PS,Recept);}
else
{Sor(PS,null);}}
setTimeout(function(){PS10.refresh();},10);setTimeout(function(){PS11.refresh();},10);hideKeyboard(document.getElementById('KERES'));}
function top5_update(ajax_free,response)
{var resp=response.split("|");myID=resp[0];window.localStorage.setItem("ilekvar_myID",myID);t5=JSON.parse(resp[1]);var t5kedvenc="";var t5bestof="";for (n=0;n<10;n++)
{
if (t5[n]["mode"]==="2"){t5kedvenc+=","+t5[n]["recept_id"]+"|"+t5[n]["data"];}
if (t5[n]["mode"]==="1"){t5bestof+=","+t5[n]["recept_id"]+"|"+t5[n]["data"];}}
window.localStorage.setItem("ilekvar_top5_kedvenc", t5kedvenc.substr(1));window.localStorage.setItem("ilekvar_top5_bestof",  t5bestof.substr(1));FreeCallback(ajax_free);}
var reklam_callback;var ReklamStarted=false;function Reklam()
{if (ReklamStarted){return;}
ReklamStarted=true;console.log("Reklam...");Spinner(true);ajax_hivas(SZERVER+'/app_ilekvar/code/reklam.php?random='+Math.random(), 'reklam_callback','ajax_Reklam');callbackTimeout=setInterval(function(){ReklamTimeOut();},1000);reklam_callback=function(Valasz){ReklamPopUp(Valasz,"ajax_Reklam");};}
var RTimeOut=0;function ReklamTimeOut()
{var pontok=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ";document.getElementById("REKLAM_WAIT").innerHTML="Betöltés "+pontok.substr(0,RTimeOut*2);RTimeOut++;if (RTimeOut==12)
{clearInterval(callbackTimeout);callbackTimeout=0;ReklamOFF();console.log("Ajax timeout - Reklám");}}
function ReklamPopUp(Valasz,free_up_script)
{console.log("PopUp");OrientationReCalc();var vanuj=true;if (Valasz==""){vanuj=false;}
else
{console.log("reklam.php response="+Valasz);var V=Valasz.split("|");var NewFile=V[0];var NewFileHash=V[1];var NewFileDatumTol=V[2];var NewFileDatumIg=V[3];var NewLink=V[4];var NewBgColor=V[5];var NewColor=V[6];window.localStorage.setItem("lekvar_Reklam_file_datumtol",NewFileDatumTol);window.localStorage.setItem("lekvar_Reklam_file_datumig",NewFileDatumIg);window.localStorage.setItem("lekvar_Reklam_link",NewLink);window.localStorage.setItem("lekvar_Reklam_bgcolor",NewBgColor);window.localStorage.setItem("lekvar_Reklam_color",NewColor);}
var OldFile=window.localStorage.getItem("lekvar_Reklam_file");var OldFileHash=window.localStorage.getItem("lekvar_Reklam_file_hash");var OldFileDatumTol=window.localStorage.getItem("lekvar_Reklam_file_datumtol");var OldFileDatumIg=window.localStorage.getItem("lekvar_Reklam_file_datumig");var OldLink=window.localStorage.getItem("lekvar_Reklam_link");var OldBgColor=window.localStorage.getItem("lekvar_Reklam_bgcolor");var OldColor=window.localStorage.getItem("lekvar_Reklam_color");var lejart=false;var d=new Date();var most=d.getTime();var d1;var d2;if (OldFile && OldFileHash && OldFileDatumTol && OldFileDatumIg && OldLink)   
{console.log(OldFileHash+"==="+NewFileHash);if (OldFileDatumIg!="")
{var parts=OldFileDatumIg.split('-');od2=new Date(parts[0],parts[1]-1,parts[2]);if (most > od2){lejart=true;}}
if (OldFileHash===NewFileHash){vanuj=false;}}
else 
{lejart=true;}
if (lejart)
{ReklamDelete(OldFile);}
if (vanuj)
{window.localStorage.setItem("lekvar_Reklam_file",ReklamFelbontas(NewFile));window.localStorage.setItem("lekvar_Reklam_file_hash",NewFileHash);window.localStorage.setItem("lekvar_Reklam_file_datumtol",NewFileDatumTol);window.localStorage.setItem("lekvar_Reklam_file_datumig",NewFileDatumIg);window.localStorage.setItem("lekvar_Reklam_link",NewLink);window.localStorage.setItem("lekvar_Reklam_bgcolor",NewBgColor);window.localStorage.setItem("lekvar_Reklam_color",NewColor);console.log("NEWFILE to DOWNLOAD : "+NewFile);ReklamDownload(NewFile);}
if ( lejart && !vanuj)           
{ReklamOFF();Spinner(false);}
if ( !lejart && !vanuj)
{console.log("RÉGI kép megjelenítése: "+OldFile);ShowReklam(OldFile);}
clearTimeout(callbackTimeout);callbackTimeout=0;console.log("Timeout kikapcsolva");FreeCallback(free_up_script);}
function ReklamDelete(fajlnev)
{console.log("Fájl törlése : "+fajlnev);if (!window.device){return;}
window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem;window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) 
{fileSystem.root.getFile(fajl,{create: false}, function(fileEntry)
{fileEntry.remove(function() 
{console.log('File removed.');}, function(error){console.log('Error with remove method:'+error.description);ReklamOFF();});}, function(error){console.log('Error with getFile method:'+error.description);ReklamOFF();});}, function(error){console.log('Error with requestFileSystem method:'+error.description);ReklamOFF();});}
function ReklamFelbontas(fajlnev)
{ftipus="jpg";var KArany=0;var KEP=[ ["low1","med1","hi1"], ["low2","med2","hi2"], ["low3","med3","hi3"] ];if (parseFloat(KepArany) > parseFloat(4/3)){KArany=1;}
if (parseFloat(KepArany) > parseFloat(5/3)){KArany=2;}
var FBont=0;var W=screen.width;var H=screen.height;var fbont=(W>H)?W:H;if (fbont > 500){FBont=1;}
if (fbont > 1000){FBont=2;}
fajlnev=fajlnev+"_"+KEP[KArany][FBont]+"."+ftipus;return fajlnev;}
function Spinner(OnFF)
{if (!window.device){return;} 
if (OnFF){window.plugins.spinnerDialog.show();} else{window.plugins.spinnerDialog.hide();}}
function ReklamDownload(fajl)
{console.log("File "+fajl+" ->");fajl=ReklamFelbontas(fajl);console.log("Download : "+fajl);if (!window.device){ShowReklam(fajl);return;}
window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem;window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) 
{fileSystem.root.getFile(fajl,{create: true, exclusive: false}, function(fileEntry) 
{var localPath=fileEntry.toURL();console.log("Starting download : "+SZERVER+"/app_sutipedia/reklam/"+fajl);console.log("Local path :"+localPath);var remoteFile=encodeURI(SZERVER+"/app_sutipedia/reklam/"+fajl);var fileTransfer=new FileTransfer();fileTransfer.download(remoteFile, localPath, function(newFileEntry) 
{console.log("A fájl letöltése sikeres : "+newFileEntry.toURL());ShowReklam(fajl);},
function(error) 
{console.log('Error with #download method:'+error.description);ReklamOFF();});},
function(error) 
{console.log('Error with #getFile method:'+error.description);ReklamOFF();});},
function(error){console.log('Error with #requestFileSystem method:'+error.description);ReklamOFF();});}
function ShowReklam(fajl)
{document.getElementById("REKLAM_WAIT").style.display="none";setTimeout(function(){document.getElementById("REKLAM").style.display="block";},100);if (window.localStorage.getItem("lekvar_Reklam_link")!="")
{var RT=document.getElementById("REKLAM_TOVABB");RT.style.background=window.localStorage.getItem("lekvar_Reklam_bgcolor");RT.style.color=window.localStorage.getItem("lekvar_Reklam_color");RT.style.display="block";document.getElementById("REKLAMKEP").setAttribute("ontouchstart", "Spinner(true);window.open(\""+window.localStorage.getItem("lekvar_Reklam_link")+"\",\"_system\");setTimeout(function(){Spinner(false);},1000);");}
if (!window.device){document.getElementById("REKLAMKEP").src="img/teszt_reklam.jpg";document.getElementById("REKLAMKEP").style.height="100%";document.getElementById("REKLAM").style.display="block";return;}
console.log("FÁJL megnyitás : "+fajl);window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){fileSystem.root.getFile(fajl,{create: false}, function(fileEntry){console.log("-> "+fileEntry.toURL());document.getElementById("REKLAMKEP").src=fileEntry.toURL();setTimeout(function(){document.getElementById("REKLAM").style.display="block";},0);Spinner(false);console.log("Reklam vege---");}, function(error) 
{console.log("ShowReklam - getFile hiba ("+fajl+") : "+error.description);Spinner(false);ReklamOFF();});}, function(error) 
{console.log("ShowReklam - FS hiba : "+error.description);Spinner(false);ReklamOFF();});}
function ReklamOFF(anim)
{document.getElementById("REKLAM_WAIT").style.display="none";Spinner(false);document.getElementById("REKLAM_TOVABB").style.display="none";if (!anim)
{document.getElementById('Oldal0').style.display="block";document.getElementById('Oldal1').style.display="block";document.getElementById("REKLAM").style.display='none';REKLAM=null;console.log('Reklám OFF');}
else
{document.getElementById('Oldal0').style.display="block";document.getElementById('Oldal1').style.display='block';document.getElementById("REKLAMKEP").removeAttribute("ontouchstart");REKLAM_TIMER=setInterval(function(){SlideLeft();},60);console.log("slide");pos=parseFloat(0);slide=parseFloat(sW / 30 );REKLAM=document.getElementById("REKLAM");}}
var REKLAM_TIMER;var pos;var slide;var REKLAM;function SlideLeft()
{pos -=slide;slide=slide * 1.03;REKLAM.style.left=pos+"px";if (pos <=-1*sW)
{clearInterval(REKLAM_TIMER);REKLAM_TIMER=0;ReklamOFF();}}
function Message_update (free_up,response)
{
UZENETEK=JSON.parse(escapeHtml(response));Refresh_uzenetek();}
function Refresh_uzenetek()
{if (!UZENETEK||UZENETEK==null){return;}
var UnreadNr=0;var ShowNr=0;var PS=document.getElementById("SCROLLER12");PS.innerHTML="";for (var n=Object.keys(UZENETEK).length;n > 0;n--)
{var UJ=false;if (!window.localStorage.getItem("ilekvar_read_"+n)||window.localStorage.getItem("ilekvar_read_"+n).toUpperCase()!==UZENETEK[parseInt(n)].id)
{UJ=true;window.localStorage.removeItem("ilekvar_read_"+n);}
var TOL=new Date (UZENETEK[parseInt(n)].tol);var IG=new Date (UZENETEK[parseInt(n)].ig);var MOST=new Date();if (TOL < MOST && IG > MOST)
{ShowNr++;if (UJ){UnreadNr++;}
var RCSI=document.createElement("div");RCSI.className="recept_csik";RCSI.style.height=RCsikH+"px";RCSI.style.className="recept_csik ures";var RKDO=document.createElement("div");RKDO.className="recept_kisfoto_keret";RKDO.style.height=parseInt(RCsikH*0.82)+"px";RKDO.style.width=parseInt(RCsikH*0.82)+"px";RKDO.style.marginTop=parseInt(RCsikH*0.05)+"px";RKDO.style.border="none";var RKF=document.createElement("img");RKF.className="recept_kisfoto message_ikon";RKF.setAttribute("src",((UJ)?"img/uj.png":"img/nemuj.png"));var RNEV=document.createElement("div");RNEV.className="recept_nev";RNEV.style.fontSize=RNevH+"px";RNEV.style.height=RNevLH+"px";RNEV.style.lineHeight=RNevLH+"px";RNEV.innerHTML=UZENETEK[parseInt(n)].cim;RNEV.style.marginTop=parseInt(RNevT/2)+"px";RCSI.setAttribute("uzenetid",parseInt(n));var RIDO=document.createElement("div");RIDO.className="recept_ido";RIDO.innerHTML=UZENETEK[parseInt(n)].uzenet.replace(/<(?:.|\n)*?>/gm, '');RIDO.style.fontSize=RIdoH+"px";RIDO.style.marginTop=RIdoT+"px";RIDO.style.whiteSpace="nowrap";RIDO.style.width="60%";RIDO.style.overflow="hidden";RKDO.appendChild(RKF);RCSI.appendChild(RKDO);RCSI.appendChild(RNEV);RCSI.appendChild(RIDO);PS.appendChild(RCSI);Hammer(RCSI).on("tap", function(event){Uzenet_mutat(this.getAttribute("uzenetid"));});Hammer(RCSI,{tap_max_touchtime : 300, tap_max_distance  : 5});}}
window.localStorage.setItem("ilekvar_uzenetek",JSON.stringify(UZENETEK));var MD=document.getElementById("message");MD.innerHTML=UnreadNr;MD.style.display=(UnreadNr==0?"none":"block");if (ShowNr<SorokSzamaMin)
{for (var m=1;m<=SorokSzamaMin-ShowNr;m++)
{Sor(PS,null);}}
ScrollRefresh(12);}
function escapeHtml(str){if (typeof(str)=="string"){str=str.replace(/&gt;/ig, ">");str=str.replace(/&lt;/ig, "<");str=str.replace(/&#039;/g, "'");str=str.replace(/&quot;/ig, '"');str=str.replace(/&amp;/ig, '&');}
return str;}
function Uzenet_mutat(uzenetid)
{document.getElementById("UNEV").innerHTML=UZENETEK[uzenetid].cim;document.getElementById("UIDO").innerHTML=UZENETEK[uzenetid].ido;var HREF1="";var HREF2="";var KEP="";if (UZENETEK[uzenetid].kep!=""){KEP="<br><img style='width:100%;margin-top:5%;' src='"+UZENETEK[uzenetid].kep+"'/>";};if (UZENETEK[uzenetid].link !==""){HREF1="<a href='"+UZENETEK[uzenetid].link+"' target='_blank'>";HREF2="</a>";}
MSG_CIM=UZENETEK[uzenetid].cim;MSG_TXT=UZENETEK[uzenetid].uzenet;MSG_IMG=SZERVER+"/app_ilekvar/uzenetek/"+UZENETEK[uzenetid].img;MSG_KEP=UZENETEK[uzenetid].kep;var MEGOSZTAS='<div id="MEGOSZTAS" style="margin-bottom:15%;">\
<img id="ShareIkon" class="shareikon"src="img/share.png" ontouchstart=\"Megoszt2(0);\"/>\
<img id="FacebookIkon2" class="shareikon"src="img/facebook.png"ontouchstart=\"Megoszt2(1);\"/>\
<img id="TwitterIkon2"class="shareikon"src="img/twitter.png"ontouchstart=\"Megoszt2(2);\"/>\
</div>';document.getElementById("SCROLLER13").innerHTML=HREF1+UZENETEK[uzenetid].uzenet+KEP+HREF2+MEGOSZTAS;window.localStorage.setItem("ilekvar_read_"+uzenetid,UZENETEK[uzenetid].id.toLowerCase());Oldal(13,0);Refresh_uzenetek();ScrollRefresh(13);}
function Uzenet_delete_show(uzenetid)
{document.getElementById("UDEL"+uzenetid).style.display="block";}

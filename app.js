(function(){
var KEY='polaris-deni-v1';
var OWNER='254759610468';
var T={
sw:{tag:'Daftari la deni na vitabu vya duka, bila malipo',setupQ:'Duka lako linaitwaje?',shopPh:'Mfano: Duka la Mama Njeri',start:'Anza',demo:'Ona mfano kwanza',
total:'Jumla ya deni',deni:'Deni',close:'Funga siku',books:'Vitabu',sell:'Rekodi mauzo',tNew:'Deni mpya leo',tPaid:'Imelipwa leo',join:'Jiunge na Polaris',joined:'Umejiunga',settings:'Mipangilio',back:'← Rudi',
customers:'Wateja',newCust:'Mteja mpya',noCust:'Bado hakuna mteja. Ongeza wa kwanza.',name:'Jina la mteja',phone:'Namba ya WhatsApp',phonePh:'07…',save:'Hifadhi',
owes:'Anadaiwa',took:'Amechukua',paid:'Amelipa',remind:'Kumbusha kwa WhatsApp',noEnt:'Bado hakuna rekodi.',cleared:'Deni imekwisha',
addPh:'Andika: unga 2x190',add:'Ongeza',addHint:'Andika jina kisha bei. Mfano: "mkate 65", "unga 2x190", "190+65".',noItems:'Bado hakuna bidhaa.',sum:'Jumla',
amount:'Kiasi (KES)',all:'Yote',next:'Endelea',sendWa:'Tuma kwa WhatsApp',msg:'1. Mtumie mteja ujumbe huu',agreed:'Amekubali',waiting:'Inasubiri SAWA',
markOk:'2. Akijibu SAWA, bonyeza hapa',unmark:'Ondoa alama ya SAWA',payment:'Malipo',goods:'bidhaa',cash:'Taslimu',mpesa:'M-Pesa',howPaid:'Amelipaje?',
sale:'Mauzo',saved:'Imehifadhiwa',another:'Rekodi mauzo mengine',pickCust:'Nani amechukua kwa deni?',
receipt:'Risiti (PDF)',stmtPdf:'Taarifa (PDF)',dayPdf:'Taarifa ya siku (PDF)',del:'Futa rekodi hii',delQ:'Futa rekodi hii?',delP:'Haitarudi. Ujumbe wa WhatsApp uliotumwa utabaki.',delYes:'Ndiyo, futa',delCust:'Futa mteja huyu',locked:'Siku imefungwa. Rekodi hii haiwezi kufutwa.',
open:'Pesa ya kuanzia asubuhi',cashNow:'Pesa taslimu uliyohesabu',mpesaNow:'M-Pesa uliyopokea leo',used:'Pesa ilivyotumika leo',sales:'Mauzo ya leo',salesOf:'Mauzo',
formula:'Hakuna mauzo yaliyorekodiwa, kwa hivyo ni hesabu: pesa iliyoingia + iliyotumika + deni mpya − deni iliyolipwa.',
expCash:'Taslimu inayotarajiwa',expMpesa:'M-Pesa inayotarajiwa',balanced:'Sawa',over:'Zaidi',short:'Pungufu',
closedChip:'Imefungwa',openChip:'Haijafungwa',sendSum:'Tuma muhtasari kwa WhatsApp',date:'Chagua tarehe',closedDays:'Siku zilizofungwa',
sSales:'Mauzo',sCash:'Taslimu',sMpesa:'M-Pesa',sDeni:'Kwa deni',sTotal:'Jumla',sCollected:'Deni iliyokusanywa',sNew:'Deni mpya',sClose:'Kufunga',sNone:'Hakuna',sList:'Mauzo yaliyorekodiwa',
dCash:'Tofauti ya taslimu',dMpesa:'Tofauti ya M-Pesa',calcSales:'Mauzo (kwa hesabu)',owedAt:'Jumla ya deni',
joinP:'Ni bure. Tuma ujumbe mmoja, kisha upate habari na vidokezo vya biashara kila wiki.',area:'Eneo la duka',areaPh:'Mfano: Ruiru',joinBtn:'Jiunge kwa WhatsApp',joinNum:'Au tuma ujumbe kwa 0759 610 468.',
lang:'English',shopName:'Jina la duka',reset:'Anza upya',resetQ:'Futa kila kitu kwenye simu hii?',resetP:'Wateja, deni, mauzo na siku zilizofungwa zitafutwa. Ujumbe wa WhatsApp utabaki.',resetYes:'Ndiyo, futa',
keep:'Rekodi ni zako. Hazifutiki hadi uzifute mwenyewe. Zinakaa kwenye simu hii, kwa hivyo hifadhi nakala mara kwa mara.',
backup:'Hifadhi nakala (faili)',restore:'Rudisha nakala kutoka kwa faili',restOk:'Nakala imerudishwa.',restBad:'Faili hili si nakala ya Polaris.',
pdfOk:'Faili limehifadhiwa. Litume kwa WhatsApp kutoka kwa faili zako.',pdfNo:'Haikuwezekana kuhifadhi faili hapa.',
paidChip:'Imelipwa',tickHow:'Ukibonyeza tiki, malipo ni kwa:',editCust:'Badilisha jina au namba',editEnt:'Rekebisha bidhaa',delCustP:'Mteja huyu na rekodi zake zote zitafutwa. Haitarudi.',changed:'Imebadilishwa baada ya kufunga',acct:'Akaunti',aPhone:'Namba yako ya simu',aPin:'PIN ya tarakimu 6',aIn:'Ingia',aUp:'Fungua akaunti mpya',aOut:'Toka kwenye simu hii',aDel:'Futa rekodi zangu za mtandaoni',aAs:'Umeingia kama',aSync:'Hifadhi sasa',cOff:'Hifadhi ya mtandaoni bado haijawashwa. Rekodi zinakaa kwenye simu hii.',cSaved:'Imehifadhiwa mtandaoni.',cFail:'Haikuwezekana kufikia mtandao. Rekodi ziko salama kwenye simu hii; itajaribu tena.',aPriv:'Maduka mengine hayawezi kuona rekodi zako. Msimamizi wa Polaris anaweza kuzifikia kiufundi, na huhifadhi jina la duka, namba na eneo ulilojiandikisha nalo. Ukisahau PIN, wasiliana na 0759 610 468.',aErrPhone:'Weka namba kamili ya simu.',aErrPin:'PIN iwe tarakimu 6 au zaidi.',aConfirm:'Akaunti imeundwa lakini haijawashwa bado. Wasiliana na 0759 610 468.',aHome:'Fungua akaunti ili rekodi zisipotee',resetCloud:'Umeingia kwenye akaunti, kwa hivyo nakala ya mtandaoni pia itafutwa.',aBusy:'Subiri…',cDeleted:'Rekodi za mtandaoni zimefutwa. Zimebaki kwenye simu hii.',aBad:'Namba au PIN si sahihi.',days:'siku',oldDebt:'Deni ya zamani zaidi',proT:'Weka kazi yako online',proLead:'Umeona Polaris inavyookoa muda. Hatua inayofuata ni wateja wapya kukupata mtandaoni.',proEx:'Mifano ya tovuti tunazoweza kukutengenezea',proPlay:'Sikiliza maelezo (sekunde 32)',proStop:'Simamisha',proB1:'Wateja wanakupata kwenye Google',proB2:'Wanaona bidhaa zako na bei',proB3:'Wanakuagiza kwa WhatsApp, hata duka likiwa limefungwa',proAlso:'Pia tunatengeneza wasaidizi wa AI wanaojibu wateja wako saa zote.',proBook:'Weka nafasi sasa',proNum:'Au piga simu: 0759 610 468.',proCard:'Biashara yako online',proCardP:'Tovuti, Google na wasaidizi wa AI kwa biashara yako.',proSee:'Ona',proText:'Siku hizi, mteja anapotaka kitu, anaanza kutafuta kwenye simu yake. Kama biashara yako haiko mtandaoni, hatakuona, na ataenda kwa mwingine. Ukiwa na tovuti yako, wateja wanakupata kwenye Google, wanaona bidhaa zako na bei, na wanakupigia simu au kukuandikia WhatsApp moja kwa moja, hata ukiwa umefunga duka.',mPro:function(s,a){return 'Polaris: nataka kuweka biashara yangu online.\nDuka: '+s+'\nEneo: '+(a||'-')},chT:'Chama ya biashara za Polaris',chLead:'Tunafikiria kuanzisha chama cha biashara zinazotumia Polaris. Bado hakijaanza. Tunauliza kwanza kama ungependa.',chQ1:'Ungependa kuwa mwanachama?',chYes:'Ndiyo',chMaybe:'Labda',chNo:'Hapana',chQ2:'Kipi kingekusaidia zaidi?',chW1:'Kununua bidhaa pamoja kwa bei ya jumla',chW2:'Kutumiana wateja',chW3:'Kuweka akiba pamoja',chW4:'Mafunzo ya biashara',chQ3:'Ada ya mwezi unayoona ni sawa',chF0:'Sitalipa',chSend:'Tuma jibu kwa WhatsApp',chThanks:'Asante. Jibu lako limerekodiwa.',chCard:'Swali moja kwako',chCardP:'Ungependa chama cha biashara za Polaris?',chAns:'Jibu',chPick:'Chagua jibu la swali la kwanza.',mCh:function(s,a,w,f){return 'Polaris chama.\nDuka: '+s+'\nNingependa kujiunga: '+a+'\nKinachonisaidia zaidi: '+(w||'-')+'\nAda ya mwezi: '+(f||'-')},s1:'Mteja amenunua',s1p:'Rekodi mauzo ya taslimu, M-Pesa au deni',s2:'Deni za wateja',s2p:'Ona nani anadaiwa, weka tiki akilipa',s3:'Funga siku',s3p:'Jioni: linganisha pesa na rekodi',s3d:'Imefungwa leo. Bonyeza kuona taarifa',s4:'Vitabu',s4p:'Taarifa ya siku yoyote, na PDF',st1:'Mchana: rekodi mauzo na deni.',st2:'Mteja wa deni anapata ujumbe wa WhatsApp.',st3:'Jioni: funga siku, uone hesabu.',bq:'Mteja amenunua nini?',nq:'Mteja ni nani?',qOpen:'1. Asubuhi ulianza na pesa ngapi?',qCash:'2. Sasa una taslimu ngapi mkononi?',qMpesa:'3. M-Pesa imeingia ngapi leo?',qUsed:'4. Umetumia pesa ngapi leo?',qTake:function(n){return n+' amechukua nini?'},qPay:function(n){return n+' amelipa kiasi gani?'},delDay:'Futa rekodi zote za siku hii',delDayP:'Mauzo, deni, malipo na kufunga kwa siku hii vitafutwa. Haitarudi.',demoB:'Huu ni mfano.',demoC:'Futa, anza na duka lako',errAmt:'Weka kiasi kikubwa kuliko sifuri.',errName:'Weka jina.',errLine:'Weka bei mwishoni. Mfano: mkate 65',errEmpty:'Ongeza bidhaa angalau moja.',
rTake:'Risiti ya deni',rPay:'Risiti ya malipo',rSale:'Risiti ya mauzo',rDay:'Taarifa ya siku',rCust:'Taarifa ya mteja',customer:'Mteja',balance:'Deni sasa',status:'Hali',method:'Njia ya malipo',
mTake:function(s,l,a,b){return '*'+s+'*\nUmechukua:\n'+l+'\nJumla: KES '+a+'\nDeni yako sasa ni KES '+b+'.\nJibu SAWA kukubali.\n\n_Polaris · daftari la deni, bila malipo_\n'+APP_URL},
mPay:function(s,a,b,m){return '*'+s+'*\nUmelipa KES '+a+' ('+m+'). Asante.\n'+(b==='0'?'Deni yako imekwisha.':'Deni yako sasa ni KES '+b+'.')+'\nJibu SAWA kukubali.\n\n_Polaris · daftari la deni, bila malipo_\n'+APP_URL},
mRem:function(s,n,b){return '*'+s+'*\nHabari '+n+'. Kumbusho: deni yako ni KES '+b+'. Asante.'},
inv:'Alika duka lingine',invP:'Tuma Polaris kwa mwenye duka mwingine unayemjua.',invN:'Maduka uliyoleta',invF:'Mwanachama mwanzilishi',invBy:'Nani alikualika? Namba yake ya simu (si lazima)',mInv:function(){return 'Polaris: daftari la deni bure kwa duka lako. Rekodi deni, tuma kumbusho kwa WhatsApp, funga siku jioni. Pakua hapa:\n'+APP_URL},mJoin:function(s,a){return 'Polaris: nataka kujiunga.\nDuka: '+s+'\nEneo: '+(a||'-')}},
en:{tag:'The free debt book and shop books',setupQ:'What is your shop called?',shopPh:'Example: Mama Njeri Shop',start:'Start',demo:'See an example first',
total:'Total owed to you',deni:'Debts',close:'Close the day',books:'Books',sell:'Record a sale',tNew:'New debt today',tPaid:'Paid back today',join:'Join Polaris',joined:'You have joined',settings:'Settings',back:'← Back',
customers:'Customers',newCust:'New customer',noCust:'No customers yet. Add the first one.',name:'Customer name',phone:'WhatsApp number',phonePh:'07…',save:'Save',
owes:'Owes',took:'Took goods',paid:'Paid',remind:'Remind on WhatsApp',noEnt:'No records yet.',cleared:'Debt cleared',
addPh:'Type: flour 2x190',add:'Add',addHint:'Type the name, then the price. Example: "bread 65", "flour 2x190", "190+65".',noItems:'No items yet.',sum:'Total',
amount:'Amount (KES)',all:'All',next:'Continue',sendWa:'Send on WhatsApp',msg:'1. Send the customer this message',agreed:'Agreed',waiting:'Waiting for SAWA',
markOk:'2. When they reply SAWA, tap here',unmark:'Remove the SAWA mark',payment:'Payment',goods:'goods',cash:'Cash',mpesa:'M-Pesa',howPaid:'How did they pay?',
sale:'Sale',saved:'Saved',another:'Record another sale',pickCust:'Who took this on credit?',
receipt:'Receipt (PDF)',stmtPdf:'Statement (PDF)',dayPdf:'Day statement (PDF)',del:'Delete this record',delQ:'Delete this record?',delP:'It will not come back. WhatsApp messages already sent stay.',delYes:'Yes, delete',delCust:'Delete this customer',locked:'The day is closed. This record cannot be deleted.',
open:'Cash at opening',cashNow:'Cash you counted',mpesaNow:'M-Pesa received today',used:'Money used today',sales:'Sales today',salesOf:'Sales',
formula:'No sales were recorded, so this is worked out: money in + money used + new debt − debt paid back.',
expCash:'Cash expected',expMpesa:'M-Pesa expected',balanced:'Balanced',over:'Over',short:'Short',
closedChip:'Closed',openChip:'Not closed',sendSum:'Send summary on WhatsApp',date:'Pick a date',closedDays:'Closed days',
sSales:'Sales',sCash:'Cash',sMpesa:'M-Pesa',sDeni:'On credit',sTotal:'Total',sCollected:'Debt collected',sNew:'New debt',sClose:'Closing',sNone:'None',sList:'Recorded sales',
dCash:'Cash difference',dMpesa:'M-Pesa difference',calcSales:'Sales (worked out)',owedAt:'Total owed',
joinP:'It is free. Send one message, then get business news and tips every week.',area:'Shop area',areaPh:'Example: Ruiru',joinBtn:'Join on WhatsApp',joinNum:'Or send a message to 0759 610 468.',
lang:'Kiswahili',shopName:'Shop name',reset:'Start over',resetQ:'Delete everything on this phone?',resetP:'Customers, debts, sales and closed days will be deleted. Your WhatsApp messages stay.',resetYes:'Yes, delete',
keep:'The records are yours. Nothing is removed unless you delete it. They live on this phone, so save a backup often.',
backup:'Save a backup (file)',restore:'Restore from a backup file',restOk:'Backup restored.',restBad:'This file is not a Polaris backup.',
pdfOk:'File saved. Send it on WhatsApp from your files.',pdfNo:'The file could not be saved here.',
paidChip:'Paid',tickHow:'A tick records a payment by:',editCust:'Change name or number',editEnt:'Edit items',delCustP:'This customer and all their records will be deleted. It will not come back.',changed:'Changed after closing',acct:'Account',aPhone:'Your phone number',aPin:'6-digit PIN',aIn:'Sign in',aUp:'Create a new account',aOut:'Sign out on this phone',aDel:'Delete my online records',aAs:'Signed in as',aSync:'Save now',cOff:'Online storage is not switched on yet. Records stay on this phone.',cSaved:'Saved online.',cFail:'Could not reach the network. Your records are safe on this phone; it will try again.',aPriv:'Other shops cannot see your records. The Polaris administrator can technically reach them, and keeps the shop name, number and area you signed up with. If you forget your PIN, contact 0759 610 468.',aErrPhone:'Enter the full phone number.',aErrPin:'The PIN needs 6 digits or more.',aConfirm:'The account was created but is not active yet. Contact 0759 610 468.',aHome:'Create an account so records are never lost',resetCloud:'You are signed in, so the online copy will be deleted too.',aBusy:'Please wait…',cDeleted:'Online records deleted. They remain on this phone.',aBad:'Wrong number or PIN.',days:'days',oldDebt:'Oldest unpaid debt',proT:'Put your work online',proLead:'You have seen Polaris save you time. The next step is new customers finding you online.',proEx:'Examples of websites we can build for you',proPlay:'Listen to the explanation (32 seconds, Swahili)',proStop:'Stop',proB1:'Customers find you on Google',proB2:'They see your products and prices',proB3:'They order on WhatsApp, even when the shop is closed',proAlso:'We also build AI assistants that answer your customers at any hour.',proBook:'Book now',proNum:'Or call: 0759 610 468.',proCard:'Your business online',proCardP:'A website, Google and AI assistants for your business.',proSee:'See',proText:'These days, when a customer wants something, they start by searching on their phone. If your business is not online, they will not see you, and they will go to someone else. With your own website, customers find you on Google, see your products and prices, and call or message you on WhatsApp directly, even when your shop is closed.',mPro:function(s,a){return 'Polaris: I want to put my business online.\nShop: '+s+'\nArea: '+(a||'-')},chT:'A chama for Polaris businesses',chLead:'We are thinking of starting a members group for businesses that use Polaris. It has not started. We are asking first whether you would want it.',chQ1:'Would you want to be a member?',chYes:'Yes',chMaybe:'Maybe',chNo:'No',chQ2:'What would help you most?',chW1:'Buying stock together at wholesale prices',chW2:'Sending each other customers',chW3:'Saving together',chW4:'Business training',chQ3:'A monthly fee you think is fair',chF0:'I would not pay',chSend:'Send my answer on WhatsApp',chThanks:'Thank you. Your answer is recorded.',chCard:'One question for you',chCardP:'Would you want a chama for Polaris businesses?',chAns:'Answer',chPick:'Choose an answer to the first question.',mCh:function(s,a,w,f){return 'Polaris chama.\nShop: '+s+'\nI would join: '+a+'\nWhat helps me most: '+(w||'-')+'\nMonthly fee: '+(f||'-')},s1:'A customer bought',s1p:'Record a sale by cash, M-Pesa or credit',s2:'Customer debts',s2p:'See who owes you, tick when they pay',s3:'Close the day',s3p:'Evening: check your money against the records',s3d:'Closed today. Tap to see the statement',s4:'Books',s4p:'The statement for any day, and PDFs',st1:'During the day: record sales and debts.',st2:'A customer on credit gets a WhatsApp message.',st3:'In the evening: close the day and see the numbers.',bq:'What did the customer buy?',nq:'Who is the customer?',qOpen:'1. How much cash did you start with?',qCash:'2. How much cash do you have now?',qMpesa:'3. How much M-Pesa came in today?',qUsed:'4. How much money did you use today?',qTake:function(n){return 'What did '+n+' take?'},qPay:function(n){return 'How much did '+n+' pay?'},delDay:'Delete all records for this day',delDayP:'Sales, debts, payments and the close for this day will be deleted. It will not come back.',demoB:'This is an example.',demoC:'Clear it, start with your shop',errAmt:'Enter an amount above zero.',errName:'Enter a name.',errLine:'Put the price at the end. Example: bread 65',errEmpty:'Add at least one item.',
rTake:'Credit receipt',rPay:'Payment receipt',rSale:'Sales receipt',rDay:'Day statement',rCust:'Customer statement',customer:'Customer',balance:'Debt now',status:'Status',method:'Paid by',
mTake:function(s,l,a,b){return '*'+s+'*\nYou took:\n'+l+'\nTotal: KES '+a+'\nYour debt is now KES '+b+'.\nReply SAWA to agree.\n\n_Polaris · the free debt book_\n'+APP_URL},
mPay:function(s,a,b,m){return '*'+s+'*\nYou paid KES '+a+' ('+m+'). Thank you.\n'+(b==='0'?'Your debt is cleared.':'Your debt is now KES '+b+'.')+'\nReply SAWA to agree.\n\n_Polaris · the free debt book_\n'+APP_URL},
mRem:function(s,n,b){return '*'+s+'*\nHello '+n+'. Reminder: your debt is KES '+b+'. Thank you.'},
inv:'Invite another shop',invP:'Send Polaris to another shopkeeper you know.',invN:'Shops you brought in',invF:'Founding member',invBy:'Who invited you? Their phone number (optional)',mInv:function(){return 'Polaris: a free debt book for your shop. Record debts, send WhatsApp reminders, close the day each evening. Get it here:\n'+APP_URL},mJoin:function(s,a){return 'Polaris: I want to join.\nShop: '+s+'\nArea: '+(a||'-')}}
};
function blank(){return {shop:'',lang:'sw',screen:'setup',cust:[],ent:[],sales:[],closes:[],draft:{},basket:null,cur:null,curEnt:null,curSale:null,saleFrom:'home',bookDay:null,confirm:null,pend:false,joined:false,demo:false,area:''}}
function adopt(p){var s=blank();for(var k in p)s[k]=p[k];
 ['cust','ent','sales','closes'].forEach(function(k){if(!Array.isArray(s[k]))s[k]=[]});
 s.ent.forEach(function(e){if(!Array.isArray(e.items))e.items=e.type==='take'?[{n:e.item||'',q:1,p:e.amt}]:[];if(e.type==='pay'&&!e.method)e.method='cash'});
 return s}
var CFG=window.POLARIS_CFG||{},sb=null,UID=null,pushT=null,cmsg='';
var APP_URL=(CFG.appUrl)||((typeof location!=='undefined'&&location.origin)?(location.origin+location.pathname):'');
var S=blank();
try{var raw=localStorage.getItem(KEY);if(raw){var p0=JSON.parse(raw);if(p0&&typeof p0==='object')S=adopt(p0)}}catch(e){}
function localSave(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function save(){S.rev=Date.now();localSave();if(UID){clearTimeout(pushT);pushT=setTimeout(push,4000)}}
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(function(){})}catch(e){}
function t(k){return T[S.lang][k]}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function fmt(n){return Math.round(n||0).toLocaleString('en-KE')}
function num(v){var n=parseFloat(String(v==null?'':v).replace(/[^0-9.]/g,''));return isFinite(n)?n:0}
function day(ts){var d=new Date(ts||Date.now());return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
function nice(dk){var a=dk.split('-');return a[2]+'/'+a[1]+'/'+a[0]}
function hm(ts){var d=new Date(ts);return ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function phone(p){var d=String(p||'').replace(/\D/g,'');if(!d)return '';if(d.indexOf('254')===0)return d;if(d.charAt(0)==='0')return '254'+d.slice(1);if(d.length===9)return '254'+d;return d}
function wa(p,text){return 'https://wa.me/'+phone(p)+'?text='+encodeURIComponent(text)}
function sgn(e){return e.type==='take'?e.amt:-e.amt}
function bal(cid){var b=0;S.ent.forEach(function(e){if(e.cid===cid)b+=sgn(e)});return b}
function total(){var b=0;S.ent.forEach(function(e){b+=sgn(e)});return b}
function rebal(cid){var b=0;S.ent.filter(function(e){return e.cid===cid}).sort(function(a,c){return a.ts-c.ts}).forEach(function(e){b+=sgn(e);e.balAfter=b})}
function openMap(cid){var u=0,m={};S.ent.forEach(function(e){if(e.cid===cid&&e.type==='pay'&&!e.forId)u+=e.amt});
 S.ent.filter(function(e){return e.cid===cid&&e.type==='take'&&!linked(e.id)}).sort(function(a,b){return a.ts-b.ts}).forEach(function(e){if(u>=e.amt){u-=e.amt}else{m[e.id]=e.amt-u;u=0}});return m}
function age(ts){var a=new Date();a.setHours(0,0,0,0);var b=new Date(ts);b.setHours(0,0,0,0);return Math.round((a-b)/86400000)}
function oldestAge(cid){var m=openMap(cid),o=-1;S.ent.forEach(function(e){if(m[e.id]!=null){var g=age(e.ts);if(g>o)o=g}});return o}
function cust(id){for(var i=0;i<S.cust.length;i++)if(S.cust[i].id===id)return S.cust[i];return null}
function cname(id){var c=cust(id);return c?c.name:'?'}
function ent(id){for(var i=0;i<S.ent.length;i++)if(S.ent[i].id===id)return S.ent[i];return null}
function sale(id){for(var i=0;i<S.sales.length;i++)if(S.sales[i].id===id)return S.sales[i];return null}
function closeOf(dk){for(var i=0;i<S.closes.length;i++)if(S.closes[i].day===dk)return S.closes[i];return null}
function canDel(ts){return true}
function touch(ts){var c=closeOf(day(ts));if(c)c.changed=true}
function linked(id){for(var i=0;i<S.ent.length;i++)if(S.ent[i].type==='pay'&&S.ent[i].forId===id)return S.ent[i];return null}
function mlabel(m){return m==='mpesa'?t('mpesa'):t('cash')}
function isum(items){var s=0;(items||[]).forEach(function(i){s+=i.q*i.p});return s}
function iline(i){return (i.n||t('goods'))+(i.q!==1?' '+i.q+' x '+fmt(i.p):'')}
function ilines(items){return (items||[]).map(function(i){return '- '+iline(i)+' = '+fmt(i.q*i.p)}).join('\n')}
function parseLine(str){str=String(str||'').replace(/(\d),(?=\d{3})/g,'$1').trim();
 var m=str.match(/(\d+(?:\.\d+)?(?:\s*[x×*+]\s*\d+(?:\.\d+)?)*)\s*$/i);if(!m)return null;
 var name=str.slice(0,m.index).trim(),terms=m[1].split('+'),q=1,p=0;
 if(terms.length===1){var f=terms[0].split(/[x×*]/i).map(parseFloat);if(f.length===2){q=f[0];p=f[1]}else{p=f.reduce(function(a,b){return a*b},1)}}
 else{terms.forEach(function(tm){p+=tm.split(/[x×*]/i).map(parseFloat).reduce(function(a,b){return a*b},1)})}
 if(!(q*p>0))return null;return {n:name,q:q,p:p}}
function agg(dk){var a={cash:0,mpesa:0,deni:0,payCash:0,payMpesa:0,takes:[],pays:[],sales:[]};
 S.sales.forEach(function(s){if(day(s.ts)===dk){a.sales.push(s);a[s.method==='mpesa'?'mpesa':'cash']+=s.amt}});
 S.ent.forEach(function(e){if(day(e.ts)!==dk)return;if(e.type==='take'){a.takes.push(e);a.deni+=e.amt}else{a.pays.push(e);if(e.method==='mpesa')a.payMpesa+=e.amt;else a.payCash+=e.amt}});
 a.paid=a.payCash+a.payMpesa;a.rec=a.sales.length>0;return a}
function calc(d,a){var o=num(d.open),c=num(d.cash),m=num(d.mpesa),u=num(d.used),r={open:o,cash:c,mpesa:m,used:u,rec:a.rec};
 if(a.rec){r.sales=a.cash+a.mpesa+a.deni;r.expCash=o+a.cash+a.payCash-u;r.expMpesa=a.mpesa+a.payMpesa;r.dCash=c-r.expCash;r.dMpesa=m-r.expMpesa}
 else{r.sales=(c-o)+m+u+a.deni-a.paid}
 return r}
function dchip(v){return '<span class="chip '+(v===0?'ok':'wait')+'">'+(v===0?t('balanced'):(v>0?t('over'):t('short'))+' '+fmt(Math.abs(v)))+'</span>'}
function dtext(v){return v===0?t('balanced'):(v>0?t('over'):t('short'))+' '+fmt(Math.abs(v))}
function entMsg(e){var b=fmt(Math.max(0,e.balAfter));return e.type==='take'?t('mTake')(S.shop,ilines(e.items),fmt(e.amt),b):t('mPay')(S.shop,fmt(e.amt),b,mlabel(e.method))}
function stmt(dk){var a=agg(dk),c=closeOf(dk),r=[];
 r.push({h:t('sSales')});r.push({l:t('sCash'),r:fmt(a.cash)});r.push({l:t('sMpesa'),r:fmt(a.mpesa)});r.push({l:t('sDeni'),r:fmt(a.deni)});
 r.push({l:(c&&!c.rec)?t('calcSales'):t('sTotal'),r:fmt((c&&!c.rec)?c.sales:a.cash+a.mpesa+a.deni),b:1});
 r.push({h:t('sCollected')});if(!a.pays.length)r.push({l:t('sNone'),r:'0'});
 a.pays.forEach(function(e){r.push({l:cname(e.cid)+' · '+mlabel(e.method),r:fmt(e.amt)})});if(a.pays.length)r.push({l:t('sTotal'),r:fmt(a.paid),b:1});
 r.push({h:t('sNew')});if(!a.takes.length)r.push({l:t('sNone'),r:'0'});
 a.takes.forEach(function(e){r.push({l:cname(e.cid),r:fmt(e.amt)})});if(a.takes.length)r.push({l:t('sTotal'),r:fmt(a.deni),b:1});
 if(c){r.push({h:t('sClose')});r.push({l:t('open'),r:fmt(c.open)});r.push({l:t('cashNow'),r:fmt(c.cash)});r.push({l:t('mpesaNow'),r:fmt(c.mpesa)});r.push({l:t('used'),r:fmt(c.used)});
  if(c.rec){r.push({l:t('dCash'),r:dtext(c.dCash)});r.push({l:t('dMpesa'),r:dtext(c.dMpesa)})}
  r.push({l:t('owedAt'),r:fmt(c.total),b:1})}
 return r}
function rowsHtml(rows){return rows.map(function(x){return x.h?'<h2>'+esc(x.h)+'</h2>':'<div class="kv'+(x.b?' t':'')+'"><span>'+esc(x.l)+'</span><b>'+esc(x.r)+'</b></div>'}).join('')}
function rowsText(rows){return rows.map(function(x){return x.h?'\n*'+x.h+'*':x.l+': '+x.r}).join('\n')}

/* files */
function note(k){var e=document.getElementById('note');if(e)e.textContent=k?t(k):''}
function saveFile(filename,data){
 var use=window.claude&&window.claude.use?window.claude.use('downloads'):Promise.resolve(null);
 return use.then(function(d){
  if(d)return d.save({filename:filename,data:data}).then(function(){note('pdfOk')});
  var mime=/\.pdf$/.test(filename)?'application/pdf':'application/json';var blob=data instanceof Blob?data:new Blob([data],{type:mime});
  try{var f=new File([blob],filename,{type:mime});if(navigator.canShare&&navigator.canShare({files:[f]}))return navigator.share({files:[f],title:filename}).then(function(){note('')},function(){})}catch(e){}
  var u=URL.createObjectURL(blob);var a=document.createElement('a');a.href=u;a.download=filename;document.body.appendChild(a);a.click();a.remove();note('pdfOk');
 }).catch(function(e){if(e&&e.code==='declined')return;note('pdfNo')})}
function pdf(title,sub,rows,filename){
 if(!(window.jspdf&&window.jspdf.jsPDF)){note('pdfNo');return}
 var doc=new window.jspdf.jsPDF({unit:'mm',format:'a5'}),W=148,M=14,y=18;
 function clean(s){return String(s).replace(/−/g,'-').replace(/[^\x20-\xFF]/g,'?')}
 function page(){if(y>194){doc.addPage();y=18}}
 doc.setFont('helvetica','bold');doc.setFontSize(16);doc.text(clean(S.shop),M,y);y+=7;
 doc.setFontSize(11);doc.text(clean(title),M,y);y+=5.5;
 doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(110);doc.text(clean(sub),M,y);y+=4;doc.setTextColor(0);
 doc.setDrawColor(180);doc.line(M,y,W-M,y);y+=7;
 rows.forEach(function(x){page();
  if(x.h){y+=2;doc.setFont('helvetica','bold');doc.setFontSize(9);doc.setTextColor(110);doc.text(clean(x.h).toUpperCase(),M,y);doc.setTextColor(0);y+=6;return}
  doc.setFont('helvetica',x.b?'bold':'normal');doc.setFontSize(10.5);
  var parts=doc.splitTextToSize(clean(x.l),W-2*M-36);doc.text(parts,M,y);doc.text(clean(x.r),W-M,y,{align:'right'});y+=5.6*parts.length+0.6});
 y+=6;page();doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(130);doc.text('Polaris · '+clean(t('tag')),M,y);
 saveFile(filename,doc.output('arraybuffer'))}
function stamp(ts){return nice(day(ts))+' '+hm(ts)}
function pdfEnt(e){var r=[{l:t('customer'),r:cname(e.cid)}];
 if(e.type==='take'){r.push({h:t('took')});e.items.forEach(function(i){r.push({l:iline(i),r:fmt(i.q*i.p)})});r.push({l:t('sum'),r:'KES '+fmt(e.amt),b:1})}
 else{r.push({l:t('paid'),r:'KES '+fmt(e.amt),b:1});r.push({l:t('method'),r:mlabel(e.method)})}
 r.push({l:t('balance'),r:'KES '+fmt(Math.max(0,e.balAfter)),b:1});r.push({l:t('status'),r:e.ok?t('agreed'):t('waiting')});
 pdf(e.type==='take'?t('rTake'):t('rPay'),stamp(e.ts),r,'Polaris-risiti-'+day(e.ts)+'.pdf')}
function pdfSale(s){var r=[{h:t('sale')}];s.items.forEach(function(i){r.push({l:iline(i),r:fmt(i.q*i.p)})});r.push({l:t('sum'),r:'KES '+fmt(s.amt),b:1});r.push({l:t('method'),r:mlabel(s.method)});
 pdf(t('rSale'),stamp(s.ts),r,'Polaris-mauzo-'+day(s.ts)+'.pdf')}
function pdfCust(c){var r=[{h:c.name+(c.phone?' · '+c.phone:'')}];
 S.ent.filter(function(e){return e.cid===c.id}).sort(function(a,b){return a.ts-b.ts}).forEach(function(e){
  r.push({l:nice(day(e.ts))+'  '+(e.type==='take'?e.items.map(iline).join(', '):t('payment')+' ('+mlabel(e.method)+')'),r:(e.type==='take'?'+':'-')+fmt(e.amt)})});
 r.push({l:t('balance'),r:'KES '+fmt(bal(c.id)),b:1});pdf(t('rCust'),stamp(Date.now()),r,'Polaris-taarifa-'+day()+'.pdf')}

var BACK={customers:'home',customer:'customers',editCust:'customer',pick:'basket',pay:'customer',send:'customer',close:'home',books:'home',join:'home',pro:'home',chama:'home',settings:'home',reset:'settings',account:'settings'};
function backTo(){var s=S.screen;if(s==='newCust')return S.pend?'pick':'customers';if(s==='basket')return S.basket&&S.basket.editId?'send':S.basket&&S.basket.ctx==='take'?'customer':'home';
 if(s==='sale')return S.saleFrom||'home';if(s==='confirm')return (S.confirm&&S.confirm.back)||'home';return BACK[s]||'home'}
function go(s){S.screen=s;save();render();window.scrollTo(0,0)}
function bar(title){return '<div class="bar"><button class="back" data-act="back">'+t('back')+'</button><div class="brand">POLARIS<i>*</i></div></div>'+(title?'<h1>'+esc(title)+'</h1>':'')}
function field(id,label,val,ph,isNum,type){return '<label for="'+id+'">'+esc(label)+'<input id="'+id+'" '+(type?'type="'+type+'" ':'')+(isNum?'class="num" inputmode="decimal"':'')+' value="'+esc(val==null?'':val)+'" placeholder="'+esc(ph||'')+'" autocomplete="off"></label>'}
function chips(cur,opts){return '<div class="chips">'+opts.map(function(o){return '<button data-act="method" data-m="'+o[0]+'" class="'+(cur===o[0]?'on':'')+'">'+esc(o[1])+'</button>'}).join('')+'</div>'}
function itemRows(items,removable){return items.map(function(i,ix){return '<div class="item"><span class="l">'+esc(i.n||t('goods'))+(i.q!==1?'<span>'+i.q+' × '+fmt(i.p)+'</span>':'')+'</span><span style="display:flex;align-items:center;gap:10px"><span class="r">'+fmt(i.q*i.p)+'</span>'+(removable?'<button class="x" data-act="rm" data-ix="'+ix+'" aria-label="remove">×</button>':'')+'</span></div>'}).join('')}

var V={};
V.setup=function(){return '<div class="bar"><div class="brand">POLARIS<i>*</i></div><button class="back" data-act="lang">'+t('lang')+'</button></div>'+
 '<p class="sub">'+t('tag')+'</p><h1>'+t('setupQ')+'</h1>'+field('f-shop','',S.shop,t('shopPh'))+'<p class="err" id="err"></p>'+
 '<button class="btn primary" data-act="start">'+t('start')+'</button><button class="btn quiet" data-act="demo">'+t('demo')+'</button><ol class="story"><li>'+t('st1')+'</li><li>'+t('st2')+'</li><li>'+t('st3')+'</li></ol><p class="note">'+t('keep')+'</p>'};
V.home=function(){var a=agg(day()),mx=0;S.cust.forEach(function(c){var g=oldestAge(c.id);if(g>mx)mx=g});
 return '<div class="bar"><div class="brand">POLARIS<i>*</i></div><div class="sub">'+esc(S.shop)+'</div></div>'+
 (S.demo?'<div class="banner"><span>'+t('demoB')+'</span><button data-act="wipe">'+t('demoC')+'</button></div>':'')+
 '<div class="panel stack"><div class="big"><small>'+t('total')+'</small>KES '+fmt(total())+'</div>'+
 '<div class="kv"><span>'+t('sales')+'</span><b>'+fmt(a.cash+a.mpesa+a.deni)+'</b></div><div class="kv"><span>'+t('tNew')+'</span><b>'+fmt(a.deni)+'</b></div><div class="kv"><span>'+t('tPaid')+'</span><b>'+fmt(a.paid)+'</b></div>'+(mx>0?'<div class="kv"><span>'+t('oldDebt')+'</span><b>'+t('days')+' '+mx+'</b></div>':'')+'</div>'+
 (function(){var cl=!!closeOf(day()),ev=new Date().getHours()>=17&&(a.sales.length+a.takes.length+a.pays.length)>0,pr=cl?0:ev?3:1;
  function st(n,act,extra,ti,su){return '<button class="step'+(pr===n?' primary':'')+'" data-act="'+act+'"'+extra+'><span class="n">'+n+'</span><span><b>'+ti+'</b><small>'+su+'</small></span></button>'}
  return st(1,'sell','',t('s1'),t('s1p'))+st(2,'go',' data-to="customers"',t('s2')+' · '+S.cust.length,t('s2p'))+st(3,cl?'openBooks':'go',cl?'':' data-to="close"',t('s3')+(cl?' ✓':''),cl?t('s3d'):t('s3p'))+st(4,'openBooks','',t('s4'),t('s4p'))})()+
 (cloudReady()&&!UID?'<button class="btn quiet" data-act="go" data-to="account">'+t('aHome')+'</button>':'')+
 (chAsk()?'<button class="procard" data-act="go" data-to="chama"><span><b>'+t('chCard')+'</b><small>'+t('chCardP')+'</small></span><i>'+t('chAns')+' →</i></button>':proEarned()?'<button class="procard" data-act="go" data-to="pro"><span><b>'+t('proCard')+'</b><small>'+t('proCardP')+'</small></span><i>'+t('proSee')+' →</i></button>':'')+
 '<a class="procard" target="_blank" rel="noopener" href="'+esc('https://wa.me/?text='+encodeURIComponent(t('mInv')()))+'"><span><b>'+t('inv')+'</b><small>'+t('invP')+'</small></span><i>WhatsApp →</i></a>'+
 '<div class="foot"><button class="btn quiet" data-act="go" data-to="join">'+(S.joined?t('joined'):t('join'))+'</button><button class="btn quiet" data-act="go" data-to="settings">'+t('settings')+'</button></div>'};
function custRows(act){return S.cust.slice().sort(function(a,b){return bal(b.id)-bal(a.id)}).map(function(c){var b=bal(c.id),og=oldestAge(c.id),has=S.ent.some(function(e){return e.cid===c.id});
 return '<button class="item" data-act="'+act+'" data-id="'+c.id+'"><span class="l">'+esc(c.name)+'<span>'+esc(c.phone||'')+(og>0?' · '+t('days')+' '+og:'')+'</span></span><span class="r">'+fmt(b)+(b<=0&&has?'<span class="chip ok">'+t('cleared')+'</span>':'')+'</span></button>'}).join('')}
V.customers=function(){var rows=custRows('open');return bar(t('customers'))+'<button class="btn primary" data-act="newCust">'+t('newCust')+'</button>'+(rows?'<div class="list">'+rows+'</div>':'<p class="sub">'+t('noCust')+'</p>')};
V.pick=function(){var rows=custRows('pickCust');return bar(t('pickCust'))+(rows?'<div class="list">'+rows+'</div>':'')+'<button class="btn" data-act="newCust">'+t('newCust')+'</button>'};
V.newCust=function(){return bar(t('nq'))+field('f-name',t('name'),'','')+field('f-phone',t('phone'),'',t('phonePh'),true)+'<p class="err" id="err"></p><button class="btn primary" data-act="addCust">'+t('save')+'</button>'};
V.customer=function(){var c=cust(S.cur);if(!c)return V.customers();var b=bal(c.id);
 var list=S.ent.filter(function(e){return e.cid===c.id}).sort(function(a,b){return b.ts-a.ts});
 var op=openMap(c.id);
 var rows=list.map(function(e){var take=e.type==='take',pd=take&&op[e.id]==null;
  return '<div class="item">'+(take?'<button class="tk'+(pd?' on':'')+'" data-act="tick" data-id="'+e.id+'" aria-label="'+t('paidChip')+'" aria-pressed="'+pd+'">✓</button>':'<span class="tk ghost"></span>')+
  '<button class="rowb" data-act="openEnt" data-id="'+e.id+'"><span class="l">'+esc(take?e.items.map(iline).join(', '):t('payment')+' · '+mlabel(e.method))+'<span>'+nice(day(e.ts))+(take&&!pd&&age(e.ts)>0?' · '+t('days')+' '+age(e.ts):'')+'</span></span>'+
  '<span class="r">'+(take?'+':'−')+fmt(e.amt)+'<span class="chip '+(pd||e.ok?'ok':'wait')+'">'+(pd?t('paidChip'):e.ok?t('agreed'):t('waiting'))+'</span></span></button></div>'}).join('');
 return bar(c.name)+'<div class="panel stack"><div class="big"><small>'+t('owes')+'</small>KES '+fmt(b)+'</div>'+(b<=0&&list.length?'<div><span class="chip ok">'+t('cleared')+'</span></div>':'')+'</div>'+
 '<div class="row2"><button class="btn primary" data-act="take">'+t('took')+'</button><button class="btn" data-act="go" data-to="pay">'+t('paid')+'</button></div>'+
 (b>0?'<a class="btn quiet" target="_blank" rel="noopener" href="'+esc(wa(c.phone,t('mRem')(S.shop,c.name,fmt(b))))+'">'+t('remind')+'</a>':'')+
 (rows?(b>0?'<h2>'+t('tickHow')+'</h2>'+chips(S.draft.pm||'cash',[['cash',t('cash')],['mpesa',t('mpesa')]]):'')+'<div class="list">'+rows+'</div><button class="btn quiet" data-act="pdfCust">'+t('stmtPdf')+'</button><p class="note" id="note"></p>':'<p class="sub">'+t('noEnt')+'</p>')+
 '<div class="row2"><button class="btn quiet" data-act="go" data-to="editCust">'+t('editCust')+'</button><button class="btn quiet" data-act="askDel" data-kind="cust">'+t('delCust')+'</button></div>'};
V.editCust=function(){var c=cust(S.cur);if(!c)return V.customers();return bar(t('editCust'))+field('f-name',t('name'),c.name,'')+field('f-phone',t('phone'),c.phone,t('phonePh'),true)+'<p class="err" id="err"></p><button class="btn primary" data-act="saveCust">'+t('save')+'</button>'};
V.basket=function(){var b=S.basket;if(!b)return V.home();var take=b.ctx==='take',c=cust(S.cur);
 return bar(take&&c?t('qTake')(c.name):t('bq'))+
 '<div class="addrow"><input id="b-in" placeholder="'+esc(t('addPh'))+'" autocomplete="off" enterkeyhint="done"><button class="btn" data-act="addLine">'+t('add')+'</button></div><p class="err" id="err"></p>'+
 (b.items.length?'<div class="list">'+itemRows(b.items,true)+'</div>':'<p class="note">'+t('addHint')+'</p>')+
 '<div class="panel"><div class="big"><small>'+t('sum')+'</small>KES '+fmt(isum(b.items))+'</div></div>'+
 (take?'':'<h2>'+t('howPaid')+'</h2>'+chips(b.method,[['cash',t('cash')],['mpesa',t('mpesa')],['deni',t('deni')]]))+
 '<button class="btn primary" data-act="saveBasket">'+(take||b.method==='deni'?t('next'):t('save'))+'</button>'};
V.pay=function(){var c=cust(S.cur);if(!c)return V.customers();var b=bal(c.id);S.draft.pm=S.draft.pm||'cash';
 return bar(t('qPay')(c.name))+field('f-amt',t('amount'),'','0',true)+(b>0?'<button class="btn" data-act="payAll">'+t('all')+' · KES '+fmt(b)+'</button>':'')+
 '<h2>'+t('howPaid')+'</h2>'+chips(S.draft.pm,[['cash',t('cash')],['mpesa',t('mpesa')]])+'<p class="err" id="err"></p><button class="btn primary" data-act="savePay">'+t('next')+'</button>'};
V.send=function(){var e=ent(S.curEnt);if(!e)return V.customer();var c=cust(e.cid)||{name:'?',phone:''};var m=entMsg(e);
 return bar(c.name)+'<h2>'+t('msg')+'</h2><div class="msg">'+esc(m)+'</div>'+
 '<a class="btn primary" target="_blank" rel="noopener" href="'+esc(wa(c.phone,m))+'">'+t('sendWa')+'</a>'+
 '<button class="btn" data-act="toggleOk">'+(e.ok?t('unmark'):t('markOk'))+'</button><button class="btn quiet" data-act="pdfEnt">'+t('receipt')+'</button>'+
 '<div><span class="chip '+(e.ok?'ok':'wait')+'">'+(e.ok?t('agreed'):t('waiting'))+'</span></div><p class="note" id="note"></p>'+
 (e.type==='take'?'<button class="btn quiet" data-act="editEnt">'+t('editEnt')+'</button>':'')+'<button class="btn quiet" data-act="askDel" data-kind="ent">'+t('del')+'</button>'};
V.sale=function(){var s=sale(S.curSale);if(!s)return V.home();
 return bar(t('sale')+' · '+stamp(s.ts))+'<div class="panel stack"><div class="big"><small>'+mlabel(s.method)+'</small>KES '+fmt(s.amt)+'</div></div><div class="list">'+itemRows(s.items,false)+'</div>'+
 (S.saleFrom==='home'?'<button class="btn primary" data-act="sell">'+t('another')+'</button>':'')+'<button class="btn" data-act="pdfSale">'+t('receipt')+'</button><p class="note" id="note"></p>'+
 (canDel(s.ts)?'<button class="btn quiet" data-act="askDel" data-kind="sale">'+t('del')+'</button>':'<p class="note">'+t('locked')+'</p>')};
V.confirm=function(){var kd=S.confirm&&S.confirm.kind;return bar(kd==='cust'?t('delCust')+'?':kd==='day'?t('delDay')+'?':t('delQ'))+'<p class="sub">'+t(kd==='cust'?'delCustP':kd==='day'?'delDayP':'delP')+'</p><button class="btn primary" data-act="doDel">'+t('delYes')+'</button>'};
function closeOut(){var a=agg(day()),r=calc(S.draft||{},a);
 return '<div class="big"><small>'+t('sales')+'</small>KES '+fmt(r.sales)+'</div>'+
 (r.rec?'<div class="kv"><span>'+t('expCash')+' · '+fmt(r.expCash)+'</span>'+dchip(r.dCash)+'</div><div class="kv"><span>'+t('expMpesa')+' · '+fmt(r.expMpesa)+'</span>'+dchip(r.dMpesa)+'</div>':'<p class="note">'+t('formula')+'</p>')}
V.close=function(){var d=S.draft||{},a=agg(day());
 return bar(t('close'))+'<div class="panel stack" id="closeOut">'+closeOut()+'</div>'+
 '<div class="stack"><div class="kv"><span>'+t('sSales')+' · '+t('sCash')+'</span><b>'+fmt(a.cash)+'</b></div><div class="kv"><span>'+t('sSales')+' · '+t('sMpesa')+'</span><b>'+fmt(a.mpesa)+'</b></div>'+
 '<div class="kv"><span>'+t('tNew')+'</span><b>'+fmt(a.deni)+'</b></div><div class="kv"><span>'+t('tPaid')+'</span><b>'+fmt(a.paid)+'</b></div></div>'+
 field('c-open',t('qOpen'),d.open,'0',true)+field('c-cash',t('qCash'),d.cash,'0',true)+field('c-mpesa',t('qMpesa'),d.mpesa,'0',true)+field('c-used',t('qUsed'),d.used,'0',true)+
 '<button class="btn primary" data-act="saveClose">'+t('close')+'</button>'};
V.books=function(){var dk=S.bookDay||day(),a=agg(dk),c=closeOf(dk),rows=stmt(dk);
 var head=(c&&!c.rec)?c.sales:a.cash+a.mpesa+a.deni;
 var sl=a.sales.slice().sort(function(x,y){return y.ts-x.ts}).map(function(s){return '<button class="item" data-act="openSale" data-id="'+s.id+'"><span class="l">'+esc(s.items.map(iline).join(', '))+'<span>'+hm(s.ts)+' · '+mlabel(s.method)+'</span></span><span class="r">'+fmt(s.amt)+'</span></button>'}).join('');
 var past=S.closes.slice().sort(function(x,y){return x.day<y.day?1:-1}).slice(0,31).map(function(z){return '<button class="item" data-act="bookDay" data-d="'+z.day+'"><span class="l">'+nice(z.day)+'</span><span class="r">'+fmt(z.sales)+'</span></button>'}).join('');
 var text='*'+S.shop+'* · '+nice(dk)+'\n'+rowsText(rows);
 return bar(t('books'))+field('b-date',t('date'),dk,'',false,'date')+
 '<div class="panel stack"><div class="big"><small>'+t('salesOf')+' · '+nice(dk)+'</small>KES '+fmt(head)+'</div><div class="chips"><span class="chip '+(c?'ok':'wait')+'">'+(c?t('closedChip'):t('openChip'))+'</span>'+(c&&c.changed?'<span class="chip wait">'+t('changed')+'</span>':'')+'</div>'+rowsHtml(rows)+'</div>'+
 '<div class="row2"><button class="btn primary" data-act="pdfDay">'+t('dayPdf')+'</button><a class="btn" target="_blank" rel="noopener" href="'+esc('https://wa.me/?text='+encodeURIComponent(text))+'">WhatsApp</a></div><p class="note" id="note"></p>'+
 (sl?'<h2>'+t('sList')+'</h2><div class="list">'+sl+'</div>':'')+((a.sales.length+a.takes.length+a.pays.length>0||c)?'<button class="btn quiet" data-act="askDel" data-kind="day">'+t('delDay')+'</button>':'')+(past?'<h2>'+t('closedDays')+'</h2><div class="list">'+past+'</div>':'')};
V.join=function(){return bar(t('join'))+'<p class="sub">'+t('joinP')+'</p>'+field('f-area',t('area'),S.area,t('areaPh'))+
 '<a class="btn primary" id="joinLink" data-act="joined" target="_blank" rel="noopener" href="'+esc(wa(OWNER,t('mJoin')(S.shop,S.area)))+'">'+t('joinBtn')+'</a><p class="note">'+t('joinNum')+'</p>'};
V.settings=function(){return bar(t('settings'))+field('f-shop',t('shopName'),S.shop,'')+'<button class="btn" data-act="saveShop">'+t('save')+'</button><button class="btn" data-act="lang">'+t('lang')+'</button><button class="btn" data-act="go" data-to="pro">'+t('proCard')+'</button><button class="btn" data-act="go" data-to="chama">'+t('chT')+'</button>'+
 '<button class="btn primary" data-act="go" data-to="account">'+t('acct')+(UID?' ✓':'')+'</button><p class="note">'+t('keep')+'</p><button class="btn" data-act="backup">'+t('backup')+'</button><label for="f-restore">'+t('restore')+'<input type="file" id="f-restore" accept=".json,application/json"></label><p class="note" id="note"></p>'+
 '<button class="btn quiet" data-act="go" data-to="reset">'+t('reset')+'</button>'};
V.reset=function(){return bar(t('resetQ'))+'<p class="sub">'+t('resetP')+(UID?' '+t('resetCloud'):'')+'</p><button class="btn primary" data-act="wipe">'+t('resetYes')+'</button>'};


/* cloud: one private row per account, protected by row-level security */
function cloudReady(){return !!(CFG.url&&CFG.key&&window.supabase&&window.supabase.createClient)}
function acctEmail(p){return phone(p)+'@'+(CFG.idDomain||'polaris.local')}
function cnote(k,raw){cmsg=raw||(k?t(k):'');var e=document.getElementById('cnote');if(e)e.textContent=cmsg}
function register(){if(!sb||!UID)return;var ch=S.chama||{};var sig=[S.shop,S.acct,S.area,ch.ans,ch.want,ch.fee,S.invBy,day()].join('|');if(S.regSig===sig)return;
 sb.from('shops').upsert({user_id:UID,shop_name:S.shop||'',phone:S.acct||'',area:S.area||'',invited_by:S.invBy||'',lang:S.lang,chama_interest:ch.ans||'',chama_want:ch.want||'',chama_fee:ch.fee||'',last_active:new Date().toISOString(),updated_at:new Date().toISOString()}).then(function(r){if(!r.error){S.regSig=sig;localSave()}}).catch(function(){})}
function refreshInvites(){if(!sb||!UID)return;try{sb.rpc('my_invites').then(function(r){if(r&&!r.error&&r.data!=null){var n=(typeof r.data==='number')?r.data:(Array.isArray(r.data)?((r.data[0]&&(r.data[0].count!=null?r.data[0].count:r.data[0].my_invites))||0):0);S.invites=n;localSave();var e=document.getElementById('invc');if(e)e.textContent=n+(n>=3?' · '+t('invF'):'')}}).catch(function(){})}catch(e){}}
function hsh(str){var h=5381;for(var i=0;i<str.length;i++)h=((h<<5)+h+str.charCodeAt(i))|0;return String(h)}
function sigOf(o){var j=JSON.stringify(o);return hsh(j)+':'+j.length}
/* The book is stored as pages: one "meta" page (shop, customers, settings) and one page per month of records.
   Only pages that changed are sent, so a year-old shop does not re-upload its whole history on every sale. */
function pagesOf(){var meta={},k,pg={};for(k in S){if(k!=='ent'&&k!=='sales'&&k!=='closes'&&k!=='sync'&&k!=='syncedRev')meta[k]=S[k]}
 meta=JSON.parse(JSON.stringify(meta));meta.screen='home';meta.confirm=null;meta.basket=null;
 function mo(m){return pg[m]||(pg[m]={ent:[],sales:[],closes:[]})}
 S.ent.forEach(function(e){mo(day(e.ts).slice(0,7)).ent.push(e)});S.sales.forEach(function(e){mo(day(e.ts).slice(0,7)).sales.push(e)});S.closes.forEach(function(c){mo(c.day.slice(0,7)).closes.push(c)});
 Object.keys(S.sync||{}).forEach(function(m){if(m!=='meta'&&!pg[m])pg[m]={ent:[],sales:[],closes:[]}});
 pg.meta=meta;return pg}
function push(){if(!sb||!UID)return Promise.resolve(false);register();var rev=S.rev||0,pg=pagesOf(),rows=[],hs={},now=new Date().toISOString();S.sync=S.sync||{};
 Object.keys(pg).forEach(function(m){hs[m]=sigOf(pg[m]);if(S.sync[m]!==hs[m])rows.push({user_id:UID,page:m,data:pg[m],updated_at:now})});
 if(!rows.length){cnote('cSaved');return Promise.resolve(true)}
 return sb.from('pages').upsert(rows).then(function(r){if(r.error)throw r.error;rows.forEach(function(x){S.sync[x.page]=hs[x.page]});S.syncedRev=rev;localSave();cnote('cSaved');return true}).catch(function(){cnote('cFail');return false})}
function pull(force){return sb.from('pages').select('page,data').eq('user_id',UID).then(function(r){if(r.error)throw r.error;var rows=r.data||[],meta=null,ent=[],sales=[],closes=[];
 rows.forEach(function(x){if(x.page==='meta'){meta=x.data}else if(x.data){ent=ent.concat(x.data.ent||[]);sales=sales.concat(x.data.sales||[]);closes=closes.concat(x.data.closes||[])}});
 if(meta&&(force||(meta.rev||0)>(S.rev||0))){var scr=S.screen,ac=S.acct,d=JSON.parse(JSON.stringify(meta));d.ent=ent;d.sales=sales;d.closes=closes;S=adopt(d);S.acct=S.acct||ac;S.screen=force?'home':scr;S.sync={};S.syncedRev=S.rev;
  var pg=pagesOf();Object.keys(pg).forEach(function(m){S.sync[m]=sigOf(pg[m])});localSave();render();cnote('cSaved')}
 else if(!meta||(S.rev||0)>(meta.rev||0)){return push()}else{cnote('cSaved')}}).catch(function(){cnote('cFail')})}
function initCloud(){if(sb||!cloudReady())return;try{sb=window.supabase.createClient(CFG.url,CFG.key)}catch(e){sb=null;return}
 sb.auth.getSession().then(function(r){var s=r.data&&r.data.session;if(s){UID=s.user.id;render();pull(false);refreshInvites()}else{render()}}).catch(function(){})}
window.addEventListener('online',function(){if(UID&&(S.rev||0)>(S.syncedRev||0))push()});
function authGo(mode){var p=phone(val('a-phone')),pin=val('a-pin');if(p.length<12){err('aErrPhone');return}if(pin.length<6){err('aErrPin');return}
 if(mode==='up'){var ib=phone(val('a-inv'));if(ib&&ib.length>=12){var ibl='0'+ib.slice(3);if(ibl!==('0'+p.slice(3)))S.invBy=ibl}}
 cnote('aBusy');var cred={email:acctEmail(p),password:pin};
 (mode==='up'?sb.auth.signUp(cred):sb.auth.signInWithPassword(cred)).then(function(r){
  if(r.error){cnote(null,mode==='in'?t('aBad'):r.error.message);return}
  var s=r.data&&r.data.session;if(!s){cnote('aConfirm');return}
  UID=s.user.id;S.acct='0'+p.slice(3);localSave();render();refreshInvites();return mode==='up'?push():pull(true)}).catch(function(){cnote('cFail')})}
V.account=function(){var h=bar(t('acct'));
 if(!cloudReady())return h+'<p class="sub">'+t('cOff')+'</p>';
 if(UID)return h+'<div class="panel stack"><div class="kv"><span>'+t('aAs')+'</span><b>'+esc(S.acct||'')+'</b></div><div class="kv"><span>'+t('invN')+'</span><b id="invc">'+(S.invites||0)+((S.invites||0)>=3?' · '+t('invF'):'')+'</b></div><p class="note" id="cnote">'+esc(cmsg)+'</p></div>'+
  '<a class="procard" target="_blank" rel="noopener" href="'+esc('https://wa.me/?text='+encodeURIComponent(t('mInv')()))+'"><span><b>'+t('inv')+'</b><small>'+t('invP')+'</small></span><i>WhatsApp →</i></a>'+
  '<button class="btn primary" data-act="syncNow">'+t('aSync')+'</button><button class="btn" data-act="signOut">'+t('aOut')+'</button><button class="btn quiet" data-act="delCloud">'+t('aDel')+'</button><p class="note">'+t('aPriv')+'</p>';
 return h+field('a-phone',t('aPhone'),'',t('phonePh'),true)+'<label for="a-pin">'+t('aPin')+'<input id="a-pin" class="num" type="password" inputmode="numeric" autocomplete="off"></label>'+field('a-inv',t('invBy'),S.invBy||'',t('phonePh'),true)+'<p class="err" id="err"></p>'+
  '<button class="btn primary" data-act="signIn">'+t('aIn')+'</button><button class="btn" data-act="signUp">'+t('aUp')+'</button><p class="note" id="cnote">'+esc(cmsg)+'</p><p class="note">'+t('aPriv')+'</p>'};


/* the offer: shown once a shop has used Polaris on 3 different days */
var PRO_AUDIO='pro.mp3',proAudio=null,proTimer=null,proPos=0;
function usedDays(){var d={};S.ent.forEach(function(e){d[day(e.ts)]=1});S.sales.forEach(function(e){d[day(e.ts)]=1});S.closes.forEach(function(c){d[c.day]=1});return Object.keys(d).length}
function proEarned(){return S.demo||usedDays()>=3}
function site(k,cls){var m=[
 '<div class="s-hero" style="background:#1F5A3A"><b>Baraka Hardware</b><span>Saruji · Mabati · Rangi</span><i style="background:#F2A20C;color:#221500">Agiza kwa WhatsApp</i></div><div class="s-row"><u></u><u></u><u></u></div>',
 '<div class="s-hero" style="background:#8A2B5B"><b>Zuri Salon</b><span>Nywele · Kucha · Urembo</span><i style="background:#FFE3EF;color:#5A0F37">Weka miadi</i></div><div class="s-chips"><em>9:00</em><em>11:30</em><em>2:00</em><em>4:30</em></div>',
 '<div class="s-hero" style="background:#173F7A"><b>Kwetu Wholesalers</b><span>Bei ya jumla, kila siku</span><i style="background:#FFD34D;color:#221500">Pata bei</i></div><div class="s-list"><p><span>Unga 2kg × 12</span><b>2,150</b></p><p><span>Sukari 1kg × 20</span><b>3,900</b></p></div>'];
 return '<button class="site '+cls+'" data-act="proTurn" data-k="'+k+'" aria-label="'+['Baraka Hardware','Zuri Salon','Kwetu Wholesalers'][k]+'"><div class="s-bar"><s></s><s></s><s></s><q></q></div>'+m[k]+'</button>'}
function stage(){var c=['p0','p1','p2'];return [0,1,2].map(function(k){return site(k,c[(k-proPos+3)%3])}).join('')}
function proSpin(){clearInterval(proTimer);proTimer=null;var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(S.screen!=='pro'||rm)return;
 proTimer=setInterval(function(){var st=document.getElementById('stage');if(!st||S.screen!=='pro'){clearInterval(proTimer);proTimer=null;return}proPos=(proPos+1)%3;st.innerHTML=stage()},3200)}
V.pro=function(){return bar(t('proT'))+'<p class="sub">'+t('proLead')+'</p><div class="stage" id="stage">'+stage()+'</div><p class="note" style="text-align:center">'+t('proEx')+'</p>'+
 '<button class="btn" data-act="proPlay" id="proPlay">▶ '+t('proPlay')+'</button><div class="msg">'+esc(t('proText'))+'</div>'+
 '<div class="list"><div class="item"><span class="l">'+t('proB1')+'</span></div><div class="item"><span class="l">'+t('proB2')+'</span></div><div class="item"><span class="l">'+t('proB3')+'</span></div></div><p class="note">'+t('proAlso')+'</p>'+
 '<a class="btn primary" target="_blank" rel="noopener" href="'+esc(wa(OWNER,t('mPro')(S.shop,S.area)))+'">'+t('proBook')+'</a><p class="note">'+t('proNum')+'</p>'};

/* the chama question: asked once, before anything is built */
function chState(){S.chama=S.chama||{ans:'',want:'',fee:'',sent:false};return S.chama}
function chAsk(){return !chState().sent&&(S.demo||S.ent.length+S.sales.length>0)}
function picks(g,cur,opts){return '<div class="chips">'+opts.map(function(o){return '<button data-act="pick" data-g="'+g+'" data-v="'+o[0]+'" class="'+(cur===o[0]?'on':'')+'" style="flex:1 1 40%">'+esc(o[1])+'</button>'}).join('')+'</div>'}
V.chama=function(){var c=chState(),A={yes:t('chYes'),maybe:t('chMaybe'),no:t('chNo')},W={bulk:t('chW1'),refer:t('chW2'),save:t('chW3'),train:t('chW4')},F={'200':'KES 200','500':'KES 500','1000':'KES 1,000','0':t('chF0')};
 return bar(t('chT'))+'<p class="sub">'+t('chLead')+'</p>'+
 '<h2>'+t('chQ1')+'</h2>'+picks('ans',c.ans,[['yes',A.yes],['maybe',A.maybe],['no',A.no]])+
 '<h2>'+t('chQ2')+'</h2>'+picks('want',c.want,[['bulk',W.bulk],['refer',W.refer],['save',W.save],['train',W.train]])+
 '<h2>'+t('chQ3')+'</h2>'+picks('fee',c.fee,[['200',F['200']],['500',F['500']],['1000',F['1000']],['0',F['0']]])+
 (c.ans?'<a class="btn primary" data-act="chSent" target="_blank" rel="noopener" href="'+esc(wa(OWNER,t('mCh')(S.shop,A[c.ans],W[c.want],F[c.fee])))+'">'+t('chSend')+'</a>':'<p class="err">'+t('chPick')+'</p>')+
 (c.sent?'<p class="note">'+t('chThanks')+'</p>':'')};

var app=document.getElementById('app');
function render(){if(!V[S.screen])S.screen=S.shop?'home':'setup';document.documentElement.lang=S.lang;app.innerHTML=V[S.screen]();proSpin();if(S.screen!=='pro'&&proAudio){try{proAudio.pause()}catch(e){}}}
function err(k){var e=document.getElementById('err');if(e)e.textContent=k?t(k):''}
function val(id){var e=document.getElementById(id);return e?e.value.trim():''}
function addLine(){var v=val('b-in');if(!v)return true;var l=parseLine(v);if(!l){err('errLine');return false}S.basket.items.push(l);save();return true}
function takeFor(cid){var b=S.basket,e=b.editId?ent(b.editId):null;if(e){e.items=b.items;e.amt=isum(b.items);e.ok=false}else{e={id:uid(),cid:cid,type:'take',items:b.items,amt:isum(b.items),ts:Date.now(),ok:false};S.ent.push(e)}rebal(cid);touch(e.ts);S.basket=null;S.pend=false;S.cur=cid;S.curEnt=e.id;go('send')}
function loadDemo(){var now=Date.now(),a=uid(),b=uid()+'b',c=uid()+'c';
 S.shop=S.lang==='sw'?'Duka la Mfano':'Example Shop';S.demo=true;
 S.cust=[{id:a,name:'Wanjiru',phone:'0700000001'},{id:b,name:'Otieno',phone:'0700000002'},{id:c,name:'Mama Brian',phone:'0700000003'}];
 S.ent=[{id:uid()+'1',cid:a,type:'take',items:[{n:'unga 2kg',q:2,p:190}],amt:380,ts:now-86400000*2,ok:true,balAfter:380},
  {id:uid()+'2',cid:a,type:'take',items:[{n:'sukari 1kg',q:1,p:210}],amt:210,ts:now-3600000,ok:false,balAfter:590},
  {id:uid()+'3',cid:b,type:'take',items:[{n:'mafuta 1L',q:1,p:340}],amt:340,ts:now-86400000,ok:true,balAfter:340},
  {id:uid()+'4',cid:b,type:'pay',items:[],method:'mpesa',amt:340,ts:now-7200000,ok:true,balAfter:0},
  {id:uid()+'5',cid:c,type:'take',items:[{n:'maziwa',q:2,p:60},{n:'mkate',q:1,p:65}],amt:185,ts:now-1800000,ok:false,balAfter:185}];
 S.sales=[{id:uid()+'s1',ts:now-5400000,items:[{n:'soda 500ml',q:3,p:60},{n:'mkate',q:1,p:65}],amt:245,method:'cash'},{id:uid()+'s2',ts:now-2400000,items:[{n:'unga 2kg',q:1,p:190}],amt:190,method:'mpesa'}]}

app.addEventListener('click',function(ev){var el=ev.target.closest('[data-act]');if(!el)return;var a=el.getAttribute('data-act'),x,c,e;
 if(a==='back'){go(backTo())}
 else if(a==='go'){go(el.getAttribute('data-to'))}
 else if(a==='lang'){S.lang=S.lang==='sw'?'en':'sw';if(S.screen==='setup')S.shop=val('f-shop');save();render()}
 else if(a==='start'){x=val('f-shop');if(!x){err('errName');return}S.shop=x;go('home')}
 else if(a==='demo'){loadDemo();go('home')}
 else if(a==='wipe'){x=S.lang;S=blank();S.lang=x;go('setup')}
 else if(a==='sell'){S.basket={ctx:'sale',items:[],method:'cash'};S.pend=false;go('basket')}
 else if(a==='take'){S.basket={ctx:'take',items:[],method:'deni'};go('basket')}
 else if(a==='addLine'){if(addLine()){render();x=document.getElementById('b-in');if(x)x.focus()}}
 else if(a==='rm'){S.basket.items.splice(+el.getAttribute('data-ix'),1);save();render()}
 else if(a==='method'){x=el.getAttribute('data-m');if(S.screen==='customer'){S.draft.pm=x;save();render()}else if(S.screen==='pay'){S.draft.pm=x;c=val('f-amt');save();render();document.getElementById('f-amt').value=c}else if(S.basket){if(!addLine())return;S.basket.method=x;save();render()}}
 else if(a==='saveBasket'){if(!addLine())return;if(!S.basket.items.length){render();err('errEmpty');return}
  if(S.basket.ctx==='take'){takeFor(S.cur)}else if(S.basket.method==='deni'){S.pend=true;go('pick')}
  else{x={id:uid(),ts:Date.now(),items:S.basket.items,amt:isum(S.basket.items),method:S.basket.method};S.sales.push(x);touch(x.ts);S.basket=null;S.curSale=x.id;S.saleFrom='home';go('sale')}}
 else if(a==='pickCust'){takeFor(el.getAttribute('data-id'))}
 else if(a==='newCust'){go('newCust')}
 else if(a==='open'){S.cur=el.getAttribute('data-id');go('customer')}
 else if(a==='addCust'){x=val('f-name');if(!x){err('errName');return}c={id:uid(),name:x,phone:val('f-phone')};S.cust.push(c);if(S.pend&&S.basket){takeFor(c.id)}else{S.cur=c.id;go('customer')}}
 else if(a==='payAll'){document.getElementById('f-amt').value=bal(S.cur)}
 else if(a==='savePay'){x=num(val('f-amt'));if(!(x>0)){err('errAmt');return}e={id:uid(),cid:S.cur,type:'pay',items:[],method:S.draft.pm||'cash',amt:x,ts:Date.now(),ok:false};S.ent.push(e);e.balAfter=bal(S.cur);touch(e.ts);S.curEnt=e.id;go('send')}
 else if(a==='tick'){e=ent(el.getAttribute('data-id'));if(e){x=linked(e.id);if(x){S.ent=S.ent.filter(function(z){return z.id!==x.id});touch(x.ts)}else if(openMap(e.cid)[e.id]!=null){x={id:uid(),cid:e.cid,type:'pay',items:[],method:S.draft.pm||'cash',amt:Math.min(openMap(e.cid)[e.id],bal(e.cid)),ts:Date.now(),ok:false,forId:e.id};S.ent.push(x);touch(x.ts)}rebal(e.cid);save();render()}}
 else if(a==='editEnt'){e=ent(S.curEnt);if(e){S.cur=e.cid;S.basket={ctx:'take',method:'deni',editId:e.id,items:e.items.map(function(i){return {n:i.n,q:i.q,p:i.p}})};go('basket')}}
 else if(a==='saveCust'){x=val('f-name');if(!x){err('errName');return}c=cust(S.cur);if(c){c.name=x;c.phone=val('f-phone')}go('customer')}
 else if(a==='openEnt'){S.curEnt=el.getAttribute('data-id');go('send')}
 else if(a==='toggleOk'){e=ent(S.curEnt);if(e){e.ok=!e.ok;save();render()}}
 else if(a==='openSale'){S.curSale=el.getAttribute('data-id');S.saleFrom='books';go('sale')}
 else if(a==='askDel'){S.confirm={kind:el.getAttribute('data-kind'),back:S.screen};go('confirm')}
 else if(a==='doDel'){x=S.confirm||{};
  if(x.kind==='ent'){e=ent(S.curEnt);if(e){S.ent.forEach(function(z){if(z.id===e.id||z.forId===e.id)touch(z.ts)});S.ent=S.ent.filter(function(z){return z.id!==e.id&&z.forId!==e.id});rebal(e.cid)}go('customer')}
  else if(x.kind==='sale'){e=sale(S.curSale);if(e){touch(e.ts);S.sales=S.sales.filter(function(z){return z.id!==e.id})}go(S.saleFrom||'home')}
  else if(x.kind==='day'){c=S.bookDay||day();S.ent=S.ent.filter(function(z){return day(z.ts)!==c});S.sales=S.sales.filter(function(z){return day(z.ts)!==c});S.closes=S.closes.filter(function(z){return z.day!==c});S.cust.forEach(function(z){rebal(z.id)});go('books')}
  else if(x.kind==='cust'){S.ent.forEach(function(z){if(z.cid===S.cur)touch(z.ts)});S.ent=S.ent.filter(function(z){return z.cid!==S.cur});S.cust=S.cust.filter(function(z){return z.id!==S.cur});go('customers')}}
 else if(a==='saveClose'){var ag=agg(day());c=calc(S.draft||{},ag);c.day=day();c.at=Date.now();c.total=total();S.closes=S.closes.filter(function(z){return z.day!==c.day});S.closes.push(c);S.bookDay=c.day;go('books')}
 else if(a==='openBooks'){S.bookDay=day();go('books')}
 else if(a==='bookDay'){S.bookDay=el.getAttribute('data-d');go('books')}
 else if(a==='pdfDay'){x=S.bookDay||day();pdf(t('rDay'),nice(x)+' · '+(closeOf(x)?t('closedChip'):t('openChip')),stmt(x),'Polaris-siku-'+x+'.pdf')}
 else if(a==='pdfEnt'){e=ent(S.curEnt);if(e)pdfEnt(e)}
 else if(a==='pdfSale'){e=sale(S.curSale);if(e)pdfSale(e)}
 else if(a==='pdfCust'){c=cust(S.cur);if(c)pdfCust(c)}
 else if(a==='backup'){saveFile('Polaris-nakala-'+day()+'.json',JSON.stringify(S))}
 else if(a==='saveShop'){x=val('f-shop');if(x){S.shop=x;go('home')}}
 else if(a==='joined'){S.joined=true;save()}
 else if(a==='pick'){x=chState();x[el.getAttribute('data-g')]=el.getAttribute('data-v');save();render()}
 else if(a==='chSent'){chState().sent=true;save();setTimeout(render,300)}
 else if(a==='proTurn'){proPos=+el.getAttribute('data-k');x=document.getElementById('stage');if(x)x.innerHTML=stage();proSpin()}
 else if(a==='proPlay'){x=document.getElementById('proPlay');try{if(!proAudio){proAudio=new Audio(PRO_AUDIO);proAudio.addEventListener('ended',function(){var b=document.getElementById('proPlay');if(b)b.textContent='▶ '+t('proPlay')})}
   if(proAudio.paused){proAudio.currentTime=0;c=proAudio.play();if(c&&c.catch)c.catch(function(){});x.textContent='■ '+t('proStop')}else{proAudio.pause();x.textContent='▶ '+t('proPlay')}}catch(e){}}
 else if(a==='signIn'){authGo('in')}
 else if(a==='signUp'){authGo('up')}
 else if(a==='syncNow'){cnote('aBusy');push()}
 else if(a==='signOut'){cnote('aBusy');push().then(function(ok){if(!ok)return;return sb.auth.signOut().then(function(){UID=null;var l=S.lang;S=blank();S.lang=l;cmsg='';localSave();go('setup')})})}
 else if(a==='delCloud'){cnote('aBusy');sb.from('pages').delete().eq('user_id',UID).then(function(r){if(r.error)throw r.error;return sb.auth.signOut()}).then(function(){UID=null;S.sync={};localSave();clearTimeout(pushT);render();cnote('cDeleted')}).catch(function(){cnote('cFail')})}
});
app.addEventListener('keydown',function(ev){if(ev.key==='Enter'&&ev.target.id==='b-in'){ev.preventDefault();if(addLine()){render();var x=document.getElementById('b-in');if(x)x.focus()}}});
app.addEventListener('input',function(ev){var id=ev.target.id;
 if(id&&id.indexOf('c-')===0){S.draft=S.draft||{};S.draft[id.slice(2)]=ev.target.value;save();var o=document.getElementById('closeOut');if(o)o.innerHTML=closeOut()}
 if(id==='f-area'){S.area=ev.target.value;save();var j=document.getElementById('joinLink');if(j)j.href=wa(OWNER,t('mJoin')(S.shop,S.area))}
 if(id==='b-in')err('');
});
app.addEventListener('change',function(ev){var id=ev.target.id;
 if(id==='b-date'&&ev.target.value){S.bookDay=ev.target.value;save();render()}
 if(id==='f-restore'&&ev.target.files&&ev.target.files[0]){var fr=new FileReader();fr.onload=function(){try{var p=JSON.parse(fr.result);if(!p||typeof p.shop!=='string'||!Array.isArray(p.ent))throw 0;S=adopt(p);S.screen='settings';save();render();note('restOk')}catch(e){note('restBad')}};fr.readAsText(ev.target.files[0])}
});
render();
initCloud();
if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})}
})();

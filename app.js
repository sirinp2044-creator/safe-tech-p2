
const STORAGE_KEY="safeTechStudents_v2";
const CURRENT_KEY="safeTechCurrent_v2";
const TEACHER_USER="teacher";
const TEACHER_PASS="teacher123";

const lessons={
1:{title:"บทที่ 1 รู้จักข้อมูลส่วนตัว",icon:"🔐",intro:"ข้อมูลส่วนตัวคือข้อมูลที่เกี่ยวข้องกับตัวเราและสามารถใช้บอกหรือระบุตัวเราได้ จึงควรรู้ว่าข้อมูลใดควรบอกและข้อมูลใดควรเก็บเป็นความลับ",
sections:[
["1. ข้อมูลส่วนตัวคืออะไร?","ข้อมูลส่วนตัวคือข้อมูลที่เกี่ยวข้องกับเรา เช่น ชื่อและนามสกุล ชั้นเรียน โรงเรียน ที่อยู่ หมายเลขโทรศัพท์ และข้อมูลสำคัญบางอย่างที่สามารถเชื่อมโยงมาถึงตัวเราได้"],
["2. ตัวอย่างข้อมูลที่ควรระวัง","ข้อมูลอย่างรหัสผ่าน หมายเลขบัตรประชาชน เลขที่บ้าน เบอร์โทรศัพท์ของผู้ปกครอง ข้อมูลบัญชี และข้อมูลสำคัญอื่น ๆ ไม่ควรเปิดเผยให้คนแปลกหน้ารู้"],
["3. ข้อมูลบางอย่างอาจบอกได้เมื่อมีเหตุผลที่เหมาะสม","เช่น ในกิจกรรมของโรงเรียน อาจมีการใช้ชื่อ ชั้นเรียน โรงเรียน หรือข้อมูลติดต่อครูตามความจำเป็น โดยควรทำตามคำแนะนำของครูและผู้ปกครอง"],
["4. กฎ 3 คำถามก่อนบอกข้อมูล","ก่อนบอกข้อมูลให้ใคร ให้ถามตัวเองว่า “จำเป็นไหม?” “บอกใคร?” และ “ผู้ปกครองหรือครูรู้หรือยัง?” หากไม่แน่ใจ ให้หยุดและถามผู้ใหญ่ที่ไว้ใจ"]
]},
2:{title:"บทที่ 2 อันตรายจากการเผยแพร่ข้อมูลส่วนตัว",icon:"⚠️",intro:"การเผยแพร่ข้อมูลส่วนตัวโดยไม่ระวังอาจทำให้คนที่เราไม่รู้จักนำข้อมูลไปใช้ในทางที่ไม่เหมาะสม จึงควรคิดก่อนบอกหรือโพสต์",
sections:[
["1. ทำไมต้องระวัง?","เมื่อข้อมูลถูกเผยแพร่ อาจมีคนอื่นเห็น คัดลอก หรือส่งต่อได้ เราจึงควรเปิดเผยเท่าที่จำเป็นและกับคนที่เหมาะสม"],
["2. ตัวอย่างสถานการณ์ที่ควรหยุดคิด","คนแปลกหน้าขอที่อยู่บ้าน ขอรหัสผ่าน ขอเบอร์ผู้ปกครอง หรือขอรูป/ข้อมูลสำคัญ ควรปฏิเสธและปรึกษาผู้ใหญ่ ไม่ควรรีบตอบเพราะอีกฝ่ายบอกว่าเป็นเพื่อน"],
["3. เมื่อพบข้อความหรือเหตุการณ์ที่ทำให้ไม่สบายใจ","หยุดการสนทนา ไม่ส่งข้อมูลเพิ่ม และบอกพ่อแม่ ครู หรือผู้ใหญ่ที่ไว้ใจ เพื่อให้ช่วยจัดการอย่างปลอดภัย"],
["4. สิ่งที่ควรจำ","ไม่ต้องอายหรือกลัวที่จะขอความช่วยเหลือเมื่อพบสิ่งผิดปกติ การขอความช่วยเหลือจากผู้ใหญ่เป็นวิธีหนึ่งในการป้องกันตนเอง"]
]},
3:{title:"บทที่ 3 ข้อควรปฏิบัติในการใช้อุปกรณ์เทคโนโลยี",icon:"💻",intro:"การใช้อุปกรณ์อย่างถูกวิธีช่วยให้ปลอดภัย ลดความเสียหาย และช่วยให้อุปกรณ์ทำงานได้ดี",
sections:[
["1. ใช้อุปกรณ์ตามคำแนะนำ","ใช้คอมพิวเตอร์ แท็บเล็ต เมาส์ แป้นพิมพ์ และอุปกรณ์อื่น ๆ ตามวิธีที่ครูหรือคู่มือแนะนำ ไม่กระแทก ไม่โยน และไม่ดึงสายแรง ๆ"],
["2. จัดท่านั่งให้เหมาะสม","นั่งหลังตรงในท่าที่สบาย วางอุปกรณ์ในตำแหน่งเหมาะสม ไม่ก้มหน้าใกล้จอมากเกินไป และจัดพื้นที่รอบตัวให้เรียบร้อย"],
["3. พักสายตา","เมื่อใช้อุปกรณ์เป็นเวลานาน ควรพักสายตาและเปลี่ยนอิริยาบถตามคำแนะนำของครู เพื่อช่วยลดความเมื่อยล้าของดวงตา"],
["4. ระวังอุบัติเหตุ","ระวังสายไฟ ปลั๊กไฟ น้ำ และของที่อาจทำให้สะดุดหรือเกิดอันตราย หากพบปัญหาให้แจ้งครูหรือผู้ใหญ่"]
]},
4:{title:"บทที่ 4 การดูแลรักษาอุปกรณ์เทคโนโลยี",icon:"🧹",intro:"อุปกรณ์เทคโนโลยีเป็นของที่ใช้ร่วมกันและมีค่า การดูแลอย่างถูกวิธีช่วยให้อุปกรณ์สะอาด ปลอดภัย และใช้งานได้นาน",
sections:[
["1. รักษาความสะอาด","ทำความสะอาดอุปกรณ์ด้วยวิธีที่เหมาะสม ใช้ผ้าที่เหมาะสำหรับเช็ด และไม่เทน้ำหรือของเหลวลงบนอุปกรณ์"],
["2. ไม่ขีดเขียนหรือกระแทก","ไม่เขียนหรือขีดบนอุปกรณ์ ไม่โยน ไม่ทุบ และไม่วางของหนักทับ เพราะอาจทำให้อุปกรณ์เสียหาย"],
["3. จัดเก็บให้เรียบร้อย","หลังใช้งานควรเก็บอุปกรณ์เข้าที่ วางสายให้เป็นระเบียบ และไม่วางอุปกรณ์ในบริเวณที่เสี่ยงต่อการตกหรือโดนน้ำ"],
["4. เมื่ออุปกรณ์ผิดปกติ","หากเครื่องร้อนผิดปกติ มีกลิ่นไหม้ สายชำรุด หรือทำงานผิดปกติ ให้หยุดใช้และแจ้งครูหรือผู้ใหญ่ ไม่ควรแกะซ่อมเอง"]
]}
};

const activities={
1:{title:"กิจกรรม 1 • ข้อมูลของฉัน",q:"เพื่อนใหม่ในเกมออนไลน์ขอ “ที่อยู่บ้าน” ของเรา ควรทำอย่างไร?",opts:["ไม่บอก และปรึกษาพ่อแม่หรือครู","บอกทันทีเพราะเป็นเพื่อน","โพสต์ที่อยู่ให้ทุกคนเห็น","ส่งรหัสผ่านให้ด้วย"],ans:0},
2:{title:"กิจกรรม 2 • หยุดก่อนเผยแพร่",q:"คนแปลกหน้าส่งข้อความมาขอเบอร์โทรศัพท์ผู้ปกครอง ควรทำอย่างไร?",opts:["ไม่ส่งข้อมูลและบอกผู้ใหญ่ที่ไว้ใจ","ส่งให้เพื่อให้เขาติดต่อได้","ถามว่าเขาจะเอาไปทำอะไรแล้วส่งให้","โพสต์เบอร์ในกลุ่ม"],ans:0},
3:{title:"กิจกรรม 3 • ใช้อุปกรณ์ให้ถูกวิธี",q:"พบสายไฟกีดขวางทางเดินในห้องคอมพิวเตอร์ ควรทำอย่างไร?",opts:["แจ้งครูหรือผู้ใหญ่ให้ช่วยจัดพื้นที่","ดึงสายไฟแรง ๆ","กระโดดข้ามเล่น ๆ","ปล่อยไว้"],ans:0},
4:{title:"กิจกรรม 4 • ผู้พิทักษ์อุปกรณ์",q:"แป้นพิมพ์มีเศษอาหารตกอยู่ ควรทำอย่างไร?",opts:["หยุดใช้งานและทำความสะอาดด้วยวิธีที่เหมาะสม","เทน้ำล้างทันที","ใช้ของแหลมแคะ","เคาะแรง ๆ ให้เศษอาหารหลุด"],ans:0}
};

const quiz={
pre:[
["ข้อใดเป็นข้อมูลส่วนตัวที่ควรระวัง?",["รหัสผ่าน","สีที่ชอบ","การ์ตูนที่ชอบ","ผลไม้ที่ชอบ"]],
["เมื่อคนแปลกหน้าขอที่อยู่บ้านควรทำอย่างไร?",["ไม่บอกและปรึกษาผู้ใหญ่","บอกทันที","โพสต์ลงอินเทอร์เน็ต","ส่งให้เพื่อนทุกคน"]],
["ถ้าได้รับข้อความที่ทำให้รู้สึกไม่ปลอดภัยควรทำอย่างไร?",["หยุดและขอความช่วยเหลือ","ตอบกลับทันที","ส่งต่อให้คนอื่น","ส่งข้อมูลเพิ่ม"]],
["ข้อใดเป็นการใช้อุปกรณ์ที่เหมาะสม?",["ใช้ตามคำแนะนำ","กระแทกอุปกรณ์","ดึงสายไฟเล่น","ใช้งานด้วยมือเปียก"]],
["การนั่งใช้คอมพิวเตอร์ควรเป็นอย่างไร?",["นั่งให้เหมาะสมและพักสายตา","นอนเล่น","ก้มใกล้จอมาก ๆ","เล่นต่อเนื่องไม่พัก"]],
["เมื่ออุปกรณ์ชำรุดควรทำอย่างไร?",["หยุดใช้และแจ้งผู้ใหญ่","แกะเครื่องเอง","โยนทิ้ง","ใช้ต่อ"]],
["ข้อใดไม่ควรทำกับอุปกรณ์?",["เขียนหรือขีดบนอุปกรณ์","ทำความสะอาด","ใช้อย่างทะนุถนอม","เก็บให้เรียบร้อย"]],
["ใครคือคนที่ควรขอความช่วยเหลือเมื่อไม่ปลอดภัย?",["พ่อแม่หรือครู","คนแปลกหน้า","บัญชีที่ไม่รู้จัก","ใครก็ได้ในอินเทอร์เน็ต"]],
["ก่อนเผยแพร่ข้อมูลควรคิดถึงอะไร?",["ความจำเป็นและความปลอดภัย","จำนวนคนกดถูกใจ","ความสนุกอย่างเดียว","ความเร็ว"]],
["การดูแลอุปกรณ์ที่ดีคือข้อใด?",["ทำความสะอาดและจัดเก็บอย่างเหมาะสม","วางไว้ริมทางเดิน","โยนลงกระเป๋า","วางใกล้น้ำ"]]
],
post:[
["ข้อมูลใดควรเก็บเป็นความลับ?",["รหัสผ่าน","สีโปรด","สัตว์ที่ชอบ","การ์ตูนที่ชอบ"]],
["ถ้ามีคนออนไลน์ขอข้อมูลสำคัญของครอบครัวควรทำอย่างไร?",["ไม่ให้ข้อมูลและบอกผู้ใหญ่","ส่งให้เพราะเขาดูใจดี","โพสต์สาธารณะ","ส่งต่อให้เพื่อน"]],
["เมื่อพบเหตุการณ์ที่ทำให้กังวลบนอินเทอร์เน็ตควรทำอย่างไร?",["หยุดและขอผู้ใหญ่ช่วย","คุยต่อคนเดียว","นัดพบคนแปลกหน้า","ส่งข้อมูลเพิ่ม"]],
["การใช้อุปกรณ์อย่างปลอดภัยคือข้อใด?",["ใช้อย่างถูกวิธีและระมัดระวัง","ดึงปลั๊กแรง ๆ","ใช้ขณะมือเปียก","วางของหนักทับ"]],
["เหตุใดจึงควรพักสายตา?",["ช่วยลดความเมื่อยล้าของดวงตา","ทำให้เครื่องเร็วขึ้น","ช่วยเพิ่มเสียง","ทำให้แบตเต็ม"]],
["ถ้าเจอสายไฟกีดขวางทางเดินควรทำอย่างไร?",["แจ้งผู้ใหญ่และจัดพื้นที่ให้ปลอดภัย","กระโดดข้ามเล่น ๆ","ดึงแรง ๆ","ปล่อยไว้"]],
["การทำความสะอาดอุปกรณ์ควรทำอย่างไร?",["ใช้วิธีที่เหมาะสมและระมัดระวัง","เทน้ำใส่","ใช้ของแหลมแคะ","ขัดแรง ๆ"]],
["เมื่ออุปกรณ์ทำงานผิดปกติควรทำอย่างไร?",["หยุดใช้และแจ้งผู้ใหญ่","เปิดฝาแกะเอง","เคาะเครื่อง","ใช้งานต่อ"]],
["ข้อใดแสดงถึงความรับผิดชอบในการใช้เทคโนโลยี?",["ดูแลอุปกรณ์และปกป้องข้อมูล","บอกรหัสผ่านให้เพื่อน","ทิ้งอุปกรณ์ไม่เป็นที่","เผยแพร่ข้อมูลคนอื่น"]],
["ข้อใดสรุปการใช้เทคโนโลยีอย่างปลอดภัยได้ดีที่สุด?",["คิดก่อนบอก ใช้อย่างถูกวิธี และขอความช่วยเหลือเมื่อไม่ปลอดภัย","ทำทุกอย่างเร็วที่สุด","บอกข้อมูลทุกอย่าง","ใช้เครื่องโดยไม่อ่านคำแนะนำ"]]
]
};

function getStudents(){return JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]")}
function saveStudents(a){localStorage.setItem(STORAGE_KEY,JSON.stringify(a))}
function getCurrent(){return JSON.parse(localStorage.getItem(CURRENT_KEY)||"null")}
function setCurrent(s){localStorage.setItem(CURRENT_KEY,JSON.stringify(s))}
function updateCurrent(patch){const c=getCurrent();if(!c)return;const n={...c,...patch};setCurrent(n);const a=getStudents();const i=a.findIndex(x=>x.id===c.id);if(i>=0){a[i]=n;saveStudents(a)}}

function startStudentLogin(){
 const name=document.querySelector("#studentName").value.trim();
 const cls=document.querySelector("#studentClass").value.trim();
 const no=document.querySelector("#studentNo").value.trim();
 if(!name||!cls||!no){alert("กรุณากรอกชื่อ ชั้น และเลขที่ให้ครบค่ะ");return}
 const a=getStudents();
 let s=a.find(x=>x.name===name&&x.cls===cls&&x.no===no);
 if(!s){s={id:Date.now().toString(),name,cls,no,loginAt:new Date().toLocaleString("th-TH"),pre:null,post:null,activities:{}};a.push(s)}
 else{s.lastLoginAt=new Date().toLocaleString("th-TH")}
 saveStudents(a);setCurrent(s);location.href="home.html";
}
function logout(){localStorage.removeItem(CURRENT_KEY);location.href="index.html"}
function guard(){if(!getCurrent())location.href="index.html"}
function fillUser(){
 const s=getCurrent();if(!s)return;
 document.querySelectorAll("[data-student]").forEach(e=>e.textContent=`${s.name} • ป.${s.cls} • เลขที่ ${s.no}`);
}
function toggleNav(){document.querySelector(".sidebar")?.classList.toggle("open")}
function openLesson(n){
 const l=lessons[n];let h=`<div class="modal-head"><div><div style="font-size:12px;color:#64748b;font-weight:900">บทที่ ${n}</div><h2 style="margin:4px 0">${l.icon} ${l.title}</h2><p style="color:#64748b;line-height:1.7">${l.intro}</p></div><button class="close" onclick="closeModal()">×</button></div>`;
 l.sections.forEach((s,i)=>h+=`<div class="lesson-section"><h3>${s[0]}</h3><p>${s[1]}</p>${i===1?'<div class="warn"><b>จำให้ขึ้นใจ:</b> ข้อมูลสำคัญไม่ควรบอกคนแปลกหน้า และหากไม่แน่ใจให้ถามผู้ใหญ่ที่ไว้ใจ</div>':''}</div>`);
 h+=`<div class="activity-box"><b>🎯 เรียนจบแล้ว ลองทำกิจกรรมของบทนี้</b><p style="color:#64748b">ไปที่เมนู “กิจกรรมระหว่างบท” เพื่อฝึกคิดจากสถานการณ์จริง</p><button class="btn primary" onclick="closeModal();location.hash='activities'">ไปทำกิจกรรม</button></div>`;
 document.querySelector("#modalContent").innerHTML=h;document.querySelector("#modal").classList.add("show");
}
function openActivity(n){
 const a=activities[n];let h=`<div class="modal-head"><div><div style="font-size:12px;color:#64748b;font-weight:900">กิจกรรมระหว่างบท</div><h2 style="margin:4px 0">${a.title}</h2></div><button class="close" onclick="closeModal()">×</button></div><div class="activity-box"><div class="activity-q">${a.q}</div><div class="choices">`;
 a.opts.forEach((o,i)=>h+=`<button class="act-choice" onclick="answerActivity(${n},${i},this)">${String.fromCharCode(65+i)}. ${o}</button>`);
 h+=`</div><div id="actResult" class="activity-result"></div></div>`;
 document.querySelector("#modalContent").innerHTML=h;document.querySelector("#modal").classList.add("show");
}
function answerActivity(n,i,el){
 const a=activities[n];document.querySelectorAll(".act-choice").forEach(x=>x.disabled=true);
 if(i===a.ans){el.classList.add("ok");document.querySelector("#actResult").innerHTML="✅ เก่งมาก! คำตอบถูกต้อง";updateActivity(n,true)}
 else{el.classList.add("no");document.querySelector("#actResult").innerHTML="❌ ลองคิดอีกครั้ง: ควรเลือกวิธีที่ไม่เปิดเผยข้อมูลและขอผู้ใหญ่ช่วยเมื่อไม่ปลอดภัย";updateActivity(n,false)}
}
function updateActivity(n,ok){const c=getCurrent();if(!c)return;const acts={...(c.activities||{}),[n]:{done:true,correct:ok}};updateCurrent({activities:acts})}
function closeModal(){document.querySelector("#modal").classList.remove("show")}
let quizState=null;
function startQuiz(type){
 quizState={type,index:0,score:0,answered:false};renderQuiz();
}
function renderQuiz(){
 const q=quiz[quizState.type][quizState.index],total=quiz[quizState.type].length;
 let h=`<div class="modal-head"><div><div class="qcount">${quizState.type==="pre"?"แบบทดสอบก่อนเรียน":"แบบทดสอบหลังเรียน"} • ข้อ ${quizState.index+1}/${total}</div><div class="progress"><i style="width:${((quizState.index+1)/total)*100}%"></i></div></div><button class="close" onclick="closeModal()">×</button></div><div class="quiz-wrap"><div class="question">${q[0]}</div><div class="choices">`;
 q[1].forEach((o,i)=>h+=`<button class="quiz-choice" onclick="answerQuiz(${i},this)">${String.fromCharCode(65+i)}. ${o}</button>`);
 h+=`</div><div id="quizFeedback" class="feedback">เลือกคำตอบที่คิดว่าถูกที่สุด</div><div class="quiz-actions"><button id="nextQuiz" class="btn primary" disabled onclick="nextQuiz()">ถัดไป</button></div></div>`;
 document.querySelector("#modalContent").innerHTML=h;document.querySelector("#modal").classList.add("show");
}
function answerQuiz(i,el){
 if(quizState.answered)return;quizState.answered=true;
 document.querySelectorAll(".quiz-choice").forEach(x=>x.disabled=true);
 if(i===0){quizState.score++;el.classList.add("correct");document.querySelector("#quizFeedback").innerHTML="✅ ถูกต้อง! เก่งมาก";}
 else{el.classList.add("wrong");document.querySelectorAll(".quiz-choice")[0].classList.add("correct");document.querySelector("#quizFeedback").innerHTML="💡 คำตอบที่ควรจำคือข้อ A";}
 document.querySelector("#nextQuiz").disabled=false;
 document.querySelector("#nextQuiz").textContent=quizState.index===quiz[quizState.type].length-1?"ดูคะแนน":"ถัดไป";
}
function nextQuiz(){
 if(!quizState.answered)return;
 quizState.index++;
 if(quizState.index>=quiz[quizState.type].length){finishQuiz();return}
 quizState.answered=false;renderQuiz();
}
function finishQuiz(){
 const type=quizState.type,score=quizState.score,total=quiz[type].length;
 updateCurrent(type==="pre"?{pre:{score,total,at:new Date().toLocaleString("th-TH")}}:{post:{score,total,at:new Date().toLocaleString("th-TH")}});
 document.querySelector("#modalContent").innerHTML=`<div style="text-align:center;padding:20px"><div style="font-size:70px">${score>=8?"🏆":"🌟"}</div><h2>ทำแบบทดสอบเสร็จแล้ว!</h2><p style="color:#64748b">คะแนนของคุณคือ</p><div style="font-size:48px;font-weight:1000;color:#1677ff">${score} / ${total}</div><p>${score===10?"ยอดเยี่ยมมาก!":score>=8?"เก่งมาก ลองทบทวนบทที่ยังไม่มั่นใจอีกครั้งนะ":"ไม่เป็นไร ลองกลับไปทบทวนบทเรียนแล้วทำใหม่ได้เสมอ"}</p><button class="btn primary" onclick="closeModal();location.reload()">กลับไปหน้าหลัก</button></div>`;
}

// ตั้งรหัสตรงนี้ (เปลี่ยนได้ตามต้องการ)
const PASSWORD = 'ไอตัวเล็ก';

const pwd = document.getElementById('pwd');
const btn = document.getElementById('check');
const hint = document.getElementById('hint');
const message = document.getElementById('message');
const hearts = document.getElementById('hearts');

function showMessage(){
  hint.textContent = '';
  message.classList.add('show');
  spawnHearts(16);
}

function wrong(){
  hint.textContent = 'รหัสผิด ลองใหม่อีกครั้ง';
  pwd.classList.add('shake');
  setTimeout(()=>pwd.classList.remove('shake'), 420);
}

function check(){
  const val = pwd.value.trim();
  if(!val) { hint.textContent = 'กรุณากรอกรหัส'; return; }
  if(val === PASSWORD) showMessage(); else wrong();
}

btn.addEventListener('click', check);
pwd.addEventListener('keydown', e => { if(e.key === 'Enter') check(); });

function spawnHearts(count){
  let created = 0;
  const id = setInterval(()=>{
    if(created >= count) { clearInterval(id); return; }
    createHeart(); created++;
  }, 140);
}

function createHeart(){
  const el = document.createElement('span');
  el.className = 'heart';
  el.textContent = '💖';
  const x = Math.random()*100; // percent left
  const size = 18 + Math.floor(Math.random()*22);
  el.style.left = `calc(${x}% - ${size/2}px)`;
  el.style.fontSize = size + 'px';
  el.style.top = (60 + Math.random()*40) + '%';
  el.style.opacity = 0;
  hearts.appendChild(el);
  el.addEventListener('animationend', ()=>el.remove());
}

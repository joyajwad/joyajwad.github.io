const menu=document.querySelector('.menu');const nav=document.querySelector('.navlinks');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));document.querySelectorAll('[data-zoom]').forEach(el=>el.addEventListener('click',()=>{const l=document.querySelector('.lightbox');l.querySelector('img').src=el.dataset.zoom||el.src;l.classList.add('show')}));document.querySelector('.lightbox')?.addEventListener('click',e=>{if(e.target.tagName!=='IMG')e.currentTarget.classList.remove('show')});document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelector('.lightbox')?.classList.remove('show')});document.querySelectorAll('.compare').forEach(el=>{const slider=el.querySelector('input'),after=el.querySelector('.after');slider.addEventListener('input',()=>after.style.clipPath=`inset(0 0 0 ${slider.value}%)`)});const sections=[...document.querySelectorAll('main section[id]')];if(sections.length){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.navlinks a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}),{rootMargin:'-30% 0px -60% 0px'});sections.forEach(s=>io.observe(s))}


/* Version 8: animated articulated margin engineer */
(()=>{
 const el=document.getElementById('margin-engineer'); if(!el)return;
 const props=el.querySelector('#scene-props'),fig=el.querySelector('#tiny-figure');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const names=['torso','upper-left','fore-left','upper-right','fore-right','thigh-left','shin-left','thigh-right','shin-right'];
 const parts=Object.fromEntries(names.map(n=>[n,fig.querySelector('.'+n)]));
 const base={torso:'M25 50 L25 76','upper-left':'M25 56 L16 65','fore-left':'M16 65 L11 72','upper-right':'M25 56 L35 62','fore-right':'M35 62 L40 57','thigh-left':'M25 76 L17 87','shin-left':'M17 87 L13 99','thigh-right':'M25 76 L34 87','shin-right':'M34 87 L39 99'};
 const scenes={
  hero:'',
  about:`<g class="thought" fill="#F0E8E8" stroke="#B97982" stroke-width="1.7"><circle cx="52" cy="39" r="2.5"/><circle cx="59" cy="30" r="4"/><path d="M69 8 Q64 1 75 1 H113 Q124 1 124 12 V28 Q124 37 112 37 H78 Q68 37 68 27 Z"/><path d="M78 19h10m5 0h8m5 0h8" stroke-width="2" stroke-linecap="round"/></g>`,
  projects:`<g class="project-car" stroke="#B97982" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M49 92H135L132 80Q126 76 117 75L106 61H81L67 77L54 80Z" fill="#B97982"/><path d="M82 63H105L114 76H69Z" fill="#D6C9CA"/><path d="M92 63V76 M49 90H135 M55 83H64 M121 83H131"/><circle cx="70" cy="94" r="8" fill="#D4C9CB"/><circle cx="117" cy="94" r="8" fill="#D4C9CB"/><circle cx="70" cy="94" r="3"/><circle cx="117" cy="94" r="3"/><g transform="translate(72 112)"><circle cx="0" cy="0" r="5"/><circle cx="0" cy="0" r="2"/></g><path d="M89 112 l10 0 m-5 -4 v8 M111 111 l10 0 m-8 -3 l6 6"/></g><g class="project-hammer" stroke="#B97982" stroke-width="2.8" stroke-linecap="round" fill="none"><path class="hammer-handle"/><path class="hammer-head" stroke="#433238" stroke-width="5"/></g>`,
  experience:`<g stroke="#B97982" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 84 V65 H19 V84" fill="none"/><path d="M12 84 H44 V91 H12Z" fill="#B97982"/><path d="M15 91 V116 M40 91 V116" fill="none"/><path d="M55 76 H134 V81 H55Z" fill="#B97982"/><path d="M63 81 V119 M126 81 V119" fill="none"/><rect x="81" y="41" width="39" height="29" rx="2" fill="#D4C9CB"/><path d="M101 70 V75 M91 75 H111 M88 49 H113 M88 54 H105" fill="none"/><path d="M60 75 H80" fill="none"/></g>`,
  contact:`<g class="thanks-bubble" stroke="#D4C9CB" stroke-width="1.2" fill="#F4F0EF"><path d="M48 1 Q48 -3 57 -3 H126 Q132 -3 132 6 V47 Q132 53 124 53 H73 L61 61 L63 53 H57 Q48 53 48 44 Z"/><text x="90" y="14" text-anchor="middle" fill="#433238" stroke="none" font-family="Arial,sans-serif" font-size="11" font-weight="400"><tspan x="90" dy="0">Thanks for</tspan><tspan x="90" dy="13">viewing my</tspan><tspan x="90" dy="13">portfolio!</tspan></text></g>`,
  flight:`<g class="flight-rocket" stroke="#B97982" stroke-width="2" stroke-linejoin="round"><path d="M88 8Q106 31 103 72H73Q70 31 88 8Z" fill="#B97982"/><circle cx="88" cy="41" r="8" fill="#D4C9CB"/><path d="M73 60L63 78L73 72 M103 60L120 78L103 72" fill="#B97982"/><path d="M81 72V83H96V72" fill="#B97982"/><path class="flame" d="M81 84Q70 103 88 120Q106 103 96 84Z" fill="#ffb42a" stroke="#e17b22"/><path class="flame" d="M85 85Q80 100 88 109Q97 99 92 85" fill="#f26339" stroke="none"/></g>`
 };
 let current='hero', candidate='',candidateAt=0,lastSwitch=0,travel=null,flight=false,flightTimer=0,lastY=scrollY,scrollDistance=0,clickUntil=0;
 const clock=()=>performance.now();
 const segment=(x,y,angle,length)=>[x+Math.cos(angle)*length,y+Math.sin(angle)*length];
 const path=(a,b)=>`M${a[0].toFixed(2)} ${a[1].toFixed(2)} L${b[0].toFixed(2)} ${b[1].toFixed(2)}`;
 let heroStart=performance.now(); const heroJumpMs=2450; let contactStart=performance.now();
 const hammerMarkup='<g class="project-hammer" stroke="#B97982" stroke-width="2.8" stroke-linecap="round" fill="none"><path class="hammer-handle"/><path class="hammer-head" stroke="#433238" stroke-width="5"/></g>';

 const set=(k,d)=>parts[k].setAttribute('d',d);
 const pose=(o={})=>names.forEach(k=>set(k,o[k]||base[k]));
 function sectionAt(){const point=innerHeight*.48;for(const id of ['contact','experience','projects','about']){const s=document.getElementById(id);if(s){const r=s.getBoundingClientRect();if(r.top<=point&&r.bottom>point)return id}}return 'hero'}
 function target(id){const w=innerWidth,h=innerHeight,b=el.offsetWidth||118,gap=Math.max(8,Math.min(38,(w-1170)/4));return{x:id==='about'||id==='experience'?w-b-gap:gap,y:Math.max(80,Math.min(h-155,id==='hero'?110:id==='about'?h*.32:id==='projects'?h*.43:id==='experience'?h*.43:h*.60))}}
 function place(x,y){el.style.left=x+'px';el.style.top=y+'px'}
 function settle(id){
  if(id==='hero'&&current!=='hero')heroStart=clock();
  if(id==='contact'&&current!=='contact')contactStart=clock();
  current=id;candidate='';travel=null;
  props.innerHTML=scenes[id];fig.style.removeProperty('--figure-pose');
  el.className='margin-engineer scene-'+id;
  const p=target(id);place(p.x,p.y);lastSwitch=clock();
 }
 function beginTravel(id){if(reduced){settle(id);return}const to=target(id),from={x:parseFloat(el.style.left)||target(current).x,y:parseFloat(el.style.top)||target(current).y};travel={from,to,id,start:clock(),duration:Math.max(550,Math.min(1250,Math.hypot(to.x-from.x,to.y-from.y)*1.35))};props.innerHTML='';el.className='margin-engineer is-running'}
 function startFlight(){if(flight||reduced)return;flight=true;travel=null;props.innerHTML=scenes.flight;el.className='margin-engineer rocket-flight';scrollDistance=0}
 function endFlight(){if(!flight)return;flight=false;clearTimeout(flightTimer);settle(sectionAt());el.classList.add('landing');setTimeout(()=>el.classList.remove('landing'),480)}
 function onScroll(){const y=scrollY,delta=y-lastY;lastY=y;
  if(delta< -3&&y>12){startFlight();if(flight){scrollDistance+=Math.abs(delta);const x=innerWidth*.5+Math.sin(scrollDistance/240)*Math.min(innerWidth*.30,320);place(Math.max(8,Math.min(innerWidth-el.offsetWidth-8,x)),Math.max(82,Math.min(innerHeight-160,(parseFloat(el.style.top)||220)+delta*.24)));clearTimeout(flightTimer);flightTimer=setTimeout(endFlight,600)}return}
  if(flight){clearTimeout(flightTimer);flightTimer=setTimeout(endFlight,600);return}
  // React immediately when scrolling begins: start the run toward the next section,
  // but commit only if the visitor passes the section midpoint.
  const next=sectionAt();if(next!==current&&next!==candidate){candidate=next;candidateAt=clock();beginTravel(next)}
  else if(next===current&&travel&&travel.id!==current){beginTravel(current);candidate=''}
  else if(delta>2&&!travel){clickUntil=clock()+180}
 }
 function tick(now){
  if(!flight){const next=sectionAt();if(travel){const q=travel,a=Math.min(1,(now-q.start)/q.duration),e=a*a*(3-2*a),hop=Math.abs(Math.sin(a*Math.PI*5))*11;place(q.from.x+(q.to.x-q.from.x)*e,q.from.y+(q.to.y-q.from.y)*e-hop);
    const phase=now*.018;pose({'upper-left':`M25 56 L${17+Math.sin(phase)*8} 63`,'fore-left':`M${17+Math.sin(phase)*8} 63 L${12+Math.sin(phase)*9} 74`,'upper-right':`M25 56 L${34-Math.sin(phase)*8} 63`,'fore-right':`M${34-Math.sin(phase)*8} 63 L${42-Math.sin(phase)*8} 72`,'thigh-left':`M25 76 L${16+Math.sin(phase)*10} 87`,'shin-left':`M${16+Math.sin(phase)*10} 87 L${14+Math.sin(phase)*13} 99`,'thigh-right':`M25 76 L${35-Math.sin(phase)*10} 87`,'shin-right':`M${35-Math.sin(phase)*10} 87 L${37-Math.sin(phase)*13} 99`});
    if(a===1){if(next===q.id){settle(q.id)}else{beginTravel(next)}}
   }else if(next!==current&&now-lastSwitch>400){beginTravel(next)}
   else if(!reduced){const s=Math.sin(now*.006),fast=Math.sin(now*.017);
    if(current==='hero'){
     // Stay in the left margin. A short vertical hop repeats; every third
     // hop becomes a harmless fall, followed by a silent "ow!" bubble.
     const elapsed=Math.max(0,now-heroStart);
     const cycle=Math.floor(elapsed/heroJumpMs),t=(elapsed%heroJumpMs)/heroJumpMs;
     const third=(cycle+1)%3===0;
     const airborne=t>=.22&&t<.52;
     const fallen=third&&t>=.52&&t<.79;
     const jump=airborne?19*Math.sin(Math.PI*(t-.22)/.30):0;
     place(target('hero').x,target('hero').y);
     const elbow=[35,54],hand=segment(...elbow,-1.15+.32*Math.sin(now*.005),12);
     if(fallen){
       pose({'upper-right':path([25,56],[35,62]),'fore-right':path([35,62],[42,67])});
       fig.style.setProperty('--figure-pose','translate(4px,5px) rotate(87deg)');
     }else{
       pose({'upper-right':path([25,56],elbow),'fore-right':path(elbow,hand),
        'thigh-left':airborne?'M25 76 L18 84':'M25 76 L17 87',
        'shin-left':airborne?'M18 84 L14 94':'M17 87 L13 99',
        'thigh-right':airborne?'M25 76 L33 83':'M25 76 L34 87',
        'shin-right':airborne?'M33 83 L39 93':'M34 87 L39 99'});
       fig.style.setProperty('--figure-pose',`translateY(${-jump}px)`);
     }
     const ow=props.querySelector('.hero-ow');
     if(fallen&&!ow){props.innerHTML='<g class="hero-ow"><rect x="7" y="3" width="43" height="23" rx="9" fill="#F0E8E8" stroke="#B97982" stroke-width="1.5"/><text x="28" y="19" text-anchor="middle" font-size="14" font-family="Arial,sans-serif" fill="#433238">ow!</text></g>';}
     if(!fallen&&ow)props.innerHTML='';
    }else if(current==='about'){pose()}
    else if(current==='projects'){
     // Wrist and hammer stay connected. Hammer face taps the car's front edge at x=51,y=81.
     const elbow=[34,60],wrist=[43,64+Math.sin(now*.012)*1.5];
     pose({'upper-right':path([25,56],elbow),'fore-right':path(elbow,wrist),'upper-left':'M25 56 L17 65','fore-left':'M17 65 L15 73'});
     const handle=props.querySelector('.hammer-handle'),head=props.querySelector('.hammer-head');
     if(handle&&head){const end=[51,79+Math.max(0,Math.sin(now*.012))*2];handle.setAttribute('d',path(wrist,end));head.setAttribute('d',path([end[0]-4,end[1]+1],[end[0]+4,end[1]-1]));}
    }else if(current==='experience'){
     // Keep upper arms and forearms comparable in length, typing with small wrist motion.
     const leftElbow=[34,65],rightElbow=[37,62],leftHand=[46,73+fast*.7],rightHand=[49,70-fast*.7];
     pose({torso:'M25 50 L25 78','upper-left':path([25,56],leftElbow),'fore-left':path(leftElbow,leftHand),'upper-right':path([25,56],rightElbow),'fore-right':path(rightElbow,rightHand),'thigh-left':'M25 78 L42 88','shin-left':'M42 88 L43 112','thigh-right':'M25 78 L47 85','shin-right':'M47 85 L52 110'});
    }else if(current==='contact'){
     // Dance in place: fixed-length upper/lower limbs, bent elbows, knees,
     // alternating raised hands and a playful squat. No moving contact card.
     const t=(now-contactStart)/1000;
     const phase=t*5.4,beat=Math.sin(phase),sway=Math.sin(phase*.5);
     const squat=(t%5.6>4.55&&t%5.6<5.25);
     const shoulderL=[25,64],shoulderR=[25,64];
     const elbowL=[15+2*sway,58+3*beat],elbowR=[35+2*sway,58-3*beat];
     const handL=[8+2*sway,51+3*beat],handR=[42+2*sway,51-3*beat];
     const hip=[25,76];
     const kneeL=squat?[16,85]:[17+4*beat,87];
     const kneeR=squat?[35,85]:[34-4*beat,87];
     const footL=squat?[11,96]:[13+4*beat,99];
     const footR=squat?[41,96]:[39-4*beat,99];
     pose({'upper-left':path(shoulderL,elbowL),'fore-left':path(elbowL,handL),
       'upper-right':path(shoulderR,elbowR),'fore-right':path(elbowR,handR),
       'thigh-left':path(hip,kneeL),'shin-left':path(kneeL,footL),
       'thigh-right':path(hip,kneeR),'shin-right':path(kneeR,footR)});
     fig.style.setProperty('--figure-pose',`translate(${(2*sway).toFixed(1)}px,${(squat?8:-3*Math.abs(beat)).toFixed(1)}px) rotate(${(sway*4).toFixed(1)}deg)`);

    }
   }
  }else{
   const sway=Math.sin(now*.0038)*7;
   pose({'upper-right':path([25,56],[35,38]),
         'fore-right':path([35,38],[25,24]),
         'upper-left':path([25,56],[17,68]),
         'fore-left':path([17,68],[12,77]),
         'thigh-left':path([25,76],[17,88]),
         'shin-left':path([17,88],[13,102]),
         'thigh-right':path([25,76],[34,88]),
         'shin-right':path([34,88],[39,102])});
   fig.style.setProperty('--flight-sway',`${sway.toFixed(2)}deg`);
  }
  if(now<clickUntil&&!flight&&!travel&&current!=='hero'){fig.style.setProperty('--figure-pose',`translateY(${-Math.abs(Math.sin(now*.025))*14}px) rotate(${Math.sin(now*.025)*12}deg)`)}else if((current!=='hero'&&current!=='contact')||flight||travel)fig.style.removeProperty('--figure-pose');
  requestAnimationFrame(tick)
 }
 el.addEventListener('click',()=>{if(flight){endFlight();return}clickUntil=clock()+650});
 el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}});
 settle(sectionAt());addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',()=>{if(!flight&&!travel)settle(current)});requestAnimationFrame(tick);
})();

// Mazda completed-rebuild carousel
(()=>{const img=document.getElementById('mazda-current');if(!img)return;const thumbs=[...document.querySelectorAll('.mazda-thumb')];let current=0;function show(i){current=(i+5)%5;img.src='../assets/mazda-'+String(current+1).padStart(2,'0')+'.jpg';img.dataset.zoom=img.src;img.alt='Completed Mazda rebuild, view '+(current+1);document.getElementById('mazda-count').textContent=(current+1)+' / 5';thumbs.forEach((t,j)=>t.classList.toggle('active',j===current));}document.getElementById('mazda-prev').addEventListener('click',()=>show(current-1));document.getElementById('mazda-next').addEventListener('click',()=>show(current+1));thumbs.forEach((t,i)=>t.addEventListener('click',()=>show(i)));})();

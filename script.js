// Troque pelos dados reais do ateliê:
var WHATSAPP = "5596981158429"; // DDI + DDD + número
var INSTAGRAM = "ateliemariachocolate";
var msg = encodeURIComponent("Olá! Quero garantir minha vaga no curso de tortas natalinas (20 e 21 de novembro).");
document.querySelectorAll(".js-wa").forEach(function(a){a.href="https://wa.me/"+WHATSAPP+"?text="+msg;a.target="_blank";a.rel="noopener"});
document.querySelectorAll(".js-ig").forEach(function(a){a.href="https://www.instagram.com/"+INSTAGRAM+"/";a.target="_blank";a.rel="noopener"});
// Contagem regressiva até 20/11/2026, 08h30 (horário de Brasília)
var START = new Date("2026-11-20T08:30:00-03:00").getTime();
function tick(){
  var d = START - Date.now();
  if (d <= 0){
    document.getElementById("count").style.display = "none";
    document.getElementById("cdlabel").textContent = "O curso já começou. Fale com a Maria sobre novas turmas.";
    return;
  }
  var s = Math.floor(d/1000);
  document.getElementById("cd-d").textContent = Math.floor(s/86400);
  document.getElementById("cd-h").textContent = Math.floor(s%86400/3600);
  document.getElementById("cd-m").textContent = Math.floor(s%3600/60);
  document.getElementById("cd-s").textContent = s%60;
  setTimeout(tick, 1000);
}
tick();

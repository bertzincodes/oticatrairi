var WA="https://wa.me/5585999731749?text=";
// EDITE AQUI: nome, descrição, preço e categoria de cada produto
var PRODUCTS=[
{c:"Visão",n:"Exame de vista",d:"Consulta com médico oftalmologista na própria ótica.",i:5},
{c:"Visão",n:"Óculos de grau",d:"Armações e lentes sob medida para a sua receita.",i:0},
{c:"Proteção",n:"Óculos de sol",d:"Estilo com proteção UV para o dia a dia.",i:2},
{c:"Armações",n:"Femininas e masculinas",d:"Modelos para cada rosto, estilo e ocasião.",i:3},
{c:"Armações",n:"Infantis",d:"Leves, resistentes e confortáveis para os pequenos.",i:4},
{c:"Visão",n:"Lentes de contato",d:"Orientação para escolher e usar com segurança.",i:1},
{c:"Cuidado",n:"Acessórios e ajustes",d:"Estojos, limpeza e manutenção da sua armação.",i:6}
];
var SHAPES=[
'<circle cx="38" cy="50" r="24"/><circle cx="102" cy="50" r="24"/><path d="M62 46q8-8 16 0M14 44L4 38M126 44l10-6"/>',
'<rect x="12" y="28" width="52" height="40" rx="10"/><rect x="76" y="28" width="52" height="40" rx="10"/><path d="M64 40h12M12 38L3 34M128 38l9-4"/>',
'<path d="M14 34h50q-2 34-26 34T14 34zM76 34h50q-2 34-24 34T76 34z"/><path d="M64 38q6-4 12 0"/>',
'<path d="M12 40q0-12 14-10l34 6q4 22-18 30T12 40zM128 40q0-12-14-10l-34 6q-4 22 18 30t30-26z"/><path d="M62 40q8-4 16 0"/>',
'<circle cx="38" cy="50" r="22"/><circle cx="102" cy="50" r="22"/><path d="M60 48q10-6 20 0M16 46L6 44M124 46l10-2"/>',
'<ellipse cx="70" cy="50" rx="34" ry="34"/><ellipse cx="70" cy="50" rx="20" ry="20"/>',
'<rect x="26" y="26" width="88" height="48" rx="12"/><path d="M26 44h88"/>'];
var DIFFS=[["Atendimento personalizado","Cada cliente é ouvido para encontrar o óculos ideal.","M12 21s-7-4.500-7-11a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 6.500-7 11-7 11z"],["Variedade de armações","Estilos para todos os rostos, idades e orçamentos.","M3 9h7v6H3zM14 9h7v6h-7zM10 12h4"],["Qualidade e procedência","Produtos de fornecedores confiáveis e com garantia.","M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"],["Consultoria para escolha","Ajudamos você a combinar formato, cor e estilo.","M12 3v4M12 17v4M3 12h4M17 12h4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"],["Condições especiais","Formas de pagamento facilitadas para você.","M3 7h18v10H3zM3 11h18M7 15h3"]];
var cats=["Todos"].concat(PRODUCTS.map(function(x){return x.c}).filter(function(v,i,a){return a.indexOf(v)==i}));
var sel="Todos",tabs=document.getElementById("tabs"),grid=document.getElementById("grid");
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function render(){

grid.innerHTML="";PRODUCTS.forEach(function(p,ix){if(sel!="Todos"&&p.c!=sel)return;

var el=document.createElement("article");el.className="card";
el.innerHTML='<div class="pic"><svg viewBox="0 0 140 100" aria-hidden="true">'+SHAPES[p.i]+'</svg></div><div class="body"><small>'+p.c+'</small><h3>'+p.n+'</h3><p>'+p.d+'</p><div class="price"><a href="'+WA+encodeURIComponent("Olá! Quero saber mais sobre: "+p.n)+'" target="_blank" rel="noopener">Saiba mais</a></div></div>';
grid.appendChild(el)});
document.querySelectorAll(".price span").forEach(function(s){if(document.body.classList.contains("admin")){s.contentEditable=true;s.oninput=function(){store("pr"+s.dataset.k,s.textContent)}}});
}

render();
document.getElementById("diffs").innerHTML=DIFFS.map(function(d){return '<div class="rv"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="'+d[2]+'"/></svg><h3>'+d[0]+'</h3><p>'+d[1]+'</p></div>'}).join("");
var hd=document.getElementById("hd"),mn=document.getElementById("menu");
addEventListener("scroll",function(){hd.classList.toggle("solid",scrollY>40)});
document.getElementById("bg").onclick=function(){mn.classList.toggle("open");hd.classList.add("solid")};
mn.onclick=function(){mn.classList.remove("open")};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});

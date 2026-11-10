
const translations = {
 en: {
  workspace:"Workspace", overview:"Overview", stores:"Stores", products:"Products", history:"Price history", alerts:"Alerts", settings:"Settings",
  workspaceLabel:"WORKSPACE", preferences:"PREFERENCES", monitorStatus:"MONITOR STATUS", demo:"DEMO", demoStatus:"Dashboard prototype is ready. Live store checks are not connected yet.",
  personalWorkspace:"Personal workspace", privateAdmin:"Private admin · Demo mode", demoData:"DEMO DATA",
  monitorPicks:"MONITOR YOUR PICKS", overviewSubtitle:"A clear view of the stores and products on your radar.",
  storesSubtitle:"Manage the retailers connected to your watchlist.", productsSubtitle:"Your tracked items, current prices and target prices.",
  historySubtitle:"Follow price movements across your tracked products.", alertsSubtitle:"Review price drops and notification activity.",
  settingsSubtitle:"Configure your workspace and monitoring preferences.",
  export:"Export", addProduct:"Add product", trackedProducts:"TRACKED PRODUCTS", activeDiscounts:"ACTIVE DISCOUNTS",
  averageSaving:"AVERAGE SAVING", priceDrops:"PRICE DROPS", acrossStores:"Across 3 stores", currentDiscount:"currently discounted",
  onDiscounted:"On discounted products", last30:"Last 30 days", watchlist:"YOUR WATCHLIST", trackedTitle:"Tracked products",
  viewAll:"View all", search:"Search products or stores…", allStatus:"All status", onSaleFilter:"On sale", targetFilter:"Target reached",
  regularFilter:"Regular price", product:"PRODUCT", store:"STORE", price:"PRICE", change:"CHANGE", status:"STATUS",
  showing:"Showing", productOne:"product", productMany:"products", sampleData:"SAMPLE DATA · NOT LIVE PRICES",
  sources:"SOURCES", monitoredStores:"Monitored stores", monitoring:"Monitoring", manageStores:"Manage stores",
  latestChanges:"LATEST CHANGES", recentActivity:"Recent activity", priceDropped:"Price dropped by 20%",
  jacket:"Technical jacket", newSale:"New sale price detected", hoodie:"Oversized hoodie", backStock:"Product back in stock",
  tee:"Ghost piece tee", today:"Today", yesterday:"Yesterday", activity:"View activity",
  prototype:"PROTOTYPE v0.1 · DATA IS ILLUSTRATIVE", addTitle:"Add a product", name:"Product name",
  url:"Product URL", currency:"Currency", currentPrice:"Current price", targetPrice:"Target price",
  addHint:"Prototype only: this adds a sample row in your current browser session. Live URL parsing and cloud saving come in a later step.",
  addWatchlist:"Add to watchlist", noMatches:"No products match your search.", storeManagement:"Store management will be connected in the next development stage.",
  regular:"Regular", onSale:"On sale", targetReached:"Target reached", customCategory:"Custom product"
 },
 ua: {
  workspace:"Робочий простір", overview:"Огляд", stores:"Магазини", products:"Товари", history:"Історія цін", alerts:"Сповіщення", settings:"Налаштування",
  workspaceLabel:"РОБОЧИЙ ПРОСТІР", preferences:"ПАРАМЕТРИ", monitorStatus:"СТАН МОНІТОРИНГУ", demo:"ДЕМО", demoStatus:"Прототип готовий. Перевірка магазинів у реальному часі ще не підключена.",
  personalWorkspace:"Особистий простір", privateAdmin:"Приватна адмінпанель · Демо", demoData:"ДЕМО-ДАНІ",
  monitorPicks:"СТЕЖ ЗА ПОКУПКАМИ", overviewSubtitle:"Усі магазини та товари, за якими ти стежиш.",
  storesSubtitle:"Керування магазинами у твоєму списку.", productsSubtitle:"Товари, поточні ціни та бажані ціни.",
  historySubtitle:"Історія зміни цін на товари у твоєму списку.", alertsSubtitle:"Історія зниження цін та сповіщень.",
  settingsSubtitle:"Налаштування робочого простору та моніторингу.",
  export:"Експорт", addProduct:"Додати товар", trackedProducts:"ТОВАРІВ ВІДСТЕЖУЄТЬСЯ", activeDiscounts:"АКТИВНІ ЗНИЖКИ",
  averageSaving:"СЕРЕДНЯ ЕКОНОМІЯ", priceDrops:"ЗНИЖЕННЯ ЦІН", acrossStores:"У 3 магазинах", currentDiscount:"зараз зі знижкою",
  onDiscounted:"На товари зі знижкою", last30:"За останні 30 днів", watchlist:"ТВІЙ СПИСОК", trackedTitle:"Відстежувані товари",
  viewAll:"Усі товари", search:"Пошук товарів або магазинів…", allStatus:"Усі статуси", onSaleFilter:"Зі знижкою", targetFilter:"Цільова ціна досягнута",
  regularFilter:"Звичайна ціна", product:"ТОВАР", store:"МАГАЗИН", price:"ЦІНА", change:"ЗМІНА", status:"СТАТУС",
  showing:"Показано", productOne:"товар", productMany:"товарів", sampleData:"ПРИКЛАД ДАНИХ · НЕ АКТУАЛЬНІ ЦІНИ",
  sources:"ДЖЕРЕЛА", monitoredStores:"Магазини під моніторингом", monitoring:"Моніторинг", manageStores:"Керувати магазинами",
  latestChanges:"ОСТАННІ ЗМІНИ", recentActivity:"Остання активність", priceDropped:"Ціна знизилася на 20%",
  jacket:"Технічна куртка", newSale:"Виявлено нову ціну зі знижкою", hoodie:"Об'ємне худі", backStock:"Товар знову в наявності",
  tee:"Футболка Ghost Piece", today:"Сьогодні", yesterday:"Учора", activity:"Уся активність",
  prototype:"ПРОТОТИП v0.1 · ДАНІ ДЛЯ ПРИКЛАДУ", addTitle:"Додати товар", name:"Назва товару",
  url:"Посилання на товар", currency:"Валюта", currentPrice:"Поточна ціна", targetPrice:"Бажана ціна",
  addHint:"Це прототип: товар додається лише в поточній сесії браузера. Отримання даних із посилань і хмарне збереження підключимо пізніше.",
  addWatchlist:"Додати до списку", noMatches:"За твоїм запитом товарів не знайдено.", storeManagement:"Керування магазинами підключимо на наступному етапі.",
  regular:"Звичайна", onSale:"Зі знижкою", targetReached:"Ціль досягнута", customCategory:"Власний товар"
 }
};
let language = localStorage.getItem("saleTrackerLanguage") || "en";
function t(key){ return translations[language][key] || translations.en[key] || key; }
function applyLanguage(){
 document.documentElement.lang = language;
 const textMap = [
  [".side-label", null],
 ];
 const navKeys = ["overview","stores","products","history","alerts","settings"];
 $$(".nav-item").forEach((b,i)=>{ const icon=b.querySelector(".nav-icon")?.outerHTML||""; const count=b.querySelector(".nav-count")?.outerHTML||""; const dot=b.querySelector(".alert-dot")?.outerHTML||""; b.innerHTML=icon+" "+t(navKeys[i])+" "+count+dot; });
 const labels = [
  [".side-label", "workspaceLabel"], [".tools-label","preferences"],
  [".status-top","monitorStatus"], [".status-card p","demoStatus"],
  [".profile strong","personalWorkspace"], [".profile small","privateAdmin"],
  [".page-heading .eyebrow","monitorPicks"], ["#pageSubtitle",null],
  ["#exportBtn","export"], ["#addProductBtn","addProduct"],
  [".panel-header .eyebrow","watchlist"], [".products-panel h2","trackedTitle"],
  [".text-button","viewAll"], [".search-box input","search"],
  ["#statusFilter option[value=all]","allStatus"], ["#statusFilter option[value=discount]","onSaleFilter"],
  ["#statusFilter option[value=target]","targetFilter"], ["#statusFilter option[value=regular]","regularFilter"],
  [".product-table th:nth-child(1)","product"], [".product-table th:nth-child(2)","store"],
  [".product-table th:nth-child(3)","price"], [".product-table th:nth-child(4)","change"], [".product-table th:nth-child(5)","status"],
  [".stores-panel .eyebrow","sources"], [".stores-panel h2","monitoredStores"], [".stores-panel .wide-quiet","manageStores"],
  [".activity-panel .eyebrow","latestChanges"], [".activity-panel h2","recentActivity"],
  [".activity-panel .wide-quiet","activity"], [".demo-note","sampleData"], [".footer span:last-child","prototype"],
  ["#modalTitle","addTitle"], [".modal label:nth-of-type(1)","name"], [".modal label:nth-of-type(2)","url"],
  [".modal label:nth-of-type(3)","currency"], [".modal label:nth-of-type(4)","currentPrice"],
  [".modal label:nth-of-type(5)","targetPrice"], [".form-hint","addHint"], [".submit-button","addWatchlist"]
 ];
 labels.forEach(([sel,key])=>{const el=$(sel);if(el&&key)el.textContent=t(key);});
 const subtitleKey = {overview:"overviewSubtitle",stores:"storesSubtitle",products:"productsSubtitle",history:"historySubtitle",alerts:"alertsSubtitle",settings:"settingsSubtitle"}[state.view];
 $("#pageSubtitle").textContent=t(subtitleKey);
 $("#breadcrumbCurrent").textContent=t(state.view);
 $("#pageTitle").innerHTML=`${t(state.view)}<span class="title-period">.</span>`;
 $("#languageToggle").textContent=language==="en"?"UA":"EN";
 $("#languageToggle").setAttribute("aria-label",language==="en"?"Switch to Ukrainian":"Switch to English");
 $("#emptyState").textContent=t("noMatches");
 renderProducts();
}

const products = [
 {id:1,name:"Technical shell jacket",category:"Outerwear · Black",store:"A-COLD-WALL*",price:240,old:300,currency:"GBP",change:-20,status:"discount",symbol:"AC"},
 {id:2,name:"Panelled utility trousers",category:"Trousers · Charcoal",store:"A-COLD-WALL*",price:195,old:195,currency:"GBP",change:0,status:"regular",symbol:"AC"},
 {id:3,name:"Oversized hoodie",category:"Sweatshirts · Grey",store:"Our Legacy",price:168,old:240,currency:"EUR",change:-30,status:"target",symbol:"OL"},
 {id:4,name:"Third Cut denim",category:"Denim · Washed blue",store:"Our Legacy",price:220,old:220,currency:"EUR",change:0,status:"regular",symbol:"OL"},
 {id:5,name:"Ghost piece overshirt",category:"Outerwear · Olive",store:"Stone Island",price:280,old:350,currency:"EUR",change:-20,status:"discount",symbol:"SI"},
 {id:6,name:"Compass logo sweatshirt",category:"Sweatshirts · Navy",store:"Stone Island",price:165,old:220,currency:"EUR",change:-25,status:"discount",symbol:"SI"}
];
const stores = [
 {name:"A-COLD-WALL*",code:"AC",products:2,status:"Monitoring"},
 {name:"Stone Island",code:"SI",products:2,status:"Monitoring"},
 {name:"Our Legacy",code:"OL",products:2,status:"Monitoring"}
];
const rates = {GBP:1,EUR:1.17,USD:1.28,UAH:53.2};
const symbols = {GBP:"£",EUR:"€",USD:"$",UAH:"₴"};
const state = {view:"overview",currency:"store",query:"",filter:"all"};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function money(value,currency){return `${symbols[currency]}${Number(value).toLocaleString("en-GB",{minimumFractionDigits:0,maximumFractionDigits:2})}`;}
function converted(p){if(state.currency==="store")return {price:p.price,old:p.old,currency:p.currency};const base=p.price/rates[p.currency];return {price:base*rates[state.currency],old:p.old/rates[p.currency]*rates[state.currency],currency:state.currency};}
function renderProducts(){
 const filtered=products.filter(p=>{
  const q=state.query.toLowerCase();
  const matches=!q||`${p.name} ${p.store} ${p.category}`.toLowerCase().includes(q);
  const status=state.filter==="all"||(state.filter==="discount"&&p.status!=="regular")||(state.filter===p.status);
  const view=state.view!=="stores"&&state.view!=="settings"&&state.view!=="alerts"&&state.view!=="history";
  return matches&&status&&view;
 });
 $("#productRows").innerHTML=filtered.map(p=>{
  const v=converted(p), diff=p.old?Math.round((p.price-p.old)/p.old*100):0;
  const pill=p.status==="target"?'<span class="status-pill target">Target reached</span>':p.status==="regular"?'<span class="status-pill regular">Regular</span>':'<span class="status-pill sale">● On sale</span>';
  return `<tr><td><div class="product-cell"><div class="product-thumb">${p.symbol}</div><div><div class="product-name">${p.name}</div><div class="product-category">${p.category}</div></div></div></td><td><span class="store-name">${p.store}</span></td><td><div class="price-main">${money(v.price,v.currency)}</div>${p.old>p.price?`<div class="price-old">${money(v.old,v.currency)}</div>`:""}</td><td>${diff<0?`<span class="change-down">↓ ${Math.abs(diff)}%</span>`:'<span class="change-flat">—</span>'}</td><td>${pill}</td><td><button class="row-more" title="Product options" data-id="${p.id}">···</button></td></tr>`;
 }).join("");
 $("#emptyState").hidden=filtered.length>0;
 $("#showingCount").textContent=`${t("showing")} ${filtered.length} ${filtered.length===1?t("productOne"):t("productMany")}`;
}
function renderStores(){
 $("#storeList").innerHTML=stores.map(s=>`<div class="store-item"><div class="store-logo">${s.code}</div><div class="store-info"><strong>${s.name}</strong><small>${s.products} tracked products</small></div><span class="store-status">● ${s.status}</span></div>`).join("");
}
const viewCopy={
 overview:["Overview","A clear view of the stores and products on your radar."],
 stores:["Stores","Manage the retailers connected to your watchlist."],
 products:["Products","Your tracked items, current prices and target prices."],
 history:["Price history","Follow price movements across your tracked products."],
 alerts:["Alerts","Review price drops and notification activity."],
 settings:["Settings","Configure your workspace and monitoring preferences."]
};
function setView(view){
 state.view=view; $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
 $("#pageTitle").innerHTML=`${viewCopy[view][0]}<span class="title-period">.</span>`;
 $("#pageSubtitle").textContent=viewCopy[view][1]; $("#breadcrumbCurrent").textContent=viewCopy[view][0];
 renderProducts(); $("#sidebar").classList.remove("open");
}
$$("[data-view]").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.view)));
$("#searchInput").addEventListener("input",e=>{state.query=e.target.value;renderProducts()});
$("#statusFilter").addEventListener("change",e=>{state.filter=e.target.value;renderProducts()});
$("#currencySelect").addEventListener("change",e=>{state.currency=e.target.value;renderProducts()});
$("#addProductBtn").addEventListener("click",()=>{$("#modalBackdrop").hidden=false;});
$("#closeModal").addEventListener("click",()=>$("#modalBackdrop").hidden=true);
$("#modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")e.currentTarget.hidden=true;});
$("#productForm").addEventListener("submit",e=>{
 e.preventDefault();const f=new FormData(e.currentTarget),price=Number(f.get("price")),target=Number(f.get("target")||0),currency=f.get("currency");
 products.unshift({id:Date.now(),name:f.get("name"),category:"Custom product",store:f.get("store"),price,old:price,currency,change:0,status:target&&price<=target?"target":"regular",symbol:"＋"});
 $("#trackedCount").textContent=String(products.length).padStart(2,"0");renderProducts();e.currentTarget.reset();$("#modalBackdrop").hidden=true;
});
$("#addStoreBtn").addEventListener("click",()=>alert("Store management will be connected in the next development stage."));
$("#exportBtn").addEventListener("click",()=>{
 const rows=[["Product","Store","Price","Currency","Status"],...products.map(p=>[p.name,p.store,p.price,p.currency,p.status])];
 const csv=rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download="sale-tracker-watchlist.csv";a.click();URL.revokeObjectURL(a.href);
});
$("#mobileMenu").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#languageToggle").addEventListener("click",()=>{language=language==="en"?"ua":"en";localStorage.setItem("saleTrackerLanguage",language);applyLanguage();});
renderProducts();renderStores();applyLanguage();

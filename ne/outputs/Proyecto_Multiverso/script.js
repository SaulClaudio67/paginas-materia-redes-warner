const API_URL = "https://rickandmortyapi.com/api/character";
const STORAGE_KEY = "portal-multiverso-favoritos-v1";
const THEME_KEY = "portal-multiverso-tema-v1";
const state = { characters: [], next: null, prev: null, page: 1, favoritesOnly: false, favorites: loadFavorites(), sortAZ: false };
const elements = {
  grid: document.querySelector("#catalogo"), notice: document.querySelector("#notice"), search: document.querySelector("#search-input"),
  status: document.querySelector("#status-filter"), species: document.querySelector("#species-filter"), favorites: document.querySelector("#favorites-toggle"),
  favoriteCount: document.querySelector("#favorite-count"), sort: document.querySelector("#sort-toggle"), title: document.querySelector("#catalog-title"),
  results: document.querySelector("#result-count"), prev: document.querySelector("#prev-page"), next: document.querySelector("#next-page"),
  page: document.querySelector("#page-label"), theme: document.querySelector("#theme-toggle")
};
function loadFavorites(){ try { const value=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]"); return new Set(Array.isArray(value)?value.map(Number).filter(Number.isFinite):[]); } catch { return new Set(); } }
function saveFavorites(){ try { localStorage.setItem(STORAGE_KEY,JSON.stringify([...state.favorites])); } catch { setNotice("El navegador no permitió guardar favoritos en este dispositivo.",true); } }
function setNotice(message,isError=false){ elements.notice.textContent=message; elements.notice.classList.toggle("error",isError); }
async function loadCharacters(url=API_URL){
  setNotice("Cargando personajes…"); elements.grid.setAttribute("aria-busy","true");
  try {
    const response=await fetch(url);
    if(!response.ok) throw new Error(response.status===404?"No se encontraron personajes para esta consulta.":`La API respondió con el error ${response.status}.`);
    const data=await response.json();
    if(!Array.isArray(data.results)) throw new Error("La respuesta de la API no tiene el formato esperado.");
    state.characters=data.results; state.next=data.info?.next||null; state.prev=data.info?.prev||null;
    state.page=url===API_URL?1:Number(new URL(url).searchParams.get("page")||1);
    fillSpecies(); render(); setNotice(`${data.info?.count ?? state.characters.length} personajes disponibles en la API.`);
  } catch(error){
    if(!navigator.onLine) setNotice("No hay conexión a internet. Revisa tu red e inténtalo de nuevo.",true);
    else setNotice(`${error.message||"No se pudo consultar la API."} Recarga la página para volver a intentar.`,true);
    if(!state.characters.length) elements.grid.innerHTML='<p class="empty">No fue posible cargar personajes. Comprueba tu conexión y recarga.</p>';
  } finally { elements.grid.removeAttribute("aria-busy"); updatePagination(); }
}
function fillSpecies(){
 const selected=elements.species.value; const species=[...new Set(state.characters.map(c=>c.species).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"es"));
 elements.species.innerHTML='<option value="all">Todas</option>'+species.map(item=>`<option value="${escapeHTML(item)}">${escapeHTML(item)}</option>`).join("");
 if(species.includes(selected)) elements.species.value=selected;
}
function escapeHTML(value=""){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
function render(){
 const query=elements.search.value.trim().toLocaleLowerCase("es"); const status=elements.status.value; const species=elements.species.value;
 let list=state.characters.filter(c=>c.name.toLocaleLowerCase("es").includes(query)&&(status==="all"||c.status.toLowerCase()===status)&&(species==="all"||c.species===species)&&(!state.favoritesOnly||state.favorites.has(c.id)));
 if(state.sortAZ) list.sort((a,b)=>a.name.localeCompare(b.name,"es"));
 elements.title.textContent=state.favoritesOnly?"Mis favoritos":"Personajes"; elements.results.textContent=`${list.length} en esta página`;
 elements.favoriteCount.textContent=String(state.favorites.size); elements.favorites.setAttribute("aria-pressed",String(state.favoritesOnly));
 elements.sort.setAttribute("aria-pressed",String(state.sortAZ)); elements.sort.textContent=state.sortAZ?"Orden: A–Z":"Orden: API";
 if(!list.length){elements.grid.innerHTML=`<p class="empty">${state.favoritesOnly&&state.favorites.size===0?"Aún no guardas favoritos.":"No hay personajes que coincidan. Prueba otros filtros."}</p>`;return;}
 elements.grid.innerHTML=list.map(character=>{
  const favorite=state.favorites.has(character.id); const statusLabel={Alive:"Vivo",Dead:"Fallecido",unknown:"Desconocido"}[character.status]||character.status;
  return `<article class="card"><div class="portrait"><img src="${escapeHTML(character.image)}" alt="Retrato de ${escapeHTML(character.name)}" loading="lazy"><button class="favorite-button" type="button" data-favorite="${character.id}" aria-label="${favorite?"Quitar":"Agregar"} ${escapeHTML(character.name)} ${favorite?"de":"a"} favoritos" aria-pressed="${favorite}">${favorite?"★":"☆"}</button></div><div class="card-body"><h3>${escapeHTML(character.name)}</h3><div class="badges"><span class="badge">${escapeHTML(statusLabel)}</span><span class="badge">${escapeHTML(character.species)}</span></div><p><b>Género:</b> ${escapeHTML(character.gender)}</p><p><b>Origen:</b> ${escapeHTML(character.origin?.name||"Desconocido")}</p><p><b>Ubicación:</b> ${escapeHTML(character.location?.name||"Desconocida")}</p></div></article>`;
 }).join("");
}
function updatePagination(){elements.prev.disabled=!state.prev;elements.next.disabled=!state.next;elements.page.textContent=`Página ${state.page}`;}
function setTheme(dark){document.documentElement.dataset.theme=dark?"dark":"light";elements.theme.setAttribute("aria-pressed",String(dark));elements.theme.querySelector("span").textContent=dark?"Tema claro":"Tema oscuro";try{localStorage.setItem(THEME_KEY,dark?"dark":"light");}catch{}}
let savedTheme="light";try{savedTheme=localStorage.getItem(THEME_KEY)||"light";}catch{}setTheme(savedTheme==="dark");
elements.search.addEventListener("input",render); elements.status.addEventListener("change",render); elements.species.addEventListener("change",render);
elements.grid.addEventListener("click",event=>{const button=event.target.closest("[data-favorite]");if(!button)return;const id=Number(button.dataset.favorite);state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);saveFavorites();render();});
elements.favorites.addEventListener("click",()=>{state.favoritesOnly=!state.favoritesOnly;render();});
elements.sort.addEventListener("click",()=>{state.sortAZ=!state.sortAZ;render();});
elements.prev.addEventListener("click",()=>state.prev&&loadCharacters(state.prev));elements.next.addEventListener("click",()=>state.next&&loadCharacters(state.next));
elements.theme.addEventListener("click",()=>setTheme(document.documentElement.dataset.theme!=="dark"));
loadCharacters();

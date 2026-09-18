import {useEffect,useState} from 'react';
import type {SystemId} from './anatomy';

export type Lang = 'en'|'uz';

const STORAGE_KEY='human-atlas-lang';

export function useLang():[Lang,(lang:Lang)=>void]{
 const [lang,setLang]=useState<Lang>(()=>{
  try{const saved=typeof localStorage!=='undefined'?localStorage.getItem(STORAGE_KEY):null;if(saved==='uz'||saved==='en')return saved;}catch{/* storage unavailable */}
  return 'en';
 });
 useEffect(()=>{try{localStorage.setItem(STORAGE_KEY,lang);}catch{/* storage unavailable */}if(typeof document!=='undefined')document.documentElement.lang=lang;},[lang]);
 return [lang,setLang];
}

// Uzbek names/descriptions for each anatomical system. English originals live in ./anatomy
// and are used as-is; these are looked up only when the interface language is Uzbek.
export const SYSTEM_NAME_UZ:Record<SystemId,string> = {
 skeletal:'Skelet',
 muscular:'Mushaklar',
 cardiac:'Yurak',
 sensory:'Sezgi organlari',
 arterial:'Arteriyalar',
 venous:'Venalar',
 nervous:'Nerv tizimi',
 respiratory:'Nafas olish tizimi',
 digestive:'Ovqat hazm qilish tizimi',
 urinary:'Siydik ajratish tizimi',
 lymphatic:'Limfa tizimi',
 endocrine:'Endokrin tizim',
 reproductive:'Reproduktiv tizim',
 integumentary:'Tana yuzasi',
 connective:'Biriktiruvchi to\u2019qima',
};

export const SYSTEM_DESCRIPTION_UZ:Record<SystemId,string> = {
 skeletal:'Suyaklar tananing tayanch skeletini tashkil qiladi, ichki organlarni himoya qiladi va mushaklar uchun biriktiruvchi nuqtalar yaratadi. Ularning ichki to\u2019qimasi minerallarni saqlaydi va qon hujayralarini ishlab chiqaradi.',
 muscular:'Skelet mushaklari o\u2019zlarining biriktirilgan joylarini tortish orqali harakat hosil qiladi. Paylar bilan birgalikda ular bo\u2019g\u2019imlarni harakatga keltiradi, tana holatini barqarorlashtiradi va issiqlik ishlab chiqaradi.',
 cardiac:'Yurak \u2014 to\u2019rt kamerali mushakli nasos. Uning qopqoqlari qonni o\u2019pka va sistema qon aylanish davrlari bo\u2019ylab oldinga yo\u2019naltiradi.',
 sensory:'Ushbu strukturalar ko\u2019rish, eshitish va muvozanat kabi maxsus sezgilarga hissa qo\u2019shadi. Ularning ixtisoslashgan to\u2019qimalari qo\u2019zg\u2019atuvchilarni aniqlaydi va nerv tizimi bilan birga ishlab, ma\u2019lumotni uzatadi.',
 arterial:'Yurak qonni qon aylanish tizimi bo\u2019ylab haydaydi. Arteriyalar qonni yurakdan to\u2019qimalarga yoki o\u2019pka aylanish davrida o\u2019pkalarga olib boradi.',
 venous:'Venalar qonni yurak tomon qaytaradi. Yuza va chuqur tarmoqlar to\u2019qimalardan qon yig\u2019adi; o\u2019pka venalari kislorodlangan qonni o\u2019pkalardan qaytarib olib keladi.',
 nervous:'Miya, orqa miya va periferik nervlar signallarni o\u2019tkazadi va qayta ishlaydi. Ular sezgi, harakat, muvofiqlashtirish va tananing avtomatik funksiyalarini boshqarishga yordam beradi.',
 respiratory:'Nafas yo\u2019llari havoni o\u2019pkalarga olib boradi, u yerda kislorod va karbonat angidrid havo va qon o\u2019rtasida almashinadi. Nafas olish nafas mushaklari hosil qiladigan bosim o\u2019zgarishlariga bog\u2019liq.',
 digestive:'Ovqat hazm qilish yo\u2019li ovqatni parchalaydi, oziqa moddalari va suvni so\u2019radi hamda chiqindilarni oldinga siljitadi. Yordamchi organlar o\u2019t suyuqligi va hazm fermentlarini yetkazib beradi.',
 urinary:'Buyraklar qonni filtrlaydi va suyuqlik, elektrolit va kislota-ishqor balansini boshqaradi. Siydik siydik yo\u2019llari orqali qopga o\u2019tadi va siydik chiqarish kanali orqali chiqadi.',
 lymphatic:'Limfa tomirlari to\u2019qimadagi ortiqcha suyuqlikni qon aylanishiga qaytaradi. Limfa tugunlari va boshqa limfoid organlar immunitet nazorati va javob choralarini qo\u2019llab-quvvatlaydi.',
 endocrine:'Endokrin organlar qonga gormonlar chiqarib, moddalar almashinuvi, o\u2019sish, stress javoblari va reproduktiv jarayonlarni muvofiqlashtiradi.',
 reproductive:'Bu yerda tasvirlangan erkak reproduktiv strukturalari sperma ishlab chiqarish, yetilish, tashilish va jinsiy gormonlar ishlab chiqarishga hissa qo\u2019shadi.',
 integumentary:'Tana yuzasi tashqi anatomik mo\u2019ljal bo\u2019lib xizmat qiladi. Teri qoplami tizimi himoya to\u2019sig\u2019ini hosil qiladi hamda sezgi va harorat tartibga solishga hissa qo\u2019shadi.',
 connective:'Tog\u2019ay, boylamlar va boshqa biriktiruvchi to\u2019qimalar strukturalarni qo\u2019llab-quvvatlaydi, bog\u2019laydi va ajratadi. Ularning vazifalari orasida bo\u2019g\u2019imlarni barqarorlashtirish va mexanik yukni taqsimlash bor.',
};

// Uzbek translations for the short, named-structure explanations. Keys mirror
// EXPLANATIONS in ./anatomy exactly (lower-case structure name).
export const EXPLANATIONS_UZ:Record<string,string> = {
 'heart':'Ko\u2019krak qafasidagi mushakli nasos. Uning o\u2019ng tomoni qonni o\u2019pkalarga, chap tomoni esa qonni sistema qon aylanishi bo\u2019ylab yuboradi.',
 'liver':'Diafragmaning o\u2019ng tomoni ostida joylashgan katta organ. U so\u2019rilgan oziqa moddalarni qayta ishlaydi, o\u2019t suyuqligini ishlab chiqaradi va qonda tashiladigan ko\u2019plab oqsillarni sintez qiladi.',
 'brain':'Nerv tizimining markaziy organi. Uning o\u2019zaro bog\u2019langan sohalari idrok, harakat, xotira, nutq va tana funksiyalarini tartibga solishni qo\u2019llab-quvvatlaydi.',
 'stomach':'Qizilo\u2019ngach va ingichka ichak orasidagi mushakli bo\u2019shliq. U ovqatni kislota va fermentlar bilan aralashtirib saqlaydi, so\u2019ngra o\u2019n ikki barmoqli ichakka yuboradi.',
 'spleen':'Qorinning yuqori chap qismidagi limfoid organ. U qonni filtrlaydi, eskirgan qon hujayralarini olib tashlaydi va immun javoblarida ishtirok etadi.',
 'pancreas':'Hazm qilish va endokrin vazifalarini bajaruvchi qorin organi. U ingichka ichakka fermentlar yetkazib beradi va insulin hamda glyukagon kabi gormonlarni ishlab chiqaradi.',
 'urinary bladder':'Buyraklardan siydik yo\u2019llari orqali kelayotgan siydikni saqlaydigan chanoqdagi mushakli idish.',
 'trachea':'Halqumni bronxlar bilan bog\u2019laydigan asosiy nafas yo\u2019li. Uning tog\u2019ay halqalari nafas olish paytida yo\u2019lni ochiq saqlaydi.',
 'diaphragm':'Ko\u2019krak va qorinni ajratib turuvchi keng mushak. U qisqarganda ko\u2019krak hajmini oshiradi va havoni o\u2019pkaga tortishga yordam beradi.',
};

const VIEW_LABEL_UZ:Record<string,string> = {'three-quarter':'uch chorak',front:'old',side:'yon',back:'orqa'};

export function systemName(id:SystemId,fallback:string,lang:Lang){return lang==='uz'?(SYSTEM_NAME_UZ[id]??fallback):fallback;}
export function systemDescription(id:SystemId,fallback:string,lang:Lang){return lang==='uz'?(SYSTEM_DESCRIPTION_UZ[id]??fallback):fallback;}
export function localizedExplanation(name:string,fallback:string,lang:Lang){if(lang!=='uz')return fallback;return EXPLANATIONS_UZ[name.toLowerCase()]??fallback;}
export function viewLabel(view:string,lang:Lang){return lang==='uz'?(VIEW_LABEL_UZ[view]??view):view;}

export interface Strings {
 languageToggleAria:string;
 eyebrowInteractive:string;
 appName:string;
 modeledPiecesLabel:(n:number)=>string;
 explorerPanelsAria:string;
 findStructure:string;
 searchAnatomyAria:string;
 aboutAtlasAria:string;
 anatomicalLayersAria:string;
 systemsLabel:string;
 closeSystemsAria:string;
 presetAll:string;
 presetSkeleton:string;
 presetOrgans:string;
 showOnly:(name:string)=>string;
 showSystemAria:(name:string)=>string;
 piecesVisible:(n:number)=>string;
 hideAll:string;
 findAnatomyAria:string;
 closeSearchAria:string;
 searchPlaceholder:string;
 searchInputAria:string;
 noMatches:string;
 pieceSingular:string;
 piecePlural:string;
 searchNoteFiltered:string;
 searchNoteDefault:string;
 cameraControlsAria:string;
 viewAria:(label:string)=>string;
 pauseRotation:string;
 rotateBody:string;
 autoRotateTitle:string;
 resetViewAria:string;
 resetTitle:string;
 selectedStructureFallback:string;
 anatomicalInventory:string;
 separatedStructures:string;
 adultHumanMale:string;
 openSystemLayersAria:string;
 explodeAnatomy:string;
 assembled:string;
 everyPiece:string;
 assembleResetAria:string;
 dragToPan:string;
 dragToOrbit:string;
 pinchToZoom:string;
 tapToInspect:string;
 sourceCredits:string;
 preparingAnatomy:string;
 loadingPieces:(progress:number,n:number)=>string;
 reloadViewer:string;
 catalogueError:string;
 anatomyFallback:string;
 contextNote:string;
 atlasReference:string;
 selectedPieces:string;
 includedStructures:string;
 andMorePieces:(n:number)=>string;
 viewAnatomicalSource:string;
 showSurroundingAnatomy:string;
 isolateStructure:string;
 clearSelection:string;
 sourceScope:string;
 aBodyRevealed:string;
 exploreAdultMale:string;
 maleBodyParts:string;
 meshesConceptsLine:string;
 referenceNote:string;
 colorsNote:string;
 sourceHeading:string;
 bodyPartsLicense:string;
 datasetLicense:string;
 originalGeometryMetadata:string;
 readSourcePublication:string;
 docTitle:string;
 docDescription:string;
 browserNoWebGL:string;
 sceneAriaLabel:string;
 geometryError:string;
 loadError:string;
 contextLost:string;
}

export const STRINGS:Record<Lang,Strings> = {
 en:{
  languageToggleAria:'Switch language',
  eyebrowInteractive:'INTERACTIVE ANATOMY',
  appName:'Human Atlas',
  modeledPiecesLabel:n=>`${n.toLocaleString()} modeled pieces`,
  explorerPanelsAria:'Explorer panels',
  findStructure:'Find a structure',
  searchAnatomyAria:'Search anatomy',
  aboutAtlasAria:'About this atlas',
  anatomicalLayersAria:'Anatomical layers',
  systemsLabel:'Systems',
  closeSystemsAria:'Close systems',
  presetAll:'All',
  presetSkeleton:'Skeleton',
  presetOrgans:'Organs',
  showOnly:name=>`Show only ${name}`,
  showSystemAria:name=>`Show ${name}`,
  piecesVisible:n=>`${n.toLocaleString()} pieces visible`,
  hideAll:'Hide all',
  findAnatomyAria:'Find anatomy',
  closeSearchAria:'Close search',
  searchPlaceholder:'Heart, femur, cranial nerve\u2026',
  searchInputAria:'Search named anatomical structures',
  noMatches:'No structures match your search.',
  pieceSingular:'piece',
  piecePlural:'pieces',
  searchNoteFiltered:'Showing up to 80 matches. Refine your search to find smaller structures.',
  searchNoteDefault:'Start with a major organ, or search every named structure.',
  cameraControlsAria:'Camera controls',
  viewAria:label=>`${label} view`,
  pauseRotation:'Pause rotation',
  rotateBody:'Rotate body',
  autoRotateTitle:'Auto rotate',
  resetViewAria:'Reset view and layers',
  resetTitle:'Reset',
  selectedStructureFallback:'SELECTED STRUCTURE',
  anatomicalInventory:'ANATOMICAL INVENTORY',
  separatedStructures:'SEPARATED STRUCTURES',
  adultHumanMale:'ADULT HUMAN \u00b7 MALE',
  openSystemLayersAria:'Open system layers',
  explodeAnatomy:'Explode anatomy',
  assembled:'Assembled',
  everyPiece:'Every piece',
  assembleResetAria:'Assemble and reset',
  dragToPan:'Drag to pan',
  dragToOrbit:'Drag to orbit',
  pinchToZoom:'Pinch to zoom',
  tapToInspect:'Tap to inspect',
  sourceCredits:'Source & credits',
  preparingAnatomy:'Preparing the anatomy',
  loadingPieces:(progress,n)=>`${progress}% \u00b7 Loading ${n.toLocaleString()} pieces`,
  reloadViewer:'Reload viewer',
  catalogueError:'The anatomy catalogue could not be loaded.',
  anatomyFallback:'ANATOMY',
  contextNote:'System overview \u00b7 structure identified from source anatomy',
  atlasReference:'Atlas reference',
  selectedPieces:'Selected pieces',
  includedStructures:'Included structures',
  andMorePieces:n=>`And ${n} more modeled pieces.`,
  viewAnatomicalSource:'View anatomical source',
  showSurroundingAnatomy:'Show surrounding anatomy',
  isolateStructure:'Isolate structure',
  clearSelection:'Clear selection',
  sourceScope:'SOURCE & SCOPE',
  aBodyRevealed:'A body, revealed.',
  exploreAdultMale:'Explore the adult male reference anatomy from BodyParts3D.',
  maleBodyParts:'Male \u00b7 BodyParts3D',
  meshesConceptsLine:'2,234 individual meshes and 3,432 named concepts from an adult male reference anatomy.',
  referenceNote:'This reference does not contain every human structure or variation. Named concepts can contain multiple pieces; each source mesh is rendered once.',
  colorsNote:'Colors and system groupings are designed for exploration. The geometry is simplified for the web, and short explanations provide general educational context. This is an anatomical reference, not a diagnostic or surgical tool.',
  sourceHeading:'Source',
  bodyPartsLicense:'BodyParts3D, \u00a9 The Database Center for Life Science licensed under CC Attribution 4.0 International.',
  datasetLicense:'Dataset license',
  originalGeometryMetadata:'Original geometry & metadata',
  readSourcePublication:'Read the source publication',
  docTitle:'Human Atlas',
  docDescription:'An interactive atlas of the human body. Explore named anatomical structures, reveal organ systems, and inspect individual parts in 3D.',
  browserNoWebGL:'This browser could not start the 3D viewer. Please try a browser with WebGL enabled.',
  sceneAriaLabel:'Interactive human anatomy. Drag to orbit, pinch or scroll to zoom, and tap a structure to inspect it.',
  geometryError:'Could not assemble anatomy geometry.',
  loadError:'Could not load the anatomy.',
  contextLost:'The 3D session was paused by your device. Reload to continue.',
 },
 uz:{
  languageToggleAria:'Tilni almashtirish',
  eyebrowInteractive:'INTERAKTIV ANATOMIYA',
  appName:'Inson Atlasi',
  modeledPiecesLabel:n=>`${n.toLocaleString()} ta modellashtirilgan qism`,
  explorerPanelsAria:'Ko\u2019rish panellari',
  findStructure:'Struktura qidirish',
  searchAnatomyAria:'Anatomiya bo\u2019yicha qidirish',
  aboutAtlasAria:'Ushbu atlas haqida',
  anatomicalLayersAria:'Anatomik qatlamlar',
  systemsLabel:'Tizimlar',
  closeSystemsAria:'Tizimlarni yopish',
  presetAll:'Barchasi',
  presetSkeleton:'Skelet',
  presetOrgans:'Organlar',
  showOnly:name=>`Faqat ${name}: ko\u2019rsatish`,
  showSystemAria:name=>`${name}ni ko\u2019rsatish`,
  piecesVisible:n=>`${n.toLocaleString()} ta qism ko\u2019rinmoqda`,
  hideAll:'Barchasini yashirish',
  findAnatomyAria:'Anatomiya qidirish',
  closeSearchAria:'Qidiruvni yopish',
  searchPlaceholder:'Yurak, son suyagi, bosh miya nervi\u2026',
  searchInputAria:'Nomlangan anatomik strukturalarni qidirish',
  noMatches:'Qidiruvingizga mos struktura topilmadi.',
  pieceSingular:'qism',
  piecePlural:'qism',
  searchNoteFiltered:'80 tagacha moslik ko\u2019rsatilmoqda. Kichikroq strukturalarni topish uchun qidiruvni aniqlashtiring.',
  searchNoteDefault:'Asosiy organdan boshlang yoki nomlangan har qanday strukturani qidiring.',
  cameraControlsAria:'Kamera boshqaruvi',
  viewAria:label=>`${label} ko\u2019rinishi`,
  pauseRotation:'Aylanishni to\u2019xtatish',
  rotateBody:'Tanani aylantirish',
  autoRotateTitle:'Avtomatik aylanish',
  resetViewAria:'Ko\u2019rinish va qatlamlarni tiklash',
  resetTitle:'Tiklash',
  selectedStructureFallback:'TANLANGAN STRUKTURA',
  anatomicalInventory:'ANATOMIK INVENTAR',
  separatedStructures:'AJRATILGAN STRUKTURALAR',
  adultHumanMale:'KATTA YOSHDAGI ODAM \u00b7 ERKAK',
  openSystemLayersAria:'Tizim qatlamlarini ochish',
  explodeAnatomy:'Anatomiyani yoyish',
  assembled:'Yig\u2019ilgan',
  everyPiece:'Har bir qism',
  assembleResetAria:'Yig\u2019ish va tiklash',
  dragToPan:'Surish uchun torting',
  dragToOrbit:'Aylantirish uchun torting',
  pinchToZoom:'Kattalashtirish uchun siqing',
  tapToInspect:'Ko\u2019rish uchun bosing',
  sourceCredits:'Manba va mualliflik',
  preparingAnatomy:'Anatomiya tayyorlanmoqda',
  loadingPieces:(progress,n)=>`${progress}% \u00b7 ${n.toLocaleString()} ta qism yuklanmoqda`,
  reloadViewer:'Ko\u2019rgichni qayta yuklash',
  catalogueError:'Anatomiya katalogini yuklab bo\u2019lmadi.',
  anatomyFallback:'ANATOMIYA',
  contextNote:'Tizim sharhi \u00b7 struktura manba anatomiyasidan aniqlangan',
  atlasReference:'Atlas ma\u2019lumotnomasi',
  selectedPieces:'Tanlangan qismlar',
  includedStructures:'Kiritilgan strukturalar',
  andMorePieces:n=>`Va yana ${n} ta modellashtirilgan qism.`,
  viewAnatomicalSource:'Anatomik manbani ko\u2019rish',
  showSurroundingAnatomy:'Atrofdagi anatomiyani ko\u2019rsatish',
  isolateStructure:'Strukturani ajratish',
  clearSelection:'Tanlovni bekor qilish',
  sourceScope:'MANBA VA QAMROV',
  aBodyRevealed:'Tana, ochib berilgan.',
  exploreAdultMale:'BodyParts3D dan olingan katta yoshdagi erkak namunaviy anatomiyasini o\u2019rganing.',
  maleBodyParts:'Erkak \u00b7 BodyParts3D',
  meshesConceptsLine:'Katta yoshdagi erkak namunaviy anatomiyasidan 2 234 ta alohida mesh va 3 432 ta nomlangan tushuncha.',
  referenceNote:'Ushbu manba barcha inson strukturalari yoki variatsiyalarini o\u2019z ichiga olmaydi. Nomlangan tushunchalar bir nechta qismlardan iborat bo\u2019lishi mumkin; har bir manba mesh faqat bir marta chizilgan.',
  colorsNote:'Ranglar va tizim guruhlari o\u2019rganish uchun mo\u2019ljallangan. Geometriya veb uchun soddalashtirilgan, qisqa izohlar esa umumiy ta\u2019limiy kontekst beradi. Bu diagnostika yoki jarrohlik vositasi emas, balki anatomik manba hisoblanadi.',
  sourceHeading:'Manba',
  bodyPartsLicense:'BodyParts3D, \u00a9 The Database Center for Life Science, CC Attribution 4.0 International litsenziyasi asosida taqdim etilgan.',
  datasetLicense:'Ma\u2019lumotlar to\u2019plami litsenziyasi',
  originalGeometryMetadata:'Asl geometriya va metama\u2019lumotlar',
  readSourcePublication:'Manba nashrini o\u2019qish',
  docTitle:'Inson Atlasi',
  docDescription:'Inson tanasining interaktiv atlasi. Nomlangan anatomik strukturalarni o\u2019rganing, organ tizimlarini oching va alohida qismlarni 3D formatda ko\u2019ring.',
  browserNoWebGL:'Ushbu brauzer 3D ko\u2019rgichni ishga tushira olmadi. Iltimos, WebGL yoqilgan brauzerdan foydalaning.',
  sceneAriaLabel:'Interaktiv inson anatomiyasi. Aylantirish uchun torting, kattalashtirish uchun siqing yoki g\u2019ildirakni aylantiring, strukturani ko\u2019rish uchun bosing.',
  geometryError:'Anatomiya geometriyasini yig\u2019ib bo\u2019lmadi.',
  loadError:'Anatomiyani yuklab bo\u2019lmadi.',
  contextLost:'3D sessiya qurilmangiz tomonidan pauza qilindi. Davom etish uchun qayta yuklang.',
 },
};

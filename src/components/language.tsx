'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
type Language = 'en' | 'zh';
const LanguageContext = createContext<{language:Language;setLanguage:(language:Language)=>void}>({language:'en',setLanguage:()=>{}});
const translations: Record<string,string> = {
  'KLANG VALLEY & SURROUNDING AREAS':'巴生谷及周边地区',
  'ALUMINIUM · GLASS · CUSTOM WORKS':'铝材 · 玻璃 · 定制工程',
  'Home':'首页','Services':'服务项目','Projects':'工程案例','About us':'关于我们','Contact':'联系我们',
  'Skip to content':'跳至主要内容','Get a quotation':'获取报价','Request a quotation':'索取报价',
  'ALUMINIUM & GLASS SPECIALISTS':'铝材与玻璃工程专家','Spaces shaped':'塑造空间','by':'因光线与细节而精彩',
  'light & detail.':'光线与细节。','Thoughtful aluminium and glass solutions for homes, shops and commercial spaces across Klang Valley.':'为巴生谷住宅、商店及商业空间提供周到的铝材与玻璃解决方案。',
  'Explore our work':'浏览我们的作品','MADE TO MEASURE. MADE FOR YOUR SPACE.':'量身定制，贴合您的空间。',
  'ARCHITECTURAL INSPIRATION':'建筑灵感','Illustrative AI-generated image':'AI生成示意图片',
  '01 — INTRODUCING GENESIS':'01 — 认识 Genesis','Good spaces are':'美好空间','built on the':'始于','details.':'细节。',
  'From the first frame to the final finish, aluminium and glass shape how a space looks, feels and functions. Genesis Aluglass brings practical solutions and considered workmanship to residential, retail and commercial projects.':'从框架到最终饰面，铝材与玻璃塑造空间的外观、感受与功能。Genesis Aluglass 为住宅、零售及商业项目提供实用方案与细致工艺。',
  'Tell us what you have in mind. We’ll help you explore the right solution for your space.':'告诉我们您的构想，我们将协助您寻找适合空间的解决方案。',
  'Get to know Genesis':'认识 Genesis','Residential':'住宅','For homes and living spaces':'家居与生活空间',
  'Retail':'零售','For shops and storefronts':'商店与店面','Commercial':'商业','For offices and buildings':'办公室与商业建筑',
  '02 — WHAT WE DO':'02 — 我们的服务','Solutions for':'为各种空间提供','every space.':'合适的解决方案。',
  'Explore our aluminium and glass services for residential, retail and commercial projects.':'了解我们为住宅、零售及商业项目提供的铝材与玻璃服务。',
  'Aluminium windows & doors':'铝合金门窗','Glass works':'玻璃工程','Shopfronts':'商店玻璃门面','Glass partitions':'玻璃隔间',
  'Shower screens':'淋浴屏','Glass railings':'玻璃栏杆','Glass awnings & canopies':'玻璃雨棚与顶篷','Folding & sliding doors':'折叠门与推拉门','Customised works':'定制工程',
  'Explore all services':'查看所有服务','03 — FEATURED INSTALLATION':'03 — 精选安装案例',
  'Made to fit.':'量身打造。','Made to last.':'经久耐用。','ACTUAL GENESIS PROJECT':'GENESIS真实工程',
  'A real installation featuring black aluminium frames and frosted glass panels. Explore this project and the range of solutions Genesis Aluglass can help bring to life.':'此真实安装案例采用黑色铝合金框架及磨砂玻璃面板。浏览此项目，了解 Genesis Aluglass 可为您实现的多种方案。',
  'View project gallery':'查看工程图库','04 — POSSIBILITIES':'04 — 更多可能','See what glass':'看看玻璃如何','can':'为您','open up.':'拓展空间。',
  'Architectural images are illustrative references, not completed Genesis projects. Your own project photographs will take centre stage as the portfolio grows.':'建筑图片仅作示意参考，并非 Genesis 已完成的工程。随着作品集不断丰富，我们将以实际项目照片为主。',
  'ILLUSTRATIVE IMAGE':'示意图片','Commercial frontages':'商业玻璃门面',
  'HAVE A PROJECT IN MIND?':'您有工程计划吗？','Let’s make your':'让我们让您的','space work better.':'空间发挥更大价值。','Talk to Genesis':'联系 Genesis',
  'Aluminium & glass':'铝材与玻璃','for every space.':'适用于各种空间。','Explore the range of services available for residential, retail and commercial projects.':'了解我们为住宅、零售及商业项目提供的各类服务。',
  'OUR SERVICES':'我们的服务','WHAT WE CAN HELP WITH':'我们可以提供的服务','Made around':'围绕','your project.':'您的项目打造。',
  'Every space has different requirements. Share your ideas, measurements or reference images and start a conversation about the right solution.':'每个空间都有不同需求。欢迎分享您的构想、尺寸或参考图片，与我们讨论合适的方案。',
  'Clean, practical framing solutions for openings, natural light and everyday use.':'简洁实用的门窗框架方案，兼顾采光与日常使用。',
  'Glass elements selected to complement the function and character of your space.':'选择与空间功能及风格相配的玻璃元素。',
  'Glazed entrances and frontage solutions for retail and commercial environments.':'适用于零售及商业环境的玻璃入口与门面方案。',
  'Bring light through your interior while creating useful zones and separation.':'引入自然光，同时打造实用的室内分区。',
  'A clean glass finish for bathrooms and wet areas.':'为浴室及潮湿区域带来简洁的玻璃设计。',
  'Glass railing concepts for a more open architectural feel.':'以玻璃栏杆营造更开阔的建筑空间感。',
  'Glazed overhead features for selected exterior applications.':'适用于特定户外空间的玻璃顶篷设计。',
  'Space-conscious openings that connect indoor and outdoor areas.':'节省空间的开口设计，连接室内与户外区域。',
  'Discuss your dimensions, layout and project requirements with our team.':'欢迎与团队讨论尺寸、布局及工程需求。',
  'Enquire about this service':'咨询此项服务','NOT SURE WHAT YOU NEED?':'不确定需要什么服务？',
  'Let’s talk through':'让我们一起讨论','your requirements.':'您的需求。','Start an enquiry':'开始咨询',
  'SELECTED WORK / 02':'精选作品 / 02','Ideas made':'让构想','real.':'成为现实。',
  'A look at aluminium and glass applications, including a genuine Genesis Aluglass installation and AI-generated architectural references.':'展示铝材与玻璃的应用案例，包括 Genesis Aluglass 真实安装项目及 AI 生成的建筑参考图。',
  'PROJECT GALLERY':'工程图库','ACTUAL WORK + VISUAL REFERENCES':'真实工程 + 视觉参考',
  'ACTUAL PROJECT PHOTO':'真实工程照片','GENESIS ALUGLASS / INSTALLATION 001':'GENESIS ALUGLASS / 安装案例 001',
  'Frosted glass':'磨砂玻璃','swing doors.':'平开门。','A supplied project photograph showing a pair of black aluminium framed frosted glass swing doors. This is presented as actual Genesis project photography.':'此项目照片展示一对黑色铝合金框架磨砂玻璃平开门，为 Genesis 真实工程照片。',
  'TYPE':'类型','Door installation':'门安装','FRAME':'框架','Black aluminium':'黑色铝合金','GLAZING':'玻璃',
  'Enquire about a similar solution':'咨询类似方案','Visualise the':'想象','possibilities.':'更多可能。',
  'The following AI-generated images are illustrative concepts only. They are not represented as Genesis Aluglass completed projects.':'以下 AI 生成图片仅为概念示意，并不代表 Genesis Aluglass 已完成的工程。',
  'AI-GENERATED VISUAL':'AI生成示意图','Residential glazing & sliding doors':'住宅玻璃与推拉门','Commercial glass frontage':'商业玻璃门面',
  'Office glass partitions':'办公室玻璃隔间','Retail shopfront concept':'零售店面概念','Interior glass separation':'室内玻璃隔断',
  'YOUR PROJECT COULD BE NEXT':'下一个精彩项目可能就是您','Have something':'您有','in mind?':'想法吗？','Discuss your project':'讨论您的项目',
  'ABOUT GENESIS / 03':'关于 GENESIS / 03','Thoughtful work.':'用心做好每项工程。','Clear details.':'细节清晰到位。',
  'Aluminium and glass solutions for the spaces people live, work and do business in.':'为人们生活、工作及经营的空间提供铝材与玻璃解决方案。',
  'WHO WE ARE':'关于我们','KLANG VALLEY, MALAYSIA':'马来西亚巴生谷','OUR APPROACH':'我们的理念',
  'Good outcomes begin':'理想成果始于','with':'充分','understanding.':'了解需求。',
  'Genesis Aluglass works across residential, retail and commercial aluminium and glass applications. We believe a good result starts with understanding the space, the purpose and the details that matter to the people using it.':'Genesis Aluglass 涉及住宅、零售及商业铝材与玻璃应用。我们相信，优质成果始于了解空间、用途，以及使用者重视的细节。',
  'Whether you are planning a new opening, updating an interior or exploring a customised glass feature, we welcome a conversation about your requirements.':'无论您计划安装新门窗、更新室内空间，或探索定制玻璃设计，我们都欢迎您与我们交流需求。',
  'Talk with our team':'与团队联系','ARCHITECTURAL VISUAL REFERENCE':'建筑视觉参考',
  'Understand the space':'了解空间','Start with the setting, dimensions and intended use.':'从环境、尺寸及预期用途开始。',
  'Consider the details':'关注细节','Explore suitable aluminium and glass applications.':'探索合适的铝材与玻璃应用。',
  'Move forward together':'携手推进','Discuss the scope and next steps for your project.':'讨论工程范围与下一步安排。',
  'LET’S START A CONVERSATION':'让我们开始交流','Tell us what you’re':'告诉我们您正在','working on.':'筹备什么项目。','Contact Genesis':'联系 Genesis',
  'CONTACT / 04':'联系 / 04','Let’s talk about':'让我们谈谈',
  'Tell us a little about what you need. Your enquiry will be prepared for you to continue directly on WhatsApp.':'请简单告诉我们您的需求。我们会为您准备咨询内容，方便您直接通过 WhatsApp 继续联系。',
  'PROJECT ENQUIRIES':'工程咨询','WHATSAPP FIRST':'优先使用 WHATSAPP','GET IN TOUCH':'联系我们',
  'Start with':'从一次','a conversation.':'交流开始。',
  'Share your ideas, reference photos, approximate measurements or project location. We’ll use the details to understand your enquiry.':'分享您的构想、参考照片、大致尺寸或工程地点，帮助我们了解您的需求。',
  'LOCATION':'地点','Klang Valley & surrounding areas':'巴生谷及周边地区','PROJECT TYPES':'项目类型','Residential · Retail · Commercial':'住宅 · 零售 · 商业',
  'Project enquiry':'工程咨询','Complete the details below to open a prepared WhatsApp message.':'填写以下资料，即可打开已准备好的 WhatsApp 讯息。',
  'Your name *':'姓名 *','Your name':'您的姓名','Phone / WhatsApp *':'电话 / WhatsApp *','Your contact number':'您的联系电话',
  'Service required':'所需服务','Not sure yet':'尚未确定','Project details':'工程详情',
  'Property type, location, approximate measurements or what you have in mind...':'物业类型、地点、大致尺寸或您的构想……',
  'Continue to WhatsApp':'继续前往 WhatsApp','Your information is used to prepare the WhatsApp enquiry. Nothing is sent until you press send in WhatsApp.':'您的资料仅用于准备 WhatsApp 咨询内容。只有您在 WhatsApp 按下发送后，讯息才会送出。',
  'Chat on WhatsApp':'通过 WhatsApp 联系','All rights reserved.':'版权所有。','Serving Klang Valley & surrounding areas':'服务范围：巴生谷及周边地区'
};
export function LanguageProvider({children}:{children:ReactNode}){
 const [language,setLanguageState]=useState<Language>('en');
 useEffect(()=>{if(window.localStorage.getItem('genesis-language')==='zh')setLanguageState('zh');},[]);
 useEffect(()=>{
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  const reverse:Record<string,string>={};for(const [en,zh] of Object.entries(translations))if(!reverse[zh])reverse[zh]=en;
  const apply=()=>{
   const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
   let node:Node|null;
   while((node=walker.nextNode())){const t=node as Text;const key=(t.nodeValue??'').trim();const replacement=language==='zh'?translations[key]:reverse[key];if(replacement)t.nodeValue=(t.nodeValue??'').replace(key,replacement);}
   document.querySelectorAll<HTMLElement>('[placeholder],[aria-label],[alt],[title]').forEach(el=>{for(const attr of ['placeholder','aria-label','alt','title']){const value=el.getAttribute(attr);if(value){const replacement=language==='zh'?translations[value]:reverse[value];if(replacement)el.setAttribute(attr,replacement);}}});
  };
  apply();const observer=new MutationObserver(apply);observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','alt','title']});return()=>observer.disconnect();
 },[language]);
 const setLanguage=(next:Language)=>{window.localStorage.setItem('genesis-language',next);setLanguageState(next);};
 return <LanguageContext.Provider value={{language,setLanguage}}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){return useContext(LanguageContext);}

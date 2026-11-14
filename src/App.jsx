import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Briefcase, Building2, CalendarCheck, Car, Check, ChevronDown, Dumbbell, Eye, Globe, GraduationCap, Heart, Hotel, House, LayoutDashboard, Mail, MapPin, Menu, Newspaper, PartyPopper, Plane, Rocket, Scissors, Shirt, ShoppingCart, Smartphone, Stethoscope, Users, UtensilsCrossed, Wrench, X } from 'lucide-react';
import { languages, translations } from './i18n.js';

const WHATSAPP_NUMBER = '212674118928';
const INSTAGRAM_URL = 'https://www.instagram.com/dev_is_your_solution/';
const FACEBOOK_URL = 'https://www.facebook.com/share/1FfDrLtWRC/';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Oued+Zem,+Maroc';
const CONTACT_EMAIL = 'devisyoursolution@gmail.com';

const InstagramLogo = () => <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" /></svg>;
const FacebookLogo = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
const TikTokLogo = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>;
const WhatsAppLogo = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;

const platforms = [
  { id: 'Instagram', Logo: InstagramLogo },
  { id: 'Facebook', Logo: FacebookLogo },
  { id: 'TikTok', Logo: TikTokLogo },
];
const boostTypes = [
  { id: 'followers', Icon: Users },
  { id: 'likes', Icon: Heart },
  { id: 'views', Icon: Eye },
];
const quantities = [100, 500, 1000, 5000, 10000];
const siteIcons = [Rocket, Building2, ShoppingCart, Newspaper, CalendarCheck, Smartphone, LayoutDashboard, UtensilsCrossed, Car, Hotel, Scissors, House, Stethoscope, GraduationCap, Dumbbell, Plane, Shirt, Briefcase, PartyPopper, Wrench];
const GENERAL_SITE_TYPES = 7;
const FOOTER_SITE_TYPES = [0, 2, 7, 8, 9, 10];
const socialLinks = [
  { name: 'WhatsApp', url: `https://wa.me/${WHATSAPP_NUMBER}`, Logo: WhatsAppLogo, className: 'whatsapp' },
  { name: 'Instagram', url: INSTAGRAM_URL, Logo: InstagramLogo, className: 'instagram' },
  { name: 'Facebook', url: FACEBOOK_URL, Logo: FacebookLogo, className: 'facebook' },
];
const services = [
  { number: '01', className: 'web', target: '#sites', option: 0, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80' },
  { number: '02', className: 'mobile', target: '#sites', option: 1, image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80' },
  { number: '03', className: 'social', target: '#social', option: 2, image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80' },
];
// Add a new project here, then add its texts in i18n.js (projects.items, same order).
const projects = [
  { url: 'https://locationvoituremaroc.vercel.app/', image: 'https://locationvoituremaroc.vercel.app/images/hero.jpg', Icon: Car },
  { url: 'https://voyage-three-eosin.vercel.app/', image: 'https://voyage-three-eosin.vercel.app/assets/hero-LP667NqE.jpg', Icon: Plane },
];
const introPhotos = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
];

const BrandMark = () => <><span className="brand-top">dev<i className="brand-cursor" /></span><span className="brand-sub">is your solution</span></>;

function openWhatsApp(message) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

function getInitialLang() {
  const saved = localStorage.getItem('lang');
  return languages.some((language) => language.code === saved) ? saved : 'fr';
}

function SocialLinks({ t }) {
  return (
    <div className="social-links">
      <p className="social-links-title">{t.links.title}</p>
      {socialLinks.map(({ name, url, Logo, className }) => {
        const content = <><span className={`social-logo ${className}`}><Logo /></span><span className="social-text"><strong>{name}</strong><small>{url ? (name === 'WhatsApp' ? t.links.write : t.links.view) : t.links.soon}</small></span>{url && <ArrowUpRight size={18} />}</>;
        return url
          ? <a key={name} className="social-link" href={url} target="_blank" rel="noopener noreferrer">{content}</a>
          : <div key={name} className="social-link disabled">{content}</div>;
      })}
      <a className="social-link" href={`mailto:${CONTACT_EMAIL}`}><span className="social-logo email"><Mail size={21} /></span><span className="social-text"><strong>Email</strong><small dir="ltr">{CONTACT_EMAIL}</small></span><ArrowUpRight size={18} /></a>
    </div>
  );
}

function Projects({ t }) {
  return (
    <section className="projects" id="projets">
      <div className="wrap">
        <div className="section-label"><span className="label-dot" /> {t.projects.label} <span className="label-number">/ 03</span></div>
        <div className="section-heading"><h2>{t.projects.titleA}<br /><em>{t.projects.titleEm}</em></h2><p>{t.projects.textA}<br />{t.projects.textB}</p></div>
        <div className="project-grid">
          {projects.map(({ url, image, Icon }, index) => {
            const item = t.projects.items[index];
            const host = new URL(url).host;
            return <article className="project-card" key={url}>
              <a className="project-preview" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.visit} : ${item.name}`}>
                <span className="project-bar" dir="ltr"><i /><i /><i /><span>{host}</span></span>
                <img src={image} alt={item.alt} loading="lazy" />
              </a>
              <div className="project-body">
                <span className="project-category"><Icon size={15} /> {item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="project-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={url} target="_blank" rel="noopener noreferrer">{t.projects.visit} <ArrowUpRight size={17} /></a>
              </div>
            </article>;
          })}
          <a className="project-card project-next" href="#sites">
            <span className="project-next-star">✳</span>
            <h3>{t.projects.nextTitle}</h3>
            <p>{t.projects.nextText}</p>
            <span className="project-link">{t.projects.nextButton} <ArrowUpRight size={17} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteOrder({ t }) {
  const [typeIndex, setTypeIndex] = useState(0);
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const { name: typeName, description: typeDescription } = t.sites.types[typeIndex];
  const TypeIcon = siteIcons[typeIndex];

  function sendOrder(event) {
    event.preventDefault();
    openWhatsApp(t.sites.message(typeName, name.trim(), details.trim()));
  }

  return (
    <section className="site-order" id="sites">
      <div className="wrap">
        <div className="section-label"><span className="label-dot" /> {t.sites.label} <span className="label-number">/ 04</span></div>
        <div className="section-heading"><h2>{t.sites.titleA}<br /><em>{t.sites.titleEm}</em></h2><p>{t.sites.textA}<br />{t.sites.textB}</p></div>
        <form className="site-picker" onSubmit={sendOrder}>
          <div className="picker-list">
            {[[t.sites.groupGeneral, 0, GENERAL_SITE_TYPES], [t.sites.groupBusiness, GENERAL_SITE_TYPES, t.sites.types.length]].map(([title, start, end]) => <div className="picker-group" key={start}>
              <h3 className="picker-group-title">{title}<span>{end - start}</span></h3>
              <div className="chips">{t.sites.types.slice(start, end).map(({ name: label }, offset) => {
                const index = start + offset;
                const Icon = siteIcons[index];
                return <button type="button" key={index} className={typeIndex === index ? 'chip active' : 'chip'} aria-pressed={typeIndex === index} onClick={() => setTypeIndex(index)}><Icon size={17} />{label}</button>;
              })}</div>
            </div>)}
          </div>
          <aside className="site-brief">
            <div className="sb-head">
              <span className="sb-icon"><TypeIcon size={24} /></span>
              <div>
                <span className="sb-tag">{t.sites.briefTag}</span>
                <h3 className="sb-title">{typeName}</h3>
              </div>
            </div>
            <div className="sb-body">
              <p className="sb-desc">{typeDescription}</p>
              <label className="sb-field">{t.sites.nameLabel}<input value={name} onChange={(event) => setName(event.target.value)} placeholder={t.sites.namePh} maxLength="100" required /></label>
              <label className="sb-field">{t.sites.detailsLabel}<textarea value={details} onChange={(event) => setDetails(event.target.value)} placeholder={t.sites.detailsPh} maxLength="500" rows="3" /></label>
              <button type="submit" className="sb-submit"><WhatsAppLogo /> {t.sites.button}</button>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}

function SocialOrder({ t, locale }) {
  const [platform, setPlatform] = useState('Instagram');
  const [boostType, setBoostType] = useState('followers');
  const [quantity, setQuantity] = useState(1000);
  const [link, setLink] = useState('');
  const typeLabel = t.social.types[boostType];
  const PlatformLogo = platforms.find(({ id }) => id === platform).Logo;
  const qtyText = quantity ? quantity.toLocaleString(locale) : '0';

  function sendOrder(event) {
    event.preventDefault();
    openWhatsApp(t.social.message(platform, typeLabel, quantity, link.trim()));
  }

  return (
    <section className="boost" id="social">
      <div className="wrap">
        <div className="section-label"><span className="label-dot" /> {t.social.label} <span className="label-number">/ 05</span></div>
        <div className="section-heading"><h2>{t.social.titleA}<br /><em>{t.social.titleEm}</em></h2><p>{t.social.textA}<br />{t.social.textB}</p></div>
        <form className="site-picker" onSubmit={sendOrder}>
          <div className="picker-list">
            <div className="picker-group">
              <h3 className="picker-group-title">{t.social.step1}</h3>
              <div className="chips">{platforms.map(({ id, Logo }) => <button type="button" key={id} className={`chip chip-platform ${id.toLowerCase()} ${platform === id ? 'active' : ''}`} aria-pressed={platform === id} onClick={() => setPlatform(id)}><span className="chip-logo"><Logo /></span>{id}</button>)}</div>
            </div>
            <div className="picker-group">
              <h3 className="picker-group-title">{t.social.step2}</h3>
              <div className="chips">{boostTypes.map(({ id, Icon }) => <button type="button" key={id} className={boostType === id ? 'chip active' : 'chip'} aria-pressed={boostType === id} onClick={() => setBoostType(id)}><Icon size={17} />{t.social.types[id]}</button>)}</div>
            </div>
            <div className="picker-group">
              <h3 className="picker-group-title">{t.social.step3}</h3>
              <div className="chips">
                {quantities.map((value) => <button type="button" key={value} className={quantity === value ? 'chip active' : 'chip'} aria-pressed={quantity === value} onClick={() => setQuantity(value)}>{value.toLocaleString(locale)}</button>)}
                <label className="chip chip-input">{t.social.otherQty}<input type="number" min="10" max="1000000" step="1" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} required /></label>
              </div>
            </div>
          </div>
          <aside className="site-brief order-brief">
            <div className="sb-head">
              <span className={`sb-icon sb-platform ${platform.toLowerCase()}`}><PlatformLogo /></span>
              <div>
                <span className="sb-tag">{t.social.orderTag}</span>
                <h3 className="sb-title"><span className="ob-qty">{qtyText}</span> {typeLabel}</h3>
              </div>
            </div>
            <div className="sb-body">
              <dl className="ob-rows">
                <div><dt>{t.social.step1}</dt><dd>{platform}</dd></div>
                <div><dt>{t.social.step2}</dt><dd>{typeLabel}</dd></div>
                <div><dt>{t.social.step3}</dt><dd>{qtyText}</dd></div>
              </dl>
              <label className="sb-field">{t.social.accountLabel}<input value={link} onChange={(event) => setLink(event.target.value)} placeholder={t.social.accountPh} maxLength="300" dir="ltr" required /></label>
              <button type="submit" className="sb-submit"><WhatsAppLogo /> {t.social.button}</button>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}

function LanguageMenu({ lang, onChange, label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = languages.find((language) => language.code === lang);

  useEffect(() => {
    if (!open) return undefined;
    const handleClick = (event) => { if (!ref.current.contains(event.target)) setOpen(false); };
    const handleKey = (event) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div className={open ? 'lang-menu open' : 'lang-menu'} ref={ref}>
      <button type="button" className="lang-trigger" aria-haspopup="listbox" aria-expanded={open} aria-label={label} onClick={() => setOpen(!open)}>
        <Globe size={16} aria-hidden="true" /><span className="lang-name">{current.name}</span><ChevronDown size={15} className="lang-chevron" aria-hidden="true" />
      </button>
      {open && <ul className="lang-list" role="listbox" aria-label={label}>
        {languages.map(({ code, label: short, name }) => <li key={code}>
          <button type="button" role="option" aria-selected={lang === code} className={lang === code ? 'active' : ''} onClick={() => { onChange(code); setOpen(false); }}>
            <span className="lang-code">{short}</span><span className="lang-label">{name}</span>{lang === code && <Check size={16} className="lang-check" />}
          </button>
        </li>)}
      </ul>}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOption, setServiceOption] = useState(0);
  const t = translations[lang];
  const { dir, locale } = languages.find((language) => language.code === lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = t.meta.title;
    localStorage.setItem('lang', lang);
  }, [lang, dir, t]);

  function prepareMessage(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    openWhatsApp(t.contact.message(String(data.get('name')).trim(), t.contact.options[serviceOption], String(data.get('message')).trim(), String(data.get('phone')).trim()));
  }

  const closeMenu = () => setMenuOpen(false);
  const tickerItems = [...t.ticker, ...t.ticker];

  return (
    <>
      <div className="topbar">
        <div className="topbar-info">
          <a className="tb-place" href={MAPS_URL} target="_blank" rel="noopener noreferrer"><MapPin size={14} className="tb-pin" /><strong>{t.contact.city}</strong><span className="tb-region">{t.contact.region}</span><span className="tb-map">{t.topbar.map} <ArrowUpRight size={13} /></span></a>
        </div>
        <div className="topbar-social"><span className="tb-follow">{t.topbar.follow}</span>{socialLinks.map(({ name, url, Logo, className }) => url ? <a key={name} className={`tb-social ${className}`} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}><Logo /></a> : <span key={name} className={`tb-social ${className} soon`} aria-label={`${name} (${t.topbar.soon})`} title={t.topbar.soonTitle}><Logo /></span>)}</div>
      </div>
      <header className="header">
        <a className="brand" href="#accueil" aria-label={t.nav.home} dir="ltr"><BrandMark /></a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label={t.nav.main}>
          <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
          <a href="#projets" onClick={closeMenu}>{t.nav.projects}</a>
          <a href="#sites" onClick={closeMenu}>{t.nav.sites}</a>
          <a href="#social" onClick={closeMenu}>{t.nav.social}</a>
          <a href="#approche" onClick={closeMenu}>{t.nav.approach}</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>{t.nav.contact} <ArrowUpRight size={16} /></a>
        </nav>
        <LanguageMenu lang={lang} onChange={setLang} label={t.nav.language} />
        <button className="menu-button" type="button" aria-label={menuOpen ? t.nav.close : t.nav.open} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-image" />
          <div className="hero-content wrap">
            <div className="hero-topline"><span><i /> {t.hero.topLeft}</span><span>{t.hero.topRight}</span></div>
            <div className="hero-main">
              <p className="eyebrow light">{t.hero.eyebrow}</p>
              <h1><bdi>Dev is your Solution.</bdi><br /><span>{t.hero.titleSpan}</span>{t.hero.titleRest}</h1>
              <div className="hero-bottom">
                <p>{t.hero.text}</p>
                <a className="round-link" href="#services" aria-label={t.hero.discover}><ArrowDown size={25} /></a>
              </div>
            </div>
            <div className="hero-footer"><span>{t.hero.footerLeft}</span><span>{t.hero.scroll} <ArrowDown size={13} /></span></div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true"><div>{tickerItems.map((item, index) => <React.Fragment key={index}>{item} <span>✳</span> </React.Fragment>)}</div></div>

        <section className="intro wrap" id="approche">
          <div className="section-label"><span className="label-dot" /> {t.intro.label} <span className="label-number">/ 01</span></div>
          <div className="intro-content"><h2>{t.intro.titleA}<br /><span>{t.intro.titleB}</span></h2><div className="intro-detail"><p>{t.intro.text}</p><a className="text-link" href="#contact">{t.intro.link} <ArrowUpRight size={18} /></a></div></div>
          <div className="photo-mosaic">
            {t.intro.photos.map(({ caption, alt }, index) => <figure key={index} className={index === 0 ? 'photo-main' : undefined}><img src={introPhotos[index]} alt={alt} loading="lazy" /><figcaption>{caption}</figcaption></figure>)}
          </div>
        </section>

        <section className="services" id="services">
          <div className="wrap">
            <div className="section-label"><span className="label-dot" /> {t.services.label} <span className="label-number">/ 02</span></div>
            <div className="section-heading"><h2>{t.services.titleA}<br />{t.services.titleB}<em>{t.services.titleEm}</em></h2><p>{t.services.textA}<br />{t.services.textB}</p></div>
            <div className="service-list">{services.map((service, index) => {
              const item = t.services.items[index];
              return <article className={`service-row ${service.className}`} key={service.number}>
                <div className="service-number">({service.number})</div>
                <div className="service-title"><span>{item.category}</span><h3>{item.title}</h3></div>
                <img className="service-image" src={service.image} alt={item.alt} loading="lazy" />
                <div className="service-info"><p>{item.description}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <a href={service.target} className="service-arrow" aria-label={`${t.services.arrow} : ${item.category}`} onClick={() => setServiceOption(service.option)}><ArrowUpRight size={22} /></a>
              </article>;
            })}</div>
          </div>
        </section>

        <Projects t={t} />

        <SiteOrder key={`sites-${lang}`} t={t} />

        <SocialOrder t={t} locale={locale} />

        <section className="statement">
          <div className="statement-image" />
          <div className="wrap statement-content"><div className="section-label"><span className="label-dot" /> {t.statement.label} <span className="label-number">/ 06</span></div><div><span className="statement-star">✳</span><h2>{t.statement.lines[0]}<br />{t.statement.lines[1]}<br /><em>{t.statement.em}</em></h2><p>{t.statement.text}</p><a href="#contact" className="pill-button">{t.statement.button} <ArrowUpRight size={18} /></a></div></div>
        </section>

        <section className="contact wrap" id="contact">
          <div className="section-label"><span className="label-dot" /> {t.contact.label} <span className="label-number">/ 07</span></div>
          <div className="contact-grid"><div className="contact-copy"><h2>{t.contact.titleA}<br /><em>{t.contact.titleEm}</em><span>✳</span></h2><p>{t.contact.text}</p><div className="availability"><span><Check size={14} /></span> {t.contact.available}</div></div>
            <form onSubmit={prepareMessage} className="contact-form">
              <div className="form-head"><strong>{t.contact.formTitle}</strong><small>{t.contact.formSub}</small></div>
              <div className="form-row">
                <label>{t.contact.name}<input name="name" placeholder={t.contact.namePh} maxLength="100" required /></label>
                <label>{t.contact.phone}<input name="phone" type="tel" placeholder={t.contact.phonePh} maxLength="20" /></label>
              </div>
              <label>{t.contact.interested}<select value={serviceOption} onChange={(event) => setServiceOption(Number(event.target.value))}>{t.contact.options.map((option, index) => <option key={index} value={index}>{option}</option>)}</select></label>
              <label>{t.contact.project}<textarea name="message" placeholder={t.contact.projectPh} rows="4" maxLength="1000" required /></label>
              <button type="submit" className="whatsapp-button"><WhatsAppLogo /> {t.contact.button}</button>
            </form>
          </div>
          <div className="contact-extras">
            <div className="location">
              <a className="location-info" href={MAPS_URL} target="_blank" rel="noopener noreferrer"><span className="location-icon"><MapPin size={20} /></span><span><strong>{t.contact.city}</strong><small>{t.contact.region}</small></span><ArrowUpRight size={18} /></a>
            </div>
            <SocialLinks t={t} />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-cta">
            <div><h2>{t.footer.ctaTitle}</h2><p>{t.footer.ctaText}</p></div>
            <a className="whatsapp-button" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"><WhatsAppLogo /> {t.footer.ctaButton}</a>
          </div>
          <div className="footer-grid">
            <div className="footer-about">
              <a className="brand footer-brand" href="#accueil" aria-label={t.nav.home} dir="ltr"><BrandMark /></a>
              <p>{t.footer.about}</p>
              <div className="footer-social">{socialLinks.map(({ name, url, Logo }) => url ? <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}><Logo /></a> : <span key={name} aria-label={`${name} (${t.topbar.soon})`}><Logo /></span>)}</div>
            </div>
            <nav aria-label={t.footer.colServices}>
              <h3>{t.footer.colServices}</h3>
              <ul>
                <li><a href="#projets">{t.nav.projects}</a></li>
                <li><a href="#sites">{t.nav.sites}</a></li>
                <li><a href="#sites">{t.footer.mobile}</a></li>
                <li><a href="#social">{t.nav.social}</a></li>
                <li><a href="#approche">{t.nav.approach}</a></li>
              </ul>
            </nav>
            <nav aria-label={t.footer.colSites}>
              <h3>{t.footer.colSites}</h3>
              <ul>{FOOTER_SITE_TYPES.map((index) => <li key={index}><a href="#sites">{t.sites.types[index].name}</a></li>)}</ul>
            </nav>
            <div>
              <h3>{t.footer.colContact}</h3>
              <ul className="footer-contact">
                <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"><WhatsAppLogo /> WhatsApp</a></li>
                {INSTAGRAM_URL && <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" dir="ltr"><InstagramLogo /> @dev_is_your_solution</a></li>}
                {FACEBOOK_URL && <li><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" dir="ltr"><FacebookLogo /> Dev is your Solution</a></li>}
                <li><a href={`mailto:${CONTACT_EMAIL}`} dir="ltr"><Mail /> {CONTACT_EMAIL}</a></li>
                <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer"><MapPin /> {t.contact.city}, {t.contact.region}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Dev is your Solution. {t.footer.rights}</span><a href="#accueil" className="back-top">{t.footer.back} <ArrowUpRight size={15} /></a></div>
        </div>
      </footer>
    </>
  );
}

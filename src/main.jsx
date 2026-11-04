import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  Leaf,
  Sun,
  PackageCheck,
  Menu,
  X,
  ChevronDown,
  Check,
  TreeDeciduous,
} from "lucide-react";
import "./style.css";
const photos = {
  hero: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=85",
  walnut:
    "https://images.unsplash.com/photo-1635843108103-9af0ea224a19?auto=format&fit=crop&w=900&q=85",
  nuts: "https://images.unsplash.com/photo-1701592085177-0a800459ba55?auto=format&fit=crop&w=900&q=85",
};
const products = [
  {
    name: "Kabuklu Ceviz",
    tag: "DOĞAL HALİYLE",
    text: "Kabuğunda saklı tazelik. Sofralarınız ve işletmeniz için özenle seçilen cevizler.",
    img: photos.walnut,
  },
  {
    name: "Ceviz İçi",
    tag: "LEZZETE HAZIR",
    text: "Kahvaltıdan mutfağa, her tarife eşlik eden ceviz içi seçenekleri.",
    img: photos.nuts,
  },
  {
    name: "Toptan Tedarik",
    tag: "İŞLETMENİZE ÖZEL",
    text: "Pastane, restoran ve perakende işletmelerine ihtiyaca uygun ürün ve ambalaj.",
    img: photos.walnut,
  },
];
function App() {
  const [menu, setMenu] = useState(false),
    [selected, setSelected] = useState("Genel bilgi"),
    [sent, setSent] = useState(false);
  function inquire(p) {
    setSelected(p);
    setSent(false);
    document.getElementById("iletisim").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="topbar">
        DOĞADAN ALDIĞIMIZI, ÖZENLE PAYLAŞIYORUZ.
        <span>Toprağa saygı. Ürüne özen.</span>
      </div>
      <header className="header">
        <a className="logo" href="#">
          <TreeDeciduous size={38} strokeWidth={1.25} />
          <div>
            kök<span>CEVİZ</span>
          </div>
        </a>
        <nav className={menu ? "open" : ""}>
          {[
            ["Hikâyemiz", "hikayemiz"],
            ["Ürünlerimiz", "urunler"],
            ["Üretim Yolculuğu", "uretim"],
          ].map(([t, id]) => (
            <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
              {t}
            </a>
          ))}
        </nav>
        <a className="contact-link" href="#iletisim">
          Birlikte büyüyelim <ArrowUpRight size={17} />
        </a>
        <button
          aria-label={menu ? "Menüyü kapat" : "Menüyü aç"}
          className="mobile-menu"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section className="hero">
          <img
            className="hero-image"
            src={photos.hero}
            alt="Güneş ışığının ağaçların arasından süzüldüğü yemyeşil bir orman"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="eyebrow">
              <span /> TOPRAKTAN GELEN DEĞER
            </div>
            <h1>
              Kökümüz toprakta,
              <br />
              sözümüz <i>doğallıkta.</i>
            </h1>
            <p>
              Doğanın ritmine saygı duyuyor, cevizin en yalın halini
              <br className="desktop" /> özenle sofralara taşıyoruz.
            </p>
            <a className="button cream" href="#urunler">
              Cevizlerimizi keşfedin <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="hero-bottom">
            <span>HER CEVİZİN BİR HİKÂYESİ VAR.</span>
            <a href="#hikayemiz">
              Bizimkini keşfedin <ChevronDown size={18} />
            </a>
          </div>
          <div className="round-seal">
            <Leaf size={25} />
            <span>
              DOĞAYA SAYGI
              <br />
              EMEĞE DEĞER
            </span>
          </div>
        </section>
        <div className="values">
          <span>
            <Leaf /> Doğallığa bağlılık
          </span>
          <span>
            <Sun /> Mevsiminde hasat
          </span>
          <span>
            <PackageCheck /> Özenli seçim ve paketleme
          </span>
          <span>
            <TreeDeciduous /> Topraktan sofraya
          </span>
        </div>
        <section id="hikayemiz" className="story section">
          <div>
            <span className="eyebrow dark">BİZİM HİKÂYEMİZ</span>
            <h2>
              İyi bir ceviz,
              <br />
              iyi bir kökle başlar.
            </h2>
          </div>
          <div className="story-copy">
            <p>
              Bizim için ceviz, yalnızca bir ürün değil; toprağa gösterilen
              özenin, sabrın ve emeğin karşılığı.
            </p>
            <p>
              Kök Ceviz fikrinin merkezinde sade bir anlayış var: doğaya saygı
              duymak, ürünü özenle seçmek ve aynı özeni her iş birliğine
              taşımak.
            </p>
            <a href="#uretim" className="text-link">
              Yolculuğumuzu tanıyın <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section id="urunler" className="products section">
          <div className="section-heading">
            <div>
              <span className="eyebrow dark">DOĞANIN BİZE ARMAĞANI</span>
              <h2>Her ihtiyaca, aynı özen.</h2>
            </div>
            <p>
              Sofranız için lezzet.
              <br />
              İşletmeniz için güvenilir bir başlangıç.
            </p>
          </div>
          <div className="product-grid">
            {products.map((p, i) => (
              <article className="product" key={p.name}>
                <button
                  className={"product-photo p" + i}
                  onClick={() => inquire(p.name)}
                  aria-label={p.name + " hakkında bilgi alın"}
                >
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span>
                    Ürünü keşfet <ArrowUpRight size={18} />
                  </span>
                </button>
                <div className="product-meta">
                  <span>{p.tag}</span>
                  <span>0{i + 1}</span>
                </div>
                <button
                  className="product-title"
                  onClick={() => inquire(p.name)}
                >
                  {p.name}
                  <ArrowUpRight size={23} />
                </button>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="uretim" className="process section">
          <div className="process-intro">
            <span className="eyebrow">EMEĞİN YOLCULUĞU</span>
            <h2>
              Dalından başlayan
              <br />
              bir özen hikâyesi.
            </h2>
            <p>
              Her aşamada aynı yaklaşım:
              <br />
              ürünün doğasına yakışan özen.
            </p>
            <a href="#iletisim" className="text-link">
              Üretim hakkında konuşalım <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="steps">
            {[
              [
                "Toprağa kulak veriyoruz",
                "Her şey doğanın ritmini anlamakla başlar.",
              ],
              [
                "Zamanında topluyoruz",
                "Hasat, sabırla beklenen emeğin karşılığıdır.",
              ],
              [
                "Özenle hazırlıyoruz",
                "Seçimden paketlemeye, her ayrıntı değerlidir.",
              ],
              [
                "Birlikte sofralara ulaştırıyoruz",
                "İhtiyacınıza uygun tedariki birlikte planlarız.",
              ],
            ].map(([t, d], i) => (
              <div className="step" key={t}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
                <ArrowUpRight size={20} />
              </div>
            ))}
          </div>
        </section>
        <section className="contact section" id="iletisim">
          <div>
            <span className="eyebrow dark">TANIŞALIM</span>
            <h2>
              Güzel iş birlikleri,
              <br />
              bir merhabayla başlar.
            </h2>
            <p>
              Ürünlerimizi tanımak veya toptan tedarik hakkında
              <br />
              konuşmak için talebinizi hazırlayın.
            </p>
            <div className="demo-note">
              Örnek marka çalışması · İletişim bilgileri firma tarafından
              eklenecektir.
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="form-row">
              <label>
                Adınız soyadınız
                <input required name="name" placeholder="Adınız soyadınız" />
              </label>
              <label>
                E-posta adresiniz
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="ornek@firma.com"
                />
              </label>
            </div>
            <label>
              İlgilendiğiniz konu
              <select
                value={selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                  setSent(false);
                }}
              >
                {["Genel bilgi", ...products.map((p) => p.name)].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label>
              Mesajınız
              <textarea
                required
                name="message"
                placeholder="İhtiyacınızdan kısaca bahsedin…"
                rows="3"
              />
            </label>
            <button className="button green" type="submit">
              Talep özeti oluştur <ArrowRight size={18} />
            </button>
            <p className="form-note" role="status">
              {sent ? (
                <>
                  <Check size={17} /> Talebiniz hazırlandı. Bu örnek form henüz
                  bir gönderim hizmetine bağlı değil; mesajınız gönderilmedi.
                </>
              ) : (
                "Bu tanıtım formu mesaj göndermez. Firma iletişim bağlantısı yayına hazırlanırken eklenecektir."
              )}
            </p>
          </form>
        </section>
      </main>
      <footer>
        <a className="logo" href="#">
          <TreeDeciduous size={34} strokeWidth={1.25} />
          <div>
            kök<span>CEVİZ</span>
          </div>
        </a>
        <p>Toprağa bağlı. Doğaya saygılı.</p>
        <span>
          © {new Date().getFullYear()} Kök Ceviz · Örnek kurumsal site
        </span>
        <a href="#">Başa dön ↑</a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);

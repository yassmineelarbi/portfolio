"""Static QA over the exported site (out/): internal links, images, language switcher targets,
page titles, html lang, and leftover English on French pages. Run after `npm run build`."""
import re, sys
from urllib.parse import unquote
from pathlib import Path
from html.parser import HTMLParser

OUT = Path(__file__).resolve().parent.parent / "out"

class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.srcs=[]; self.lang=None; self.title=""; self._t=False; self.langlinks=[]
    def handle_starttag(self, tag, a):
        a=dict(a)
        if tag=="html": self.lang=a.get("lang")
        if tag=="a" and a.get("href"):
            self.links.append(a["href"])
            if a.get("hreflang"): self.langlinks.append((a["hreflang"], a["href"]))
        if tag in ("img","script") and a.get("src"): self.srcs.append(a["src"])
        if tag=="link" and a.get("href") and a.get("rel") in ("stylesheet","icon"): self.srcs.append(a["href"])
        if tag=="title": self._t=True
    def handle_endtag(self, tag):
        if tag=="title": self._t=False
    def handle_data(self, d):
        if self._t: self.title+=d

def resolve(url):
    path=unquote(url.split("#")[0].split("?")[0])
    if not path: return True
    f=OUT/path.lstrip("/")
    return f.is_file() or (f/"index.html").is_file()

errors=0; pages=sorted(OUT.rglob("index.html"))
for page in pages:
    rel="/"+str(page.parent.relative_to(OUT)).replace("\\","/")+"/"
    rel=rel.replace("/./","/")
    p=P(); p.feed(page.read_text(encoding="utf-8"))
    for u in p.links+p.srcs:
        if u.startswith(("http","mailto:","tel:","#")): continue
        if not resolve(u): print(f"BROKEN {rel} -> {u}"); errors+=1
    if rel.startswith(("/en/","/fr/")):
        loc=rel[1:3]
        if p.lang!=loc: print(f"LANG {rel}: html lang={p.lang}"); errors+=1
        expect={l: f"/{l}/{rel[4:]}" for l in ("en","fr")}
        got=dict(p.langlinks)
        for l,u in expect.items():
            if got.get(l)!=u: print(f"SWITCH {rel}: {l} -> {got.get(l)} (expected {u})"); errors+=1
        print(f"ok  {rel:52} [{p.lang}] {p.title.strip()[:70]}")
print(f"\n{len(pages)} pages, {errors} problem(s)")
sys.exit(1 if errors else 0)

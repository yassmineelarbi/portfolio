/**
 * "/" has no content of its own: it sends visitors to /en/ or /fr/ (saved choice first, then browser
 * language). Plain links remain for visitors without JavaScript.
 */
const script = `(function(){var l;try{l=localStorage.getItem('lang')}catch(e){}
if(l!=='en'&&l!=='fr'){l=(navigator.language||'en').toLowerCase().indexOf('fr')===0?'fr':'en'}
location.replace('/'+l+'/'+location.hash)})()`;

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/en/" />
      </noscript>
      <p style={{ padding: 24 }}>
        <a href="/en/" style={{ color: "inherit" }}>English</a> · <a href="/fr/" style={{ color: "inherit" }}>Français</a>
      </p>
    </>
  );
}

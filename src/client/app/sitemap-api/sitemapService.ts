export function getSitemap(): any {
  let rawSitemap: any = {
    'en': [
      {'module': 'app.home', 'path': ''},
      {'module': 'app.about', 'path': '/about'},
    ],
    'sv': [
      {'module': 'app.home', 'path': ''},
      {'module': 'app.about', 'path': '/om'}
    ]
  };
  if (window.location.href.indexOf('sv') != -1) {
    return rawSitemap['sv']
  } else {
    return rawSitemap['en']
  }
  // Otherwise redirect or something!
}

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e6322363e12b778dd31ddaaf00d247d4"
  },
  {
    "url": "assets/css/0.styles.1622bc4f.css",
    "revision": "364735694c02d5a45c272ccef4080f22"
  },
  {
    "url": "assets/img/accordion.c53c2160.png",
    "revision": "c53c2160beaff1bf09e2d7c68b9c428a"
  },
  {
    "url": "assets/img/active_plugins.f753cef9.png",
    "revision": "f753cef93c12b2ac64a11839ad158459"
  },
  {
    "url": "assets/img/background.be51f66e.png",
    "revision": "be51f66ead40f19762c1499a260dfddc"
  },
  {
    "url": "assets/img/box-shadow.20e92e12.png",
    "revision": "20e92e12c4326009549c8240d8aa4ab8"
  },
  {
    "url": "assets/img/button_set.e1c5f873.png",
    "revision": "e1c5f87341d8616302a9e875c98e5009"
  },
  {
    "url": "assets/img/checkbox.8ff588d8.png",
    "revision": "8ff588d87c0766105a694c700e80868d"
  },
  {
    "url": "assets/img/color_gradient.4086d2f4.png",
    "revision": "4086d2f4fabc3af84a1bbff297db08ef"
  },
  {
    "url": "assets/img/color_rgba.a7a2975a.png",
    "revision": "a7a2975aac49bf53bc9a1621a49afc18"
  },
  {
    "url": "assets/img/color_schemes_picker_color.4506076b.png",
    "revision": "4506076b88c5cc5df3ee4708df433466"
  },
  {
    "url": "assets/img/color_schemes_picker.5ca88a95.png",
    "revision": "5ca88a9593b59d6ce795f3cf5119536f"
  },
  {
    "url": "assets/img/color_schemes.2b73ff48.png",
    "revision": "2b73ff48d1ac4ff299eba52827647beb"
  },
  {
    "url": "assets/img/color-palette.bdece04a.png",
    "revision": "bdece04a56419be319439a05a83571e5"
  },
  {
    "url": "assets/img/color.f1100a7f.png",
    "revision": "f1100a7f0b926c3e03a562283b0b12e3"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/editor.0e39ed42.png",
    "revision": "0e39ed428e8debd9d069bd7fdc0f2249"
  },
  {
    "url": "assets/img/gallery.db07115f.png",
    "revision": "db07115fa418bb7e697ebad58dfec802"
  },
  {
    "url": "assets/img/google_maps.60a06a00.png",
    "revision": "60a06a000a4013727f40f8b4055f4b0a"
  },
  {
    "url": "assets/img/hints_alignment.63b7effc.jpg",
    "revision": "63b7effc1a8575d280f8f6b730f74378"
  },
  {
    "url": "assets/img/hints.f21699b3.png",
    "revision": "f21699b328a9bd6965a2e5ad998564b4"
  },
  {
    "url": "assets/img/icon_select.fcf0619c.png",
    "revision": "fcf0619c47a2ab496846458980a2a734"
  },
  {
    "url": "assets/img/image_select.4e71f892.png",
    "revision": "4e71f89281b32d8817ccfc329e7917c7"
  },
  {
    "url": "assets/img/io.622a8677.png",
    "revision": "622a8677618d8982f3710b2fa27f508e"
  },
  {
    "url": "assets/img/media.d38f5d91.png",
    "revision": "d38f5d911b43bf5960d64528b49f43b0"
  },
  {
    "url": "assets/img/multi_text.29cbde62.png",
    "revision": "29cbde62bdeb76a9e52b82521db8ae6d"
  },
  {
    "url": "assets/img/palette_color.eeac131a.png",
    "revision": "eeac131a92b1ed2408981db8791c35a7"
  },
  {
    "url": "assets/img/radio.209501f2.png",
    "revision": "209501f2fa4cb72bd6febaabbfcc144a"
  },
  {
    "url": "assets/img/raw_full_width.52d22ecf.png",
    "revision": "52d22ecf53886f0d9d8a4f20c18c559f"
  },
  {
    "url": "assets/img/raw_sectioned.cdd956b1.png",
    "revision": "cdd956b1f2fd197b6e87508b3a585730"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/section.309ec967.png",
    "revision": "309ec967c4769899b632e64e7c7caad9"
  },
  {
    "url": "assets/img/slider.82e0bf9a.png",
    "revision": "82e0bf9a2183def90b87728b42f4c789"
  },
  {
    "url": "assets/img/slides.8b60ff5a.png",
    "revision": "8b60ff5a17111c97f8cdb058739a903c"
  },
  {
    "url": "assets/img/support_hash.e4e84d3d.png",
    "revision": "e4e84d3d9b5219b4a91e657de563b8c5"
  },
  {
    "url": "assets/img/text-multidimensional.9034ca24.png",
    "revision": "9034ca24d0bda48c0533b362fdfc85b2"
  },
  {
    "url": "assets/img/text-simple.08f2a147.png",
    "revision": "08f2a14727cb26b3bd4778dc7c17b1ec"
  },
  {
    "url": "assets/img/textarea.8550ef5d.png",
    "revision": "8550ef5da1606f4da02ef25d1a5aec70"
  },
  {
    "url": "assets/img/typography.1efb7349.png",
    "revision": "1efb7349c8490f21620a06fd53ae1c03"
  },
  {
    "url": "assets/js/10.9aeac2aa.js",
    "revision": "c900516569687dfc1674a8dfd4c8a8a6"
  },
  {
    "url": "assets/js/100.e70993a1.js",
    "revision": "f81f8d1b9dd9070cf97cf01d95d18e12"
  },
  {
    "url": "assets/js/101.a1792397.js",
    "revision": "b388bc7c3f0fea2ac846e70b98ff93ba"
  },
  {
    "url": "assets/js/102.549c73d9.js",
    "revision": "3b628d1ab0756dd4c333d9835e0cd6f6"
  },
  {
    "url": "assets/js/103.d1db05ba.js",
    "revision": "caddf5f4438fa438c008debe43e75a23"
  },
  {
    "url": "assets/js/104.fa6ad7b1.js",
    "revision": "7a761b9122aff30e5de7daa3d50e4bc2"
  },
  {
    "url": "assets/js/105.1afed4f6.js",
    "revision": "2bc1371be0d5a3ecbf8e580ad0847960"
  },
  {
    "url": "assets/js/106.c84c7a66.js",
    "revision": "5a90b78b92ec6876cc006e02c8e9e0c6"
  },
  {
    "url": "assets/js/107.162d7701.js",
    "revision": "d1273da1896a5c4597f6c255a924308c"
  },
  {
    "url": "assets/js/108.de455c3e.js",
    "revision": "fa47dc30e1e4ca9419740eeaa7bf5600"
  },
  {
    "url": "assets/js/109.78661893.js",
    "revision": "f214292451a0f4ec9b6de5dff66ec9a5"
  },
  {
    "url": "assets/js/11.983885d8.js",
    "revision": "118150f8d4c540a2a87c15d9df2373c7"
  },
  {
    "url": "assets/js/110.67268f24.js",
    "revision": "6162be1689b01ba26682e2b745ee229c"
  },
  {
    "url": "assets/js/111.5e5bf5ab.js",
    "revision": "efb510dc40a7873cba2c9bf53ca38258"
  },
  {
    "url": "assets/js/12.efe9a40a.js",
    "revision": "45d83db5b33b23cc222cc2032729c1e8"
  },
  {
    "url": "assets/js/13.e35180db.js",
    "revision": "0a57adfc7210621f46fa3b44e6e22624"
  },
  {
    "url": "assets/js/14.8f403b5f.js",
    "revision": "5cccd050b5a43fd77f43ffce24f911fd"
  },
  {
    "url": "assets/js/15.3e8d64b8.js",
    "revision": "c387f9bbfe4a69955f20556cc412666e"
  },
  {
    "url": "assets/js/16.6a5f86c1.js",
    "revision": "337218c5aacab50361854fd9842de675"
  },
  {
    "url": "assets/js/17.aa165ecf.js",
    "revision": "6a7ebb4c9fb2bbc115bd54b0e9124572"
  },
  {
    "url": "assets/js/18.32f5bfcf.js",
    "revision": "abdc4738c11a7805402873a4baefd94c"
  },
  {
    "url": "assets/js/19.d32ed05a.js",
    "revision": "72f48fb80fcbb6324f91474291b1dc4a"
  },
  {
    "url": "assets/js/20.3b714c63.js",
    "revision": "ad73289ae1c0eff25d925dc837b3db73"
  },
  {
    "url": "assets/js/21.8326eaf8.js",
    "revision": "b9bed579ae6990c1791103d651dcb9d6"
  },
  {
    "url": "assets/js/22.54ee3d6b.js",
    "revision": "22e0dc49823802988b8e7226f27d418e"
  },
  {
    "url": "assets/js/23.c3d94c2b.js",
    "revision": "2b3809bc9b4493cb807141163c3f332d"
  },
  {
    "url": "assets/js/24.e137a901.js",
    "revision": "6cd38703465309874d1edd28d61c92c9"
  },
  {
    "url": "assets/js/25.f8538376.js",
    "revision": "8c50c41c0ed351fe340fe22402896af1"
  },
  {
    "url": "assets/js/26.9d2fd11f.js",
    "revision": "f95b501dfdb328885ddac7ed8833a14f"
  },
  {
    "url": "assets/js/27.19712418.js",
    "revision": "6ec5a1f105cda2a087d6ae58c21c9e86"
  },
  {
    "url": "assets/js/28.808b3fd5.js",
    "revision": "e98a1ee777770cc91003caf77a11827b"
  },
  {
    "url": "assets/js/29.7fa8f216.js",
    "revision": "231de37c401a7eaf2aee509aa34ea71f"
  },
  {
    "url": "assets/js/3.f5a9fc7d.js",
    "revision": "7e71ebf5e5ed4ad2c06846ae7f18e751"
  },
  {
    "url": "assets/js/30.53b19a93.js",
    "revision": "a2340acdd2f0f48652a9cf76ad89f27f"
  },
  {
    "url": "assets/js/31.12cbe961.js",
    "revision": "058d548603c74afffe9ca9bd988491b5"
  },
  {
    "url": "assets/js/32.4907bb0e.js",
    "revision": "a57fdfe7f9f841b3ba6bb0dff1c95482"
  },
  {
    "url": "assets/js/33.fd1904bf.js",
    "revision": "fc1fdc8c198d25301dc0860dc9f5c4ae"
  },
  {
    "url": "assets/js/34.a61b8c25.js",
    "revision": "f4ef49b8b068f14b1c23df0998b16467"
  },
  {
    "url": "assets/js/35.79bfa30f.js",
    "revision": "17babe96b1f41ca60189e22248200930"
  },
  {
    "url": "assets/js/36.f619e9fd.js",
    "revision": "2b47ee703e404e665e51831bee2f75d8"
  },
  {
    "url": "assets/js/37.577def70.js",
    "revision": "6578aa96a138b135d2966d81ea7f7527"
  },
  {
    "url": "assets/js/38.70641870.js",
    "revision": "d6e6ba88f163334d45ea1b0a7ddb4949"
  },
  {
    "url": "assets/js/39.4b3b0bdb.js",
    "revision": "d11b01781e250ef3fbcd4d4aad6bc84c"
  },
  {
    "url": "assets/js/4.bafc0d6f.js",
    "revision": "e2ec2469b4165c8dcb2f4bce9dd74db0"
  },
  {
    "url": "assets/js/40.84fb1884.js",
    "revision": "c9dbfbaf62c93ad9b46bc7d2a25f594a"
  },
  {
    "url": "assets/js/41.a5327fe6.js",
    "revision": "adb2c9e75a56c9b4446658770cee8be9"
  },
  {
    "url": "assets/js/42.8431984b.js",
    "revision": "f98a62ee7a8aad5f4d31ff94b7e20e78"
  },
  {
    "url": "assets/js/43.dbe59857.js",
    "revision": "8d39825e704dbdf87a62726c68806e19"
  },
  {
    "url": "assets/js/44.4d6d175a.js",
    "revision": "241a44876a51afdeabee3e100ab2c34d"
  },
  {
    "url": "assets/js/45.6d281068.js",
    "revision": "eff4ec9e3133d94e1a81555a2680980d"
  },
  {
    "url": "assets/js/46.cd9aeb63.js",
    "revision": "c926ff211b75135560a16b61fb431a5d"
  },
  {
    "url": "assets/js/47.2656d65b.js",
    "revision": "fcb34ce4ba6de15b5152a74a5e6e1c09"
  },
  {
    "url": "assets/js/48.10efa863.js",
    "revision": "d239d9910087e19e2c237427698126f8"
  },
  {
    "url": "assets/js/49.6ee9ce63.js",
    "revision": "637317d9d619b7197ac9d0aba39d7615"
  },
  {
    "url": "assets/js/5.8c4cf8f1.js",
    "revision": "6793e1b50462469a930404b547c1de72"
  },
  {
    "url": "assets/js/50.40641702.js",
    "revision": "b05bd57b4cf6eb052d8e8136feaa1fe9"
  },
  {
    "url": "assets/js/51.8bc25113.js",
    "revision": "be33ae2247d4ed81acec074db52aa885"
  },
  {
    "url": "assets/js/52.48d0dbc1.js",
    "revision": "639c371b757006b4dfa1fa8ed21e9ee6"
  },
  {
    "url": "assets/js/53.8b991c4a.js",
    "revision": "53b5646a7e39da77c47385e8f9afb9ab"
  },
  {
    "url": "assets/js/54.3933e06f.js",
    "revision": "ca96ce00297f697fee6701bcf165338a"
  },
  {
    "url": "assets/js/55.aacdd320.js",
    "revision": "4c07ee7279ffd20d782c782e5dbf1fe3"
  },
  {
    "url": "assets/js/56.6ebed2d0.js",
    "revision": "94bdc95e36b5fa66ee1f6c893f9bb797"
  },
  {
    "url": "assets/js/57.8407bfcb.js",
    "revision": "44077ecfb672ee52db847f9d3ddc943d"
  },
  {
    "url": "assets/js/58.de3c2058.js",
    "revision": "8294850cd78ca26145b5755079d5d746"
  },
  {
    "url": "assets/js/59.dedcd33d.js",
    "revision": "5a35e209eac62f6c82ba6a1dac28d52d"
  },
  {
    "url": "assets/js/6.aa0ff66e.js",
    "revision": "1ae837c229ffed9f23747c396f0550dd"
  },
  {
    "url": "assets/js/60.d20a3905.js",
    "revision": "947ecaad1a46f54e5d1ad44740951504"
  },
  {
    "url": "assets/js/61.02db7f12.js",
    "revision": "6ca49c0c95739804c18e980f63f4831b"
  },
  {
    "url": "assets/js/62.afc66b58.js",
    "revision": "e7216faf3d5bcae258d055dc9c0f8dfc"
  },
  {
    "url": "assets/js/63.d221f2c0.js",
    "revision": "d1060a025196dd63a00df826fa8070c8"
  },
  {
    "url": "assets/js/64.2f665839.js",
    "revision": "42cc2e6aeff148bbb53a70873e629499"
  },
  {
    "url": "assets/js/65.b8f1f259.js",
    "revision": "c9ea1027c4bc60739b818d9a3ed1ba6b"
  },
  {
    "url": "assets/js/66.c6f68008.js",
    "revision": "d05a36259b4073f59f24e7734e02022e"
  },
  {
    "url": "assets/js/67.45e263ae.js",
    "revision": "300f5627062fa46a872efc95da1e5015"
  },
  {
    "url": "assets/js/68.8c296d81.js",
    "revision": "9d0cd7e75538582f116af09b7ca1220d"
  },
  {
    "url": "assets/js/69.003d9c3b.js",
    "revision": "d1d098c8b2b41e0d6c3e47766b5d0564"
  },
  {
    "url": "assets/js/7.e5e84d3c.js",
    "revision": "3d9ef68287b6235dce1f405a51ec52fe"
  },
  {
    "url": "assets/js/70.4264c84e.js",
    "revision": "6b58a0e8c409ef621fcf26e434b5583a"
  },
  {
    "url": "assets/js/71.a01ed5d0.js",
    "revision": "dcd3bd424450fc612880ddbcf684560e"
  },
  {
    "url": "assets/js/72.9e0fa716.js",
    "revision": "8f1d7da20fab9d2c6e1818178e5fc3a0"
  },
  {
    "url": "assets/js/73.9982b42b.js",
    "revision": "447f25836166dfff948cf4950a572a26"
  },
  {
    "url": "assets/js/74.8a8cd093.js",
    "revision": "0f2d1bc484c4716c494f98be3030dbb4"
  },
  {
    "url": "assets/js/75.103a1383.js",
    "revision": "e5e1936f45cebd201fe281232eaeb685"
  },
  {
    "url": "assets/js/76.9d2dfa23.js",
    "revision": "b4dbcc2199201ef34bc5b76d8e9a970c"
  },
  {
    "url": "assets/js/77.1e8bca91.js",
    "revision": "82ebc2d72a71fa7939351b4b1ee1eda8"
  },
  {
    "url": "assets/js/78.aa7ffca3.js",
    "revision": "3340b4d9e6ed1acf3575b057b086ea57"
  },
  {
    "url": "assets/js/79.3c150b50.js",
    "revision": "a64c1a2f6c7bb991a9e43128da67e9d9"
  },
  {
    "url": "assets/js/8.1b46e0a9.js",
    "revision": "29086fa5e32d2167fb3cc3eb6673e6b9"
  },
  {
    "url": "assets/js/80.93bc6132.js",
    "revision": "aba74e6a8a1f75033779e9ddc86699eb"
  },
  {
    "url": "assets/js/81.acaa49e4.js",
    "revision": "df3c0eb38aa364b2398fe4628c22860b"
  },
  {
    "url": "assets/js/82.ba47961d.js",
    "revision": "900e9c7460034b189c07f1a72258bf50"
  },
  {
    "url": "assets/js/83.0dc02992.js",
    "revision": "f3bbe9a9cf26e4e87ed06c0672fcf9bb"
  },
  {
    "url": "assets/js/84.2bb77555.js",
    "revision": "1443955cddb7544cc0cd523be29a228b"
  },
  {
    "url": "assets/js/85.12ec3e16.js",
    "revision": "65875321208c0abe6c6cc7093739638b"
  },
  {
    "url": "assets/js/86.df108431.js",
    "revision": "e776ba037b901e338adb8c59a3e36b83"
  },
  {
    "url": "assets/js/87.3ab18003.js",
    "revision": "3836ad084cf795e8a48a5b30e2891ad9"
  },
  {
    "url": "assets/js/88.a1c4c043.js",
    "revision": "7a04ed325d0f94d4f507136d74b0933d"
  },
  {
    "url": "assets/js/89.a14c51b9.js",
    "revision": "883d6aec3121b714ae3056746bba2825"
  },
  {
    "url": "assets/js/9.dfdf4f99.js",
    "revision": "027d48022bfa5870516e220afb51f101"
  },
  {
    "url": "assets/js/90.7c33b5d4.js",
    "revision": "03b325177bb9f5fd2e42c7360fd66b76"
  },
  {
    "url": "assets/js/91.f015f8b9.js",
    "revision": "778aa9120a22a518abd7e881cf543049"
  },
  {
    "url": "assets/js/92.6e21a860.js",
    "revision": "c6db593a5bd09ee5d522062fe963ed81"
  },
  {
    "url": "assets/js/93.f2ff3d53.js",
    "revision": "0724a45fbd784b690a55be13ebdea294"
  },
  {
    "url": "assets/js/94.a8f93ddc.js",
    "revision": "9ccc7dcbe54b2ce7d8239143787876a2"
  },
  {
    "url": "assets/js/95.6f346960.js",
    "revision": "f543c408d81a94c290de003f0223f29b"
  },
  {
    "url": "assets/js/96.b46e5907.js",
    "revision": "e135a8cf08725bc7cf629933a4dd1100"
  },
  {
    "url": "assets/js/97.ca239c12.js",
    "revision": "63020db31a14dbbc9966ad8193490e8f"
  },
  {
    "url": "assets/js/98.36a0ec95.js",
    "revision": "1c20071136a0c373773ce5f11fc2db0b"
  },
  {
    "url": "assets/js/99.c2209ec6.js",
    "revision": "fc5e7cf42360252b83b63743b667bc8f"
  },
  {
    "url": "assets/js/app.5fa7aa32.js",
    "revision": "844228643ed1bcc2446ae855c4326845"
  },
  {
    "url": "assets/js/vendors~docsearch.fc83d3e1.js",
    "revision": "cda63698bd1258a78e6669eaec110eaf"
  },
  {
    "url": "configuration/api.html",
    "revision": "d9e13bb676556c02f32d1006c9ab52e4"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "6208273ac5892a424bc6cfe211ba8b58"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "983007bb2fdc0c62ac5c2f8d170bf6fb"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "4cbeed47be5f1984d4bfc0f276477d96"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "4f1d1e791833f6064dee7b18ccde3589"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "05c3fbcfe67dbf718873faefd543a87d"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "cea2032ac5e3d193a04919d01695a505"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "54944097b20c4c4b34b7e5dc4aa9eda6"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "661e9761e6b196277f0a95c053149511"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "b499891a72d1c5d0cb1ff8ea335aad46"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "87f2d34a79aaa93fa5732fa780f5de74"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "546ed2fb415d62ee41a81689fe3256e5"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "bc1c3a0101a38e515478da660be0a7d0"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "9d022134150cf05fe75a988a8ecea0a2"
  },
  {
    "url": "configuration/index.html",
    "revision": "cbac6bc043672ea173a5871a30e8e4d6"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "05dfe5eb2a3261d8dca0b937490f413f"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "8ae501f0e6065f9b78310af460ecd746"
  },
  {
    "url": "contributing.html",
    "revision": "0a28b54292913a344c755e6513ebf878"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "69971040aaa141c708bbe38b5cb749db"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "446f8f4bf2862b16668268f16905554c"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "59aab74c3d771b2c23441aabe1b8a362"
  },
  {
    "url": "core-extensions/metaboxes.html",
    "revision": "2c87133c4d3b4ceca591d4dc5755e403"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "614706ef34a3297e17e2f858d6ba38fb"
  },
  {
    "url": "core-extensions/repeater.html",
    "revision": "3dc91a00e08f174dc6d76efcd2d3f1dd"
  },
  {
    "url": "core-extensions/search.html",
    "revision": "833c4ceececeb05a4521165fa42ac7f8"
  },
  {
    "url": "core-extensions/shortcodes.html",
    "revision": "c04f70bf781db3fbc51ecde9cf0ff030"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "26e71fee3a22063dcecd23222d83944f"
  },
  {
    "url": "core-fields/background.html",
    "revision": "089946cd941231a48c845ae6ab0e19de"
  },
  {
    "url": "core-fields/border.html",
    "revision": "2563d0e59513b9bacb2a8d9e5d13ac5d"
  },
  {
    "url": "core-fields/box-shadow.html",
    "revision": "66284789ca874eb075e09b207144c17f"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "5225e5dcca86b1e53bee6f13da60283d"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "dc69d11b8768acd180ee0ece6b3d1584"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "144eedefb2345bee2c596864d9153a65"
  },
  {
    "url": "core-fields/color-palette.html",
    "revision": "3678ca163f0d7fe80b2ca47b9ae38046"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "d9034846710555949127da45354ccceb"
  },
  {
    "url": "core-fields/color.html",
    "revision": "ccb0fdd617db24aaed4920f945a9f92d"
  },
  {
    "url": "core-fields/date.html",
    "revision": "42f9c71317a137ae6d0363566c7ba57c"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "0d35bc6432a516dde2807441b0017386"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "76654e2388b7d4e08d6d812a2b1a0150"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "b65a0dc3358ee84bc310573a56b113e0"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "1dd02eccb9698057b85b89aaec2df41b"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "126ee5bcf531347921b05b51c75e2fb6"
  },
  {
    "url": "core-fields/index.html",
    "revision": "e78f17f10ce21f8b2a0cc93b9be76742"
  },
  {
    "url": "core-fields/info.html",
    "revision": "de2257429680b508d38b32a6a6f86cec"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "95af7baeb79617ba933ad2101b55cf33"
  },
  {
    "url": "core-fields/media.html",
    "revision": "a9600f8bf5410fb2d2020e5a2088d881"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "201757bc03e826ff8e5bc87c6700ee87"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "9472c28d12d7ef795a58616cd98e595f"
  },
  {
    "url": "core-fields/password.html",
    "revision": "dc3a10da977362412751f9dab702e3f1"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "0b0dd8eaee081038eef11ac393102c8b"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "d1e1528684c8b9a22996c55de47c813c"
  },
  {
    "url": "core-fields/section.html",
    "revision": "402b53aa24311bf5a699303046e13696"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "6d7734c270e2974a8b43c82658245a24"
  },
  {
    "url": "core-fields/select.html",
    "revision": "f1cc311f8c1eb20aeec722b1d0b2a3c2"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "b5d8664db70db8a7f723683807476eb0"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "416d1fa33861bba846ede1e33b27de2c"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "dfd3db45296e80bfd7bd11064d3f2c3a"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "1cec6b53afd74e57e19b788aac74584b"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "e7df93576d91b6d23d7832fbfdbf0955"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "1a76e81d5c7043c4fa971c6a7f76ed0e"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "c0a5028fc14e7c6ef7e44238dab64a16"
  },
  {
    "url": "core-fields/text.html",
    "revision": "6fe857e1321c4446e0bbc58039f6eeef"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "a248b588f778e64630bb1b1e51572d50"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "220a1c9ceb0289ff4706a003e02c6769"
  },
  {
    "url": "core/index.html",
    "revision": "63b73edcb0fd8d574c8d6d02980a3b24"
  },
  {
    "url": "faq/index.html",
    "revision": "cece97642c2bc0f39a063c4e1a8b7a62"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "7c44ce9dd51c30e52835e776b6df0861"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "21e2e2459c00da290dd9ca2befe14c60"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "f90e0847bedfd7136f82220372adfaad"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "17c370166464d19aa9a843fb896d448a"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "e5eb73459f6a50e2fe2d5b4dcc024c1b"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "76c28d905072573a03389d1e791e9838"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "22deb19389d5e372aeefe408924e60d1"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "97de0c5be57870aa52c50f2cbf71de7b"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "f82721cc86c38e78393d440eb1e73e24"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "e1bb407f7136ebd3ad3d607f479872c7"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "2cb0c95a2c1801695923e4e089d5a35a"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "9e1059d99f07bb7630b64da0776b447f"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "1dcb584c15e39cb04dafd39e93ef0fb3"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "647864ea8a11b7edcb05320f48c11317"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "ce1def6b3a97e2fd9c2f6c8b84f9eb1d"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "5182852eea15c734e98a0f8623c94d29"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "03eacd7abe102841ebdc877f26697b8e"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "36f436d211b4f84c09cba225324e88be"
  },
  {
    "url": "guides/index.html",
    "revision": "edec1adf9ec945794ef2305728f3b9c9"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "55086efa15d24cd577f6f1da119b6611"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "36ef92fc77a57b80df19157b04328390"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "9e410dd6c469a048b6daefae33fb0f0f"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "27840534623c4931d450038e66a0e0d1"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "c5572031b7d9e03e0b434d6a9aa45692"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "2ec8a325228c1244701f3959483ae3d8"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "8a218de7bad4426bd6b2581d9f782993"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "02ce319ab4df5659b79be5c5a595fdad"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "bcc761713caf5924badb189bf78ea1c9"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "667be0e1a04b215064ddbc4d43e2c3b9"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "119a6c084008a138111770ea0c3cc96b"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "e301fc522312a12b910c7768cb19fe17"
  },
  {
    "url": "premium/index.html",
    "revision": "904c4c8d79ada9eb1fcfd5c91b812bdb"
  },
  {
    "url": "premium/js-button.html",
    "revision": "f259327573b95878280cb3ccb803b7d9"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "18891beeee79972d5a8fc458741412eb"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "c4068240253f29408668a2215efa1e46"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "fc8f367cc40bee662a174945e2f0ae1e"
  },
  {
    "url": "redux-2x.png",
    "revision": "a3c7a8b9bdaf7c90d53cb80df4ddf319"
  },
  {
    "url": "redux.png",
    "revision": "73ee94cef04626971d17266e344ba958"
  },
  {
    "url": "top_logo-2x.png",
    "revision": "5fa8e8952709be452e415f738b0f4c15"
  },
  {
    "url": "top_logo.png",
    "revision": "12b361357b610542d3baeb79947cba6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

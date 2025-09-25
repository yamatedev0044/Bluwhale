if (!self.define) {
  let e,
    i = {};
  const a = (a, r) => (
    (a = new URL(a + ".js", r).href),
    i[a] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = i), document.head.appendChild(e);
        } else (e = a), importScripts(a), i();
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, b) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[c]) return;
    let s = {};
    const d = (e) => a(e, c),
      n = { module: { uri: c }, exports: s, require: d };
    i[c] = Promise.all(r.map((e) => n[e] || d(e))).then((e) => (b(...e), s));
  };
}
define(["./workbox-5d38fc9a"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/Bluwhale-logo.png",
          revision: "6966a33a7c897ff421d8d3570599d5d5",
        },
        {
          url: "/Moralis-DarkBG.svg",
          revision: "1882c57b32744a11e85e55e975fd18b4",
        },
        {
          url: "/Moralis-LightBG.svg",
          revision: "74ab22d9ea187055dc2830618c84ed8c",
        },
        { url: "/_headers", revision: "b1e4269acf7254a9d6329892fd8a43a6" },
        {
          url: "/_next/static/aJEFIZijCluDILWrAPJUz/_buildManifest.js",
          revision: "a7579654f837cfbb1c426f78ff083e73",
        },
        {
          url: "/_next/static/aJEFIZijCluDILWrAPJUz/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/008f9e8b-d2668e3384ae7d6c.js",
          revision: "d2668e3384ae7d6c",
        },
        {
          url: "/_next/static/chunks/065a1614.42d5af67178eedd1.js",
          revision: "42d5af67178eedd1",
        },
        {
          url: "/_next/static/chunks/106.3c4f321ca122afc2.js",
          revision: "3c4f321ca122afc2",
        },
        {
          url: "/_next/static/chunks/1084.f20c6a986448592b.js",
          revision: "f20c6a986448592b",
        },
        {
          url: "/_next/static/chunks/1099.f2b8aac9e4ccf746.js",
          revision: "f2b8aac9e4ccf746",
        },
        {
          url: "/_next/static/chunks/1124-4f8b7e851b6d2092.js",
          revision: "4f8b7e851b6d2092",
        },
        {
          url: "/_next/static/chunks/113-0ffa85f6793493c6.js",
          revision: "0ffa85f6793493c6",
        },
        {
          url: "/_next/static/chunks/1142.190d0818480dff58.js",
          revision: "190d0818480dff58",
        },
        {
          url: "/_next/static/chunks/123.2175423febab125e.js",
          revision: "2175423febab125e",
        },
        {
          url: "/_next/static/chunks/1258.cd4f2a8fa289cb3c.js",
          revision: "cd4f2a8fa289cb3c",
        },
        {
          url: "/_next/static/chunks/1369-1e67903649663dd0.js",
          revision: "1e67903649663dd0",
        },
        {
          url: "/_next/static/chunks/1380.b106908fed17a80d.js",
          revision: "b106908fed17a80d",
        },
        {
          url: "/_next/static/chunks/1586.82256a2c2d79a147.js",
          revision: "82256a2c2d79a147",
        },
        {
          url: "/_next/static/chunks/1602-7969628fc2d24465.js",
          revision: "7969628fc2d24465",
        },
        {
          url: "/_next/static/chunks/1664-7246e58924eb0118.js",
          revision: "7246e58924eb0118",
        },
        {
          url: "/_next/static/chunks/1785.3333603456c83603.js",
          revision: "3333603456c83603",
        },
        {
          url: "/_next/static/chunks/1801.51d785befdcf67ef.js",
          revision: "51d785befdcf67ef",
        },
        {
          url: "/_next/static/chunks/1838.40203e2124467513.js",
          revision: "40203e2124467513",
        },
        {
          url: "/_next/static/chunks/1869.8e059c36d2dcc165.js",
          revision: "8e059c36d2dcc165",
        },
        {
          url: "/_next/static/chunks/1893.cffe23438b46b6ca.js",
          revision: "cffe23438b46b6ca",
        },
        {
          url: "/_next/static/chunks/1922-38a78ec9cdb321f5.js",
          revision: "38a78ec9cdb321f5",
        },
        {
          url: "/_next/static/chunks/1978.1c8cb5c419281473.js",
          revision: "1c8cb5c419281473",
        },
        {
          url: "/_next/static/chunks/1995.6f3c693f2aff3df1.js",
          revision: "6f3c693f2aff3df1",
        },
        {
          url: "/_next/static/chunks/207.4f77d75beec832d5.js",
          revision: "4f77d75beec832d5",
        },
        {
          url: "/_next/static/chunks/220-ffe5fe9cb4566113.js",
          revision: "ffe5fe9cb4566113",
        },
        {
          url: "/_next/static/chunks/22e32791-561eb0cf0cc4f49c.js",
          revision: "561eb0cf0cc4f49c",
        },
        {
          url: "/_next/static/chunks/2334-54e030c5682fdc19.js",
          revision: "54e030c5682fdc19",
        },
        {
          url: "/_next/static/chunks/2427.4a6f29e2dfda6ea9.js",
          revision: "4a6f29e2dfda6ea9",
        },
        {
          url: "/_next/static/chunks/2460-22954825a5478f21.js",
          revision: "22954825a5478f21",
        },
        {
          url: "/_next/static/chunks/2556.3306bd6bd3abefc0.js",
          revision: "3306bd6bd3abefc0",
        },
        {
          url: "/_next/static/chunks/2634-61b0c6971c09457b.js",
          revision: "61b0c6971c09457b",
        },
        {
          url: "/_next/static/chunks/2726.850a865d192df3f0.js",
          revision: "850a865d192df3f0",
        },
        {
          url: "/_next/static/chunks/274-7820a91d97662903.js",
          revision: "7820a91d97662903",
        },
        {
          url: "/_next/static/chunks/2775.842a8f33ed8837ea.js",
          revision: "842a8f33ed8837ea",
        },
        {
          url: "/_next/static/chunks/2778.23caa259bf7f1655.js",
          revision: "23caa259bf7f1655",
        },
        {
          url: "/_next/static/chunks/2821.446cc9156b8f12a5.js",
          revision: "446cc9156b8f12a5",
        },
        {
          url: "/_next/static/chunks/2894.f1819b63de72fac1.js",
          revision: "f1819b63de72fac1",
        },
        {
          url: "/_next/static/chunks/300.13e1ac460cc10f7b.js",
          revision: "13e1ac460cc10f7b",
        },
        {
          url: "/_next/static/chunks/3014.ce391f0062a854e9.js",
          revision: "ce391f0062a854e9",
        },
        {
          url: "/_next/static/chunks/3018-e637f28a2f8dbfee.js",
          revision: "e637f28a2f8dbfee",
        },
        {
          url: "/_next/static/chunks/3054-04ceac6f4eefd0d1.js",
          revision: "04ceac6f4eefd0d1",
        },
        {
          url: "/_next/static/chunks/3069.d056d1a72581dd5f.js",
          revision: "d056d1a72581dd5f",
        },
        {
          url: "/_next/static/chunks/3070.4eda7185c4c5e8ad.js",
          revision: "4eda7185c4c5e8ad",
        },
        {
          url: "/_next/static/chunks/3072.ab7a2a43c367ac16.js",
          revision: "ab7a2a43c367ac16",
        },
        {
          url: "/_next/static/chunks/3091-52341adfede2182e.js",
          revision: "52341adfede2182e",
        },
        {
          url: "/_next/static/chunks/3134.640b0cd74f256fa8.js",
          revision: "640b0cd74f256fa8",
        },
        {
          url: "/_next/static/chunks/3179.99cf7f9eb6ee27b9.js",
          revision: "99cf7f9eb6ee27b9",
        },
        {
          url: "/_next/static/chunks/3615-c089950edacda7da.js",
          revision: "c089950edacda7da",
        },
        {
          url: "/_next/static/chunks/3653.0e7b01bd666b85e1.js",
          revision: "0e7b01bd666b85e1",
        },
        {
          url: "/_next/static/chunks/3716.c32a6682479d2bff.js",
          revision: "c32a6682479d2bff",
        },
        {
          url: "/_next/static/chunks/37ed31bc.ba1d435a0c9fb3b4.js",
          revision: "ba1d435a0c9fb3b4",
        },
        {
          url: "/_next/static/chunks/3810.8751dba2a6f9701c.js",
          revision: "8751dba2a6f9701c",
        },
        {
          url: "/_next/static/chunks/3815.9568f4bea065a5cd.js",
          revision: "9568f4bea065a5cd",
        },
        {
          url: "/_next/static/chunks/3858.68d04a5edf2bf199.js",
          revision: "68d04a5edf2bf199",
        },
        {
          url: "/_next/static/chunks/3878.3f62c93a8d4e1046.js",
          revision: "3f62c93a8d4e1046",
        },
        {
          url: "/_next/static/chunks/3883.1b2d9b6c50240e8c.js",
          revision: "1b2d9b6c50240e8c",
        },
        {
          url: "/_next/static/chunks/3a17f596-b453bc5201784fbc.js",
          revision: "b453bc5201784fbc",
        },
        {
          url: "/_next/static/chunks/3b1baa31-4a8d9c4a0918de79.js",
          revision: "4a8d9c4a0918de79",
        },
        {
          url: "/_next/static/chunks/3b33c4dc-eb8cd162e779559b.js",
          revision: "eb8cd162e779559b",
        },
        {
          url: "/_next/static/chunks/4007.35a8212be32db285.js",
          revision: "35a8212be32db285",
        },
        {
          url: "/_next/static/chunks/4016.6f88c9bea98daafc.js",
          revision: "6f88c9bea98daafc",
        },
        {
          url: "/_next/static/chunks/403-6de345d3fedf5746.js",
          revision: "6de345d3fedf5746",
        },
        {
          url: "/_next/static/chunks/4050.396dec97dfaec5a8.js",
          revision: "396dec97dfaec5a8",
        },
        {
          url: "/_next/static/chunks/4105-6af0559c99ff10d9.js",
          revision: "6af0559c99ff10d9",
        },
        {
          url: "/_next/static/chunks/41155975-64a74501cd51e1f8.js",
          revision: "64a74501cd51e1f8",
        },
        {
          url: "/_next/static/chunks/4178.57a6b2703bd84059.js",
          revision: "57a6b2703bd84059",
        },
        {
          url: "/_next/static/chunks/4238.04c860d7e63670dd.js",
          revision: "04c860d7e63670dd",
        },
        {
          url: "/_next/static/chunks/4259-5c83a0048eb4bd21.js",
          revision: "5c83a0048eb4bd21",
        },
        {
          url: "/_next/static/chunks/4279.f0cfa10e297f004b.js",
          revision: "f0cfa10e297f004b",
        },
        {
          url: "/_next/static/chunks/4281-c39f8fe4b2d5d329.js",
          revision: "c39f8fe4b2d5d329",
        },
        {
          url: "/_next/static/chunks/4494.ec951f81dbe68955.js",
          revision: "ec951f81dbe68955",
        },
        {
          url: "/_next/static/chunks/4496.664092d7d87eae6e.js",
          revision: "664092d7d87eae6e",
        },
        {
          url: "/_next/static/chunks/4577d2ec-53d6d99f19847a49.js",
          revision: "53d6d99f19847a49",
        },
        {
          url: "/_next/static/chunks/4646-81d158e8aafcbc55.js",
          revision: "81d158e8aafcbc55",
        },
        {
          url: "/_next/static/chunks/4726.bee0a88a8d1ac927.js",
          revision: "bee0a88a8d1ac927",
        },
        {
          url: "/_next/static/chunks/49093289-3a57fa0744fab612.js",
          revision: "3a57fa0744fab612",
        },
        {
          url: "/_next/static/chunks/4943.5d66f00527a2fff6.js",
          revision: "5d66f00527a2fff6",
        },
        {
          url: "/_next/static/chunks/4959-7e574977120ef5e4.js",
          revision: "7e574977120ef5e4",
        },
        {
          url: "/_next/static/chunks/4995.e3212962919883f4.js",
          revision: "e3212962919883f4",
        },
        {
          url: "/_next/static/chunks/4fee24eb-3abdd946f1429d24.js",
          revision: "3abdd946f1429d24",
        },
        {
          url: "/_next/static/chunks/5015-d31d8cc96b98775c.js",
          revision: "d31d8cc96b98775c",
        },
        {
          url: "/_next/static/chunks/5130-2ab816f21850af65.js",
          revision: "2ab816f21850af65",
        },
        {
          url: "/_next/static/chunks/5141-3453ed3fdac2e8ee.js",
          revision: "3453ed3fdac2e8ee",
        },
        {
          url: "/_next/static/chunks/5252.96dc9f1a325aed0b.js",
          revision: "96dc9f1a325aed0b",
        },
        {
          url: "/_next/static/chunks/5260.b1af2a26ecd702b8.js",
          revision: "b1af2a26ecd702b8",
        },
        {
          url: "/_next/static/chunks/5296-1c70b342c7693a71.js",
          revision: "1c70b342c7693a71",
        },
        {
          url: "/_next/static/chunks/5339-e3ac83566cb27096.js",
          revision: "e3ac83566cb27096",
        },
        {
          url: "/_next/static/chunks/5432793e.d58ad83516c78e99.js",
          revision: "d58ad83516c78e99",
        },
        {
          url: "/_next/static/chunks/5461.59f221e1befb1c32.js",
          revision: "59f221e1befb1c32",
        },
        {
          url: "/_next/static/chunks/5500-2325fa073a999852.js",
          revision: "2325fa073a999852",
        },
        {
          url: "/_next/static/chunks/5518-85a81f08506d83d6.js",
          revision: "85a81f08506d83d6",
        },
        {
          url: "/_next/static/chunks/5524.03aafd16862849b6.js",
          revision: "03aafd16862849b6",
        },
        {
          url: "/_next/static/chunks/5532.ff0731f568beeee3.js",
          revision: "ff0731f568beeee3",
        },
        {
          url: "/_next/static/chunks/5537.1af4f47043d21dd4.js",
          revision: "1af4f47043d21dd4",
        },
        {
          url: "/_next/static/chunks/5579-8dc5700f8c31ff74.js",
          revision: "8dc5700f8c31ff74",
        },
        {
          url: "/_next/static/chunks/5727625e-472faa645870c40c.js",
          revision: "472faa645870c40c",
        },
        {
          url: "/_next/static/chunks/5735-1be21d04f5fe4b05.js",
          revision: "1be21d04f5fe4b05",
        },
        {
          url: "/_next/static/chunks/5786.4574d2e6c17f6e2f.js",
          revision: "4574d2e6c17f6e2f",
        },
        {
          url: "/_next/static/chunks/5831-614292616b6465da.js",
          revision: "614292616b6465da",
        },
        {
          url: "/_next/static/chunks/5872.eb2f5f819f80c95d.js",
          revision: "eb2f5f819f80c95d",
        },
        {
          url: "/_next/static/chunks/5907-41f0418848ce956c.js",
          revision: "41f0418848ce956c",
        },
        {
          url: "/_next/static/chunks/5934.08ae13d93dce0840.js",
          revision: "08ae13d93dce0840",
        },
        {
          url: "/_next/static/chunks/600-ec9e0d947be0c9db.js",
          revision: "ec9e0d947be0c9db",
        },
        {
          url: "/_next/static/chunks/6075.bc19dfa949620eac.js",
          revision: "bc19dfa949620eac",
        },
        {
          url: "/_next/static/chunks/6085.8d8d04bc05af5503.js",
          revision: "8d8d04bc05af5503",
        },
        {
          url: "/_next/static/chunks/6094.608450b8178b771b.js",
          revision: "608450b8178b771b",
        },
        {
          url: "/_next/static/chunks/6111-f105d72269e3ecd0.js",
          revision: "f105d72269e3ecd0",
        },
        {
          url: "/_next/static/chunks/6203-e9be124a729069ba.js",
          revision: "e9be124a729069ba",
        },
        {
          url: "/_next/static/chunks/6284-60a7f52fbed0233d.js",
          revision: "60a7f52fbed0233d",
        },
        {
          url: "/_next/static/chunks/6301.7da5823d817954fd.js",
          revision: "7da5823d817954fd",
        },
        {
          url: "/_next/static/chunks/6366.ea0b37f8d075643e.js",
          revision: "ea0b37f8d075643e",
        },
        {
          url: "/_next/static/chunks/6406-c36ed1d4a325a86a.js",
          revision: "c36ed1d4a325a86a",
        },
        {
          url: "/_next/static/chunks/6503-7d7d241356ed1ea9.js",
          revision: "7d7d241356ed1ea9",
        },
        {
          url: "/_next/static/chunks/654.8cccbb8d32d24aa7.js",
          revision: "8cccbb8d32d24aa7",
        },
        {
          url: "/_next/static/chunks/6603.e0ad29d5084a4919.js",
          revision: "e0ad29d5084a4919",
        },
        {
          url: "/_next/static/chunks/6609.4f0a414b5e7d244b.js",
          revision: "4f0a414b5e7d244b",
        },
        {
          url: "/_next/static/chunks/6640-5ad81dca0e5bafa2.js",
          revision: "5ad81dca0e5bafa2",
        },
        {
          url: "/_next/static/chunks/684.bf6acc9e5b3eb510.js",
          revision: "bf6acc9e5b3eb510",
        },
        {
          url: "/_next/static/chunks/6876.82596acfb5a2334a.js",
          revision: "82596acfb5a2334a",
        },
        {
          url: "/_next/static/chunks/68c0a17d-3cae3ea83f8af2c1.js",
          revision: "3cae3ea83f8af2c1",
        },
        {
          url: "/_next/static/chunks/6b2193de-49b9a4d831d7dd5a.js",
          revision: "49b9a4d831d7dd5a",
        },
        {
          url: "/_next/static/chunks/7100.7034250b93f6f9cf.js",
          revision: "7034250b93f6f9cf",
        },
        {
          url: "/_next/static/chunks/7142.2246a2b40e0d0c13.js",
          revision: "2246a2b40e0d0c13",
        },
        {
          url: "/_next/static/chunks/7170.8c4c0673329279e1.js",
          revision: "8c4c0673329279e1",
        },
        {
          url: "/_next/static/chunks/7203-44fc0c76fe29371e.js",
          revision: "44fc0c76fe29371e",
        },
        {
          url: "/_next/static/chunks/7218.3065c06e9a986df7.js",
          revision: "3065c06e9a986df7",
        },
        {
          url: "/_next/static/chunks/733.6e4725e0a5ec1050.js",
          revision: "6e4725e0a5ec1050",
        },
        {
          url: "/_next/static/chunks/7525-2a68886c66ab35b5.js",
          revision: "2a68886c66ab35b5",
        },
        {
          url: "/_next/static/chunks/7544.e4bebc9d3cdcca3f.js",
          revision: "e4bebc9d3cdcca3f",
        },
        {
          url: "/_next/static/chunks/7587.58a9560179e8ab3b.js",
          revision: "58a9560179e8ab3b",
        },
        {
          url: "/_next/static/chunks/75fc9c18-02b28d24f737c2ca.js",
          revision: "02b28d24f737c2ca",
        },
        {
          url: "/_next/static/chunks/7669.4199eaf9ed23fa4a.js",
          revision: "4199eaf9ed23fa4a",
        },
        {
          url: "/_next/static/chunks/7690.599552b9d1bb3106.js",
          revision: "599552b9d1bb3106",
        },
        {
          url: "/_next/static/chunks/7761.22cbd8d5e81ef08b.js",
          revision: "22cbd8d5e81ef08b",
        },
        {
          url: "/_next/static/chunks/7835-c3175647722e17e7.js",
          revision: "c3175647722e17e7",
        },
        {
          url: "/_next/static/chunks/7899.982a93e92d4393e7.js",
          revision: "982a93e92d4393e7",
        },
        {
          url: "/_next/static/chunks/78c3dd32-942ca9ecb0d6138f.js",
          revision: "942ca9ecb0d6138f",
        },
        {
          url: "/_next/static/chunks/7947-d96ed467df4ab967.js",
          revision: "d96ed467df4ab967",
        },
        {
          url: "/_next/static/chunks/8031-bcab74603935b934.js",
          revision: "bcab74603935b934",
        },
        {
          url: "/_next/static/chunks/8154.a55b63cef71165e9.js",
          revision: "a55b63cef71165e9",
        },
        {
          url: "/_next/static/chunks/8243.17399e111fe9410a.js",
          revision: "17399e111fe9410a",
        },
        {
          url: "/_next/static/chunks/8318-7e8494754f3be755.js",
          revision: "7e8494754f3be755",
        },
        {
          url: "/_next/static/chunks/8345.d330a2517ddd73a0.js",
          revision: "d330a2517ddd73a0",
        },
        {
          url: "/_next/static/chunks/8452.1d6d64319ef8842f.js",
          revision: "1d6d64319ef8842f",
        },
        {
          url: "/_next/static/chunks/8459-9566c58f3f24a9d5.js",
          revision: "9566c58f3f24a9d5",
        },
        {
          url: "/_next/static/chunks/8578-326611f02b020ea4.js",
          revision: "326611f02b020ea4",
        },
        {
          url: "/_next/static/chunks/8658.b590170481d7711f.js",
          revision: "b590170481d7711f",
        },
        {
          url: "/_next/static/chunks/8698.c11e8aa52bffe0b9.js",
          revision: "c11e8aa52bffe0b9",
        },
        {
          url: "/_next/static/chunks/8749.98f0acf448fd542f.js",
          revision: "98f0acf448fd542f",
        },
        {
          url: "/_next/static/chunks/8819.35e6c43d33eb7c5d.js",
          revision: "35e6c43d33eb7c5d",
        },
        {
          url: "/_next/static/chunks/883.08ee44808abafc46.js",
          revision: "08ee44808abafc46",
        },
        {
          url: "/_next/static/chunks/8831.a7799f9b457e0fcb.js",
          revision: "a7799f9b457e0fcb",
        },
        {
          url: "/_next/static/chunks/8871-f7e70c95a1a7f601.js",
          revision: "f7e70c95a1a7f601",
        },
        {
          url: "/_next/static/chunks/8874-78f1c595c57d32dc.js",
          revision: "78f1c595c57d32dc",
        },
        {
          url: "/_next/static/chunks/8875-609f8c486dd64306.js",
          revision: "609f8c486dd64306",
        },
        {
          url: "/_next/static/chunks/8923beca-b5e3387099b8a5dc.js",
          revision: "b5e3387099b8a5dc",
        },
        {
          url: "/_next/static/chunks/8e59b7e8-7fae6844edad5757.js",
          revision: "7fae6844edad5757",
        },
        {
          url: "/_next/static/chunks/9058.1a200abf24ee92f1.js",
          revision: "1a200abf24ee92f1",
        },
        {
          url: "/_next/static/chunks/9117.e0d8e4896a2784c3.js",
          revision: "e0d8e4896a2784c3",
        },
        {
          url: "/_next/static/chunks/9147.f391af6a741a2786.js",
          revision: "f391af6a741a2786",
        },
        {
          url: "/_next/static/chunks/9158-b02aa4c59f85819a.js",
          revision: "b02aa4c59f85819a",
        },
        {
          url: "/_next/static/chunks/9229-979cef3ee7535f1e.js",
          revision: "979cef3ee7535f1e",
        },
        {
          url: "/_next/static/chunks/9268.d077bfdc8486e394.js",
          revision: "d077bfdc8486e394",
        },
        {
          url: "/_next/static/chunks/9343.f563675c8b3bf1f5.js",
          revision: "f563675c8b3bf1f5",
        },
        {
          url: "/_next/static/chunks/9521.c90b2b66b0f028e2.js",
          revision: "c90b2b66b0f028e2",
        },
        {
          url: "/_next/static/chunks/96.601dcd2b45d643ce.js",
          revision: "601dcd2b45d643ce",
        },
        {
          url: "/_next/static/chunks/9635.9cfd981a48337019.js",
          revision: "9cfd981a48337019",
        },
        {
          url: "/_next/static/chunks/964-59390db454a8734e.js",
          revision: "59390db454a8734e",
        },
        {
          url: "/_next/static/chunks/9682.4b333eb7bb9bc651.js",
          revision: "4b333eb7bb9bc651",
        },
        {
          url: "/_next/static/chunks/9841-d3e235164030db61.js",
          revision: "d3e235164030db61",
        },
        {
          url: "/_next/static/chunks/98504391-9ce199b5920b7fc3.js",
          revision: "9ce199b5920b7fc3",
        },
        {
          url: "/_next/static/chunks/a8a9b842.59e1f541e0b1f4be.js",
          revision: "59e1f541e0b1f4be",
        },
        {
          url: "/_next/static/chunks/ad7f724d-b7be9ddcc22d5969.js",
          revision: "b7be9ddcc22d5969",
        },
        {
          url: "/_next/static/chunks/dc5f8571-31357b9177b5d23e.js",
          revision: "31357b9177b5d23e",
        },
        {
          url: "/_next/static/chunks/e48d811e-395b9b0230d36e6e.js",
          revision: "395b9b0230d36e6e",
        },
        {
          url: "/_next/static/chunks/e5d517d6.5fd28393f81770b3.js",
          revision: "5fd28393f81770b3",
        },
        {
          url: "/_next/static/chunks/e798daad-bba41d2e1e59c1ee.js",
          revision: "bba41d2e1e59c1ee",
        },
        {
          url: "/_next/static/chunks/ea1eb547.68a1cbf3166c258f.js",
          revision: "68a1cbf3166c258f",
        },
        {
          url: "/_next/static/chunks/ee93dc50-b061cea651ae8a28.js",
          revision: "b061cea651ae8a28",
        },
        {
          url: "/_next/static/chunks/fb68c59b-4ffb590a2b5befd7.js",
          revision: "4ffb590a2b5befd7",
        },
        {
          url: "/_next/static/chunks/fd37ac65.4a2d3c29c24a12e4.js",
          revision: "4a2d3c29c24a12e4",
        },
        {
          url: "/_next/static/chunks/fea29d9f-6f7bfafe2c01f669.js",
          revision: "6f7bfafe2c01f669",
        },
        {
          url: "/_next/static/chunks/ffd38843.9595034616f7add4.js",
          revision: "9595034616f7add4",
        },
        {
          url: "/_next/static/chunks/framework-f45b618520b56794.js",
          revision: "f45b618520b56794",
        },
        {
          url: "/_next/static/chunks/main-52b65639514505f5.js",
          revision: "52b65639514505f5",
        },
        {
          url: "/_next/static/chunks/pages/_error-e4216aab802f5810.js",
          revision: "e4216aab802f5810",
        },
        {
          url: "/_next/static/chunks/pages/chains/%5Bchain_name%5D-01c92202698cf416.js",
          revision: "01c92202698cf416",
        },
        {
          url: "/_next/static/chunks/pages/consumer/link-8c9fb0d8e6b673ae.js",
          revision: "8c9fb0d8e6b673ae",
        },
        {
          url: "/_next/static/chunks/pages/consumer/login-0558fb1eb0d89e2c.js",
          revision: "0558fb1eb0d89e2c",
        },
        {
          url: "/_next/static/chunks/pages/consumer/mobile/accountdetails-951f24dcfda8fa84.js",
          revision: "951f24dcfda8fa84",
        },
        {
          url: "/_next/static/chunks/pages/consumer/mobile/marketplace-14726426f62b9e10.js",
          revision: "14726426f62b9e10",
        },
        {
          url: "/_next/static/chunks/pages/consumer/mobile/myprofile-a0ffbbbd5fee83e6.js",
          revision: "a0ffbbbd5fee83e6",
        },
        {
          url: "/_next/static/chunks/pages/consumer/mobile/node-3cb1a7a6566855e8.js",
          revision: "3cb1a7a6566855e8",
        },
        {
          url: "/_next/static/chunks/pages/consumer/mobile/othersPage/%5Baddress%5D-6e8dbcc550b4b53e.js",
          revision: "6e8dbcc550b4b53e",
        },
        {
          url: "/_next/static/chunks/pages/consumer/nodes-b7de8a0e329e7e67.js",
          revision: "b7de8a0e329e7e67",
        },
        {
          url: "/_next/static/chunks/pages/consumer/staking-54a79b0d2ac8eaa8.js",
          revision: "54a79b0d2ac8eaa8",
        },
        {
          url: "/_next/static/chunks/pages/consumer/test-2d6f658a951dfeb1.js",
          revision: "2d6f658a951dfeb1",
        },
        {
          url: "/_next/static/chunks/pages/consumer/token/%5Baddress%5D-1b4d9f2661cc38a6.js",
          revision: "1b4d9f2661cc38a6",
        },
        {
          url: "/_next/static/chunks/pages/consumer/wallet/%5Baddress%5D-54dbe68b825eee6d.js",
          revision: "54dbe68b825eee6d",
        },
        {
          url: "/_next/static/chunks/pages/consumer/whaletank-a695d9c2afee119e.js",
          revision: "a695d9c2afee119e",
        },
        {
          url: "/_next/static/chunks/pages/enterprise-2ce45862b42eaf5b.js",
          revision: "2ce45862b42eaf5b",
        },
        {
          url: "/_next/static/chunks/pages/enterprise/%5Baddress%5D-d898d7f76366e468.js",
          revision: "d898d7f76366e468",
        },
        {
          url: "/_next/static/chunks/pages/enterprise/chain-83fec828c818891a.js",
          revision: "83fec828c818891a",
        },
        {
          url: "/_next/static/chunks/pages/enterprise/chain/%5Bchain_name%5D-c43965719d5dfa67.js",
          revision: "c43965719d5dfa67",
        },
        {
          url: "/_next/static/chunks/pages/enterprise/infographic-8dd53f595343e884.js",
          revision: "8dd53f595343e884",
        },
        {
          url: "/_next/static/chunks/pages/enterprise/link-66b0223629de1d45.js",
          revision: "66b0223629de1d45",
        },
        {
          url: "/_next/static/chunks/pages/enterprise/login-c32bd77e567d22a7.js",
          revision: "c32bd77e567d22a7",
        },
        {
          url: "/_next/static/chunks/pages/enterprise/plan-a09613557b2e6cf2.js",
          revision: "a09613557b2e6cf2",
        },
        {
          url: "/_next/static/chunks/pages/enterprise/userdetail/%5Baddress%5D-8cad0f89ffe4bd82.js",
          revision: "8cad0f89ffe4bd82",
        },
        {
          url: "/_next/static/chunks/pages/group/%5Baddress%5D-7cf041eaac9161a9.js",
          revision: "7cf041eaac9161a9",
        },
        {
          url: "/_next/static/chunks/pages/login-92419245e37fc2d8.js",
          revision: "92419245e37fc2d8",
        },
        {
          url: "/_next/static/chunks/pages/login/callback-2056f3630b349326.js",
          revision: "2056f3630b349326",
        },
        {
          url: "/_next/static/chunks/pages/login/discord/callback-9993c1ea1ec70e5d.js",
          revision: "9993c1ea1ec70e5d",
        },
        {
          url: "/_next/static/chunks/pages/masternode-agreement-9425603be9c19dfc.js",
          revision: "9425603be9c19dfc",
        },
        {
          url: "/_next/static/chunks/pages/transactions-7b5eb47b44b17520.js",
          revision: "7b5eb47b44b17520",
        },
        {
          url: "/_next/static/chunks/pages/wallet/%5Baddress%5D-d03c16798b139ff7.js",
          revision: "d03c16798b139ff7",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-4558f76ba273c133.js",
          revision: "4558f76ba273c133",
        },
        {
          url: "/_next/static/css/1e76132e4fb75a0a.css",
          revision: "1e76132e4fb75a0a",
        },
        {
          url: "/_next/static/css/2ccb8c141e1d2c73.css",
          revision: "2ccb8c141e1d2c73",
        },
        {
          url: "/_next/static/css/4166e55b353e0eda.css",
          revision: "4166e55b353e0eda",
        },
        {
          url: "/_next/static/css/4df78f2cd73d6b26.css",
          revision: "4df78f2cd73d6b26",
        },
        {
          url: "/_next/static/css/6bd1253938b8fded.css",
          revision: "6bd1253938b8fded",
        },
        {
          url: "/_next/static/css/76e122b1c74bc0e3.css",
          revision: "76e122b1c74bc0e3",
        },
        {
          url: "/_next/static/css/9c612cb74ddcbfc0.css",
          revision: "9c612cb74ddcbfc0",
        },
        {
          url: "/_next/static/css/cc33aa2488d73070.css",
          revision: "cc33aa2488d73070",
        },
        {
          url: "/_next/static/css/d364f4dcdbb8825f.css",
          revision: "d364f4dcdbb8825f",
        },
        {
          url: "/_next/static/css/fc128fd1d5f51ab7.css",
          revision: "fc128fd1d5f51ab7",
        },
        {
          url: "/_next/static/media/EmordBlack.a3a54dd1.eot",
          revision: "a3a54dd1",
        },
        {
          url: "/_next/static/media/EmordBlack.bd8c86e7.ttf",
          revision: "bd8c86e7",
        },
        {
          url: "/_next/static/media/EmordBlack.c83cfadc.woff",
          revision: "c83cfadc",
        },
        {
          url: "/_next/static/media/EmordBold.0eb30c5b.eot",
          revision: "0eb30c5b",
        },
        {
          url: "/_next/static/media/EmordBold.27ab48b2.ttf",
          revision: "27ab48b2",
        },
        {
          url: "/_next/static/media/EmordBold.b6c55a7c.woff",
          revision: "b6c55a7c",
        },
        {
          url: "/_next/static/media/EmordLight.1dc12c97.ttf",
          revision: "1dc12c97",
        },
        {
          url: "/_next/static/media/EmordLight.5a64641d.eot",
          revision: "5a64641d",
        },
        {
          url: "/_next/static/media/EmordLight.946fc86a.woff",
          revision: "946fc86a",
        },
        {
          url: "/_next/static/media/EmordMedium.85fab5eb.eot",
          revision: "85fab5eb",
        },
        {
          url: "/_next/static/media/EmordMedium.9646ea8b.ttf",
          revision: "9646ea8b",
        },
        {
          url: "/_next/static/media/EmordMedium.a5b23102.woff",
          revision: "a5b23102",
        },
        {
          url: "/_next/static/media/EmordRegular.0276896b.ttf",
          revision: "0276896b",
        },
        {
          url: "/_next/static/media/EmordRegular.363d6ef5.eot",
          revision: "363d6ef5",
        },
        {
          url: "/_next/static/media/EmordRegular.a82bc701.woff",
          revision: "a82bc701",
        },
        {
          url: "/_next/static/media/EmordSemibold.1f416e78.ttf",
          revision: "1f416e78",
        },
        {
          url: "/_next/static/media/EmordSemibold.85118634.eot",
          revision: "85118634",
        },
        {
          url: "/_next/static/media/EmordSemibold.c7beae04.woff",
          revision: "c7beae04",
        },
        {
          url: "/_next/static/media/ajax-loader.0b80f665.gif",
          revision: "0b80f665",
        },
        {
          url: "/_next/static/media/orbitron-black.41a6c759.woff",
          revision: "41a6c759",
        },
        {
          url: "/_next/static/media/orbitron-bold.991aa14b.woff",
          revision: "991aa14b",
        },
        {
          url: "/_next/static/media/orbitron-light.bc336911.woff",
          revision: "bc336911",
        },
        {
          url: "/_next/static/media/orbitron-medium.c1a3f723.woff",
          revision: "c1a3f723",
        },
        {
          url: "/_next/static/media/primeicons.19e14e48.svg",
          revision: "19e14e48",
        },
        {
          url: "/_next/static/media/primeicons.310a7310.ttf",
          revision: "310a7310",
        },
        {
          url: "/_next/static/media/primeicons.7f772274.woff",
          revision: "7f772274",
        },
        {
          url: "/_next/static/media/primeicons.8ca441e1.eot",
          revision: "8ca441e1",
        },
        {
          url: "/_next/static/media/primeicons.e1a53edb.woff2",
          revision: "e1a53edb",
        },
        { url: "/_next/static/media/slick.25572f22.eot", revision: "25572f22" },
        {
          url: "/_next/static/media/slick.653a4cbb.woff",
          revision: "653a4cbb",
        },
        { url: "/_next/static/media/slick.6aa1ee46.ttf", revision: "6aa1ee46" },
        { url: "/_next/static/media/slick.f895cfdf.svg", revision: "f895cfdf" },
        {
          url: "/_next/static/media/source-sans-pro-cyrillic-400-normal.bdd65751.woff",
          revision: "bdd65751",
        },
        {
          url: "/_next/static/media/source-sans-pro-cyrillic-400-normal.ea66cb9e.woff2",
          revision: "ea66cb9e",
        },
        {
          url: "/_next/static/media/source-sans-pro-cyrillic-700-normal.60b369d2.woff2",
          revision: "60b369d2",
        },
        {
          url: "/_next/static/media/source-sans-pro-cyrillic-700-normal.8cb8af64.woff",
          revision: "8cb8af64",
        },
        {
          url: "/_next/static/media/source-sans-pro-cyrillic-ext-400-normal.3ab39cd9.woff",
          revision: "3ab39cd9",
        },
        {
          url: "/_next/static/media/source-sans-pro-cyrillic-ext-400-normal.90ce457e.woff2",
          revision: "90ce457e",
        },
        {
          url: "/_next/static/media/source-sans-pro-cyrillic-ext-700-normal.1ed43909.woff",
          revision: "1ed43909",
        },
        {
          url: "/_next/static/media/source-sans-pro-cyrillic-ext-700-normal.513927db.woff2",
          revision: "513927db",
        },
        {
          url: "/_next/static/media/source-sans-pro-greek-400-normal.af9d511c.woff2",
          revision: "af9d511c",
        },
        {
          url: "/_next/static/media/source-sans-pro-greek-400-normal.f56d1cd7.woff",
          revision: "f56d1cd7",
        },
        {
          url: "/_next/static/media/source-sans-pro-greek-700-normal.e81100bd.woff2",
          revision: "e81100bd",
        },
        {
          url: "/_next/static/media/source-sans-pro-greek-700-normal.f062a609.woff",
          revision: "f062a609",
        },
        {
          url: "/_next/static/media/source-sans-pro-greek-ext-400-normal.2fbb0d4d.woff",
          revision: "2fbb0d4d",
        },
        {
          url: "/_next/static/media/source-sans-pro-greek-ext-400-normal.bb83722c.woff2",
          revision: "bb83722c",
        },
        {
          url: "/_next/static/media/source-sans-pro-greek-ext-700-normal.30d21733.woff2",
          revision: "30d21733",
        },
        {
          url: "/_next/static/media/source-sans-pro-greek-ext-700-normal.f90d4fe0.woff",
          revision: "f90d4fe0",
        },
        {
          url: "/_next/static/media/source-sans-pro-latin-400-normal.0ac14a3c.woff2",
          revision: "0ac14a3c",
        },
        {
          url: "/_next/static/media/source-sans-pro-latin-400-normal.134a821b.woff",
          revision: "134a821b",
        },
        {
          url: "/_next/static/media/source-sans-pro-latin-700-normal.3cc61a2a.woff2",
          revision: "3cc61a2a",
        },
        {
          url: "/_next/static/media/source-sans-pro-latin-700-normal.b359d56c.woff",
          revision: "b359d56c",
        },
        {
          url: "/_next/static/media/source-sans-pro-latin-ext-400-normal.84d4affa.woff2",
          revision: "84d4affa",
        },
        {
          url: "/_next/static/media/source-sans-pro-latin-ext-400-normal.ba62a449.woff",
          revision: "ba62a449",
        },
        {
          url: "/_next/static/media/source-sans-pro-latin-ext-700-normal.a8acc0e4.woff2",
          revision: "a8acc0e4",
        },
        {
          url: "/_next/static/media/source-sans-pro-latin-ext-700-normal.e7fc9847.woff",
          revision: "e7fc9847",
        },
        {
          url: "/_next/static/media/source-sans-pro-vietnamese-400-normal.6b304624.woff2",
          revision: "6b304624",
        },
        {
          url: "/_next/static/media/source-sans-pro-vietnamese-400-normal.fb33cb54.woff",
          revision: "fb33cb54",
        },
        {
          url: "/_next/static/media/source-sans-pro-vietnamese-700-normal.6cec856d.woff2",
          revision: "6cec856d",
        },
        {
          url: "/_next/static/media/source-sans-pro-vietnamese-700-normal.99496ce0.woff",
          revision: "99496ce0",
        },
        {
          url: "/bep20_logo.svg",
          revision: "67e32b4c30b8289a296f13614e15d8fd",
        },
        {
          url: "/countdown_timer.png",
          revision: "40753482ac0190ecba36d6fd5ff41450",
        },
        {
          url: "/default-avatar.png",
          revision: "af71ae51bd03c500e9655b7464b80a5c",
        },
        { url: "/eth_logo.png", revision: "137ab9aeae705421b72fe1c1bc02e1e8" },
        {
          url: "/eth_white_logo.png",
          revision: "15be82b68f04d6e875fbeb4895666c50",
        },
        {
          url: "/exhibit_table.png",
          revision: "2da6a39ae52109c68909e0990173f374",
        },
        {
          url: "/favicon-32x32.png",
          revision: "fabb36fab700560c63377201ba9739dd",
        },
        { url: "/favicon.ico", revision: "fc611d67d5d77df04e1680d78044da7e" },
        {
          url: "/fonts/Emord/EmordBlack.eot",
          revision: "6d31c99c18a6e96dbc3ea71ad28fb523",
        },
        {
          url: "/fonts/Emord/EmordBlack.ttf",
          revision: "bc647172d07903a69f932a1714c702a8",
        },
        {
          url: "/fonts/Emord/EmordBlack.woff",
          revision: "a7c605d3ee9715ce5d3298e89da97f12",
        },
        {
          url: "/fonts/Emord/EmordBold.eot",
          revision: "b94731890ff97d577e752eb880ff16b1",
        },
        {
          url: "/fonts/Emord/EmordBold.ttf",
          revision: "d49e191ab5fcf873c55be8327b6dc324",
        },
        {
          url: "/fonts/Emord/EmordBold.woff",
          revision: "0dc1ac4359bca95fc1c088027fc839c8",
        },
        {
          url: "/fonts/Emord/EmordExtrabold.eot",
          revision: "425efbcce7e1856754e1cc9f1c269a1b",
        },
        {
          url: "/fonts/Emord/EmordExtrabold.ttf",
          revision: "922ad4a371c37be3ab646f2793a1c820",
        },
        {
          url: "/fonts/Emord/EmordExtrabold.woff",
          revision: "5cd87661d51b93dd251144a601855437",
        },
        {
          url: "/fonts/Emord/EmordLight.eot",
          revision: "ec5c968fc32aadb09e528bcabd8997fa",
        },
        {
          url: "/fonts/Emord/EmordLight.ttf",
          revision: "455d1d71d740d10743864fabf643b7da",
        },
        {
          url: "/fonts/Emord/EmordLight.woff",
          revision: "6da963ebe6d4db00c34020288fc13c0c",
        },
        {
          url: "/fonts/Emord/EmordMedium.eot",
          revision: "8a39c7898a6bca50cae0b691e94b7daf",
        },
        {
          url: "/fonts/Emord/EmordMedium.ttf",
          revision: "0a5d68f0a893623859f6ef65e94a23ed",
        },
        {
          url: "/fonts/Emord/EmordMedium.woff",
          revision: "67cc92b833453b84d607a6eae8b7e54f",
        },
        {
          url: "/fonts/Emord/EmordRegular.eot",
          revision: "b8a7d6f050fe7362d025dab17c9d08e9",
        },
        {
          url: "/fonts/Emord/EmordRegular.ttf",
          revision: "fd914d4d744a9adad9d35e8d126bde39",
        },
        {
          url: "/fonts/Emord/EmordRegular.woff",
          revision: "6c0197674c339de17ff4dfa410d184c6",
        },
        {
          url: "/fonts/Emord/EmordSemibold.eot",
          revision: "003c6c49480ef4b4a2acb7973c8b55a3",
        },
        {
          url: "/fonts/Emord/EmordSemibold.ttf",
          revision: "fb3813a30d71ca6448f3ffcce8a768ae",
        },
        {
          url: "/fonts/Emord/EmordSemibold.woff",
          revision: "d15cea09b5e24c4e98c22425d25f4855",
        },
        {
          url: "/fonts/orbitron/example.html",
          revision: "88be8ce4cf54e22fad47b12e39e56971",
        },
        {
          url: "/fonts/orbitron/orbitron-black.woff",
          revision: "9e5f3310616f84b2fbec97bee860c41f",
        },
        {
          url: "/fonts/orbitron/orbitron-bold.woff",
          revision: "6e0d1d9657761a7c6ae7715af5fdba48",
        },
        {
          url: "/fonts/orbitron/orbitron-light.woff",
          revision: "cfa68fcb9c4820c792475063dfda63bf",
        },
        {
          url: "/fonts/orbitron/orbitron-medium.woff",
          revision: "baba31fcf8e38e8ac8457dcdb10537d7",
        },
        {
          url: "/fonts/orbitron/style.css",
          revision: "791c48af4a2628e01e6b6e62d901978a",
        },
        {
          url: "/ic-analytics.svg",
          revision: "eca0659293f1d09b8c89f6456259ee5c",
        },
        {
          url: "/ic-checked-circle.png",
          revision: "ca8cf755158c19376d0b70e5c8c3cc12",
        },
        {
          url: "/ic-download.png",
          revision: "e3b5eb7d97426c508418237833fd9805",
        },
        {
          url: "/ic-log-out.svg",
          revision: "251f851aae3c94e9e85d10c35d160b35",
        },
        {
          url: "/ic-more-tags.svg",
          revision: "cdf1f5cb38574871ed5f8af36aa9827e",
        },
        {
          url: "/ic-profile.svg",
          revision: "0fc8cabd76a6d7de6836a8d9d61bdd66",
        },
        { url: "/ic_copy.png", revision: "9fafb717d050eb90bf2b843b630a3a6c" },
        {
          url: "/icon_settings.svg",
          revision: "bee72afb26233a52ce4f34bc0d415146",
        },
        {
          url: "/images/LineArea.png",
          revision: "4e2cbe718dbeeddc4bc09b060e384e3d",
        },
        {
          url: "/images/TVL_VS.png",
          revision: "d68a16e0b138bead2c78e7e6aa4bc009",
        },
        {
          url: "/images/attribute/lock.png",
          revision: "d40741bb33e6e94d2ceb670602c68982",
        },
        {
          url: "/images/avatar.png",
          revision: "9df672bd77e17225272e099d98020af9",
        },
        {
          url: "/images/avatar/also_hold_avatar.png",
          revision: "bea85e1bf5cfaf18c379370ca0d44369",
        },
        {
          url: "/images/avatar/checkout_avatar.png",
          revision: "d301d55b717ccb49e9a0375ad6bcf73e",
        },
        {
          url: "/images/blackround.png",
          revision: "8053c3e9ca5e92e4ac055bf501e40306",
        },
        {
          url: "/images/button/arrows-next.png",
          revision: "27ac261aca77ae750ca8aeba78489bf3",
        },
        {
          url: "/images/button/arrows-previous.png",
          revision: "a8a7ef49790d8a2cfd080478595210d6",
        },
        {
          url: "/images/button/check-in.png",
          revision: "cf46e42595830ea1afa3b73f8518f1cc",
        },
        {
          url: "/images/button/farm_claim.png",
          revision: "480bc35e75cfbcdce026b225ea031124",
        },
        {
          url: "/images/button/icon/12001.png",
          revision: "ee57a4fde43adf98bd7d60a2dbb54dc2",
        },
        {
          url: "/images/button/icon/9001.png",
          revision: "ec28873900709b81674464176bb3d461",
        },
        {
          url: "/images/button/icon/chainswich.png",
          revision: "5d81f0ff58e8330db0bfc30e20e8b217",
        },
        {
          url: "/images/button/icon/check.png",
          revision: "e0f1262f8e47ab02f0d092f0c5217558",
        },
        {
          url: "/images/button/icon/discord_task.png",
          revision: "b6f053eb824060099dcbd9772327ecab",
        },
        {
          url: "/images/button/icon/follow.png",
          revision: "2366002e98ba9dceae4d6576b8f39bd0",
        },
        {
          url: "/images/button/icon/follower_default.png",
          revision: "b2b19901976fd391f85c159bae400ac7",
        },
        {
          url: "/images/button/icon/follower_selected.png",
          revision: "2648bd867aaa82ecac5db445494dcc29",
        },
        {
          url: "/images/button/icon/icon/profile-tabs.png",
          revision: "c767657873ce8c9da70feb75909128dc",
        },
        {
          url: "/images/button/icon/invite_task.png",
          revision: "33130da697afe6e7bbded99614f49e99",
        },
        {
          url: "/images/button/icon/levelup.png",
          revision: "0e3fb6faa8419f4ee6f19bd0314d3f51",
        },
        {
          url: "/images/button/icon/levelup_trophy.gif",
          revision: "02c7dcbd52fe71449d1bd3bf6964cdae",
        },
        {
          url: "/images/button/icon/levelup_trophy.png",
          revision: "8f9d83383c0e1cdc741c73af95bf67a6",
        },
        {
          url: "/images/button/icon/message.png",
          revision: "966ad986499ff3747635bf15459dde07",
        },
        {
          url: "/images/button/icon/myspots_default.png",
          revision: "b7c0fd0100fe00b5bcf2697003adcd58",
        },
        {
          url: "/images/button/icon/myspots_selected.png",
          revision: "e60e28755d7e7dcf944a87138fff01c8",
        },
        {
          url: "/images/button/icon/quest_panel_default.png",
          revision: "8c86d491fc92a60f1548857479698a35",
        },
        {
          url: "/images/button/icon/quest_panel_selected.png",
          revision: "1d5a36ac1c8bc86fd74115f20724038a",
        },
        {
          url: "/images/button/icon/search.png",
          revision: "a63cd6f8a2d7ba143f9ad760153d1adf",
        },
        {
          url: "/images/button/icon/spot.png",
          revision: "ca9cd70ceb00cbea3f7f6c483bc66688",
        },
        {
          url: "/images/button/icon/spotsowned_default.png",
          revision: "815c9bf8e22d0a0a52a2504ae14c67c4",
        },
        {
          url: "/images/button/icon/spotsowned_selected.png",
          revision: "670b977bc1fa4ce23a7eb1de69c57489",
        },
        {
          url: "/images/button/icon/telegram_task.png",
          revision: "523408f640ea228a77dcb7aaaf6063af",
        },
        {
          url: "/images/button/icon/token_create_panel_default.png",
          revision: "68bb64cc28d5ae25f29e79d69fa4b351",
        },
        {
          url: "/images/button/icon/token_create_panel_selected.png",
          revision: "c767657873ce8c9da70feb75909128dc",
        },
        {
          url: "/images/button/icon/token_panel_default.png",
          revision: "f994d025a158251c1db99842f4135de0",
        },
        {
          url: "/images/button/icon/token_panel_selected.png",
          revision: "3b1a2702634b432561cbc560699d2c71",
        },
        {
          url: "/images/button/icon/trendline_default.png",
          revision: "5dbcdfdba0db5c9f1aceefd1c54bd420",
        },
        {
          url: "/images/button/icon/trendline_selected.png",
          revision: "42762ef0ebd0530738c4b70bf74de460",
        },
        {
          url: "/images/button/icon/twitter_task.png",
          revision: "c208ad9f988a173debced21c0b348a82",
        },
        {
          url: "/images/button/icon/visit.png",
          revision: "dabb91c40a30100ad57cdc0f071063fd",
        },
        {
          url: "/images/button/invite-friends.png",
          revision: "4723642d57291835808a884915f7360e",
        },
        {
          url: "/images/celebration.gif",
          revision: "39a8ede815f943ab192ea6ed883c23a7",
        },
        {
          url: "/images/celebration2.gif",
          revision: "29b7ac6039d836a1ca5ae921f6bc199c",
        },
        {
          url: "/images/chain-arbitrum-v2.png",
          revision: "cf95deec9543889e1dfcd09c1bff432a",
        },
        {
          url: "/images/chain-arbitrum-v2.svg",
          revision: "f74c4673cf324cc175d33eb9e8d4ebdc",
        },
        {
          url: "/images/chain-arbitrum.svg",
          revision: "cba8712dafb15349ee94c2f1e5ad37b1",
        },
        {
          url: "/images/chain-avalanche.svg",
          revision: "03bc453dd3dc269bd50f2b069fdc6bba",
        },
        {
          url: "/images/chain-bsc-v2.png",
          revision: "c1a25aadbb8cb4a11f04b39e818bfe4e",
        },
        {
          url: "/images/chain-bsc-v2.svg",
          revision: "54498e0a9fa45a73457b00d51a39ed71",
        },
        {
          url: "/images/chain-bsc.svg",
          revision: "52c1ba6ec0a48266c69d2727b87e7276",
        },
        {
          url: "/images/chain-eth-v2.png",
          revision: "73a51c4d75cbbe852fc28df72e2bfa56",
        },
        {
          url: "/images/chain-eth-v2.svg",
          revision: "c9e73e6c83a0191494c285efe38c4cee",
        },
        {
          url: "/images/chain-eth.svg",
          revision: "da5df744674fa7ca2cff76930ec7142c",
        },
        {
          url: "/images/chain-ethereum-v2.png",
          revision: "73a51c4d75cbbe852fc28df72e2bfa56",
        },
        {
          url: "/images/chain-fantom.svg",
          revision: "5a2bbe02be0a0e307a3b4f3a9f239653",
        },
        {
          url: "/images/chain-movement-v2.png",
          revision: "192b59fafd144b73d75f8f1bcc82c0c4",
        },
        {
          url: "/images/chain-movement-v2.svg",
          revision: "c65e1650b7b34bc66da59142373344de",
        },
        {
          url: "/images/chain-ok-v2.png",
          revision: "bb2001c6d731598ccaed1a61593f1da3",
        },
        {
          url: "/images/chain-ok-v2.svg",
          revision: "2bd3cc8b2025399229f83addf61bd653",
        },
        {
          url: "/images/chain-polygon.svg",
          revision: "08edfbac7c832123b9b7feb569f25890",
        },
        {
          url: "/images/chain-sui-login.svg",
          revision: "4f10568899ab63ba746573cf16555c9a",
        },
        {
          url: "/images/chain-sui-network.png",
          revision: "514bff600feef9b8b4123118c34b0b30",
        },
        {
          url: "/images/chain-sui-v2.png",
          revision: "2c9c347925a16b6b82076f0d22e2ccd6",
        },
        {
          url: "/images/chain-tazos-v2.png",
          revision: "5ec156cce5bd451e3b89ce54afa089ea",
        },
        {
          url: "/images/chain-tazos-v2.svg",
          revision: "40008c9d532f5b88d89907ad395c57ce",
        },
        {
          url: "/images/chain-tezos-v2.png",
          revision: "de51452e539ec6f698db16baa2252afe",
        },
        {
          url: "/images/chain-tezos-v2.svg",
          revision: "597982c11a391cb2e9b1b7b756f8eb66",
        },
        {
          url: "/images/chain-tezos.svg",
          revision: "b7f37da5a7f0d6b1b9784513ae870bae",
        },
        {
          url: "/images/chat/ai-assist-top.png",
          revision: "281eb523524b6a307dc0c7bed0799cfc",
        },
        {
          url: "/images/chat/ai-icon.png",
          revision: "8ec966220a02f3db2d9dce64924062f0",
        },
        {
          url: "/images/chat/ai.png",
          revision: "281eb523524b6a307dc0c7bed0799cfc",
        },
        {
          url: "/images/consumer_overlay.png",
          revision: "1c6807bf6746725a1952d1a47059a27c",
        },
        {
          url: "/images/copy-icon.png",
          revision: "87722d4d54c1c3c352627897a174efe2",
        },
        {
          url: "/images/countdown_timer.png",
          revision: "190a3292fd05b680ab29a031916a0a26",
        },
        {
          url: "/images/cryptoScore/bg_bronze_v2.png",
          revision: "d320605ecc27c2e36c0dea5dbb6cc2d9",
        },
        {
          url: "/images/cryptoScore/bg_gold_v2.png",
          revision: "54ccb25da22ee56910f004b1c1d98b91",
        },
        {
          url: "/images/cryptoScore/bg_silver_v2.png",
          revision: "11a6e21d0c60f0e0136f4c1aaddc3fc6",
        },
        {
          url: "/images/default-nft.png",
          revision: "473e917a7470e4013b58c36e84936b7e",
        },
        {
          url: "/images/default_avatar.png",
          revision: "c36bf26449f0adb492eddbcc91bcf472",
        },
        {
          url: "/images/demo-avatar.png",
          revision: "b1c0e38b72d10307bd4621286f458203",
        },
        {
          url: "/images/demoline.png",
          revision: "d11e9ae9e9d514898202fb19cffcfef0",
        },
        {
          url: "/images/enterprise-v2-bg.png",
          revision: "29aacf50cf88adbc3df798707b3f2e4e",
        },
        {
          url: "/images/enterprise-v2/activity_title.png",
          revision: "5117e06ef30cf92b8928d02a88a7a583",
        },
        {
          url: "/images/enterprise-v2/copy.png",
          revision: "f7c19ce95b84a0f0798ba068c870bfc8",
        },
        {
          url: "/images/enterprise-v2/customize.png",
          revision: "5b2b2fb75cfd7a213e93e6315a52cbd9",
        },
        {
          url: "/images/enterprise-v2/hor-divider.png",
          revision: "914699d0a93d13e75b530a659da8eb85",
        },
        {
          url: "/images/enterprise-v2/hover-tag.png",
          revision: "8d7618696f3605bad46aa0c5437a0642",
        },
        {
          url: "/images/enterprise-v2/hoverBg.png",
          revision: "a06e22c91c09a667bcc3fdf0c814e3c7",
        },
        {
          url: "/images/enterprise-v2/icon/icon/delete.png",
          revision: "632753c172a7eba0eb77e30c9a337866",
        },
        {
          url: "/images/enterprise-v2/image/korea.png",
          revision: "a28ad2d2697e39ce88e9f59ff07159c4",
        },
        {
          url: "/images/enterprise-v2/image/sybil.png",
          revision: "ecc2830638895823370c47d945e5f656",
        },
        {
          url: "/images/enterprise-v2/linkedin.png",
          revision: "c40d9f1824e5575d79e9ea007489c4ab",
        },
        {
          url: "/images/enterprise-v2/more-icon.png",
          revision: "1bc2713f3421a5c82d25b306bad59b72",
        },
        {
          url: "/images/enterprise-v2/more.png",
          revision: "3c5f6231bebafe35e97eea714271553e",
        },
        {
          url: "/images/enterprise-v2/retention_title.png",
          revision: "a3ea39ef9b8036bb9b52e2b806cdd4ec",
        },
        {
          url: "/images/enterprise-v2/scoreboard_0.png",
          revision: "4df0910f4d133a5e9293068bba610ccb",
        },
        {
          url: "/images/enterprise-v2/scoreboard_1.png",
          revision: "446eeb7e0c528ee7d51cff3f33186072",
        },
        {
          url: "/images/enterprise-v2/scoreboard_2.png",
          revision: "4b30366a10e3fcd5708329873dbc3ba1",
        },
        {
          url: "/images/enterprise-v2/scoreboard_3.png",
          revision: "2c66204e42944861918a1a6735f0ffd8",
        },
        {
          url: "/images/enterprise-v2/scoreboard_4.png",
          revision: "adfb3fe261597162bcc260d29eab83b7",
        },
        {
          url: "/images/enterprise-v2/signup-info.png",
          revision: "9b6d94edc13205743ca35bacf3ba0357",
        },
        {
          url: "/images/enterprise-v2/success-copy.png",
          revision: "ee3bc930936f6aa848b30a4bccf35e41",
        },
        {
          url: "/images/enterprise-v2/tag-cover.png",
          revision: "54f18c1f8e1dbf92e05f550cd56f7986",
        },
        {
          url: "/images/enterprise-v2/telegram.png",
          revision: "bd6348fcf32ce4810cbf45dff94765f9",
        },
        {
          url: "/images/enterprise-v2/today_reward.png",
          revision: "03b0da980ebb66043e35cfda30412274",
        },
        {
          url: "/images/enterprise-v2/total_reward.png",
          revision: "41db141d63897d885c83c8df5f31f520",
        },
        {
          url: "/images/enterprise-v2/twitter.png",
          revision: "8b69525ccea2712e7267dc493c9ec676",
        },
        {
          url: "/images/header_round.svg",
          revision: "47144955113f752408a9af83bd1f3af2",
        },
        {
          url: "/images/holders/holders_left_icon.png",
          revision: "072ec05ac18415858c292d2aa39b4f72",
        },
        {
          url: "/images/holders/holders_right_icon.png",
          revision: "b2c177879f089f52aab5e9a4d6630a5a",
        },
        {
          url: "/images/hover/avatar-nodes-status.png",
          revision: "11bc853ef829146303ecbcd694f4ff21",
        },
        {
          url: "/images/hover/countdown.png",
          revision: "af9cee0bd53006ff779d3174b1cd1812",
        },
        {
          url: "/images/hover/generate_link_button.png",
          revision: "383288d29d3157d0a29061c702516b77",
        },
        {
          url: "/images/hover/referral_reward.png",
          revision: "a6af6ae39ab5d850264584f0c6c7f434",
        },
        {
          url: "/images/ic_brain.gif",
          revision: "6893f985b271a5afb2fb53e75af67f50",
        },
        {
          url: "/images/ic_info.png",
          revision: "e974a8519ff5cc3a81c62e50081388a8",
        },
        {
          url: "/images/icon.svg",
          revision: "eaecc3d582d825dabc6e369260a25874",
        },
        {
          url: "/images/icon/Bluewahle-logo.png",
          revision: "6966a33a7c897ff421d8d3570599d5d5",
        },
        {
          url: "/images/icon/addicon.png",
          revision: "26188ec6d49fd06c8dc60d7496a8fe32",
        },
        {
          url: "/images/icon/avatar_edit.png",
          revision: "c93e3c2f776c7a3cfbdd7c06ebe0e124",
        },
        {
          url: "/images/icon/bep20_icon.png",
          revision: "6918105788c8c92504d5747a8498ba68",
        },
        {
          url: "/images/icon/bg_trending.png",
          revision: "74240d75697495eb12efb8cccee98c2d",
        },
        {
          url: "/images/icon/bnb.png",
          revision: "6d07ec6ef9370720b256216fa1a30b0f",
        },
        {
          url: "/images/icon/bookmark.png",
          revision: "b4740e99c41453627273ff051d69948c",
        },
        {
          url: "/images/icon/claimed.png",
          revision: "c758929edd5c5cd493664135d299a281",
        },
        {
          url: "/images/icon/compare.png",
          revision: "dfc6119f89950abbb166ba83fc45d3b7",
        },
        {
          url: "/images/icon/down.png",
          revision: "f63e43daf6c05338302d53b685654e70",
        },
        {
          url: "/images/icon/edit.png",
          revision: "d796ded6f74f27cbee22ac63489008d1",
        },
        {
          url: "/images/icon/empty_seat.png",
          revision: "b2b8b7f03f5997b97503647e20731b3a",
        },
        {
          url: "/images/icon/enterprise-v2/activeUser-bg.png",
          revision: "8a7a19a3916012d052f365394e67e8af",
        },
        {
          url: "/images/icon/enterprise-v2/correct.png",
          revision: "69e5401719ead1a85f7d54d9868c11b7",
        },
        {
          url: "/images/icon/enterprise-v2/eth.png",
          revision: "a973e4945d68e6462751728bcb76f984",
        },
        {
          url: "/images/icon/enterprise-v2/holders-bg.png",
          revision: "5ab0d0a61c10d012b9e9dc8d6329746c",
        },
        {
          url: "/images/icon/enterprise-v2/outreach.png",
          revision: "1e4071d5e2ee08fe22aa9073a5acd2fd",
        },
        {
          url: "/images/icon/enterprise-v2/pricing.png",
          revision: "9c5ea9a7eaab81cb48666c9e9a4b3c97",
        },
        {
          url: "/images/icon/eth.png",
          revision: "dd3b10a35d617f73b61c8c8131c80278",
        },
        {
          url: "/images/icon/fuzzysearch/nft.svg",
          revision: "3aca4c0130993ff74c65d406f0cf4f4f",
        },
        {
          url: "/images/icon/fuzzysearch/project.svg",
          revision: "c21caddd125e1fdb9b6c648fac250670",
        },
        {
          url: "/images/icon/fuzzysearch/token.svg",
          revision: "f774382b4b4793f1bf72cae1dcd5f40c",
        },
        {
          url: "/images/icon/fuzzysearch/wallet.svg",
          revision: "523d55d1ed2ec820858ddc3905b086a7",
        },
        {
          url: "/images/icon/google.png",
          revision: "f82693e959a8f7564ff317e5fe8122e4",
        },
        {
          url: "/images/icon/gotoicon.png",
          revision: "ca4390952e2e8e96cc9c33af41c26c63",
        },
        {
          url: "/images/icon/hunt.png",
          revision: "a1605d917a860863cb87df96ae89e458",
        },
        {
          url: "/images/icon/invite.png",
          revision: "125d936bd3e63ef6fbeffb74876a28ce",
        },
        {
          url: "/images/icon/login/menu.png",
          revision: "01d95cacdeec71f010ad03e9176a2c11",
        },
        {
          url: "/images/icon/mail.png",
          revision: "16fc32a8118a6548629ea0fea38dc4e5",
        },
        {
          url: "/images/icon/mailanddot.png",
          revision: "9d3231f7221ae973fec3416c833164de",
        },
        {
          url: "/images/icon/mailland.png",
          revision: "d0dede4b06df45477566d27976c0915c",
        },
        {
          url: "/images/icon/message_points.png",
          revision: "c8d754c4acbab72f171fbda15a6440d5",
        },
        {
          url: "/images/icon/name_edit.png",
          revision: "9f38d386bd024f61877cf92bc66dee97",
        },
        {
          url: "/images/icon/network.png",
          revision: "5f6067c7030757b45af17b85529c7840",
        },
        {
          url: "/images/icon/no_seat.png",
          revision: "994a7c7d42762f619305dc9ebeb9ca80",
        },
        {
          url: "/images/icon/occupiedEmpty.png",
          revision: "688edb55bbaf74dbb229070c22060354",
        },
        {
          url: "/images/icon/people.png",
          revision: "1cca164b0c215ffc4ec2d78ef963c17a",
        },
        {
          url: "/images/icon/profile-pop/discord.png",
          revision: "ea9f31fb06b048073fee681bddbdd288",
        },
        {
          url: "/images/icon/profile-pop/google.png",
          revision: "f7eb06182f67ab32da16d86918f5ac99",
        },
        {
          url: "/images/icon/profile-pop/linkedin.png",
          revision: "8f8e098166b89dc54b846b1f0a682fad",
        },
        {
          url: "/images/icon/profile-pop/profilemodal-lefticon.png",
          revision: "1158dcc2480832ce35e1104d33f42739",
        },
        {
          url: "/images/icon/profile-pop/telegram.png",
          revision: "2321e4ea1a12d6b803d92bcb99f85180",
        },
        {
          url: "/images/icon/profile-pop/twitter.png",
          revision: "682dbc8783a0af5ef97e47853b8fdf10",
        },
        {
          url: "/images/icon/profile.png",
          revision: "605e937503669387f9fb2b1791b0c232",
        },
        {
          url: "/images/icon/readedmsg.png",
          revision: "a03375aae69658b6110fb22744a90dd0",
        },
        {
          url: "/images/icon/reward.png",
          revision: "3df4c035a68e088ec071320ed36f903e",
        },
        {
          url: "/images/icon/rewards.png",
          revision: "694440bea8e5c73d4c4662f658e7fd54",
        },
        {
          url: "/images/icon/rewardv3.png",
          revision: "739b08a70c4f6d2c20e93520b9a9e309",
        },
        {
          url: "/images/icon/seat.png",
          revision: "6ce110dfd8b3b67799954f1933a0920b",
        },
        {
          url: "/images/icon/send.png",
          revision: "fe920060e42003fd6dd8dc2dda63da1e",
        },
        {
          url: "/images/icon/similarwallet/add.png",
          revision: "b79a338fc485f7cdccf329527ac29fba",
        },
        {
          url: "/images/icon/similarwallet/download.png",
          revision: "f6ecbc2e6cd9a43e53f49c4bc88226d6",
        },
        {
          url: "/images/icon/similarwallet/share.png",
          revision: "6f9ece2a9e36341b11971c7f94d93c9b",
        },
        {
          url: "/images/icon/speaker.png",
          revision: "712efaf4d41068188e9cff382a625611",
        },
        {
          url: "/images/icon/success-reward.png",
          revision: "157ee17e8c65dc8057a1fcfc82154f2b",
        },
        {
          url: "/images/icon/tagIcon/add.png",
          revision: "8fbcb9e88189f2a486eca53d2f86603a",
        },
        {
          url: "/images/icon/tagIcon/share.png",
          revision: "09397a47ea58cdd8ff9d76aa2b889453",
        },
        {
          url: "/images/icon/toGroup.png",
          revision: "e06b91788c85229d04ce9642483d666b",
        },
        {
          url: "/images/icon/twitter.png",
          revision: "6947f83ebb6eb35db1d1bff236cb2440",
        },
        {
          url: "/images/icon/unhunt.png",
          revision: "45b60aca4b69691bad85c1ba8d2423dc",
        },
        {
          url: "/images/icon_Top-DApps_ranking.png",
          revision: "355bcea2139223aba42b5582b278dff5",
        },
        {
          url: "/images/img-hunted-you-blur.png",
          revision: "030e011d4ed0522bda96c19aadde189e",
        },
        {
          url: "/images/linkedin-icon.svg",
          revision: "4a1b5d7e6406b58d08246aa66b04bfb9",
        },
        {
          url: "/images/loading.gif",
          revision: "6893f985b271a5afb2fb53e75af67f50",
        },
        {
          url: "/images/login/Menu.png",
          revision: "01d95cacdeec71f010ad03e9176a2c11",
        },
        {
          url: "/images/login/address_selected.png",
          revision: "4a5c64188114161d2c27956e5832c5fd",
        },
        {
          url: "/images/login/address_unselected.png",
          revision: "53d38ebc6def56d55c0dc335f8f6f644",
        },
        {
          url: "/images/login/bg-login.png",
          revision: "b477961cec497a5f17ca1616dae1c9af",
        },
        {
          url: "/images/login/bg-nav.svg",
          revision: "8b3b32bf72e173abcf58aa005971ad52",
        },
        {
          url: "/images/login/continueButton.png",
          revision: "100116d69115acd3b24a652c2560630a",
        },
        {
          url: "/images/login/continuewithemail.png",
          revision: "0db9bdcb7a70537b5e93fe23f6b063fb",
        },
        {
          url: "/images/login/hand.png",
          revision: "67751b873ff3e0537b44f81364414ae1",
        },
        {
          url: "/images/login/hand1.png",
          revision: "883daecfa1a6a0ea05262755c929ea90",
        },
        {
          url: "/images/login/nav-icon.png",
          revision: "01d95cacdeec71f010ad03e9176a2c11",
        },
        {
          url: "/images/mobile/goback.png",
          revision: "364da55c0de481d693de0ca6926f75a1",
        },
        {
          url: "/images/mobile/icon/follow_icon.png",
          revision: "6d14e86c800271214686825947663e2a",
        },
        {
          url: "/images/mobile/icon/inline.png",
          revision: "daead3dd76755cf74d66df5f87d3e8e1",
        },
        {
          url: "/images/mobile/icon/price.png",
          revision: "c49626cb60e92baceb131aa6d5cca5e2",
        },
        {
          url: "/images/mobile/icon/rightbutton.png",
          revision: "4cecb3441b9e81e19b57185aa973fa7d",
        },
        {
          url: "/images/mobile/icon/send.png",
          revision: "74b48fe19b63173e14645f247620e4c1",
        },
        {
          url: "/images/mobile/icon/spotleft.png",
          revision: "9a865dd1bee537f83f9368b9abb60dcd",
        },
        {
          url: "/images/mobile/icon/unfollow_icon.png",
          revision: "383df6092df2bae7ac70da4b7e94c599",
        },
        {
          url: "/images/mobile/logo.png",
          revision: "a0ed80ed9a615c2da09d5b01e692210f",
        },
        {
          url: "/images/mobile/logout.png",
          revision: "68600dbae2a78c3846df27a656118f20",
        },
        {
          url: "/images/mobile/mobile_search.png",
          revision: "62a3e460571825ddfb263ec12ab1fe47",
        },
        {
          url: "/images/mobile/msg.png",
          revision: "e93c5f26cfe0642649dbac787c9e74e4",
        },
        {
          url: "/images/mobile/newmessage.png",
          revision: "f2a6c5f0ea602145bcaa4c01a4880b50",
        },
        {
          url: "/images/mobile/node/activate.png",
          revision: "22e6869f200d0858a3cc986854d626ed",
        },
        {
          url: "/images/mobile/node/brain_pc.png",
          revision: "7f8040c9aebfc40f7accec9cd76e678c",
        },
        {
          url: "/images/mobile/node/button/check-in.png",
          revision: "8130c9a17e3d1a8dde85e1340801eb35",
        },
        {
          url: "/images/mobile/node/button/invite-friends.png",
          revision: "cd39232bef8e38d4db73ca99e3d69a63",
        },
        {
          url: "/images/mobile/node/coin.png",
          revision: "c6e3e97342c6581b3449238afb2b5ce4",
        },
        {
          url: "/images/mobile/node/history_pc.png",
          revision: "5305631a7b07088267c8d5f98cdcc39e",
        },
        {
          url: "/images/mobile/node/history_pc_1.png",
          revision: "b834e6a3aef8a63f6ca7dabd9797e6be",
        },
        {
          url: "/images/mobile/node/history_table.png",
          revision: "c7a010c9c7a8593130fec504a5e74c6a",
        },
        {
          url: "/images/mobile/node/icon/blur_close.png",
          revision: "36b764e1500c20faf59a484e19f11405",
        },
        {
          url: "/images/mobile/node/icon/earnings_statistics.png",
          revision: "62d6c15037b9eef39b79ff1d834bc1b7",
        },
        {
          url: "/images/mobile/node/icon/history_demo.png",
          revision: "c7a010c9c7a8593130fec504a5e74c6a",
        },
        {
          url: "/images/mobile/node/icon/network_dot.png",
          revision: "015eaaa3849a652436af3730d58481c4",
        },
        {
          url: "/images/mobile/node/icon/purple-send.png",
          revision: "214628394549548e259145f80dd6d2bc",
        },
        {
          url: "/images/mobile/node/icon/referrals_dot.png",
          revision: "7d1164c5359ed589085616461c354c85",
        },
        {
          url: "/images/mobile/node/info.png",
          revision: "4c81026719a16a4793c3a4b2af1edcdd",
        },
        {
          url: "/images/mobile/node/no_node_available.png",
          revision: "cc9f0d989ae02d709208a86c36642b4a",
        },
        {
          url: "/images/mobile/node/node_button_bg.png",
          revision: "1dfeef2975540dd891e60ced661d39f5",
        },
        {
          url: "/images/mobile/node/nodes-bg.png",
          revision: "f7b5a0c40ef144c9e907b35ff06c16f2",
        },
        {
          url: "/images/mobile/node/pulpe-info.png",
          revision: "35007bf1a00eedf8f0281dd10385db62",
        },
        {
          url: "/images/mobile/node/static_pc.png",
          revision: "bc4fc506dedc1eb669ead3bbd4423722",
        },
        {
          url: "/images/mobile/node/usdt.svg",
          revision: "43f688a0313c926433ef60c377c7cc51",
        },
        {
          url: "/images/mobile/node/whitelist_bg.png",
          revision: "56c37081768e9599452111bd08fe9211",
        },
        {
          url: "/images/mobile/node/wifi.png",
          revision: "3f8590a41e5097a3c6eeac9901c33a30",
        },
        {
          url: "/images/mobile/node_mobile_coupon.png",
          revision: "b35d9b31ba71d724bba338b2a033cde7",
        },
        {
          url: "/images/mobile/nodes-bg.png",
          revision: "2345f7be65a9dfc5412bcb49d0b49576",
        },
        {
          url: "/images/mobile/pop_node.png",
          revision: "4b92567f15d8374022b820fd51fe23f3",
        },
        {
          url: "/images/mobile/reddot.png",
          revision: "2425a27de493fa4213bcc82d337f25eb",
        },
        {
          url: "/images/mobile/telegram.png",
          revision: "88d31a27c79f712724baf35e940a7168",
        },
        {
          url: "/images/mobile/whaletank.png",
          revision: "86d67f0a61993f793cd5b8681cb9a1f2",
        },
        {
          url: "/images/modal/uploadImage.png",
          revision: "1f77f991bfb189daf6e202ac2d9451c1",
        },
        {
          url: "/images/my-group-avatar.png",
          revision: "a2dd19502f51ced481f55e13e801084b",
        },
        {
          url: "/images/mymessage/arrows-next.png",
          revision: "8d92d83a9b8a7219e6534f447ee21976",
        },
        {
          url: "/images/mymessage/arrows-previous.png",
          revision: "9eb89f1800138c8d14cd77cb6faf2a56",
        },
        {
          url: "/images/mymessage/my_message_bg.png",
          revision: "a6994fd4d7d4d5e7c7ee7dfe331063d8",
        },
        {
          url: "/images/nnterprise_overlay.png",
          revision: "50376d677b2015650049f400f747b795",
        },
        {
          url: "/images/nodata.svg",
          revision: "ba46a239d17a99961bcb127b488c7315",
        },
        {
          url: "/images/node/avatar-tier88.png",
          revision: "b56839f7252df2543b061a84ebd09326",
        },
        {
          url: "/images/node/avatar_dashboard.png",
          revision: "685e48a4310baca371db9dd03b4bd89d",
        },
        {
          url: "/images/node/avatar_dashboard_silver.png",
          revision: "bf1d2a8ba7182c74db9c0287befa07b9",
        },
        {
          url: "/images/node/avatar_profile.png",
          revision: "608b83125db1cbd57d12f05a8b0612d9",
        },
        {
          url: "/images/node/bg.png",
          revision: "acc6d8166d0f5310b5720f5554fcbe01",
        },
        {
          url: "/images/node/buy_node_button.png",
          revision: "25bb2e53d4ed9db551e1ffb0dc174b80",
        },
        {
          url: "/images/node/community_tier_88.png",
          revision: "acf300cf1b5bd6e37179430da371a745",
        },
        {
          url: "/images/node/countdown_timer.png",
          revision: "40753482ac0190ecba36d6fd5ff41450",
        },
        {
          url: "/images/node/dropdownIcon.png",
          revision: "ebeeee939025887a5c8e11175a07f17b",
        },
        {
          url: "/images/node/guide/guide-next.png",
          revision: "7a784859e85fc2e4184bc7594b2c8228",
        },
        {
          url: "/images/node/guide/guide_node_step0.png",
          revision: "6cd473507abaffe1ed8ef090c665965c",
        },
        {
          url: "/images/node/guide/guide_node_step1.gif",
          revision: "a95e7ed0b70bb6fdb29eb72c58d54d7c",
        },
        {
          url: "/images/node/guide/guide_node_step3.gif",
          revision: "15bcf0f14fcf7c9636de47b0a9e05c06",
        },
        {
          url: "/images/node/guide/guide_node_step4.gif",
          revision: "e6b2917706c8896eda8686bb55c2e6e6",
        },
        {
          url: "/images/node/node_active_comingsoon.png",
          revision: "532997f62c0e8c3682a6670a2d873d67",
        },
        {
          url: "/images/node/node_referral_bg.png",
          revision: "d2a6f9bd706c465dd108241ebc5b6816",
        },
        {
          url: "/images/node/nodepage.png",
          revision: "9fbeea07d219b4f4d18cc42b180f09eb",
        },
        {
          url: "/images/node/operation_animation.gif",
          revision: "4036731f57c4f15b2249c080208cbe36",
        },
        {
          url: "/images/node/pc_activate_button.png",
          revision: "b0b0e9ebf75d42124e84cb13be7dcc77",
        },
        {
          url: "/images/node/pc_activated_button.png",
          revision: "fe11758b70dcc599ec6b1d32a2a74d5a",
        },
        {
          url: "/images/node/referral-banner_entier.png",
          revision: "0ba5cc560783e3f463940fc266e2f91c",
        },
        {
          url: "/images/node/tier-88-mobile.png",
          revision: "ca3fc8be7614a89634ba099a675cb17b",
        },
        {
          url: "/images/node/tier-88.png",
          revision: "ca3fc8be7614a89634ba099a675cb17b",
        },
        {
          url: "/images/node_coupon/buymasternode.png",
          revision: "f1bb0a77595820b00450dfc7fdff1c1c",
        },
        {
          url: "/images/node_coupon/coupon1.png",
          revision: "efc79b9c487bf3d2e542418ab498b274",
        },
        {
          url: "/images/node_coupon/coupon2.png",
          revision: "cd2d64eca2116337a9c2f98ad3470ea1",
        },
        {
          url: "/images/node_coupon/coupon3.png",
          revision: "cba33d253a5e293d7399cb7a7223c897",
        },
        {
          url: "/images/node_coupon/coupon4.png",
          revision: "d9f20fc397021d0f4c588a504063e04f",
        },
        {
          url: "/images/node_coupon/node_bubble.png",
          revision: "0f8734209c8e9604550dc14d72cfec4c",
        },
        {
          url: "/images/okb-logo.png",
          revision: "f2bd3bc9a1c595c0274fa659b0fcd044",
        },
        {
          url: "/images/plan_card/base_bg.png",
          revision: "967c82f30f8eff156ebd3b2cb5639f5c",
        },
        {
          url: "/images/plan_card/blup.svg",
          revision: "167c655f1be01167b13d10cc28ddbee7",
        },
        {
          url: "/images/plan_card/cancel.png",
          revision: "03c183b9734f2ce6be7e425c41584a45",
        },
        {
          url: "/images/plan_card/contact_bg.png",
          revision: "418856afed844a2d01f2d829ebf58ed2",
        },
        {
          url: "/images/plan_card/popular_icon.png",
          revision: "877594ef5a19cb24eb4a184fb80b7b61",
        },
        {
          url: "/images/plan_card/premium_bg.png",
          revision: "1b9feed61ca39920f591b15d401f86ef",
        },
        {
          url: "/images/plan_card/seat.png",
          revision: "cb893d980b76ad6954b595665c6b28e6",
        },
        {
          url: "/images/plan_card/shape.png",
          revision: "b44e6396c3225bbe460f44c5d2c99686",
        },
        {
          url: "/images/plan_card/usd.png",
          revision: "5aa118e739900a918336d43e8fd351bb",
        },
        {
          url: "/images/plan_card/usdc.png",
          revision: "5cbc8ee065e288fe9bb4e8bd09d7af33",
        },
        {
          url: "/images/plan_card/usdt.png",
          revision: "0a3f7309eab5c6ec5887a52f7ed1dec9",
        },
        {
          url: "/images/project-share.png",
          revision: "2fc8f161ee3e9e225e0c4a2de14f52fe",
        },
        {
          url: "/images/rolling.gif",
          revision: "ab9965953ce25891c1e2c9010fd8ceb9",
        },
        {
          url: "/images/staking/bg.png",
          revision: "5db4d293705148b246a975f8126d95dc",
        },
        {
          url: "/images/staking/full-screen.png",
          revision: "9b08dc7b76ff3960bdb6eaf0c571cce7",
        },
        {
          url: "/images/staking/pointsline.png",
          revision: "6c24d1dcef1d9e6b21d772721bb58ff3",
        },
        {
          url: "/images/telegram-icon.svg",
          revision: "7e7271d23e52df9b527fde819c440e25",
        },
        {
          url: "/images/textbg/inline.png",
          revision: "7b394c33729ce8e915f8de47d43e0199",
        },
        {
          url: "/images/textbg/lastspot.png",
          revision: "1670c664f60d911e1e72840a2a2162b9",
        },
        {
          url: "/images/textbg/leftspot.png",
          revision: "e92e0b9787a58bbeb995ec62e13a5a8a",
        },
        {
          url: "/images/token/arbtrum.png",
          revision: "0b827187299c149bc1d276c0222b30de",
        },
        {
          url: "/images/token/copyIcon.png",
          revision: "93f029e7e1761c617d85df8a58e1eb5e",
        },
        {
          url: "/images/token/dexscreen.png",
          revision: "be65a86d709e50eb6462a4c64d393123",
        },
        {
          url: "/images/token/eth-trade.png",
          revision: "42c022dbf00a77d9c1c84e7dbed91c18",
        },
        {
          url: "/images/token/howitworks.gif",
          revision: "72cb5187a6a90ff22281b593f144fe5c",
        },
        {
          url: "/images/token/pancake.png",
          revision: "8f8fe5382027636c706a92f8977c9e68",
        },
        {
          url: "/images/token/telegram.png",
          revision: "9e9206ee64a3c37762377883c7db0241",
        },
        {
          url: "/images/token/testtoken.png",
          revision: "2707c626647d9c75885d3556c137fd58",
        },
        {
          url: "/images/token/twitter.png",
          revision: "f2c5293664e61612b9e59a7aab2a1604",
        },
        {
          url: "/images/token/uniswap.png",
          revision: "ff797953e85188a1537d2e8123567b3b",
        },
        {
          url: "/images/token/website.png",
          revision: "72b6e11120e2434f5677941d137438ee",
        },
        {
          url: "/images/v3/active_progress.png",
          revision: "49c7b7cb4cca448d7cf62e6af89e47ed",
        },
        {
          url: "/images/v3/aibg.png",
          revision: "9cb2da622e813576f2b00bdd6d479788",
        },
        {
          url: "/images/v3/aichat.gif",
          revision: "86cb8c3a8fdf1dce1d255fdbcf1416b8",
        },
        {
          url: "/images/v3/aichat/aichat.gif",
          revision: "35124d8d8ed9251f7181b84e8f601068",
        },
        {
          url: "/images/v3/aichat/dailyoutlook.png",
          revision: "01fec79578996aff19e9ce304b751260",
        },
        {
          url: "/images/v3/aichat/scrolldown.png",
          revision: "0ed9ee1b100eedd47404506a55285fa4",
        },
        {
          url: "/images/v3/aichat/sun.png",
          revision: "c64d0b264368f9f42abeab5a186d7cf2",
        },
        {
          url: "/images/v3/background_score.gif",
          revision: "976c123473d2588ffe9b305cf80ac819",
        },
        {
          url: "/images/v3/background_score_border.gif",
          revision: "8946b986935807fb70d7c1ce0675d1d9",
        },
        {
          url: "/images/v3/badge_1000BLUP.png",
          revision: "aa8c610f74506ca2ae3d889694eae5d8",
        },
        {
          url: "/images/v3/badge_linkedin-verified.png",
          revision: "31aa203043eef5d9b29593827f5faebc",
        },
        {
          url: "/images/v3/bg.png",
          revision: "bbd1563a8beb618ff11c53f8283084c8",
        },
        {
          url: "/images/v3/black_progress.png",
          revision: "9cd9161c2cb6f98a4c3259aeb4236458",
        },
        {
          url: "/images/v3/blup.png",
          revision: "a693909b39f0ef31482770b84a861677",
        },
        {
          url: "/images/v3/blup/chartcomingsoon.png",
          revision: "79539bea6e7db97db67351ab5420d438",
        },
        {
          url: "/images/v3/blup/comingsoon1.png",
          revision: "da62be2d23d682f140ba8495f92acf81",
        },
        {
          url: "/images/v3/blup/delete.png",
          revision: "aaacad66c0a716bec9ae73ddf644d61a",
        },
        {
          url: "/images/v3/boost/1.5x.png",
          revision: "6f60daad5044e19431ec8007673a84b2",
        },
        {
          url: "/images/v3/boost/1.5xn.png",
          revision: "78870ed4c862752530cf43f7f35a298a",
        },
        {
          url: "/images/v3/boost/2x.png",
          revision: "b94527c6643ff757cfd8016c73324c4e",
        },
        {
          url: "/images/v3/boost/2xn.png",
          revision: "9d3b674c9edd12dbc60992d20661df50",
        },
        {
          url: "/images/v3/boost/3x.png",
          revision: "6e46eff3819db2104d180cf95895484f",
        },
        {
          url: "/images/v3/boost/3xn.png",
          revision: "7dba48f27e84ff1fb36848737169dc19",
        },
        {
          url: "/images/v3/boost/5x.png",
          revision: "a8fde15ddd5545581e206f59a1851edf",
        },
        {
          url: "/images/v3/boost/5xn.png",
          revision: "8070b42318f980b1f4fa6330eaae9e7d",
        },
        {
          url: "/images/v3/boost/rank101_500.png",
          revision: "ae0e98a9d6e2d6aee11ddc62408bc4ce",
        },
        {
          url: "/images/v3/boost/rank11_50.png",
          revision: "3cb4510d166fc2989205ac408b02503a",
        },
        {
          url: "/images/v3/boost/rank1_10.png",
          revision: "149913b4c55001c51e73c8bb45eeb77a",
        },
        {
          url: "/images/v3/boost/rank501.png",
          revision: "2a14406f83091a1ed4b7f5dc5437ca32",
        },
        {
          url: "/images/v3/boost/rank51_100.png",
          revision: "a73ac2214fca79f8ed141062d802d3ac",
        },
        {
          url: "/images/v3/boost/rank_100.png",
          revision: "ee9471d587927fd479a044c4ee094ef2",
        },
        {
          url: "/images/v3/boost/rank_20.png",
          revision: "9a38780439bfb43baec1499de6fa7a36",
        },
        {
          url: "/images/v3/boost/rank_50.png",
          revision: "6f2bcad8554220991fe46e1f6309233d",
        },
        {
          url: "/images/v3/boost/rank_8080.png",
          revision: "d967a0e0911e64c1112b9975010ccca8",
        },
        {
          url: "/images/v3/boost/rank_88888.png",
          revision: "1d7e2f15c9a5e67ffd41bb54f713b551",
        },
        {
          url: "/images/v3/center/agentlistdemo.png",
          revision: "19cbad3c575a9edb417fa4934a98cf4f",
        },
        {
          url: "/images/v3/center/ai_agent_store.png",
          revision: "e9d6e614c5c062ed5fb2c600cded753f",
        },
        {
          url: "/images/v3/center/askcoach.png",
          revision: "2fbbc8604cac7f27c648990a133f5ec1",
        },
        {
          url: "/images/v3/center/badge_1w.png",
          revision: "6736072cbe62eb2cc5baadc080e2806b",
        },
        {
          url: "/images/v3/center/badge_poker.png",
          revision: "71f9528784afcbf1f7df5a294eaa7ebc",
        },
        {
          url: "/images/v3/center/level_bottom.png",
          revision: "0288d918d6b88408bd6410da764ceab8",
        },
        {
          url: "/images/v3/center/level_top.png",
          revision: "7696372191ad697ce9469a416385401e",
        },
        {
          url: "/images/v3/center/scroll_modal.png",
          revision: "b18e667eaee21e3b0a988020d4cb3d0d",
        },
        {
          url: "/images/v3/color-stars.png",
          revision: "2aad43b3128a6d44796a2edfcef80db4",
        },
        {
          url: "/images/v3/dark-light.png",
          revision: "22b4730260ee7b06bd3b6064ed42c2f0",
        },
        {
          url: "/images/v3/demo_social_score_1.gif",
          revision: "7f7b76b08ec886d722054e7dc8e3d9bc",
        },
        {
          url: "/images/v3/enterprise/icon/delete.png",
          revision: "d6b076220f22a1ec233a0b93fe3ee142",
        },
        {
          url: "/images/v3/enterprise/icon/edit.png",
          revision: "8c97dc3a04fd286ff716e9392ba38699",
        },
        {
          url: "/images/v3/enterprise/sent-msg.png",
          revision: "4355633b1834fb08ceef1a83b6710ed3",
        },
        {
          url: "/images/v3/flex-light.png",
          revision: "517041fec800fd092c2744fa0dca7d09",
        },
        {
          url: "/images/v3/follow.png",
          revision: "1bb6e8803b51528f45daf91efb385323",
        },
        {
          url: "/images/v3/gb.png",
          revision: "bbd1563a8beb618ff11c53f8283084c8",
        },
        {
          url: "/images/v3/icon-AI.png",
          revision: "48e34d6ada18eb60098c738f7477480b",
        },
        {
          url: "/images/v3/icon/daily-check-in.png",
          revision: "347737bdc5ee35225f62d4d86a13256b",
        },
        {
          url: "/images/v3/icon/msg.png",
          revision: "1e4ec78d599b9c42ac26d54419db8790",
        },
        {
          url: "/images/v3/icon/msg_readed.png",
          revision: "95100add8efe39bc2b2e5140a7571df8",
        },
        {
          url: "/images/v3/icon/send.png",
          revision: "e73059820dbcd8758d4e527e4f80ce31",
        },
        {
          url: "/images/v3/linkedin-pc.png",
          revision: "c9b6f845d21e5e4ffef667547efae0d8",
        },
        {
          url: "/images/v3/linkedin.png",
          revision: "4cbf4c578640912928db91080461d0f3",
        },
        {
          url: "/images/v3/linkedin_passed.png",
          revision: "e20f66f878d5c029986954d93ec1695e",
        },
        {
          url: "/images/v3/mobile-bluwhale-icon.png",
          revision: "ec19d5cb9193b1a975622be68ac6a624",
        },
        {
          url: "/images/v3/mobile-linkedin.png",
          revision: "e8bd6bac1a33bb5011f26fe4ea220ff8",
        },
        {
          url: "/images/v3/mobilebg.png",
          revision: "d58510415dc2bcd5173c3ff9a79f5884",
        },
        {
          url: "/images/v3/msg/fivestar.png",
          revision: "968d8037f160d40356f57947fdaa0337",
        },
        {
          url: "/images/v3/msg/glow.png",
          revision: "8a083c0bb4ccf964a6f0d8ad3a7c45b6",
        },
        {
          url: "/images/v3/node/16_pecent.png",
          revision: "7088e5f024eec9c520f116edf70cc30a",
        },
        {
          url: "/images/v3/node/18_pecent.png",
          revision: "379e4c4debe21f36b5f19a6bd395765e",
        },
        {
          url: "/images/v3/node/1_pecent.png",
          revision: "452c476a9110d6152a0b3b4a417a8cf2",
        },
        {
          url: "/images/v3/node/2_pecent.png",
          revision: "f2e861a463eec0733a7b5e19bc9f7a46",
        },
        {
          url: "/images/v3/node/4_pecent.png",
          revision: "498d9b5d73e1ee75ba89e727fb60c1b7",
        },
        {
          url: "/images/v3/node/8_pecent.png",
          revision: "36fb5fb895bb5096620f8dec1022bb72",
        },
        {
          url: "/images/v3/node/active_bg.png",
          revision: "1a9a2771fb56720f48b16cf1fa057eff",
        },
        {
          url: "/images/v3/node/btn_buyNode.png",
          revision: "e1decf30b5eff7d1fb09249dd543e9f4",
        },
        {
          url: "/images/v3/node/buildcommunity_1.png",
          revision: "7f798af41d800f3a36757c217a710a7b",
        },
        {
          url: "/images/v3/node/buildcommunity_2.png",
          revision: "ac08915f6880e7f681a576cf0671c0a3",
        },
        {
          url: "/images/v3/node/buildcommunity_3.png",
          revision: "0d7ab935fc5da886a97efd60d60e1455",
        },
        {
          url: "/images/v3/node/buildcommunity_4.png",
          revision: "38c3c62200cbdbb824422474409ff6a9",
        },
        {
          url: "/images/v3/node/common_badge.png",
          revision: "3b9ddb8a37ab6c92674e43f5254cf37a",
        },
        {
          url: "/images/v3/node/community_bg.png",
          revision: "768ab8c9afb69a4af2925076238774ab",
        },
        {
          url: "/images/v3/node/icon/bonus.png",
          revision: "062c2d9044f5fd7cb69e470cb99d421a",
        },
        {
          url: "/images/v3/node/icon/user.png",
          revision: "299235fb3ab13afcd24ec1c4abe2ba6c",
        },
        {
          url: "/images/v3/node/master_badge.png",
          revision: "394ab7892b40de497d07ba6c397bfd28",
        },
        {
          url: "/images/v3/node/nodes_community_leader.png",
          revision: "20eaa08032a5445a0b0fba3314c5b6d1",
        },
        {
          url: "/images/v3/node/one_pecent.png",
          revision: "452c476a9110d6152a0b3b4a417a8cf2",
        },
        {
          url: "/images/v3/node/tie_88_reward.png",
          revision: "9d22a293892236ef002a49ed50c905c1",
        },
        {
          url: "/images/v3/node/tie_88_reward_mobile.png",
          revision: "1c0f06b79110424f5b89d449802d7c19",
        },
        {
          url: "/images/v3/node/tier88left.png",
          revision: "f95d6e882ef50989e67ac670b18ac23f",
        },
        {
          url: "/images/v3/node/two_pecent.png",
          revision: "98e22f3be775ff070b4d8ee2de422fa0",
        },
        {
          url: "/images/v3/nodes/common.png",
          revision: "a2a061e688b9253d3cdc455cca0323f0",
        },
        {
          url: "/images/v3/nodes/master.png",
          revision: "c8038131fdea206e6ca8a13c1e662251",
        },
        {
          url: "/images/v3/nodes/none.png",
          revision: "640a52505beb3289d5ee0e85440a8900",
        },
        {
          url: "/images/v3/normal_avatar_cicle.png",
          revision: "91a8f524870e44364aff2d8f6a6b2eea",
        },
        {
          url: "/images/v3/passedKYC.png",
          revision: "37132e64136615200fcc86f149e2ec22",
        },
        {
          url: "/images/v3/pingmsg.png",
          revision: "ac07d6665349fdaada0850ae42b9110e",
        },
        {
          url: "/images/v3/plan/annually.png",
          revision: "640ee35754b004ce790ead761673b525",
        },
        {
          url: "/images/v3/plan/anually_bg.png",
          revision: "d77b2cd0254541902833653f815a50b4",
        },
        {
          url: "/images/v3/plan/demo_financial-age.gif",
          revision: "df00e615ce3e8bb69f1fecd34cc0673b",
        },
        {
          url: "/images/v3/plan/demo_social-score.png",
          revision: "10f22d4cfaf43ee714b4f8e329832a02",
        },
        {
          url: "/images/v3/plan/free.png",
          revision: "cd091e0f33fe204f19071c8d1641706e",
        },
        {
          url: "/images/v3/plan/free_bg.png",
          revision: "f4c8ef688b13c835785c2a1f0ad9ba46",
        },
        {
          url: "/images/v3/plan/free_check.png",
          revision: "b2c94443ccf1f305ad575be37cb2e0bf",
        },
        {
          url: "/images/v3/plan/free_uncheck.png",
          revision: "9f0564d2e8f820d5f3565e75a09e2aba",
        },
        {
          url: "/images/v3/plan/icon/download.png",
          revision: "6d54f79da2f072751ad7e1e115cfe082",
        },
        {
          url: "/images/v3/plan/icon/tg_share.png",
          revision: "c34a92511bb32346158a7d86d237add7",
        },
        {
          url: "/images/v3/plan/icon/x_share.png",
          revision: "3ea26e30210876dea10c2097ccb15d51",
        },
        {
          url: "/images/v3/plan/locker.png",
          revision: "2a2aeb110f4dc918906e2edd42663536",
        },
        {
          url: "/images/v3/plan/monthly.png",
          revision: "72e0fcbf35ef4639efae3498a005e619",
        },
        {
          url: "/images/v3/plan/monthly_bg.png",
          revision: "3b352d7f69d5f33c125b7151f3daa4a6",
        },
        {
          url: "/images/v3/plan/paid_check.png",
          revision: "8fc2441d4f52c4ddcdd61f87c791a1fc",
        },
        {
          url: "/images/v3/plan/shareLogp.png",
          revision: "9924204bfc4a9302241e2a566b9d0adf",
        },
        {
          url: "/images/v3/plan/sharebg.png",
          revision: "7f33b9822aa0d8618342b3c03c0c7f73",
        },
        {
          url: "/images/v3/plan/social_score.gif",
          revision: "8c59f6c36567204654052c17ea5b5cae",
        },
        {
          url: "/images/v3/plan/year_check.png",
          revision: "d77a39cd5b51309ed920418f17aa6ee4",
        },
        {
          url: "/images/v3/planet_score.gif",
          revision: "50d5343e6d630399801f941dcc0bb1ce",
        },
        {
          url: "/images/v3/profile2.png",
          revision: "52cad9442f2aee1048478d4bd8460e2d",
        },
        {
          url: "/images/v3/profile3.png",
          revision: "e3bf7d940a0db0618ebc4c087b3b87e5",
        },
        {
          url: "/images/v3/score_goback.png",
          revision: "06922654ad27c063289640851b96f743",
        },
        {
          url: "/images/v3/sharebg/FIVE.png",
          revision: "d0280770ff0fa39e4b995b0bdbf63676",
        },
        {
          url: "/images/v3/sharebg/FOUR.png",
          revision: "879d70189b6eef9a41112becf7c61c5f",
        },
        {
          url: "/images/v3/sharebg/ONE.png",
          revision: "1b2269abc555f6bf4443eb11c1f6719a",
        },
        {
          url: "/images/v3/sharebg/TWO.png",
          revision: "8d8f262fec87ccc8ec2a75cbd8aa96ba",
        },
        {
          url: "/images/v3/sharebg/bluwhale.png",
          revision: "afdc6ed7c2425fdc7f170623272c3f33",
        },
        {
          url: "/images/v3/sharebluscore/FIVE.png",
          revision: "aaf940d48f93f967101b1089434468de",
        },
        {
          url: "/images/v3/sharebluscore/FOUR.png",
          revision: "512de7974e95598f9d6272e9bd814e73",
        },
        {
          url: "/images/v3/sharebluscore/ONE.png",
          revision: "560b1ffd8a830721c19c59c41a763eaf",
        },
        {
          url: "/images/v3/sharebluscore/THREE.png",
          revision: "cd83fd982e89557e6abe2c412b964149",
        },
        {
          url: "/images/v3/sharebluscore/TWO.png",
          revision: "49d09e55607f9d898bed6e5dea7c3cc8",
        },
        {
          url: "/images/v3/staking/BLUAI.png",
          revision: "a23019e178b9f97dae71e17af933647c",
        },
        {
          url: "/images/v3/staking/bluai_selected.png",
          revision: "a23019e178b9f97dae71e17af933647c",
        },
        {
          url: "/images/v3/staking/bluai_unselected.png",
          revision: "48f1bff82a7ee45e5b0f865a56d201d8",
        },
        {
          url: "/images/v3/staking/blup_selected.png",
          revision: "6c79b7368ea1da82de72648f111b56c0",
        },
        {
          url: "/images/v3/staking/blup_unselected.png",
          revision: "c6ca582d9a89a20273ae0fcb90b020b0",
        },
        {
          url: "/images/v3/staking/default.png",
          revision: "131250ba44f49658472c757880400136",
        },
        {
          url: "/images/v3/staking/howitworks.gif",
          revision: "3809950b46cc0da26928e66f37482231",
        },
        {
          url: "/images/v3/staking/howitworks_v2.gif",
          revision: "4c67d30cf2152d887938a71acd31c6a0",
        },
        {
          url: "/images/v3/staking/icon/success.png",
          revision: "8302df9bc639400295efc3e62c1df776",
        },
        {
          url: "/images/v3/staking/icon_badge_staking_DAO@3x copy.png",
          revision: "ceb65632599acfb52681ef9bc15e9856",
        },
        {
          url: "/images/v3/staking/icon_badge_staking_DAO@3x.png",
          revision: "f128df2c556b704205d323452f71b897",
        },
        {
          url: "/images/v3/staking/icon_badge_staking_Delegator@3x copy.png",
          revision: "e9b4d472c452061f212cec97260384fc",
        },
        {
          url: "/images/v3/staking/icon_badge_staking_Delegator@3x.png",
          revision: "dba9941e9faa4a95e2083eb0a6e6bd9b",
        },
        {
          url: "/images/v3/staking/icon_history.png",
          revision: "1705c68af81f98b441fbc613296262b4",
        },
        {
          url: "/images/v3/staking/none.png",
          revision: "053954c8c04fec8968d842f51bf1c2c8",
        },
        {
          url: "/images/v3/star.png",
          revision: "968d8037f160d40356f57947fdaa0337",
        },
        {
          url: "/images/v3/thumb_down_default.png",
          revision: "4ff0c1898e2c73f6d01a7b870f3f203c",
        },
        {
          url: "/images/v3/thumb_down_hover.png",
          revision: "050c7f7e191a4e479ec3936b0efcd658",
        },
        {
          url: "/images/v3/thumb_down_selected.png",
          revision: "b0c6fc9989de11db8cb9ed1ba940cd6d",
        },
        {
          url: "/images/v3/thumb_up_default.png",
          revision: "7ac8a6124f75d5720ce3fde02431efc7",
        },
        {
          url: "/images/v3/thumb_up_hover.png",
          revision: "970d871310c8331d523e03ea666a264b",
        },
        {
          url: "/images/v3/thumb_up_selected.png",
          revision: "237a560cd6df33949528f815b4c5c689",
        },
        {
          url: "/images/v3/tier99_hover.png",
          revision: "5856b848e90f33f90dd35b4010d15625",
        },
        {
          url: "/images/v3/tokendefault.png",
          revision: "c78434b541d75cca577323e935b29156",
        },
        {
          url: "/images/v3/trade/arb_network.png",
          revision: "47301e92636a95547485dc88fdbf6090",
        },
        {
          url: "/images/v3/trade/arb_token_icon.png",
          revision: "7c5a49cd93dd862eb410d8e2df587e0d",
        },
        {
          url: "/images/v3/trade/bnb.png",
          revision: "2868d0d0455ee2916a450a5ca53875de",
        },
        {
          url: "/images/v3/trade/bsc_network.png",
          revision: "62eb612f8720fe39a8673f7e1d72fed7",
        },
        {
          url: "/images/v3/trade/bsc_token_icon.png",
          revision: "4abc7ba740e99ca36e9bb2a91c309de5",
        },
        {
          url: "/images/v3/trade/ethicon.png",
          revision: "7965f7185a5478e3cfa5775e5b7a4f4e",
        },
        {
          url: "/images/v3/trade/icon_chart.png",
          revision: "fbcd502518d9b0e1b0c720ded4ab22af",
        },
        {
          url: "/images/v3/trade/icon_nav.png",
          revision: "16d06d4f9799834da4e36062ddbc5551",
        },
        {
          url: "/images/v3/trade/trade_success.png",
          revision: "8302df9bc639400295efc3e62c1df776",
        },
        {
          url: "/images/v3/unfollow.png",
          revision: "2fcd0bce0399607894dd595ee4238019",
        },
        {
          url: "/images/wallet/bybit_wallet.svg",
          revision: "6ca7dd7d1ee9624bad17d4064b52f768",
        },
        {
          url: "/images/wallet/gateio.webp",
          revision: "330e4792c9d1a3c722a8d1adca46ebd2",
        },
        {
          url: "/images/wallet/ic_coinbase.png",
          revision: "4905bd6f7511345f1f0bc140e55e5f0f",
        },
        {
          url: "/images/wallet/ic_metamask.png",
          revision: "a699048862068f91b6d211d8023feccd",
        },
        {
          url: "/images/wallet/ic_wallet_connect.png",
          revision: "384020215812095d436a732d038c2f51",
        },
        {
          url: "/images/wallet/okx.png",
          revision: "6611d0f6cbfe1d22d65c57b5fb03a010",
        },
        { url: "/img-mask.png", revision: "44a2696201389be2db74cb8898e6124a" },
        {
          url: "/libraries/charting_library/bundles/1033.5197f9f8b8500206d06c.css",
          revision: "3354e5501e385152b633087ceda225d2",
        },
        {
          url: "/libraries/charting_library/bundles/1033.5197f9f8b8500206d06c.rtl.css",
          revision: "3354e5501e385152b633087ceda225d2",
        },
        {
          url: "/libraries/charting_library/bundles/1109.b1ced88f4a839badfff1.css",
          revision: "725b06a716f6373bec57aab38f3f2f7d",
        },
        {
          url: "/libraries/charting_library/bundles/1109.b1ced88f4a839badfff1.rtl.css",
          revision: "725b06a716f6373bec57aab38f3f2f7d",
        },
        {
          url: "/libraries/charting_library/bundles/1553.c076714f5e24887f0b94.js",
          revision: "0debc4521def932af18f629a2cb7eccd",
        },
        {
          url: "/libraries/charting_library/bundles/1740.4c61de525e940eee4f3c.js",
          revision: "4aed7cc5c613cadc9e6308b072bfd5c5",
        },
        {
          url: "/libraries/charting_library/bundles/1762.7ff6b353c441db2276da.css",
          revision: "0eac8cc0fa940201c0deb5cf2c9c65ac",
        },
        {
          url: "/libraries/charting_library/bundles/1762.7ff6b353c441db2276da.rtl.css",
          revision: "0eac8cc0fa940201c0deb5cf2c9c65ac",
        },
        {
          url: "/libraries/charting_library/bundles/1803.4653bb65d2b0d594d6af.css",
          revision: "1ef334b7d21b3fb660d6e7dfdaa177f5",
        },
        {
          url: "/libraries/charting_library/bundles/1803.4653bb65d2b0d594d6af.rtl.css",
          revision: "369e192f0a3c09a543d219324b3b1e0a",
        },
        {
          url: "/libraries/charting_library/bundles/2052.e9d07fdfb896fca26166.js",
          revision: "d8635e41543e57ed957137f442e2370a",
        },
        {
          url: "/libraries/charting_library/bundles/2109.4d5de3fbde1cd7dc5e9f.css",
          revision: "ed0b62542a1450e7abeb457273c3328a",
        },
        {
          url: "/libraries/charting_library/bundles/2109.4d5de3fbde1cd7dc5e9f.rtl.css",
          revision: "793051cd81b1ae64c41fb8d640fb0169",
        },
        {
          url: "/libraries/charting_library/bundles/2191.bb0aa12f5e562fd483f3.css",
          revision: "f87fc9794d4d48b23713e8068bcdaedd",
        },
        {
          url: "/libraries/charting_library/bundles/2191.bb0aa12f5e562fd483f3.rtl.css",
          revision: "288a30895ddee07624cb5dac010573c4",
        },
        {
          url: "/libraries/charting_library/bundles/2260.b98824e4829a1aa9b444.css",
          revision: "94b80dfa687470d975a041cfbe5c1df9",
        },
        {
          url: "/libraries/charting_library/bundles/2260.b98824e4829a1aa9b444.rtl.css",
          revision: "ca104bd4682d2a29a7d1920899e8f19a",
        },
        {
          url: "/libraries/charting_library/bundles/2443.66f44a8bfe8d49aaeaee.js",
          revision: "fd04bca6643a69cc90c378cbbb26fcbb",
        },
        {
          url: "/libraries/charting_library/bundles/2486.82c7dba4839761a57f28.css",
          revision: "5c975d7d80f2fd22d461e344893912e5",
        },
        {
          url: "/libraries/charting_library/bundles/2486.82c7dba4839761a57f28.rtl.css",
          revision: "42394cdac4171e5a2932f8e7c8b93084",
        },
        {
          url: "/libraries/charting_library/bundles/2544.225f38946afc6ad55a35.js",
          revision: "f49c981535036246f5c7809c294d25f4",
        },
        {
          url: "/libraries/charting_library/bundles/2587.1f1100dc01693edfe269.css",
          revision: "bf62a157b94afdbdbe2f8ae4d33b9778",
        },
        {
          url: "/libraries/charting_library/bundles/2587.1f1100dc01693edfe269.rtl.css",
          revision: "3d97b0c116b6ce1cb7fe4c7fdb0d5dba",
        },
        {
          url: "/libraries/charting_library/bundles/2639.7b1d42eef7b89e0e96d3.css",
          revision: "2032b20fc9cd02895bb7cad6035d7c3a",
        },
        {
          url: "/libraries/charting_library/bundles/2639.7b1d42eef7b89e0e96d3.rtl.css",
          revision: "a49708a6a5a820784d155975d2f211b5",
        },
        {
          url: "/libraries/charting_library/bundles/2666.fbb750fd312778403036.css",
          revision: "d41d8cd98f00b204e9800998ecf8427e",
        },
        {
          url: "/libraries/charting_library/bundles/2666.fbb750fd312778403036.rtl.css",
          revision: "d41d8cd98f00b204e9800998ecf8427e",
        },
        {
          url: "/libraries/charting_library/bundles/2676.2d3cabbd39a3b0d6e9ea.css",
          revision: "8d922ec18240d19e836fc388e38881f5",
        },
        {
          url: "/libraries/charting_library/bundles/2676.2d3cabbd39a3b0d6e9ea.rtl.css",
          revision: "4ebad59442c6db9e24a152cf345a8f32",
        },
        {
          url: "/libraries/charting_library/bundles/2731.ec19f123cabf8efd03a4.css",
          revision: "291fd42ad4ab6e0c5c8c51b2f5f355a8",
        },
        {
          url: "/libraries/charting_library/bundles/2731.ec19f123cabf8efd03a4.rtl.css",
          revision: "fdc8de5ea0e665c19aec95c9b5c36a56",
        },
        {
          url: "/libraries/charting_library/bundles/2846.fbbd62afe04b4f9387f2.js",
          revision: "89a46fe3700567f03aef3df31df5667c",
        },
        {
          url: "/libraries/charting_library/bundles/3066.58a325f25b087530293d.css",
          revision: "50e412b460f6bbdabb659fa10f187351",
        },
        {
          url: "/libraries/charting_library/bundles/3066.58a325f25b087530293d.rtl.css",
          revision: "ef6f3429b9dd0fee07893d7543ea7b0d",
        },
        {
          url: "/libraries/charting_library/bundles/3263.238cd2d620e004adee5a.js",
          revision: "1a195e3b7eacc9da11018f3f7900e454",
        },
        {
          url: "/libraries/charting_library/bundles/3353.860146c59230ab4bd938.css",
          revision: "2e7f310b9e2bcee8a768c9820869b947",
        },
        {
          url: "/libraries/charting_library/bundles/3353.860146c59230ab4bd938.rtl.css",
          revision: "2591a1d7db85b8ae72be61b626f96e5d",
        },
        {
          url: "/libraries/charting_library/bundles/3502.c49903f7222870ff8aca.css",
          revision: "2188c43b0cb6344cd382d53f6dd9f0c5",
        },
        {
          url: "/libraries/charting_library/bundles/3502.c49903f7222870ff8aca.rtl.css",
          revision: "557f20518694a6ce9d68b366f8da8a9a",
        },
        {
          url: "/libraries/charting_library/bundles/3610.11b7ad14e26429fdfa5d.css",
          revision: "4a9eac345224fce34f2fa7edb242094d",
        },
        {
          url: "/libraries/charting_library/bundles/3610.11b7ad14e26429fdfa5d.rtl.css",
          revision: "daba664e845a2d67f3f19646709fc66f",
        },
        {
          url: "/libraries/charting_library/bundles/3717.856421c70a4dff35762a.css",
          revision: "41e8f5de17b21243928434afd3a9a480",
        },
        {
          url: "/libraries/charting_library/bundles/3717.856421c70a4dff35762a.rtl.css",
          revision: "6b1a0e59228e569f51222a2422392d64",
        },
        {
          url: "/libraries/charting_library/bundles/3780.a289557f2e0bcabcc4ca.css",
          revision: "3278e8604a1917b5b29900234b95eadc",
        },
        {
          url: "/libraries/charting_library/bundles/3780.a289557f2e0bcabcc4ca.rtl.css",
          revision: "be9bfc0a827f93c96db38027270aac57",
        },
        {
          url: "/libraries/charting_library/bundles/3842.8cf6b523fd5a5b6fb022.css",
          revision: "cc67fd593fd9cb2cd5d7cf01110b3d52",
        },
        {
          url: "/libraries/charting_library/bundles/3842.8cf6b523fd5a5b6fb022.rtl.css",
          revision: "ce86b0c98a02d4c1c1ec093fc3f6be38",
        },
        {
          url: "/libraries/charting_library/bundles/3896.96db838d3467bcf68051.css",
          revision: "b8dc37e58e7d7ac8425d12c942072db3",
        },
        {
          url: "/libraries/charting_library/bundles/3896.96db838d3467bcf68051.rtl.css",
          revision: "8088ccacbc8d83d4edfaed2b6ab0e5ad",
        },
        {
          url: "/libraries/charting_library/bundles/3914.d2b6c577f350629b6837.css",
          revision: "89155186ddf193fec8d7ded547074086",
        },
        {
          url: "/libraries/charting_library/bundles/3914.d2b6c577f350629b6837.rtl.css",
          revision: "58ac48f98b3ee2733e7fec7ddbbbd4e6",
        },
        {
          url: "/libraries/charting_library/bundles/3939.4d0187960a564ff5a557.css",
          revision: "12666abdac7ede94d91d4e2c560fedbc",
        },
        {
          url: "/libraries/charting_library/bundles/3939.4d0187960a564ff5a557.rtl.css",
          revision: "d25a218f074eba2d4300ab84bf0a244e",
        },
        {
          url: "/libraries/charting_library/bundles/3980.b2ff45a2d8bb6a131d7c.css",
          revision: "f9e9077bcac8f7d53e6931a5041b2a1d",
        },
        {
          url: "/libraries/charting_library/bundles/3980.b2ff45a2d8bb6a131d7c.rtl.css",
          revision: "9796fcd3ecb03e03a7416f4c647a542a",
        },
        {
          url: "/libraries/charting_library/bundles/3986.b50fcad4f1b77533bda7.js",
          revision: "ae50f4a4f6e30549c47a10701e0b5273",
        },
        {
          url: "/libraries/charting_library/bundles/4015.1d0e3a62a59d173c81f3.css",
          revision: "0eb99b5410054995ca3b533477551677",
        },
        {
          url: "/libraries/charting_library/bundles/4015.1d0e3a62a59d173c81f3.rtl.css",
          revision: "0eb99b5410054995ca3b533477551677",
        },
        {
          url: "/libraries/charting_library/bundles/4062.9229fac3ef3db26fd5bc.js",
          revision: "d85a474664ed7474ac9ce5f87ed7df27",
        },
        {
          url: "/libraries/charting_library/bundles/4102.4abd8542fa3aa3e7fd5d.css",
          revision: "6607f19eac94b100db84d4324485fb84",
        },
        {
          url: "/libraries/charting_library/bundles/4102.4abd8542fa3aa3e7fd5d.rtl.css",
          revision: "a6bb5292ef35d4f026972d46e9db9b44",
        },
        {
          url: "/libraries/charting_library/bundles/4215.d24836a292b1969ab4bb.css",
          revision: "5d0bb7ccdae126f2d6a7197fe03d4ef9",
        },
        {
          url: "/libraries/charting_library/bundles/4215.d24836a292b1969ab4bb.rtl.css",
          revision: "e6b65ab1cbe57e0dfa72fc94f96861b2",
        },
        {
          url: "/libraries/charting_library/bundles/4370.18ca7d93e5073f0446c0.js",
          revision: "4514bf84591d905fbc16c5640c3bd232",
        },
        {
          url: "/libraries/charting_library/bundles/4403.bf44a542113a4440984b.js",
          revision: "f414c58d267519697590088c86a7bc81",
        },
        {
          url: "/libraries/charting_library/bundles/4648.af8e7c4b04b18b9156b0.js",
          revision: "9294f4f16aee079de6fdb712644922bd",
        },
        {
          url: "/libraries/charting_library/bundles/4713.8582f5ea3328f2cbdfae.js",
          revision: "0ffec117e8660fbb47b7d77cb004b910",
        },
        {
          url: "/libraries/charting_library/bundles/4781.cf1365a3bf51d9989978.css",
          revision: "1726fc3902a113e768306f66c4b1918d",
        },
        {
          url: "/libraries/charting_library/bundles/4781.cf1365a3bf51d9989978.rtl.css",
          revision: "14924a6ac4d9988a5e5aafe327a9e148",
        },
        {
          url: "/libraries/charting_library/bundles/4788.3cff897925f7a8dbc837.css",
          revision: "167668bfc2fa802640a80501316df74b",
        },
        {
          url: "/libraries/charting_library/bundles/4788.3cff897925f7a8dbc837.rtl.css",
          revision: "257853a4e27fa4b4d855afcf095d4f16",
        },
        {
          url: "/libraries/charting_library/bundles/4894.99d4c2794da9feef3c70.css",
          revision: "ec4a5a624838a4a7cf8ec67cd5af6f7c",
        },
        {
          url: "/libraries/charting_library/bundles/4894.99d4c2794da9feef3c70.rtl.css",
          revision: "461cc63f4b3dc2fa7c957b6455ba960a",
        },
        {
          url: "/libraries/charting_library/bundles/4987.ca5d16a7e990d39bfb0e.css",
          revision: "0ba9b8dbd604f10dc8a8f4f112d6cc02",
        },
        {
          url: "/libraries/charting_library/bundles/4987.ca5d16a7e990d39bfb0e.rtl.css",
          revision: "7be2939df6957d8e6c2a573f288fc00d",
        },
        {
          url: "/libraries/charting_library/bundles/5057.5382614553878fcf337d.js",
          revision: "ab4efdcbee776d567e002d8f4eb2f5ec",
        },
        {
          url: "/libraries/charting_library/bundles/5128.57de9f218989cee8119d.js",
          revision: "4b5d6f86665cfd75ef213e59ae117e90",
        },
        {
          url: "/libraries/charting_library/bundles/5142.2c34c8656148cc5203b7.js",
          revision: "3e170b17265f5c1d0dba597f3792de4e",
        },
        {
          url: "/libraries/charting_library/bundles/5145.a2b224fd27ab2941c565.css",
          revision: "474be8f8d7906b2d35dd080e809859e6",
        },
        {
          url: "/libraries/charting_library/bundles/5145.a2b224fd27ab2941c565.rtl.css",
          revision: "474be8f8d7906b2d35dd080e809859e6",
        },
        {
          url: "/libraries/charting_library/bundles/5163.950dd1d584f76da1ed3b.css",
          revision: "6fc0bfb4582afbf01f3df26a599e92ac",
        },
        {
          url: "/libraries/charting_library/bundles/5163.950dd1d584f76da1ed3b.rtl.css",
          revision: "272c8da1b9b7dbd2ae38a92cadd31a88",
        },
        {
          url: "/libraries/charting_library/bundles/5164.a45b25a7ca6a0c16f810.js",
          revision: "5b0ef9044dbad9005f5af15970e165f0",
        },
        {
          url: "/libraries/charting_library/bundles/5166.a12c50ad6225ca6de843.css",
          revision: "f78ee1be5648d9a6bc6bf2348a4d108b",
        },
        {
          url: "/libraries/charting_library/bundles/5166.a12c50ad6225ca6de843.rtl.css",
          revision: "fd77acf5857876e8b3ed0f989cf70368",
        },
        {
          url: "/libraries/charting_library/bundles/524.ef662c4bc3e57dd91171.css",
          revision: "4734af2d55860596ab37204f93311772",
        },
        {
          url: "/libraries/charting_library/bundles/524.ef662c4bc3e57dd91171.rtl.css",
          revision: "a9392458f6969cc5882af4028e4e5729",
        },
        {
          url: "/libraries/charting_library/bundles/5649.b60ed09c5ea8c55827d4.css",
          revision: "f74f78a8fbdc39871967ee26814188ec",
        },
        {
          url: "/libraries/charting_library/bundles/5649.b60ed09c5ea8c55827d4.rtl.css",
          revision: "2da7da802e22dca431a6bcc7abcaa33d",
        },
        {
          url: "/libraries/charting_library/bundles/5664.87e81959e880fa8ba65d.js",
          revision: "9a55f4b240fed5090a74811ccd9bd05b",
        },
        {
          url: "/libraries/charting_library/bundles/5866.f164dd2a584ab0f493cf.css",
          revision: "7947cc37adcccdbbdcbfe681dafb34b0",
        },
        {
          url: "/libraries/charting_library/bundles/5866.f164dd2a584ab0f493cf.rtl.css",
          revision: "7947cc37adcccdbbdcbfe681dafb34b0",
        },
        {
          url: "/libraries/charting_library/bundles/5940.aedc1bdbd324e6042b17.css",
          revision: "5397412e1c67c62eeb051a3e3dec7704",
        },
        {
          url: "/libraries/charting_library/bundles/5940.aedc1bdbd324e6042b17.rtl.css",
          revision: "9db770917e81b34322f140428ef2b5af",
        },
        {
          url: "/libraries/charting_library/bundles/5983.3c0ae13972f5d3433a77.js",
          revision: "590078154be957ff73350717c2813a93",
        },
        {
          url: "/libraries/charting_library/bundles/5993.4705829d0834140ee3f2.css",
          revision: "726b0b4d05e0a27668405ef636988741",
        },
        {
          url: "/libraries/charting_library/bundles/5993.4705829d0834140ee3f2.rtl.css",
          revision: "f03aa36b3b05123f9095219c4f992117",
        },
        {
          url: "/libraries/charting_library/bundles/6.362fa6a7ab1f3e3b06c4.css",
          revision: "9239f1932f0463fda9d174ac7e9744e2",
        },
        {
          url: "/libraries/charting_library/bundles/6.362fa6a7ab1f3e3b06c4.rtl.css",
          revision: "ab2bd5fa1e87638cb794da3a8b372822",
        },
        {
          url: "/libraries/charting_library/bundles/6025.263b457b1a7f9ca139b2.css",
          revision: "554f3d5e581913c0f637d2dd2f6cacb8",
        },
        {
          url: "/libraries/charting_library/bundles/6025.263b457b1a7f9ca139b2.rtl.css",
          revision: "18a9526514eef608dbcbdd69c05934d3",
        },
        {
          url: "/libraries/charting_library/bundles/6036.3b493a9f0ab052e6447c.css",
          revision: "5a1c37d7733bbd6f15f4b07776449b63",
        },
        {
          url: "/libraries/charting_library/bundles/6036.3b493a9f0ab052e6447c.rtl.css",
          revision: "5a1c37d7733bbd6f15f4b07776449b63",
        },
        {
          url: "/libraries/charting_library/bundles/6106.f01163745d787b60c86c.css",
          revision: "d133406c76acf0c47aceb8cecdbc7663",
        },
        {
          url: "/libraries/charting_library/bundles/6106.f01163745d787b60c86c.rtl.css",
          revision: "d133406c76acf0c47aceb8cecdbc7663",
        },
        {
          url: "/libraries/charting_library/bundles/6150.bda60280b05cea478076.css",
          revision: "f708377a379668d9a4d6b6a1bd6e6aa0",
        },
        {
          url: "/libraries/charting_library/bundles/6150.bda60280b05cea478076.rtl.css",
          revision: "9c058ea0d75168b79677101275fe1b6e",
        },
        {
          url: "/libraries/charting_library/bundles/6214.65b7dbf8be6cca5ac143.css",
          revision: "d373c402f3cdb81e7dd41e2b486a48cb",
        },
        {
          url: "/libraries/charting_library/bundles/6214.65b7dbf8be6cca5ac143.rtl.css",
          revision: "23eea37de1450473d7f9c040027b539a",
        },
        {
          url: "/libraries/charting_library/bundles/6221.bc53670dfb8f982908a2.css",
          revision: "295ef8c27b2d204555c9d52c250c217e",
        },
        {
          url: "/libraries/charting_library/bundles/6221.bc53670dfb8f982908a2.rtl.css",
          revision: "09af4422d1de97c01b997ea0f678ca44",
        },
        {
          url: "/libraries/charting_library/bundles/6408.e58aaf98d9306e8d9b77.js",
          revision: "efb207094076b7d45f0aec39b8b90072",
        },
        {
          url: "/libraries/charting_library/bundles/6494.4c212043f24336e170d5.css",
          revision: "99495887426779d8fbfb1e9dcc7e0b1b",
        },
        {
          url: "/libraries/charting_library/bundles/6494.4c212043f24336e170d5.rtl.css",
          revision: "90edca103f2788aeddc932f7abd78417",
        },
        {
          url: "/libraries/charting_library/bundles/6625.0ed88fc3a989c98408cc.css",
          revision: "a663a4c0cb5a06dec0ef6b413e6387f8",
        },
        {
          url: "/libraries/charting_library/bundles/6625.0ed88fc3a989c98408cc.rtl.css",
          revision: "be471ed594971c70572023b012151d8f",
        },
        {
          url: "/libraries/charting_library/bundles/6639.885b5577e3fb71ee2bea.css",
          revision: "8b713c695b490a55f6623e71bdc2f446",
        },
        {
          url: "/libraries/charting_library/bundles/6639.885b5577e3fb71ee2bea.rtl.css",
          revision: "8b713c695b490a55f6623e71bdc2f446",
        },
        {
          url: "/libraries/charting_library/bundles/6747.c7d403ae692f88568278.css",
          revision: "086a95012e6b3c82c52a6f97d5f8d172",
        },
        {
          url: "/libraries/charting_library/bundles/6747.c7d403ae692f88568278.rtl.css",
          revision: "a9f85e947799208e33712d740d69853b",
        },
        {
          url: "/libraries/charting_library/bundles/6752.207eb3cc75b3ed2c6754.css",
          revision: "3eddeef40e42e47a5b80696cf856409d",
        },
        {
          url: "/libraries/charting_library/bundles/6752.207eb3cc75b3ed2c6754.rtl.css",
          revision: "3eddeef40e42e47a5b80696cf856409d",
        },
        {
          url: "/libraries/charting_library/bundles/6884.bb7d30a7bbbe5af36556.css",
          revision: "16529ec6653682ecae2cec3a41980f59",
        },
        {
          url: "/libraries/charting_library/bundles/6884.bb7d30a7bbbe5af36556.rtl.css",
          revision: "865dd4a5317d725ac0276e00733bce7f",
        },
        {
          url: "/libraries/charting_library/bundles/6918.c8f3265e9286a784038b.js",
          revision: "6063d3647b482224c8fb41ec6c228151",
        },
        {
          url: "/libraries/charting_library/bundles/6925.a3a09d7303a96edb77cb.css",
          revision: "48d22f1fb6753c0fd7bb8f2831d6b2f6",
        },
        {
          url: "/libraries/charting_library/bundles/6925.a3a09d7303a96edb77cb.rtl.css",
          revision: "90256d95e97679bb2f2eeb31e707b434",
        },
        {
          url: "/libraries/charting_library/bundles/6949.19355e81a60b640ea097.css",
          revision: "452ed2e8d99dd976cf8e1f7f37ec5fbd",
        },
        {
          url: "/libraries/charting_library/bundles/6949.19355e81a60b640ea097.rtl.css",
          revision: "452ed2e8d99dd976cf8e1f7f37ec5fbd",
        },
        {
          url: "/libraries/charting_library/bundles/6985.2cd225354e2fd236e8e9.css",
          revision: "b73b903ea877ff44453f7f3744b514e5",
        },
        {
          url: "/libraries/charting_library/bundles/6985.2cd225354e2fd236e8e9.rtl.css",
          revision: "bb6514d72e9f8a6f672975a48378c850",
        },
        {
          url: "/libraries/charting_library/bundles/7051.cff4509091dbd0706ebe.js",
          revision: "d9b75ba6e204f0dfcc346fb96854cded",
        },
        {
          url: "/libraries/charting_library/bundles/7111.b16b4eb739a7e8577559.css",
          revision: "47f2bd41bc4006c77e34e0e18c712f85",
        },
        {
          url: "/libraries/charting_library/bundles/7111.b16b4eb739a7e8577559.rtl.css",
          revision: "2abe1c5ad0f5de764a8fc914ae9fc508",
        },
        {
          url: "/libraries/charting_library/bundles/7149.12adbb19fdefe9b66b18.css",
          revision: "7552ded6ed9c1fd96c0bb79ff5b9f322",
        },
        {
          url: "/libraries/charting_library/bundles/7149.12adbb19fdefe9b66b18.rtl.css",
          revision: "1911d032e55bcee90ddb0d5434255009",
        },
        {
          url: "/libraries/charting_library/bundles/7194.e04f69c8933166966874.css",
          revision: "9eb632a07ccb9782099bbf140e8c6764",
        },
        {
          url: "/libraries/charting_library/bundles/7194.e04f69c8933166966874.rtl.css",
          revision: "85c9a13143109aa2f038e32438424d75",
        },
        {
          url: "/libraries/charting_library/bundles/7350.00632eec360f0cf2d9a0.css",
          revision: "83eac52a1c1eaf87aea888c7bc68af8e",
        },
        {
          url: "/libraries/charting_library/bundles/7350.00632eec360f0cf2d9a0.rtl.css",
          revision: "822f9627a69abf98987f1bba5dc6bc5f",
        },
        {
          url: "/libraries/charting_library/bundles/7391.9c809fa91ed0c8f75bc0.css",
          revision: "231971025325b26ff1ea4f45683e6243",
        },
        {
          url: "/libraries/charting_library/bundles/7391.9c809fa91ed0c8f75bc0.rtl.css",
          revision: "231971025325b26ff1ea4f45683e6243",
        },
        {
          url: "/libraries/charting_library/bundles/7413.f830ad1ad6ee6f9b1cb3.css",
          revision: "0e3d9f9287ea88fe3ffedc09e6ebb46b",
        },
        {
          url: "/libraries/charting_library/bundles/7413.f830ad1ad6ee6f9b1cb3.rtl.css",
          revision: "0e3d9f9287ea88fe3ffedc09e6ebb46b",
        },
        {
          url: "/libraries/charting_library/bundles/750.e16edadfacd60574d861.js",
          revision: "fce0e787b3a780f5fbafb515a1353b50",
        },
        {
          url: "/libraries/charting_library/bundles/7550.087936b2aa6ea51cd6bf.js",
          revision: "adf0ba8b6a37d321233f70b69183e89b",
        },
        {
          url: "/libraries/charting_library/bundles/7555.8c1e3939e7666b0f8c69.css",
          revision: "0a88ba4f29ae0b0b4600c7f9613e40e3",
        },
        {
          url: "/libraries/charting_library/bundles/7555.8c1e3939e7666b0f8c69.rtl.css",
          revision: "299c1e43c4c313306d56e8c4949dc1af",
        },
        {
          url: "/libraries/charting_library/bundles/7663.6fabc58c7ddf7c2b076f.js",
          revision: "040cc00b7c2872748fa7227f65dee637",
        },
        {
          url: "/libraries/charting_library/bundles/7807.8577632fdab29ee53ddf.css",
          revision: "5cad8e0ddf70f7e7bd2c5b0f9c11a8dc",
        },
        {
          url: "/libraries/charting_library/bundles/7807.8577632fdab29ee53ddf.rtl.css",
          revision: "5cad8e0ddf70f7e7bd2c5b0f9c11a8dc",
        },
        {
          url: "/libraries/charting_library/bundles/7871.fff454908cba03863eb7.css",
          revision: "5fa4206b3100baddd11e56852e8bc223",
        },
        {
          url: "/libraries/charting_library/bundles/7871.fff454908cba03863eb7.rtl.css",
          revision: "d4975fcb3ac76ef6388551551601f694",
        },
        {
          url: "/libraries/charting_library/bundles/8056.1f54f717d8e522c55c89.css",
          revision: "cea3dc89719be4a627f4190fcb3b97bf",
        },
        {
          url: "/libraries/charting_library/bundles/8056.1f54f717d8e522c55c89.rtl.css",
          revision: "baddbf6e8969d9261f6b7d5996f211f6",
        },
        {
          url: "/libraries/charting_library/bundles/8149.21f2b01074a4d082e268.css",
          revision: "243daab147f04ebbe97732d2e57db384",
        },
        {
          url: "/libraries/charting_library/bundles/8149.21f2b01074a4d082e268.rtl.css",
          revision: "243daab147f04ebbe97732d2e57db384",
        },
        {
          url: "/libraries/charting_library/bundles/8167.3edae41386acc976c9f8.js",
          revision: "3bfb3a8db1ddb6f80c0cb6795a37d407",
        },
        {
          url: "/libraries/charting_library/bundles/826.2effba57f47544e58368.css",
          revision: "e75d16fe8cf8ec8bd6b713c6aa22fbbd",
        },
        {
          url: "/libraries/charting_library/bundles/826.2effba57f47544e58368.rtl.css",
          revision: "bfbcf8633dff940fadeb2c563cc9530e",
        },
        {
          url: "/libraries/charting_library/bundles/8287.2b6f71ec5c0064590ffd.css",
          revision: "9042699367469ca9c0d3466a190b73d8",
        },
        {
          url: "/libraries/charting_library/bundles/8287.2b6f71ec5c0064590ffd.rtl.css",
          revision: "55c0e09f434b9e8e5cf5519cc3bd6655",
        },
        {
          url: "/libraries/charting_library/bundles/8450.f75ab24e1ecb22d29183.css",
          revision: "a0340d87f1c132deb8ca3c355a45f8bc",
        },
        {
          url: "/libraries/charting_library/bundles/8450.f75ab24e1ecb22d29183.rtl.css",
          revision: "207dc2788dff474f490146c56e09faf8",
        },
        {
          url: "/libraries/charting_library/bundles/855.56a5e53c97d91a9f96f7.css",
          revision: "7c4a31ac8b6e98de51b72a3f016055df",
        },
        {
          url: "/libraries/charting_library/bundles/855.56a5e53c97d91a9f96f7.rtl.css",
          revision: "da0cc6037540dfd958e3c7b37ec619ad",
        },
        {
          url: "/libraries/charting_library/bundles/8882.9838a8b1e0e6766b6408.js",
          revision: "76635dbabc84a0f3868e494340553009",
        },
        {
          url: "/libraries/charting_library/bundles/8904.a302177fe7e3ccd50cb0.css",
          revision: "fc187caf131ad4f8784d542dc94d403b",
        },
        {
          url: "/libraries/charting_library/bundles/8904.a302177fe7e3ccd50cb0.rtl.css",
          revision: "33299959ff25ae6d99e18face582169f",
        },
        {
          url: "/libraries/charting_library/bundles/898.f909d7c1efc95f635922.css",
          revision: "9ae782be66d2509c0787b31c17a3cd39",
        },
        {
          url: "/libraries/charting_library/bundles/898.f909d7c1efc95f635922.rtl.css",
          revision: "ef304a1aee0109e9ba16ed3aaee353f7",
        },
        {
          url: "/libraries/charting_library/bundles/9138.03b8fbcfabcae851949a.css",
          revision: "cc77fc666eb10b482bdb0f539547ba5c",
        },
        {
          url: "/libraries/charting_library/bundles/9138.03b8fbcfabcae851949a.rtl.css",
          revision: "ce4f49f1d52205363d705e9d5dc4070f",
        },
        {
          url: "/libraries/charting_library/bundles/9327.97be240031495a68333f.css",
          revision: "bead547bd992052b527bef12d6f07598",
        },
        {
          url: "/libraries/charting_library/bundles/9327.97be240031495a68333f.rtl.css",
          revision: "261ee07bcb84e33fd508689ad82f350c",
        },
        {
          url: "/libraries/charting_library/bundles/9403.db9859ab09623682562c.css",
          revision: "e5dcca5f16c73ed4bae36b39fe348420",
        },
        {
          url: "/libraries/charting_library/bundles/9403.db9859ab09623682562c.rtl.css",
          revision: "467aa12060766c2db7fba0261ae21f60",
        },
        {
          url: "/libraries/charting_library/bundles/9465.fd61e82b3c912f2e9fad.css",
          revision: "b1c2541772973db9d16fe79cdbcb94df",
        },
        {
          url: "/libraries/charting_library/bundles/9465.fd61e82b3c912f2e9fad.rtl.css",
          revision: "0ab83ab731d66db410fb8361c7ddf27d",
        },
        {
          url: "/libraries/charting_library/bundles/956.1e89775cfd644d656c56.css",
          revision: "fa82d43944433b728e1c1eda071e698b",
        },
        {
          url: "/libraries/charting_library/bundles/956.1e89775cfd644d656c56.rtl.css",
          revision: "4802ac4bb93440a5e0e63026a7c6abf0",
        },
        {
          url: "/libraries/charting_library/bundles/962.9f54d549868e21286372.js",
          revision: "d9307083c2074b5d85d5d12a9202097f",
        },
        {
          url: "/libraries/charting_library/bundles/9789.cb5ad20bc727d3820b6c.css",
          revision: "4064ffc126ef625db00537bbdb29eee6",
        },
        {
          url: "/libraries/charting_library/bundles/9789.cb5ad20bc727d3820b6c.rtl.css",
          revision: "34b0e424d792e5e94e62fc301a47b437",
        },
        {
          url: "/libraries/charting_library/bundles/9842.ceaeabba258d065497c8.css",
          revision: "126942d3961aaaaebdb05287464c1493",
        },
        {
          url: "/libraries/charting_library/bundles/9842.ceaeabba258d065497c8.rtl.css",
          revision: "126942d3961aaaaebdb05287464c1493",
        },
        {
          url: "/libraries/charting_library/bundles/9916.60c48148a54dba9504a0.css",
          revision: "a19c9792416a16d634b43f7495395835",
        },
        {
          url: "/libraries/charting_library/bundles/9916.60c48148a54dba9504a0.rtl.css",
          revision: "ddb49a235845a30882f1593c8f846f21",
        },
        {
          url: "/libraries/charting_library/bundles/EuclidCircular.be8f862db48c2976009f.woff2",
          revision: "b1a63a011fd92dfb93db6db243bb036c",
        },
        {
          url: "/libraries/charting_library/bundles/add-compare-dialog.5039a5ac2f3556b18cb1.js",
          revision: "886623c1d311e398123c12031f1e8a4f",
        },
        {
          url: "/libraries/charting_library/bundles/ar.178.dd03c0163a8373c0fc5b.js",
          revision: "ae4d21e1062c6e47dd74aa46c709e686",
        },
        {
          url: "/libraries/charting_library/bundles/ar.2285.1268ecef367debd2960b.js",
          revision: "050b158b89fb783985cc3669c7e4531c",
        },
        {
          url: "/libraries/charting_library/bundles/ar.2547.28b713bedf796244795d.js",
          revision: "4064d5ff86491b37c6408dc2b47b1d76",
        },
        {
          url: "/libraries/charting_library/bundles/ar.2578.ab3178e0160c259eac53.js",
          revision: "1ac70283b2eae40ec142ae7ed8282376",
        },
        {
          url: "/libraries/charting_library/bundles/ar.3175.e0a2c845c5cba23f42fb.js",
          revision: "770db0016f4dde445ed3779625b86e46",
        },
        {
          url: "/libraries/charting_library/bundles/ar.3236.e12bb9a536432e97ec0c.js",
          revision: "28dda1530d74af7d00362760a9d208ba",
        },
        {
          url: "/libraries/charting_library/bundles/ar.344.a9e566fa1091368f40c7.js",
          revision: "417d585391d89ca3a64daa004f51f6be",
        },
        {
          url: "/libraries/charting_library/bundles/ar.3951.babac9be598102fb0d92.js",
          revision: "9e3afe8f6ce9fd70931f6e4cfa86f40c",
        },
        {
          url: "/libraries/charting_library/bundles/ar.4716.e4ac74dfc9ec5374b00c.js",
          revision: "75a7b5aae96a1f5dbdbcb0bf16306dfb",
        },
        {
          url: "/libraries/charting_library/bundles/ar.5362.311bfba5d2c84b13ec2b.js",
          revision: "bff69f384e77e69739fd58ace4d83c31",
        },
        {
          url: "/libraries/charting_library/bundles/ar.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "47093b27909deeb7848219cfb2a43733",
        },
        {
          url: "/libraries/charting_library/bundles/ar.9417.7ff64779d43389a1bb41.js",
          revision: "5b3a1ad389a9504df93515e0bebbd911",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.178.dd03c0163a8373c0fc5b.js",
          revision: "5f0f4590a1a20dd987b4ec2dc658aad0",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.2285.1268ecef367debd2960b.js",
          revision: "da49c27923f6ba3532a1a13ddd7a42ae",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.2547.28b713bedf796244795d.js",
          revision: "c522844d2899ea17c9e0f11d6350338c",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.2578.ab3178e0160c259eac53.js",
          revision: "6f76b9b3c2188db31edd5c0e25093269",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.3175.e0a2c845c5cba23f42fb.js",
          revision: "fc35caa31ef8918637f046c33de3d9c0",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.3236.e12bb9a536432e97ec0c.js",
          revision: "447cbc55a0c4aeec182f27576692d1b0",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.344.a9e566fa1091368f40c7.js",
          revision: "037e0170f8a528e23feb9a36dada1421",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.3951.babac9be598102fb0d92.js",
          revision: "98cf7611f33b5e18086e263912ef87ef",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.4716.e4ac74dfc9ec5374b00c.js",
          revision: "9d9ce47e370a7481cbdbe74cff8c8e61",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.5362.311bfba5d2c84b13ec2b.js",
          revision: "cc2e0f9e677ea852094718df6dadea0f",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "253e3aa192ffc855135ebf20f0e33407",
        },
        {
          url: "/libraries/charting_library/bundles/ca_ES.9417.7ff64779d43389a1bb41.js",
          revision: "9fad08a041ef870c2e56955d163f7682",
        },
        {
          url: "/libraries/charting_library/bundles/change-interval-dialog.ebdeefbf84f9e033ed5b.js",
          revision: "9bbbbafc3731970a3eb29a24eedf2fa4",
        },
        {
          url: "/libraries/charting_library/bundles/chart-bottom-toolbar.6826612f0a41ab0fc35c.js",
          revision: "08c095ee53251be845ab2c362680939a",
        },
        {
          url: "/libraries/charting_library/bundles/chart-event-hint.9fb712c61440c609af69.js",
          revision: "82418cf4dcba3925069ccc4ec641068c",
        },
        {
          url: "/libraries/charting_library/bundles/chart-screenshot-hint.795900ef9e075c847a64.js",
          revision: "24b0bc90abdd09e11d21a352cb89f25e",
        },
        {
          url: "/libraries/charting_library/bundles/chart-storage-external-adapter.9c1267d07e48b8d8f53f.js",
          revision: "6e40c9ac20dd1f5cdc8c175915d00e53",
        },
        {
          url: "/libraries/charting_library/bundles/chart-storage-library-http.f1f53155460ee314f062.js",
          revision: "79573892e64b7b17af2ebc67967117a9",
        },
        {
          url: "/libraries/charting_library/bundles/chart-widget-gui.75a373be3b6816e8b55a.js",
          revision: "5bfcd4cfdd3b6145e0f9b36d018e6399",
        },
        {
          url: "/libraries/charting_library/bundles/compare-model.f7e796a37129a93179ee.js",
          revision: "00c4ee3b1b58e128ddd1960f0fa2138a",
        },
        {
          url: "/libraries/charting_library/bundles/context-menu-renderer.4170e3d150582097504c.js",
          revision: "a6f82841fd835aa0f71c438aab59ea39",
        },
        {
          url: "/libraries/charting_library/bundles/cs.178.dd03c0163a8373c0fc5b.js",
          revision: "fa6a459833cc5efb6be2f17b806c9a0f",
        },
        {
          url: "/libraries/charting_library/bundles/cs.2285.1268ecef367debd2960b.js",
          revision: "b8588c54a29ad914a404dfd67ff7aa43",
        },
        {
          url: "/libraries/charting_library/bundles/cs.2547.28b713bedf796244795d.js",
          revision: "9a77a13392a33edc6dcde7dfad39167f",
        },
        {
          url: "/libraries/charting_library/bundles/cs.2578.ab3178e0160c259eac53.js",
          revision: "15316309149a99245971d6d40587fd8d",
        },
        {
          url: "/libraries/charting_library/bundles/cs.3175.e0a2c845c5cba23f42fb.js",
          revision: "3fc27ffc38a3ebacea919c6edd8bdf4e",
        },
        {
          url: "/libraries/charting_library/bundles/cs.3236.e12bb9a536432e97ec0c.js",
          revision: "0f4564c451ad7a387c794c9cf3ba247b",
        },
        {
          url: "/libraries/charting_library/bundles/cs.344.a9e566fa1091368f40c7.js",
          revision: "68e8b8e2a88ac97cb38adc6b401c9284",
        },
        {
          url: "/libraries/charting_library/bundles/cs.3951.babac9be598102fb0d92.js",
          revision: "0339a775f8e5b2ac6abca2d9adc4794b",
        },
        {
          url: "/libraries/charting_library/bundles/cs.4716.e4ac74dfc9ec5374b00c.js",
          revision: "ad3bbc49c4f5e9beaa0a30ad1418d721",
        },
        {
          url: "/libraries/charting_library/bundles/cs.5362.311bfba5d2c84b13ec2b.js",
          revision: "e7e2bac3b434d18ca0fca0ce48b0ed91",
        },
        {
          url: "/libraries/charting_library/bundles/cs.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "74e1c279b2ed55db2758544ce9774994",
        },
        {
          url: "/libraries/charting_library/bundles/cs.9417.7ff64779d43389a1bb41.js",
          revision: "c2879a730a06680c0bb1d737671bc624",
        },
        {
          url: "/libraries/charting_library/bundles/currency-label-menu.8bac01cc43d3f2cbf903.js",
          revision: "381856c3439a28a03a22f16448dab606",
        },
        {
          url: "/libraries/charting_library/bundles/custom-intervals-add-dialog.1aa54900370f7317d3f0.js",
          revision: "25578a97d62ab8639021817e67f30e47",
        },
        {
          url: "/libraries/charting_library/bundles/de.178.dd03c0163a8373c0fc5b.js",
          revision: "87903fc7bcdf8f527ad4ef5739bb00ff",
        },
        {
          url: "/libraries/charting_library/bundles/de.2285.1268ecef367debd2960b.js",
          revision: "e73c10a08162ac86a49f32b837528c7f",
        },
        {
          url: "/libraries/charting_library/bundles/de.2547.28b713bedf796244795d.js",
          revision: "d798a4dfaed79c51899e66b1547e95fb",
        },
        {
          url: "/libraries/charting_library/bundles/de.2578.ab3178e0160c259eac53.js",
          revision: "5767f145977231cea3caf06eea4bce50",
        },
        {
          url: "/libraries/charting_library/bundles/de.3175.e0a2c845c5cba23f42fb.js",
          revision: "67b0edef32d0eb770892082397b849db",
        },
        {
          url: "/libraries/charting_library/bundles/de.3236.e12bb9a536432e97ec0c.js",
          revision: "dbd0e706c3be4c48844071b6acf7113f",
        },
        {
          url: "/libraries/charting_library/bundles/de.344.a9e566fa1091368f40c7.js",
          revision: "b4e02e3afe393b239e99970b7b639223",
        },
        {
          url: "/libraries/charting_library/bundles/de.3951.babac9be598102fb0d92.js",
          revision: "f2392e412a48d69e7298680e7b5b7e1b",
        },
        {
          url: "/libraries/charting_library/bundles/de.4716.e4ac74dfc9ec5374b00c.js",
          revision: "a63a965d40bfa08a01d7607639474645",
        },
        {
          url: "/libraries/charting_library/bundles/de.5362.311bfba5d2c84b13ec2b.js",
          revision: "c4a805bd7aeead4f72854ea2f5845304",
        },
        {
          url: "/libraries/charting_library/bundles/de.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "e87b34a2378228587f2b1b2bbf6e85f4",
        },
        {
          url: "/libraries/charting_library/bundles/de.9417.7ff64779d43389a1bb41.js",
          revision: "0fefebb25df7c65a4bd213ef15a8a5f5",
        },
        {
          url: "/libraries/charting_library/bundles/dot.3d617b6b01edba83a7f4.cur",
          revision: "ed68e83c16f77203e73dbc4c3a7c7fa1",
        },
        {
          url: "/libraries/charting_library/bundles/drawing-toolbar.37a00c1b0c7a68cc1d44.js",
          revision: "853938911ef8d4b61bbe9a4b30291919",
        },
        {
          url: "/libraries/charting_library/bundles/el.178.dd03c0163a8373c0fc5b.js",
          revision: "6d40bf3e1347aeb3257c0fcf1a3e7428",
        },
        {
          url: "/libraries/charting_library/bundles/el.2285.1268ecef367debd2960b.js",
          revision: "38587703427ccb4548738418b0774a67",
        },
        {
          url: "/libraries/charting_library/bundles/el.2547.28b713bedf796244795d.js",
          revision: "e05072c6beead249a4c9648d71bd906d",
        },
        {
          url: "/libraries/charting_library/bundles/el.2578.ab3178e0160c259eac53.js",
          revision: "4a58cf41aa5bdcdda9ac84596a4c4b52",
        },
        {
          url: "/libraries/charting_library/bundles/el.3175.e0a2c845c5cba23f42fb.js",
          revision: "344432c421fb9d00c63c1b9b700820bc",
        },
        {
          url: "/libraries/charting_library/bundles/el.3236.e12bb9a536432e97ec0c.js",
          revision: "44e82537fa3365217db05dd73b5363f3",
        },
        {
          url: "/libraries/charting_library/bundles/el.344.a9e566fa1091368f40c7.js",
          revision: "0954c4b6ae274dfdbe654b0fdb493c9f",
        },
        {
          url: "/libraries/charting_library/bundles/el.3951.babac9be598102fb0d92.js",
          revision: "0b239800a3119a580f3232bd5fba957d",
        },
        {
          url: "/libraries/charting_library/bundles/el.4716.e4ac74dfc9ec5374b00c.js",
          revision: "42a1c994e4b43b5f9f981e92039df0cf",
        },
        {
          url: "/libraries/charting_library/bundles/el.5362.311bfba5d2c84b13ec2b.js",
          revision: "b589cfe4784d82faf936819030de4b0d",
        },
        {
          url: "/libraries/charting_library/bundles/el.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "f708f5aeff4b11ac32cad779adbc34bc",
        },
        {
          url: "/libraries/charting_library/bundles/el.9417.7ff64779d43389a1bb41.js",
          revision: "7a1fa1ebfe52cdbc4073caded73b5cb6",
        },
        {
          url: "/libraries/charting_library/bundles/en.178.dd03c0163a8373c0fc5b.js",
          revision: "f50773dbdaf79f9ab6f8229444d77f09",
        },
        {
          url: "/libraries/charting_library/bundles/en.2285.1268ecef367debd2960b.js",
          revision: "1d412c3534da22d0279452a4f68f88a5",
        },
        {
          url: "/libraries/charting_library/bundles/en.2547.28b713bedf796244795d.js",
          revision: "18e43be379b579120bee595c3592a828",
        },
        {
          url: "/libraries/charting_library/bundles/en.2578.ab3178e0160c259eac53.js",
          revision: "073826a5578966715f302285acc0253e",
        },
        {
          url: "/libraries/charting_library/bundles/en.3175.e0a2c845c5cba23f42fb.js",
          revision: "6a3b2f7ebe04d35aebfff34e8e321ad2",
        },
        {
          url: "/libraries/charting_library/bundles/en.3236.e12bb9a536432e97ec0c.js",
          revision: "50b10f5cce00b8301e12ea6301da8ce8",
        },
        {
          url: "/libraries/charting_library/bundles/en.344.a9e566fa1091368f40c7.js",
          revision: "37db00dce16e0dd8a3371fdc752bbe5f",
        },
        {
          url: "/libraries/charting_library/bundles/en.3951.babac9be598102fb0d92.js",
          revision: "ea8dd88375b836860681a1201c5c1631",
        },
        {
          url: "/libraries/charting_library/bundles/en.4716.e4ac74dfc9ec5374b00c.js",
          revision: "36da33f26c28b8d3b4cb98172fdb5254",
        },
        {
          url: "/libraries/charting_library/bundles/en.5362.311bfba5d2c84b13ec2b.js",
          revision: "d6ad4e0eca6f2d39c94713ecce3bcd8e",
        },
        {
          url: "/libraries/charting_library/bundles/en.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "66a28666c8d63749b6d882729ecdfd18",
        },
        {
          url: "/libraries/charting_library/bundles/en.9417.7ff64779d43389a1bb41.js",
          revision: "52db2927b7a454aedcaaa029e6bd758c",
        },
        {
          url: "/libraries/charting_library/bundles/eraser.c80610a04a92d2465b03.cur",
          revision: "0579d40b812fa2c3ffe72e5803a6e14c",
        },
        {
          url: "/libraries/charting_library/bundles/es.178.dd03c0163a8373c0fc5b.js",
          revision: "b274dc6b88345132d28e1ca2b36bd5a4",
        },
        {
          url: "/libraries/charting_library/bundles/es.2285.1268ecef367debd2960b.js",
          revision: "41ff34f0edca7378e2c8de4635c20944",
        },
        {
          url: "/libraries/charting_library/bundles/es.2547.28b713bedf796244795d.js",
          revision: "83f8305ca46dc4fb474bcba2f689e83b",
        },
        {
          url: "/libraries/charting_library/bundles/es.2578.ab3178e0160c259eac53.js",
          revision: "6cc96edf4d336ffa866302bc13b6b9eb",
        },
        {
          url: "/libraries/charting_library/bundles/es.3175.e0a2c845c5cba23f42fb.js",
          revision: "2c80bb600773be1dcefe5c491e24e390",
        },
        {
          url: "/libraries/charting_library/bundles/es.3236.e12bb9a536432e97ec0c.js",
          revision: "3001f14fa6ba39f0ac4d6eb7710fa766",
        },
        {
          url: "/libraries/charting_library/bundles/es.344.a9e566fa1091368f40c7.js",
          revision: "fc7e31d10f71480edbe9354644e7657c",
        },
        {
          url: "/libraries/charting_library/bundles/es.3951.babac9be598102fb0d92.js",
          revision: "055d6a14411d808c94e6e6c89fd8e047",
        },
        {
          url: "/libraries/charting_library/bundles/es.4716.e4ac74dfc9ec5374b00c.js",
          revision: "46a70f4710250d47dfdb1efa4374ddea",
        },
        {
          url: "/libraries/charting_library/bundles/es.5362.311bfba5d2c84b13ec2b.js",
          revision: "62bbb45f9da629129fc1cadc6160e000",
        },
        {
          url: "/libraries/charting_library/bundles/es.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "ba71008da33821bf76df4b6b37d0937d",
        },
        {
          url: "/libraries/charting_library/bundles/es.9417.7ff64779d43389a1bb41.js",
          revision: "7a97879ec943f63a3dc6015d78534fe0",
        },
        {
          url: "/libraries/charting_library/bundles/export-data.f43b3c60275506b2198a.js",
          revision: "238398379092ec263c12dd5674a8269c",
        },
        {
          url: "/libraries/charting_library/bundles/fa.178.dd03c0163a8373c0fc5b.js",
          revision: "c5563f0d8d5cc86e49a85692a5df9680",
        },
        {
          url: "/libraries/charting_library/bundles/fa.2285.1268ecef367debd2960b.js",
          revision: "ecbb2e60d42ba9783a887dab183bc496",
        },
        {
          url: "/libraries/charting_library/bundles/fa.2547.28b713bedf796244795d.js",
          revision: "b5f0b6a084051aaab37e3e2417288d4d",
        },
        {
          url: "/libraries/charting_library/bundles/fa.2578.ab3178e0160c259eac53.js",
          revision: "267002d07d2bbf740b874ae94352ce40",
        },
        {
          url: "/libraries/charting_library/bundles/fa.3175.e0a2c845c5cba23f42fb.js",
          revision: "0094cf934ae5a7205ff0cbc168c0f5ef",
        },
        {
          url: "/libraries/charting_library/bundles/fa.3236.e12bb9a536432e97ec0c.js",
          revision: "9ecf3d54f9d12ee18e690c86437c202e",
        },
        {
          url: "/libraries/charting_library/bundles/fa.344.a9e566fa1091368f40c7.js",
          revision: "02f0691d076242b1a82183a9ae9d1bf0",
        },
        {
          url: "/libraries/charting_library/bundles/fa.3951.babac9be598102fb0d92.js",
          revision: "06dc797d9c3a6493171728e789fede62",
        },
        {
          url: "/libraries/charting_library/bundles/fa.4716.e4ac74dfc9ec5374b00c.js",
          revision: "04a461fb41717dbf1003c5f5af36873b",
        },
        {
          url: "/libraries/charting_library/bundles/fa.5362.311bfba5d2c84b13ec2b.js",
          revision: "bf5f804dfbabeaa8a5ad3b86cff68adb",
        },
        {
          url: "/libraries/charting_library/bundles/fa.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "44fe13d1916269ae88d74798f655a1e7",
        },
        {
          url: "/libraries/charting_library/bundles/fa.9417.7ff64779d43389a1bb41.js",
          revision: "50742c911de49e4a4be9eafece31aa47",
        },
        {
          url: "/libraries/charting_library/bundles/favorite-drawings-api.340e60e2342b0d93ebe7.js",
          revision: "d87fbcbeb13cd6d1856019ffc9370fe2",
        },
        {
          url: "/libraries/charting_library/bundles/floating-toolbars.96ac7a46b7738535bc92.js",
          revision: "9a3315fdf7f7699d0860f8a0fcee3e6f",
        },
        {
          url: "/libraries/charting_library/bundles/fr.178.dd03c0163a8373c0fc5b.js",
          revision: "234ae230e1b20b4aa9358ae8b93973a5",
        },
        {
          url: "/libraries/charting_library/bundles/fr.2285.1268ecef367debd2960b.js",
          revision: "cf6831543d187572aad8065a5efaf872",
        },
        {
          url: "/libraries/charting_library/bundles/fr.2547.28b713bedf796244795d.js",
          revision: "0a8cbdd489c92b7a434c270baf3c190f",
        },
        {
          url: "/libraries/charting_library/bundles/fr.2578.ab3178e0160c259eac53.js",
          revision: "8d52f22a44c63997a6728a56753c6f57",
        },
        {
          url: "/libraries/charting_library/bundles/fr.3175.e0a2c845c5cba23f42fb.js",
          revision: "b223518b189880456b71ce9eb755e8ef",
        },
        {
          url: "/libraries/charting_library/bundles/fr.3236.e12bb9a536432e97ec0c.js",
          revision: "8767deea44eb5c4f381eb16c2148de97",
        },
        {
          url: "/libraries/charting_library/bundles/fr.344.a9e566fa1091368f40c7.js",
          revision: "af146e148009c4040a1845bd3cd465ca",
        },
        {
          url: "/libraries/charting_library/bundles/fr.3951.babac9be598102fb0d92.js",
          revision: "3a4241f38f3696e7496ba67e0f669ff5",
        },
        {
          url: "/libraries/charting_library/bundles/fr.4716.e4ac74dfc9ec5374b00c.js",
          revision: "06a81a408014a7ac48d32c2fd9a4fb87",
        },
        {
          url: "/libraries/charting_library/bundles/fr.5362.311bfba5d2c84b13ec2b.js",
          revision: "203b8ed87b73e43443d576f89e34b327",
        },
        {
          url: "/libraries/charting_library/bundles/fr.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "4e7545189954389d153537952b7489d9",
        },
        {
          url: "/libraries/charting_library/bundles/fr.9417.7ff64779d43389a1bb41.js",
          revision: "33fdb18dba7feae2093e9e85f411eb7d",
        },
        {
          url: "/libraries/charting_library/bundles/full-tooltips-popup.3a92633d0497afb5344c.js",
          revision: "bd05d371aec2c1494ea3c8904bf6dce4",
        },
        {
          url: "/libraries/charting_library/bundles/general-chart-properties-dialog.cddce4ed266fd9e0629e.js",
          revision: "ec1956f5cd7603049795b806f9d798df",
        },
        {
          url: "/libraries/charting_library/bundles/general-property-page.e4f9354142134a911ace.js",
          revision: "a84367fe6ff7d71ba75243db3975498b",
        },
        {
          url: "/libraries/charting_library/bundles/get-error-card.83ba0cba4c0538851e0a.js",
          revision: "1ae31af539c1b96b3f26eee5e507357d",
        },
        {
          url: "/libraries/charting_library/bundles/global-search-dialog.91018047180ff0d9e40b.js",
          revision: "c3ca2b97fa259af34b00581b22dcdf5e",
        },
        {
          url: "/libraries/charting_library/bundles/go-to-date-dialog-impl.851f6bf2bf36fe8fbac4.js",
          revision: "49e7332425d9d31385201e8b3da52965",
        },
        {
          url: "/libraries/charting_library/bundles/hammerjs.6e30e0c48af40bf2f6c0.js",
          revision: "99277baa3e7fdae781a4fa1ce7c05bef",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.178.dd03c0163a8373c0fc5b.js",
          revision: "a025237ab16e3c0a2a92dc6e55aa8f99",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.2285.1268ecef367debd2960b.js",
          revision: "a6bd99789b03bd8ef3629c570915aa5a",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.2547.28b713bedf796244795d.js",
          revision: "165b18fe954ee64db3ffe400232444b7",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.2578.ab3178e0160c259eac53.js",
          revision: "52d9b4bb01fe609c5e786a9e71fbf60b",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.3175.e0a2c845c5cba23f42fb.js",
          revision: "b8f0acf0aba3e537c2075d4f5e02f2ce",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.3236.e12bb9a536432e97ec0c.js",
          revision: "940a0406abcb79646d49a312048d98ec",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.344.a9e566fa1091368f40c7.js",
          revision: "2d17e7fca8e844eaecdf2ed79a464af7",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.3951.babac9be598102fb0d92.js",
          revision: "e9602582928c30caa3a67be7d535e626",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.4716.e4ac74dfc9ec5374b00c.js",
          revision: "9be4a649f08767317b2a07340edcba2c",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.5362.311bfba5d2c84b13ec2b.js",
          revision: "0570704b9a7b503102e7fc40177e05ab",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "d1b511d328976f3c0f9e517c710695b7",
        },
        {
          url: "/libraries/charting_library/bundles/he_IL.9417.7ff64779d43389a1bb41.js",
          revision: "eab94625308125a9dc216d75c55db2bc",
        },
        {
          url: "/libraries/charting_library/bundles/header-toolbar.df1a95078c18a5da785c.js",
          revision: "61c5014de0cbd0e31822a2cb6c2e2cf2",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.178.dd03c0163a8373c0fc5b.js",
          revision: "0416abc52abef21ee7120c6bef7e0032",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.2285.1268ecef367debd2960b.js",
          revision: "313594eb5690af386aded7d0c4b0a2c5",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.2547.28b713bedf796244795d.js",
          revision: "1f92752a496f5ad6d47d187686201cab",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.2578.ab3178e0160c259eac53.js",
          revision: "95326eb7cacebd40128f4f56f78e3f12",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.3175.e0a2c845c5cba23f42fb.js",
          revision: "b74f38a1aa6272f9840a29d70b1d6685",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.3236.e12bb9a536432e97ec0c.js",
          revision: "7d8632eb65584b31a30dbc4bdf83834f",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.344.a9e566fa1091368f40c7.js",
          revision: "06e7aefbeffab69fe99ce949b3656a8d",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.3951.babac9be598102fb0d92.js",
          revision: "151e3b94dfb4e8a48f6c34a383bd80cb",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.4716.e4ac74dfc9ec5374b00c.js",
          revision: "ae66cc28539a37b4f347b28eb8dfd8d9",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.5362.311bfba5d2c84b13ec2b.js",
          revision: "c9a44d24692f776fd54015926182aec9",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "58301c131e1396a32b89c648169aef1d",
        },
        {
          url: "/libraries/charting_library/bundles/hu_HU.9417.7ff64779d43389a1bb41.js",
          revision: "bfcbca7d30d4c54eda4a748fa0a5d7d5",
        },
        {
          url: "/libraries/charting_library/bundles/ichart-storage.1144e5a1b4f8503ee572.js",
          revision: "9a58f59cae33caa5b5ed13df9128d447",
        },
        {
          url: "/libraries/charting_library/bundles/icons.4d39018d0766cf7006bc.png",
          revision: "1df47f578aeef40dd1f2328338a133be",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.178.dd03c0163a8373c0fc5b.js",
          revision: "f9e00dde623afcb218ec4a5174602c26",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.2285.1268ecef367debd2960b.js",
          revision: "139f33a7989359fe3f852fd77fd32058",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.2547.28b713bedf796244795d.js",
          revision: "bad26783faa08154df564f51031e698f",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.2578.ab3178e0160c259eac53.js",
          revision: "4c66b7a81b91f2050c8f3a11fd60bf5a",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.3175.e0a2c845c5cba23f42fb.js",
          revision: "c5177264651ef081fde20a97772a57e2",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.3236.e12bb9a536432e97ec0c.js",
          revision: "a2d4de6d9746523cd2cc784c12417f81",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.344.a9e566fa1091368f40c7.js",
          revision: "9efbaa00b62e9058cdbebb5cf41cdd13",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.3951.babac9be598102fb0d92.js",
          revision: "9886ce16699f62cd14a62d7fb31277db",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.4716.e4ac74dfc9ec5374b00c.js",
          revision: "548b7591797e38340719eadece4cb7e9",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.5362.311bfba5d2c84b13ec2b.js",
          revision: "2c8d1762edd21756ee5d2767d8d77fc2",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "a9a7ceb7b48680393afb4e96f99f7e75",
        },
        {
          url: "/libraries/charting_library/bundles/id_ID.9417.7ff64779d43389a1bb41.js",
          revision: "2d241a0d60a4bb2594da8de2ee03676a",
        },
        {
          url: "/libraries/charting_library/bundles/it.178.dd03c0163a8373c0fc5b.js",
          revision: "9526be3c54dae450aea82e5ebb755450",
        },
        {
          url: "/libraries/charting_library/bundles/it.2285.1268ecef367debd2960b.js",
          revision: "fcb8e2971b0942eec8ab7f50dc83ac32",
        },
        {
          url: "/libraries/charting_library/bundles/it.2547.28b713bedf796244795d.js",
          revision: "bbb3ccafaba8f8992984d0a83ceaf169",
        },
        {
          url: "/libraries/charting_library/bundles/it.2578.ab3178e0160c259eac53.js",
          revision: "840181e80a037c741bc879bd0742af29",
        },
        {
          url: "/libraries/charting_library/bundles/it.3175.e0a2c845c5cba23f42fb.js",
          revision: "89e2f56682e3a6c6d155ba19c31bae44",
        },
        {
          url: "/libraries/charting_library/bundles/it.3236.e12bb9a536432e97ec0c.js",
          revision: "53c5332974fc85e8ed22be11b3cae3ec",
        },
        {
          url: "/libraries/charting_library/bundles/it.344.a9e566fa1091368f40c7.js",
          revision: "32b03f5b7ec8826c9d259d62e994ffab",
        },
        {
          url: "/libraries/charting_library/bundles/it.3951.babac9be598102fb0d92.js",
          revision: "79dbc2b7d97fa565463afe1628f7b10b",
        },
        {
          url: "/libraries/charting_library/bundles/it.4716.e4ac74dfc9ec5374b00c.js",
          revision: "a26d7adcc9e8cbd5d9c2f72a3c418433",
        },
        {
          url: "/libraries/charting_library/bundles/it.5362.311bfba5d2c84b13ec2b.js",
          revision: "39dbc3fba2bfb7cc8505ed42fa99b833",
        },
        {
          url: "/libraries/charting_library/bundles/it.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "f67717f2183595bc067a40e6d907b016",
        },
        {
          url: "/libraries/charting_library/bundles/it.9417.7ff64779d43389a1bb41.js",
          revision: "f126fce0c6c92623b4c2470b7f8b445e",
        },
        {
          url: "/libraries/charting_library/bundles/ja.178.dd03c0163a8373c0fc5b.js",
          revision: "9710ecb5f8200e4c94021c19521e4dc4",
        },
        {
          url: "/libraries/charting_library/bundles/ja.2285.1268ecef367debd2960b.js",
          revision: "26b9f2890877b9d2de16d049a16c9898",
        },
        {
          url: "/libraries/charting_library/bundles/ja.2547.28b713bedf796244795d.js",
          revision: "57f25297aafcb0a0bd5745e4f24059b9",
        },
        {
          url: "/libraries/charting_library/bundles/ja.2578.ab3178e0160c259eac53.js",
          revision: "a367af63f9516823c5a210a2cdca6150",
        },
        {
          url: "/libraries/charting_library/bundles/ja.3175.e0a2c845c5cba23f42fb.js",
          revision: "b152780819f02c598abcd0a4e4839e50",
        },
        {
          url: "/libraries/charting_library/bundles/ja.3236.e12bb9a536432e97ec0c.js",
          revision: "8297ad1e2e062e736f3bfcefeca90241",
        },
        {
          url: "/libraries/charting_library/bundles/ja.344.a9e566fa1091368f40c7.js",
          revision: "9845d9e423fafb4d4307254415c2e376",
        },
        {
          url: "/libraries/charting_library/bundles/ja.3951.babac9be598102fb0d92.js",
          revision: "2817050d4a916363a960481e4d3bc8e9",
        },
        {
          url: "/libraries/charting_library/bundles/ja.4716.e4ac74dfc9ec5374b00c.js",
          revision: "8ad65efac904d8557764236c00b4772d",
        },
        {
          url: "/libraries/charting_library/bundles/ja.5362.311bfba5d2c84b13ec2b.js",
          revision: "84da838113872a6597ea062548d76518",
        },
        {
          url: "/libraries/charting_library/bundles/ja.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "df5a78db5874234cbc0c6754b2b496e8",
        },
        {
          url: "/libraries/charting_library/bundles/ja.9417.7ff64779d43389a1bb41.js",
          revision: "947e36de8d3cd05e688519e0e7f79bfb",
        },
        {
          url: "/libraries/charting_library/bundles/ko.178.dd03c0163a8373c0fc5b.js",
          revision: "d7abd43fd480afcd8e592a4aa0cb39f0",
        },
        {
          url: "/libraries/charting_library/bundles/ko.2285.1268ecef367debd2960b.js",
          revision: "91a6e03926304a9372af07e3ed6a795c",
        },
        {
          url: "/libraries/charting_library/bundles/ko.2547.28b713bedf796244795d.js",
          revision: "54c56d607774037c05e328476bbd325c",
        },
        {
          url: "/libraries/charting_library/bundles/ko.2578.ab3178e0160c259eac53.js",
          revision: "d72acfbfdf90a7d093378b14a8582a0a",
        },
        {
          url: "/libraries/charting_library/bundles/ko.3175.e0a2c845c5cba23f42fb.js",
          revision: "98dc609fcb761b950b2aaa637154eb33",
        },
        {
          url: "/libraries/charting_library/bundles/ko.3236.e12bb9a536432e97ec0c.js",
          revision: "7d16be56b7ac52f5a5ea04fd0a9153f9",
        },
        {
          url: "/libraries/charting_library/bundles/ko.344.a9e566fa1091368f40c7.js",
          revision: "7340696fad91e5b29024330fafff7713",
        },
        {
          url: "/libraries/charting_library/bundles/ko.3951.babac9be598102fb0d92.js",
          revision: "5e3e9584463959e5a9280c835146f2c0",
        },
        {
          url: "/libraries/charting_library/bundles/ko.4716.e4ac74dfc9ec5374b00c.js",
          revision: "c24cf61350818d20530dfef2a65e618f",
        },
        {
          url: "/libraries/charting_library/bundles/ko.5362.311bfba5d2c84b13ec2b.js",
          revision: "9027d11a810a0e40e119bba19387c9c2",
        },
        {
          url: "/libraries/charting_library/bundles/ko.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "53e95c5acf241a73e8c776f0553f0bda",
        },
        {
          url: "/libraries/charting_library/bundles/ko.9417.7ff64779d43389a1bb41.js",
          revision: "99af809b640029b675c29dc8eb4a4b76",
        },
        {
          url: "/libraries/charting_library/bundles/large-slider-handle.18e9ee5923db4eac2c43.svg",
          revision: "40566afd832a155e5e370a8bd423de4b",
        },
        {
          url: "/libraries/charting_library/bundles/library.97ddeff81f861d17f06e.js",
          revision: "25a5565ce25b0c53ba12b194970430d4",
        },
        {
          url: "/libraries/charting_library/bundles/line-tools-icons.ecc8d3a4af49afed6b6d.js",
          revision: "7a3b85b46ff76a5bec7b5012a4f415b9",
        },
        {
          url: "/libraries/charting_library/bundles/line-tools-synchronizer.0bc2d3617dda7143f094.js",
          revision: "0e8fd6443922829ed8cadf32374fb9c5",
        },
        {
          url: "/libraries/charting_library/bundles/linewidth-slider.8e3d0520d28ce8259ccf.png",
          revision: "4a9abefd31dab7c8239e02e925aacd78",
        },
        {
          url: "/libraries/charting_library/bundles/load-chart-dialog.9a37c608b4849a6f8a11.js",
          revision: "454798a488c312749a0d333b3063568f",
        },
        {
          url: "/libraries/charting_library/bundles/lollipop-tooltip-renderer.19bbb3fc39665da2e3e6.js",
          revision: "5f67bac3f05147d9a91d9bd9ca518be1",
        },
        {
          url: "/libraries/charting_library/bundles/lt-icons-atlas.5d7c9d668ac98bd5bce1.js",
          revision: "970e46944c98a8e42f2d29d9eea507a6",
        },
        {
          url: "/libraries/charting_library/bundles/lt-pane-views.077de067da0763f84cb2.js",
          revision: "ede1f5759e09f9d8cd73eaf40f07c846",
        },
        {
          url: "/libraries/charting_library/bundles/lt-property-pages-with-definitions.ae758430950906d90d11.js",
          revision: "b5f6cfe8ba06858aff712ca0c868cbf7",
        },
        {
          url: "/libraries/charting_library/bundles/lt-stickers-atlas.52ad6e6d7d7b134ab0ba.js",
          revision: "1b516c270ad9e7eb604305034816d910",
        },
        {
          url: "/libraries/charting_library/bundles/manage-drawings-dialog.5f8ccee744105adf029e.js",
          revision: "b7626c8c2a6a833c786577e5e4a56501",
        },
        {
          url: "/libraries/charting_library/bundles/mock-dark.16b5f3a431f502b03ae3.svg",
          revision: "aca94e827472fdbe847af7982d2e10f1",
        },
        {
          url: "/libraries/charting_library/bundles/mock-light.d201313017eb2c1b989f.svg",
          revision: "27ed1587b819df769e0fcdb40c17bc0a",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.178.dd03c0163a8373c0fc5b.js",
          revision: "5044f7b5d0a1c60c5e5002b4bdd9c2db",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.2285.1268ecef367debd2960b.js",
          revision: "b9baea753f41cb4455abb325cbcd8e73",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.2547.28b713bedf796244795d.js",
          revision: "4511538309cf4ca34af0f8c160c2a252",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.2578.ab3178e0160c259eac53.js",
          revision: "8c72dc34b7726295623351882c0cbc75",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.3175.e0a2c845c5cba23f42fb.js",
          revision: "23a07b74f231b5557548c1abea1b7161",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.3236.e12bb9a536432e97ec0c.js",
          revision: "46e572d8932319080be72b9ffecc4dac",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.344.a9e566fa1091368f40c7.js",
          revision: "a3064930f6741cc253ef01eb7a1a8b47",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.3951.babac9be598102fb0d92.js",
          revision: "0659c7f64b77417d8cd69081e2bd2cfc",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.4716.e4ac74dfc9ec5374b00c.js",
          revision: "05bc4fa2a949e4e7f4f7e9400dca5cd4",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.5362.311bfba5d2c84b13ec2b.js",
          revision: "7c20c1e205ddfbb4d1194d4eb47be0f8",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "94aefb433fe8e6caef725862fe365fa9",
        },
        {
          url: "/libraries/charting_library/bundles/ms_MY.9417.7ff64779d43389a1bb41.js",
          revision: "9a29ee5b29f6750683be828a366ea908",
        },
        {
          url: "/libraries/charting_library/bundles/new-confirm-inputs-dialog.5ce0d1c060e0d28cde15.js",
          revision: "92b1ad3a71a9230a0242d7568849d87b",
        },
        {
          url: "/libraries/charting_library/bundles/new-edit-object-dialog.b3553940c9159e24d8aa.js",
          revision: "290fda84f880e5752bdeb3b6078eb3ed",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.178.dd03c0163a8373c0fc5b.js",
          revision: "6fa84265b4dea0a48204d611f3b8e55f",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.2285.1268ecef367debd2960b.js",
          revision: "ff1a35077d621edcfe2bb5284d97c1b9",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.2547.28b713bedf796244795d.js",
          revision: "f485b5b28761508d3c331603b47e6db7",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.2578.ab3178e0160c259eac53.js",
          revision: "022846df699aa0ebc8b41eeff54fa6e0",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.3175.e0a2c845c5cba23f42fb.js",
          revision: "fe12df61fa2fe164816f0824fa9c620d",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.3236.e12bb9a536432e97ec0c.js",
          revision: "89285c9fd506be4649d1d24a531ec604",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.344.a9e566fa1091368f40c7.js",
          revision: "a8934c5befd87fea27d1906347984874",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.3951.babac9be598102fb0d92.js",
          revision: "9047c5bf4018ab82bebbcf32a313d18e",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.4716.e4ac74dfc9ec5374b00c.js",
          revision: "34cbe22241857c4c3e385d8848b1af37",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.5362.311bfba5d2c84b13ec2b.js",
          revision: "85964319e08f026ffeceaea5c426393f",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "d1dddec906183016c59245bd3c9f0625",
        },
        {
          url: "/libraries/charting_library/bundles/nl_NL.9417.7ff64779d43389a1bb41.js",
          revision: "d12bf2687423bc5f3e3dfe0f8109acdd",
        },
        {
          url: "/libraries/charting_library/bundles/object-tree-dialog.0b6cab4cb55e2cef2c40.js",
          revision: "43143509cac9f1a7c279cdf865d87061",
        },
        {
          url: "/libraries/charting_library/bundles/opacity-pattern.4d8fbb552dde3db26f4a.svg",
          revision: "a6506134daec7169f68f563f084a9d41",
        },
        {
          url: "/libraries/charting_library/bundles/opacity-slider.4f3ca6b00b45fd71da5f.png",
          revision: "7e0cc5f7d7f5151500dd60b8d6ca60a1",
        },
        {
          url: "/libraries/charting_library/bundles/performance.769cf9dda2ede7d12b74.svg",
          revision: "4d499a4af3985f40d11337ba0ce930a3",
        },
        {
          url: "/libraries/charting_library/bundles/pl.178.dd03c0163a8373c0fc5b.js",
          revision: "6c1e765ea79405d4e63df1b09cc14144",
        },
        {
          url: "/libraries/charting_library/bundles/pl.2285.1268ecef367debd2960b.js",
          revision: "1ad8a4b036d4eda30e48dddc1487902f",
        },
        {
          url: "/libraries/charting_library/bundles/pl.2547.28b713bedf796244795d.js",
          revision: "946cb49de3a26c15f7a8ccadf88d7fa1",
        },
        {
          url: "/libraries/charting_library/bundles/pl.2578.ab3178e0160c259eac53.js",
          revision: "59c0b61c5db2cb9e42fd9a9e7a6d35f5",
        },
        {
          url: "/libraries/charting_library/bundles/pl.3175.e0a2c845c5cba23f42fb.js",
          revision: "598ddf12fa5f2145c7f982fcd68252f4",
        },
        {
          url: "/libraries/charting_library/bundles/pl.3236.e12bb9a536432e97ec0c.js",
          revision: "2739c3eba4b09ef97135f73fa8b56dcb",
        },
        {
          url: "/libraries/charting_library/bundles/pl.344.a9e566fa1091368f40c7.js",
          revision: "80b86480bcbb4a2462c7c32c27088930",
        },
        {
          url: "/libraries/charting_library/bundles/pl.3951.babac9be598102fb0d92.js",
          revision: "e0d05838ed900ea520532b32b7ac73af",
        },
        {
          url: "/libraries/charting_library/bundles/pl.4716.e4ac74dfc9ec5374b00c.js",
          revision: "2e49d1506243e9cb7d5c46edd1235652",
        },
        {
          url: "/libraries/charting_library/bundles/pl.5362.311bfba5d2c84b13ec2b.js",
          revision: "0c0e49240d669e98bcc2bd25845b9b55",
        },
        {
          url: "/libraries/charting_library/bundles/pl.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "77d29c9cead9e6e1cb514cd0cbbbd832",
        },
        {
          url: "/libraries/charting_library/bundles/pl.9417.7ff64779d43389a1bb41.js",
          revision: "3e797fa533a8739d32afca59e4b075eb",
        },
        {
          url: "/libraries/charting_library/bundles/prediction-clock-white.c4675d37769f1df4c9ec.png",
          revision: "f55394b616ed1ae9462c37daab941d93",
        },
        {
          url: "/libraries/charting_library/bundles/prediction-failure-white.a838a6689f951970e715.png",
          revision: "898929f1acdb622689e0fc0c95c8fcd0",
        },
        {
          url: "/libraries/charting_library/bundles/prediction-success-white.2fb9966b4c0f3529a2ea.png",
          revision: "4fafff07d8914dc11f6d335f606ff47c",
        },
        {
          url: "/libraries/charting_library/bundles/pt.178.dd03c0163a8373c0fc5b.js",
          revision: "0134df9754bdf2e5b7926e40315631da",
        },
        {
          url: "/libraries/charting_library/bundles/pt.2285.1268ecef367debd2960b.js",
          revision: "f958d569cc683b36d224e7e46624b5ba",
        },
        {
          url: "/libraries/charting_library/bundles/pt.2547.28b713bedf796244795d.js",
          revision: "eee76adaf3f5407ee74f885e1231952f",
        },
        {
          url: "/libraries/charting_library/bundles/pt.2578.ab3178e0160c259eac53.js",
          revision: "f0ecfa0fe6d593cf27c4f8c9023fb8e4",
        },
        {
          url: "/libraries/charting_library/bundles/pt.3175.e0a2c845c5cba23f42fb.js",
          revision: "3fd71bf63eb4b0ecb526cfccd5b0f3e9",
        },
        {
          url: "/libraries/charting_library/bundles/pt.3236.e12bb9a536432e97ec0c.js",
          revision: "ef741eef53a4ead73118d50254a2190b",
        },
        {
          url: "/libraries/charting_library/bundles/pt.344.a9e566fa1091368f40c7.js",
          revision: "3d61e8742dd5b7c115749e23cb80e03c",
        },
        {
          url: "/libraries/charting_library/bundles/pt.3951.babac9be598102fb0d92.js",
          revision: "f39efc4bd9d422c4de5bbb7bda0cae8e",
        },
        {
          url: "/libraries/charting_library/bundles/pt.4716.e4ac74dfc9ec5374b00c.js",
          revision: "9202a518e4242717aadedbaa0c119d83",
        },
        {
          url: "/libraries/charting_library/bundles/pt.5362.311bfba5d2c84b13ec2b.js",
          revision: "c78351e325e0d56e5ac3a41d7e4c182c",
        },
        {
          url: "/libraries/charting_library/bundles/pt.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "ce941dc31b6f315704447837d90acdaa",
        },
        {
          url: "/libraries/charting_library/bundles/pt.9417.7ff64779d43389a1bb41.js",
          revision: "18ec8c31ea71e335f6e23b1c69620e0a",
        },
        {
          url: "/libraries/charting_library/bundles/restricted-toolset.78732f5a01aa118efb81.js",
          revision: "2a9b78b9511ca27fc0927fd718bff240",
        },
        {
          url: "/libraries/charting_library/bundles/ro.178.dd03c0163a8373c0fc5b.js",
          revision: "c277a68a19c7906b49fbac98f7731734",
        },
        {
          url: "/libraries/charting_library/bundles/ro.2285.1268ecef367debd2960b.js",
          revision: "165ab09ff995c4edf00480dffaebe234",
        },
        {
          url: "/libraries/charting_library/bundles/ro.2547.28b713bedf796244795d.js",
          revision: "903cbe76371636d2ae4e2676475a943b",
        },
        {
          url: "/libraries/charting_library/bundles/ro.2578.ab3178e0160c259eac53.js",
          revision: "3d14922c73d04a6bdbdc58ca6c60b71f",
        },
        {
          url: "/libraries/charting_library/bundles/ro.3175.e0a2c845c5cba23f42fb.js",
          revision: "b9fdcd025e561631a13858ef3466b585",
        },
        {
          url: "/libraries/charting_library/bundles/ro.3236.e12bb9a536432e97ec0c.js",
          revision: "76eaee5fb24a8a0125d4f0d019956b79",
        },
        {
          url: "/libraries/charting_library/bundles/ro.344.a9e566fa1091368f40c7.js",
          revision: "4e67c132df219f161dc1b17b31718776",
        },
        {
          url: "/libraries/charting_library/bundles/ro.3951.babac9be598102fb0d92.js",
          revision: "3731f367ba83b2bd83dfa87f00fb0c02",
        },
        {
          url: "/libraries/charting_library/bundles/ro.4716.e4ac74dfc9ec5374b00c.js",
          revision: "7e6f9ba1ee9c7eec564d01901a6b233c",
        },
        {
          url: "/libraries/charting_library/bundles/ro.5362.311bfba5d2c84b13ec2b.js",
          revision: "ce4cb34635da57db7671b3a8ac7b9472",
        },
        {
          url: "/libraries/charting_library/bundles/ro.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "31bd450792473380bc24c2254a1e00a0",
        },
        {
          url: "/libraries/charting_library/bundles/ro.9417.7ff64779d43389a1bb41.js",
          revision: "775cb2601d99589fe426f6e06bf456b7",
        },
        {
          url: "/libraries/charting_library/bundles/ru.178.dd03c0163a8373c0fc5b.js",
          revision: "f600e030f770559aa1ddf9091b98ceb4",
        },
        {
          url: "/libraries/charting_library/bundles/ru.2285.1268ecef367debd2960b.js",
          revision: "63e998a71bbf59d2b15d019ae35c888b",
        },
        {
          url: "/libraries/charting_library/bundles/ru.2547.28b713bedf796244795d.js",
          revision: "8511fe2f2d6daabce01f8eda31ce1847",
        },
        {
          url: "/libraries/charting_library/bundles/ru.2578.ab3178e0160c259eac53.js",
          revision: "b3881a175b855849153fad87cf32300d",
        },
        {
          url: "/libraries/charting_library/bundles/ru.3175.e0a2c845c5cba23f42fb.js",
          revision: "c2500470fd38c41bd4f4f3a157b0745b",
        },
        {
          url: "/libraries/charting_library/bundles/ru.3236.e12bb9a536432e97ec0c.js",
          revision: "4af175efecb9a893f80a1609e7bc2771",
        },
        {
          url: "/libraries/charting_library/bundles/ru.344.a9e566fa1091368f40c7.js",
          revision: "33e781e92cefbc14973aecf7f0cd4afa",
        },
        {
          url: "/libraries/charting_library/bundles/ru.3951.babac9be598102fb0d92.js",
          revision: "c98f5be614b0f8d27106d88cef587a15",
        },
        {
          url: "/libraries/charting_library/bundles/ru.4716.e4ac74dfc9ec5374b00c.js",
          revision: "755ebbdd125efd3e80286b8cc3a01965",
        },
        {
          url: "/libraries/charting_library/bundles/ru.5362.311bfba5d2c84b13ec2b.js",
          revision: "00f6ac9fdb53a3dd9c43492e969f6d1a",
        },
        {
          url: "/libraries/charting_library/bundles/ru.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "52b3f02a6c131d2aeab33eacd7caceea",
        },
        {
          url: "/libraries/charting_library/bundles/ru.9417.7ff64779d43389a1bb41.js",
          revision: "8a851343b02e25db35caacf7c32f7332",
        },
        {
          url: "/libraries/charting_library/bundles/runtime.b283dc97286bf865cf08.js",
          revision: "62c8477709cb1d64626fea4995cf4593",
        },
        {
          url: "/libraries/charting_library/bundles/series-icons-map.f25fb7b89b7e831b726c.js",
          revision: "96739c34533fd2dcd9503179c4010a57",
        },
        {
          url: "/libraries/charting_library/bundles/series-pane-views.d3299bca6e9fad2c340a.js",
          revision: "4711bfcb87a90aa4298c5aa8b3450cec",
        },
        {
          url: "/libraries/charting_library/bundles/share-chart-to-social-utils.d7331dbca4a2aa0909e7.js",
          revision: "05f6c7e14980c3b02bd19becc228ad11",
        },
        {
          url: "/libraries/charting_library/bundles/show-theme-save-dialog.02c87d9b20f743b5cf16.js",
          revision: "b08ea5dcf7fd3a477933738d6ed196f7",
        },
        {
          url: "/libraries/charting_library/bundles/simple-dialog.6a6e7744cd3263ce2887.js",
          revision: "c45c3f9ff1fe6e2baac2bdfaa0595eaa",
        },
        {
          url: "/libraries/charting_library/bundles/source-properties-editor.3b96f58f66e0caa61b15.js",
          revision: "9ef028ce078b304c83eb75dd519599b2",
        },
        {
          url: "/libraries/charting_library/bundles/study-inputs-pane-views.6caf467f12b1d6ee408a.js",
          revision: "fd2e1a40c1c8a5afc3882c913fe0df0f",
        },
        {
          url: "/libraries/charting_library/bundles/study-market.b04732ea1491ac587015.js",
          revision: "d02740a5e7c2c1013ec87171dc19cad8",
        },
        {
          url: "/libraries/charting_library/bundles/study-pane-views.51d0897ba74454ec3423.js",
          revision: "b2c6d71f1e862b3b562b0f8826e8ce38",
        },
        {
          url: "/libraries/charting_library/bundles/study-property-pages-with-definitions.1d3c58ff151a9c7c19a3.js",
          revision: "bce1bb9a9fc94dc7dcbb6dd7cccc9085",
        },
        {
          url: "/libraries/charting_library/bundles/study-template-dialog.45bca887c7f2c0d84601.js",
          revision: "aa784ef4553e41fe7c9ecfd5e0d8c3dc",
        },
        {
          url: "/libraries/charting_library/bundles/sv.178.dd03c0163a8373c0fc5b.js",
          revision: "33e274e3964b5119b08c4f8c7c4e721f",
        },
        {
          url: "/libraries/charting_library/bundles/sv.2285.1268ecef367debd2960b.js",
          revision: "e3a112413e88c7ee9b109a7e91b8d3cc",
        },
        {
          url: "/libraries/charting_library/bundles/sv.2547.28b713bedf796244795d.js",
          revision: "c7c71695c0b19f06e74966b1c2f5b628",
        },
        {
          url: "/libraries/charting_library/bundles/sv.2578.ab3178e0160c259eac53.js",
          revision: "5015e8cac378665c629f7b94ddca998e",
        },
        {
          url: "/libraries/charting_library/bundles/sv.3175.e0a2c845c5cba23f42fb.js",
          revision: "4b418e980665d121f268a1d2f88f3e35",
        },
        {
          url: "/libraries/charting_library/bundles/sv.3236.e12bb9a536432e97ec0c.js",
          revision: "90b331179d67a769d89e6914a56f0e59",
        },
        {
          url: "/libraries/charting_library/bundles/sv.344.a9e566fa1091368f40c7.js",
          revision: "38902ac4225664bc3c1fbf5423f534bd",
        },
        {
          url: "/libraries/charting_library/bundles/sv.3951.babac9be598102fb0d92.js",
          revision: "ef84f96a4a4cb7d0934c1c3c9ec96ab8",
        },
        {
          url: "/libraries/charting_library/bundles/sv.4716.e4ac74dfc9ec5374b00c.js",
          revision: "c65f67b24f857b916196956341da99d4",
        },
        {
          url: "/libraries/charting_library/bundles/sv.5362.311bfba5d2c84b13ec2b.js",
          revision: "acb1cacdf6d2c34a22f69bfd5b92cf1c",
        },
        {
          url: "/libraries/charting_library/bundles/sv.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "b7c2d9bce5d0829117f27c3b68e4c090",
        },
        {
          url: "/libraries/charting_library/bundles/sv.9417.7ff64779d43389a1bb41.js",
          revision: "dba5994d5bd6782d39a672de07d7ce11",
        },
        {
          url: "/libraries/charting_library/bundles/svg-renderer.f065beaf6b5b37da27d9.js",
          revision: "5f34caef7014374476b9302439e2582b",
        },
        {
          url: "/libraries/charting_library/bundles/symbol-info-dialog-impl.6ef1056ef156ddb4caf1.js",
          revision: "cde0ebd770119cf5d0f7a43ef8ba29ac",
        },
        {
          url: "/libraries/charting_library/bundles/symbol-search-dialog.e5850d7e02343ee54c52.js",
          revision: "fdb652e2e9e211d41d7927115d74f13c",
        },
        {
          url: "/libraries/charting_library/bundles/take-chart-image-impl.600804a9c180df6a83b1.js",
          revision: "df89f56b74bf1b8ac64263f1123b9fdb",
        },
        {
          url: "/libraries/charting_library/bundles/th.178.dd03c0163a8373c0fc5b.js",
          revision: "3df7b67f09cefce20758c24763e41e9a",
        },
        {
          url: "/libraries/charting_library/bundles/th.2285.1268ecef367debd2960b.js",
          revision: "eea31e972bb26b3afa6d308f43183893",
        },
        {
          url: "/libraries/charting_library/bundles/th.2547.28b713bedf796244795d.js",
          revision: "8638166d50bdbe3aa731f4466293cebc",
        },
        {
          url: "/libraries/charting_library/bundles/th.2578.ab3178e0160c259eac53.js",
          revision: "e373f05ee4786c650bb7c5dfa5f011d4",
        },
        {
          url: "/libraries/charting_library/bundles/th.3175.e0a2c845c5cba23f42fb.js",
          revision: "616e3e9fd0c8b0d7bd51ea1b33120b6b",
        },
        {
          url: "/libraries/charting_library/bundles/th.3236.e12bb9a536432e97ec0c.js",
          revision: "ed5594ee0776d9d44a03dba7ba087a7d",
        },
        {
          url: "/libraries/charting_library/bundles/th.344.a9e566fa1091368f40c7.js",
          revision: "b46f02117962815327a98bcc04ab7e97",
        },
        {
          url: "/libraries/charting_library/bundles/th.3951.babac9be598102fb0d92.js",
          revision: "d06b12bba3e509747992bfb763f1cd65",
        },
        {
          url: "/libraries/charting_library/bundles/th.4716.e4ac74dfc9ec5374b00c.js",
          revision: "c9da691abbff354287849e49b0d01510",
        },
        {
          url: "/libraries/charting_library/bundles/th.5362.311bfba5d2c84b13ec2b.js",
          revision: "0f3d5a9955085ef3c7a06b5d402756f5",
        },
        {
          url: "/libraries/charting_library/bundles/th.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "2b012d0d358e963ed346a23d3e456b66",
        },
        {
          url: "/libraries/charting_library/bundles/th.9417.7ff64779d43389a1bb41.js",
          revision: "a1c9f80601d845662c32943e771b83a5",
        },
        {
          url: "/libraries/charting_library/bundles/tr.178.dd03c0163a8373c0fc5b.js",
          revision: "fb14d40f3c92f0a14c444393bd16b729",
        },
        {
          url: "/libraries/charting_library/bundles/tr.2285.1268ecef367debd2960b.js",
          revision: "0f77bc0f40e83909c893035655bef313",
        },
        {
          url: "/libraries/charting_library/bundles/tr.2547.28b713bedf796244795d.js",
          revision: "067854610249e5ee766c788158257166",
        },
        {
          url: "/libraries/charting_library/bundles/tr.2578.ab3178e0160c259eac53.js",
          revision: "2bdc78fe64bc6dae9abef87b48e1d83d",
        },
        {
          url: "/libraries/charting_library/bundles/tr.3175.e0a2c845c5cba23f42fb.js",
          revision: "87eba9b4101f74daa151240ebf4a7b1a",
        },
        {
          url: "/libraries/charting_library/bundles/tr.3236.e12bb9a536432e97ec0c.js",
          revision: "a0f8214be5851f3386e6cf81358b77e7",
        },
        {
          url: "/libraries/charting_library/bundles/tr.344.a9e566fa1091368f40c7.js",
          revision: "acf780eb75c3f30242afafbfee9f7bd1",
        },
        {
          url: "/libraries/charting_library/bundles/tr.3951.babac9be598102fb0d92.js",
          revision: "95cbe37c5bb01d3313bc06969791197b",
        },
        {
          url: "/libraries/charting_library/bundles/tr.4716.e4ac74dfc9ec5374b00c.js",
          revision: "0dc6d40f2959a284cc3ee1027a608cee",
        },
        {
          url: "/libraries/charting_library/bundles/tr.5362.311bfba5d2c84b13ec2b.js",
          revision: "684a18d8e0b469eb5bbf56aeecedbc39",
        },
        {
          url: "/libraries/charting_library/bundles/tr.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "c191fab770c342e9101c8d565fe3f301",
        },
        {
          url: "/libraries/charting_library/bundles/tr.9417.7ff64779d43389a1bb41.js",
          revision: "c292a9932379b0a658445114608fff03",
        },
        {
          url: "/libraries/charting_library/bundles/user-defined-bars-marks-tooltip.71213c4f755723965a80.js",
          revision: "2b29cf3ee0ec5c6e117779625cfed4a7",
        },
        {
          url: "/libraries/charting_library/bundles/vi.178.dd03c0163a8373c0fc5b.js",
          revision: "91b90da5bda5bd4f560cd720598c3275",
        },
        {
          url: "/libraries/charting_library/bundles/vi.2285.1268ecef367debd2960b.js",
          revision: "dbb3280c3c7c4f8798eaaf1eae0a2a9f",
        },
        {
          url: "/libraries/charting_library/bundles/vi.2547.28b713bedf796244795d.js",
          revision: "50540ebcb653e33475def1e5ebda9102",
        },
        {
          url: "/libraries/charting_library/bundles/vi.2578.ab3178e0160c259eac53.js",
          revision: "4320e12a6c8d72fa68ebb76fa1cb463d",
        },
        {
          url: "/libraries/charting_library/bundles/vi.3175.e0a2c845c5cba23f42fb.js",
          revision: "93e498273e365f64d30ff839777b55a7",
        },
        {
          url: "/libraries/charting_library/bundles/vi.3236.e12bb9a536432e97ec0c.js",
          revision: "185a9dd19f02e241ec07048b06beadc9",
        },
        {
          url: "/libraries/charting_library/bundles/vi.344.a9e566fa1091368f40c7.js",
          revision: "bf0867eb4f6d1e7997897e84edfaa6aa",
        },
        {
          url: "/libraries/charting_library/bundles/vi.3951.babac9be598102fb0d92.js",
          revision: "408ee13271a683559b80699a3cc633a2",
        },
        {
          url: "/libraries/charting_library/bundles/vi.4716.e4ac74dfc9ec5374b00c.js",
          revision: "16627bc8e3c1da67f09f4801df6543f8",
        },
        {
          url: "/libraries/charting_library/bundles/vi.5362.311bfba5d2c84b13ec2b.js",
          revision: "3bfaabba56450db75bf415844d3240fb",
        },
        {
          url: "/libraries/charting_library/bundles/vi.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "6b8d974697d1e466bab97f496aa02782",
        },
        {
          url: "/libraries/charting_library/bundles/vi.9417.7ff64779d43389a1bb41.js",
          revision: "b8828a2b355ec3284201218ac9a56dc8",
        },
        {
          url: "/libraries/charting_library/bundles/zh.178.dd03c0163a8373c0fc5b.js",
          revision: "86b1541ba93a4e7aab61440c1251c17b",
        },
        {
          url: "/libraries/charting_library/bundles/zh.2285.1268ecef367debd2960b.js",
          revision: "728415dbbed4ff853eea9dad6da465c6",
        },
        {
          url: "/libraries/charting_library/bundles/zh.2547.28b713bedf796244795d.js",
          revision: "f3eca21cbde9cc63c6327e72a3d23a04",
        },
        {
          url: "/libraries/charting_library/bundles/zh.2578.ab3178e0160c259eac53.js",
          revision: "8ab555f76a02ae99d36709bf5aef9232",
        },
        {
          url: "/libraries/charting_library/bundles/zh.3175.e0a2c845c5cba23f42fb.js",
          revision: "ef405fd150cd4e433fcf6eead7ecc062",
        },
        {
          url: "/libraries/charting_library/bundles/zh.3236.e12bb9a536432e97ec0c.js",
          revision: "15aaea785ad6324250d4be0f056a812b",
        },
        {
          url: "/libraries/charting_library/bundles/zh.344.a9e566fa1091368f40c7.js",
          revision: "e695ffe87a8cfcb91f998ec3df84e694",
        },
        {
          url: "/libraries/charting_library/bundles/zh.3951.babac9be598102fb0d92.js",
          revision: "311c56026aa880b609b43d120dbe32dc",
        },
        {
          url: "/libraries/charting_library/bundles/zh.4716.e4ac74dfc9ec5374b00c.js",
          revision: "dab69c5ae0b3b1e437fcfa4ca05cb063",
        },
        {
          url: "/libraries/charting_library/bundles/zh.5362.311bfba5d2c84b13ec2b.js",
          revision: "202475d940ae204069efb744e8126b23",
        },
        {
          url: "/libraries/charting_library/bundles/zh.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "5225739353652c6d70b9d718cda47a86",
        },
        {
          url: "/libraries/charting_library/bundles/zh.9417.7ff64779d43389a1bb41.js",
          revision: "93c4eb44f91df9bafc3245ec8913a8b8",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.178.dd03c0163a8373c0fc5b.js",
          revision: "458203b2f894782484f1f62bc2e56f81",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.2285.1268ecef367debd2960b.js",
          revision: "d934a0a9454fcac589bb567e53b56db3",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.2547.28b713bedf796244795d.js",
          revision: "c2f147df3462cfeefe3c88f23598b3b4",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.2578.ab3178e0160c259eac53.js",
          revision: "777bd59ed25c79ac1caf35a39d651678",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.3175.e0a2c845c5cba23f42fb.js",
          revision: "969c4deef2a132b59cff4e1a0ec8701b",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.3236.e12bb9a536432e97ec0c.js",
          revision: "0e2036c7581147323ce8ab262ad58ab9",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.344.a9e566fa1091368f40c7.js",
          revision: "b9a6d859aee10c5ca1bdc281596843d0",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.3951.babac9be598102fb0d92.js",
          revision: "f7f351ffff63f89b613caff605c383ba",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.4716.e4ac74dfc9ec5374b00c.js",
          revision: "97fc4eabbc23243fe89c6367455d404e",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.5362.311bfba5d2c84b13ec2b.js",
          revision: "ff4dbe12212a05e533cb58cd61b5d4ab",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.6306.b88dcc3f0d7db89ebfc1.js",
          revision: "5aff0c71a35aadc615b6a08456342fbb",
        },
        {
          url: "/libraries/charting_library/bundles/zh_TW.9417.7ff64779d43389a1bb41.js",
          revision: "d895f2aeb88d9c7304b85b39b55c8614",
        },
        {
          url: "/libraries/charting_library/charting_library.cjs.js",
          revision: "9325f604e93eb09d67b8640bb7b5d666",
        },
        {
          url: "/libraries/charting_library/charting_library.d.ts",
          revision: "7fd33bc13d411c5c0ca6842e82594376",
        },
        {
          url: "/libraries/charting_library/charting_library.esm.js",
          revision: "495861384fe057e8963d8d89dd9228cb",
        },
        {
          url: "/libraries/charting_library/charting_library.js",
          revision: "b67001d306b201d1acfa9c731b304cec",
        },
        {
          url: "/libraries/charting_library/charting_library.standalone.js",
          revision: "6f3f22349044a63b835c8aa3d30726d8",
        },
        {
          url: "/libraries/charting_library/datafeed-api.d.ts",
          revision: "1aa99c3e7fe8b29b3673abcfff4497e8",
        },
        {
          url: "/libraries/charting_library/package.json",
          revision: "695856620b9b6bdbf563d4e27b38a453",
        },
        {
          url: "/libraries/datafeeds/README.md",
          revision: "7d18ffad0eda1bd17d2e7b5cd9c6c30c",
        },
        {
          url: "/libraries/datafeeds/udf/README.md",
          revision: "844fa5ad29251ce95f2ae4f72883b966",
        },
        {
          url: "/libraries/datafeeds/udf/dist/bundle.js",
          revision: "e92ec6c073dc4b0ee6ee63c4f4efe0f8",
        },
        {
          url: "/libraries/datafeeds/udf/lib/data-pulse-provider.js",
          revision: "0ff733a39aef31bbe5a9015d5d7f1584",
        },
        {
          url: "/libraries/datafeeds/udf/lib/helpers.js",
          revision: "d880ad7f67f5af612073f56503d1dddb",
        },
        {
          url: "/libraries/datafeeds/udf/lib/history-provider.js",
          revision: "3da6bfb79a9f571a3e8b51e3edf7e70e",
        },
        {
          url: "/libraries/datafeeds/udf/lib/iquotes-provider.js",
          revision: "e2ebd7ddedcadeeadbf819c35985c768",
        },
        {
          url: "/libraries/datafeeds/udf/lib/irequester.js",
          revision: "e2ebd7ddedcadeeadbf819c35985c768",
        },
        {
          url: "/libraries/datafeeds/udf/lib/provider-interfaces.js",
          revision: "e2ebd7ddedcadeeadbf819c35985c768",
        },
        {
          url: "/libraries/datafeeds/udf/lib/quotes-provider.js",
          revision: "196049d8e4362159f7de28adfdb94fd1",
        },
        {
          url: "/libraries/datafeeds/udf/lib/quotes-pulse-provider.js",
          revision: "393e0bdab5beb0a3481c890e15595eaf",
        },
        {
          url: "/libraries/datafeeds/udf/lib/requester.js",
          revision: "5d6e96c90aca51ffd5fd1ef429ef872e",
        },
        {
          url: "/libraries/datafeeds/udf/lib/symbols-storage.js",
          revision: "0339e309dd306780ea06b727b22129aa",
        },
        {
          url: "/libraries/datafeeds/udf/lib/udf-compatible-datafeed-base.js",
          revision: "223ff32e288b1be64d67dc91999fe877",
        },
        {
          url: "/libraries/datafeeds/udf/lib/udf-compatible-datafeed.js",
          revision: "fb37b8c5a57b5eac326146251d3e3ce0",
        },
        {
          url: "/libraries/datafeeds/udf/package.json",
          revision: "c5b4cd31bddfe8de8a7afb9e914c09e3",
        },
        {
          url: "/libraries/datafeeds/udf/rollup.config.js",
          revision: "2e87851736ab1f82673633a54006e708",
        },
        {
          url: "/libraries/datafeeds/udf/src/data-pulse-provider.ts",
          revision: "fb6edc21031112a4459d704ce7f72d7c",
        },
        {
          url: "/libraries/datafeeds/udf/src/helpers.ts",
          revision: "bff12efb79ddafef9641d1ce0c65349c",
        },
        {
          url: "/libraries/datafeeds/udf/src/history-provider.ts",
          revision: "09cf56c1960554c17fb80979a1643620",
        },
        {
          url: "/libraries/datafeeds/udf/src/iquotes-provider.ts",
          revision: "f6649cd10a9d3e66256909bb523654f0",
        },
        {
          url: "/libraries/datafeeds/udf/src/irequester.ts",
          revision: "a4ec2500fe48e3ca55c26f81a9b7ef1b",
        },
        {
          url: "/libraries/datafeeds/udf/src/provider-interfaces.ts",
          revision: "2bf40eb4e4f4d9e2f3aa5ca6f0a4ff1e",
        },
        {
          url: "/libraries/datafeeds/udf/src/quotes-provider.ts",
          revision: "9aa5ae6e41ae69223c99293841251981",
        },
        {
          url: "/libraries/datafeeds/udf/src/quotes-pulse-provider.ts",
          revision: "c3ad845c312f82cdcda6d5b75ea677e2",
        },
        {
          url: "/libraries/datafeeds/udf/src/requester.ts",
          revision: "a8c49cd1043d0468da64187b111e5f5d",
        },
        {
          url: "/libraries/datafeeds/udf/src/symbols-storage.ts",
          revision: "29a89be6fc1e04c485e9357afd82c064",
        },
        {
          url: "/libraries/datafeeds/udf/src/udf-compatible-datafeed-base.ts",
          revision: "38c601c57e6ab50f43362e01cc0203d8",
        },
        {
          url: "/libraries/datafeeds/udf/src/udf-compatible-datafeed.ts",
          revision: "e137750db1c1705b0be04824abf20059",
        },
        {
          url: "/libraries/datafeeds/udf/tsconfig.json",
          revision: "a5bc269abd39f6ba42cd2d25b126477f",
        },
        {
          url: "/libraries/datafeeds/udf/types.d.ts",
          revision: "30f3dfcbceae30111b0f8cfeea5be3c2",
        },
        { url: "/logo.svg", revision: "f83e236f198098f8de047340b1ceab33" },
        { url: "/manifest.json", revision: "d56f0e7a0fbdbd10b58f53b2eb92317e" },
        {
          url: "/moralis-favicon.ico",
          revision: "3a8216d9faca5fb10947ebded3b09882",
        },
        {
          url: "/phone-banner-right.png",
          revision: "cdb6dd64a9c36b449949704edf812ff7",
        },
        {
          url: "/pwa-logo/128.png",
          revision: "fc71484e020dfad8d83bce1f575adc9a",
        },
        {
          url: "/pwa-logo/144.png",
          revision: "13cb436ff85d7fa743d3fab2234f05dd",
        },
        {
          url: "/pwa-logo/152.png",
          revision: "eeddca28829f35016262c2ade1184574",
        },
        {
          url: "/pwa-logo/196.png",
          revision: "d55ed9ab12f271d8ef16faa8c3ec4250",
        },
        {
          url: "/pwa-logo/384.png",
          revision: "cab984c80f57989effcc72b0183a9f19",
        },
        {
          url: "/pwa-logo/48.png",
          revision: "abd6fef9fe2a536965486cf37afc32f3",
        },
        {
          url: "/pwa-logo/512.png",
          revision: "84bdf0147686901a8e1e03fc37d04580",
        },
        {
          url: "/pwa-logo/72.png",
          revision: "6563d8ba158622ea48d653e24e64783c",
        },
        {
          url: "/pwa-logo/96.png",
          revision: "145f68868b8c43377da30d26fcdc6b06",
        },
        {
          url: "/shape-banner-center.png",
          revision: "656287a9be8154626c5a856f27d96af7",
        },
        {
          url: "/tradingview-chart.css",
          revision: "c9f6109fb53d98bceaaa7faf9a7955e6",
        },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
        { url: "/wallet.csv", revision: "a29f83f2b62a375a00d443804ad96c54" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: a,
              state: r,
            }) =>
              i && "opaqueredirect" === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: "OK",
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/profile\.bluwhale\.com\/.*$/,
      new e.NetworkFirst({
        cacheName: "api-cache",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 300 }),
          new e.CacheableResponsePlugin({ statuses: [0, 200] }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js|css|html|png|jpg|jpeg|svg|gif|webp)$/,
      new e.CacheFirst({
        cacheName: "static-assets-cache",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*$/,
      new e.CacheFirst({
        cacheName: "google-fonts-cache",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 30, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    );
});

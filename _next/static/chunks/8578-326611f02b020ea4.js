"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8578],
  {
    84527: function (e, t, a) {
      a.d(t, {
        $1: function () {
          return getListPrices;
        },
        AD: function () {
          return getEnterpriseProjectUserRole;
        },
        Bb: function () {
          return useCreateCampaign;
        },
        CP: function () {
          return getCategories;
        },
        CS: function () {
          return fetchUserInfo;
        },
        D7: function () {
          return addUserToEnterpriseGroup;
        },
        Dp: function () {
          return getSubActiveUser;
        },
        EM: function () {
          return getEnterpriseCampaignList;
        },
        Ec: function () {
          return claimingProject;
        },
        Eh: function () {
          return sendComapaign;
        },
        G6: function () {
          return fetchEnterpriseSimilarWallet;
        },
        Ir: function () {
          return getProjectVisibility;
        },
        Jl: function () {
          return updateProjectVisibility;
        },
        Jt: function () {
          return getEnterpriseMsgHistory;
        },
        KO: function () {
          return comparisonProjectHolders;
        },
        M0: function () {
          return getBuyingPower;
        },
        M6: function () {
          return getActiveUser;
        },
        Mt: function () {
          return comparisonProjectInfo;
        },
        NU: function () {
          return getProjectInfo;
        },
        OP: function () {
          return deleteUserFromOutReachList;
        },
        OX: function () {
          return fetchEnterpriseImportPoints;
        },
        Pe: function () {
          return p;
        },
        Si: function () {
          return addUserToOutReachList;
        },
        TD: function () {
          return getEnterpriseCompaign;
        },
        U9: function () {
          return sendEnterpriseMsg;
        },
        VN: function () {
          return markAllRead;
        },
        WH: function () {
          return getSubBuyingPower;
        },
        XM: function () {
          return checkEnterPriseDetail;
        },
        XU: function () {
          return l;
        },
        YS: function () {
          return fetchEnterpriseClaimPoints;
        },
        Zg: function () {
          return getSubUser;
        },
        _i: function () {
          return sendMsgList;
        },
        aS: function () {
          return getSubChainUtilization;
        },
        c6: function () {
          return readCampaign;
        },
        cX: function () {
          return getOutReachList;
        },
        ck: function () {
          return updateProfile;
        },
        cm: function () {
          return deleteOutReachGroup;
        },
        dm: function () {
          return fetchProjectVisibility;
        },
        eG: function () {
          return comparisonProjectAttributes;
        },
        eO: function () {
          return getTokenProfile;
        },
        hJ: function () {
          return getEnterpriseSocialLinks;
        },
        jz: function () {
          return getAlsoHoldList;
        },
        lV: function () {
          return changeTargetGroupName;
        },
        oX: function () {
          return comparisonProjectActiveUsers;
        },
        oj: function () {
          return createEnterpriseGroup;
        },
        p: function () {
          return getEnterpriseCampaignHistory;
        },
        ps: function () {
          return completionEmail;
        },
        rE: function () {
          return getGroupingUsers;
        },
        tM: function () {
          return getSubTokenProfile;
        },
        us: function () {
          return getSimilarProject;
        },
        wP: function () {
          return u;
        },
        yQ: function () {
          return getGroupingAttributes;
        },
        yY: function () {
          return getEnterpriseUserPlan;
        },
        yt: function () {
          return getSubHolders;
        },
      });
      var n = a(25556),
        i = a(5121),
        r = a(68658),
        o = a(67294),
        s = a(75776);
      let l = {
          "AGGRESSIVE ACTIVITY": "aggressive_activity",
          "DEX TRADER": "dex_trader",
          "ERC20 FLIPPER": "erc20_flipper",
          "LIQUIDITY PROVIDER": "liquidity_provider",
          "NFT SWEEPER": "nft_sweeper",
          "NFT TRADER": "nft_trader",
          "NFT MINTER": "nft_minter",
          "NFT CREATOR": "nft_creator",
          "NFT HOLDER": "nft_holder",
          "STABLE COIN HOLDER": "stable_coin_holder",
          "YIELD FARMER": "yield_farmer",
          "ASSETS MILLIONAIRE": "assets_millionaire",
          "HEAVY BORROWER": "heavy_borrower",
        },
        c = {
          "AGGRESSIVE ACTIVITY": "aggressive_activity",
          "DEX TRADER": "dex_trader",
          "ERC20 FLIPPER": "erc20_flipper",
          "LIQUIDITY PROVIDER": "liquidity_provider",
          "NFT SWEEPER": "nft_sweeper",
          "NFT TRADER": "nft_trader",
          "NFT MINTER": "nft_minter",
          "NFT CREATOR": "nft_creator",
          "NFT HOLDER": "nft_holder",
          "ASSETS MILLIONAIRE": "assets_millionaire",
          "STABLE COIN HOLDER": "stable_coin_holder",
          "YIELD FARMER": "yield_farmer",
          "HEAVY BORROWER": "heavy_borrower",
          "Aggressive Activity": "aggressive_activity",
          "Dex Trader": "dex_trader",
          "ERC20 Flipper": "erc20_flipper",
          "Liquidity Provider": "liquidity_provider",
          "NFT Sweeper": "nft_sweeper",
          "NFT Trader": "nft_trader",
          "Stable Coin Holder": "stable_coin_holder",
          "Yield Farmer": "yield_farmer",
          "GEOGRAPHY: KOREA": "geography_korea",
          SYBIL: "sybil",
        },
        u = {
          "AGGRESSIVE ACTIVITY":
            "Within the past month, if the number of transactions exceeds 5 times, and the total transaction count across any blockchain is greater than 5 times, including transfers.",
          "DEX TRADER":
            "Made trades on decentralized exchanges. (in the pass three month)",
          "ERC20 FLIPPER":
            "Multiple transactions occurring from purchase to sale within a single day, exclusively involving ERC20 tokens on the Ethereum blockchain",
          "LIQUIDITY PROVIDER":
            "Crypto holders deposit USD100K+ to liquidity pools in order to provide liquidity to other users.",
          "NFT SWEEPER":
            "Wallets that have profitably swept (bought a certain no. of NFTs from a collection in a single day, spending a minimum threshold value) at least 3 different NFT collections, for a minimum of 5 sweepings.",
          "NFT TRADER": "if there are trades in NFTs within 3 months ",
          "NFT MINTER":
            "Wallets that have at least ≥ 5x realized profits on multiple collections that were minted in the last 60 days.",
          "NFT CREATOR": "Collection author",
          "NFT HOLDER": "Holding over 50% of total NFTs more than 6 months",
          "ASSETS MILLIONAIRE": "Total assets exceed one million US dollars.",
          "STABLE COIN HOLDER":
            "Matching ERC20 tokens that are present both one month ago and currently, as well as ERC20 tokens listed in the inventory.",
          "YIELD FARMER":
            "Earn USD100k+ extra financial rewards (Balance + Claimable)  with crypto holdings ",
          "HEAVY BORROWER": "Depts >50% of total assets",
          "Aggressive Activity":
            "Within the past month, if the number of transactions exceeds 5 times, and the total transaction count across any blockchain is greater than 5 times, including transfers.",
          "Dex Trader":
            "Made trades on decentralized exchanges. (in the pass three month)",
          "ERC20 Flipper":
            "Multiple transactions occurring from purchase to sale within a single day, exclusively involving ERC20 tokens on the Ethereum blockchain",
          "Liquidity Provider":
            "Crypto holders deposit USD100K+ to liquidity pools in order to provide liquidity to other users.",
          "NFT Sweeper":
            "Wallets that have profitably swept (bought a certain no. of NFTs from a collection in a single day, spending a minimum threshold value) at least 3 different NFT collections, for a minimum of 5 sweepings.",
          "NFT Trader": "if there are trades in NFTs within 3 months ",
          "Stable Coin Holder":
            "Matching ERC20 tokens that are present both one month ago and currently, as well as ERC20 tokens listed in the inventory.",
          "Yield Farmer":
            "Earn USD100k+ extra financial rewards (Balance + Claimable)  with crypto holdings ",
          All: "In this label, you can filter all addresses with six type of filters",
        },
        p = {
          "AGGRESSIVE ACTIVITY":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Aggressive%20Activity.png",
          "DEX TRADER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Dex%20Trader.png",
          "ERC20 FLIPPER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/ERC20%20Flipper.png",
          "LIQUIDITY PROVIDER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Liquidity%20Provider.png",
          "NFT SWEEPER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/NFT%20Sweeper.png",
          "NFT TRADER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/NFT%20Trader.png",
          "NFT MINTER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/NFT%20Minter.png",
          "NFT CREATOR":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/NFT%20Creator.png",
          "NFT HOLDER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/NFT%20Holder.png",
          "ASSETS MILLIONAIRE":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Asset%20Millionaire.png",
          "STABLE COIN HOLDER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Stable%20Coin%20Holder.png",
          "YIELD FARMER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Yield%20Farmer.png",
          "HEAVY BORROWER":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Heavy%20Borrower.png",
          "Aggressive Activity":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Aggressive%20Activity.png",
          "Dex Trader":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Dex%20Trader.png",
          "ERC20 Flipper":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/ERC20%20Flipper.png",
          "Liquidity Provider":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Liquidity%20Provider.png",
          "NFT Sweeper":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/NFT%20Sweeper.png",
          "NFT Trader":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/NFT%20Trader.png",
          "Stable Coin Holder":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Stable%20Coin%20Holder.png",
          "Yield Farmer":
            "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/static/Yield%20Farmer.png",
          All: "In this label, you can filter all addresses with six type of filters",
        },
        getColor = (e, t) =>
          (0, r.Z)(t)
            ? "#81EAFF"
            : s.zr.includes(t)
            ? s.Ow[e] || "#81EAFF"
            : "#".concat(t.replace("0x", "").substring(0, 6)),
        holdersUtil = (e) => {
          let t = e.map((e) => ({
            ...e,
            bgColor: getColor(e.name, e.address),
            percentage: Math.floor(100 * e.holders_percentage),
          }));
          return t;
        },
        d = {
          "content-type": "application/json",
          "X-API-Key": n.basicConfig.bluwhale.apiKey,
        },
        checkEnterPriseDetail = async (e) => {
          var t;
          if (!e) return;
          let a = await e.post("wallets/enterprise/enterprise_detail/", {}),
            n =
              null == a
                ? void 0
                : null === (t = a.data) || void 0 === t
                ? void 0
                : t.holders_also_hold.map((e) => ({
                    ...e,
                    bgColor: (0, r.Z)(e.address)
                      ? "#81EAFF"
                      : "#".concat(e.address.replace("0x", "").substring(0, 6)),
                    percentage: (100 * e.holders_percentage).toFixed(2),
                  })),
            i = { ...(null == a ? void 0 : a.data), holders_also_hold: n };
          return i;
        },
        getActiveUser = async (e, t) => {
          var a, r, o;
          let s = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/grouping/active_users/"
              ),
              { contract_address: e, expression: "daily" },
              {
                headers: {
                  "content-type": "application/json",
                  "X-API-Key": n.basicConfig.bluwhale.apiKey,
                },
              }
            ),
            { active_users: l } =
              null !== (o = null == s ? void 0 : s.data) && void 0 !== o
                ? o
                : {},
            c =
              null == l
                ? void 0
                : null === (r = l.timeline_data) || void 0 === r
                ? void 0
                : null ===
                    (a = r.sort((e, t) =>
                      e.time < t.time ? -1 : e.time > t.time ? 1 : 0
                    )) || void 0 === a
                ? void 0
                : a.slice(0, -1),
            u = { ...l, timeline_data: c };
          return u;
        },
        getSimilarProject = async (e) => {
          if (!e) return;
          let t = await e.post("/wallets/enterprise/similar_projects/", {});
          return null == t ? void 0 : t.data;
        },
        getProjectInfo = async (e, t) => {
          let a = {
              headers: {
                "content-type": "application/json",
                "X-API-Key": n.basicConfig.bluwhale.apiKey,
              },
            },
            r = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/grouping/project_info/"
              ),
              { contract_address: e, time_picker: t || "" },
              a
            ),
            o = null == r ? void 0 : r.data;
          return o;
        },
        getGroupingAttributes = async (e, t) => {
          var a, r;
          let o = {
              headers: {
                "content-type": "application/json",
                "X-API-Key": n.basicConfig.bluwhale.apiKey,
              },
            },
            s = {
              SYBIL: {
                attribute_type: "SYBIL",
                icon: "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/",
                amount: 0,
                tags: [],
                percentage: 0,
              },
              "CEX USERS": {
                attribute_type: "CEX USERS",
                icon: "http://web3-wallet-dashboard-api-q67p7dk34q-uc.a.run.app/",
                amount: 0,
                tags: [],
                percentage: 0,
              },
            },
            l = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/grouping/attributes/"
              ),
              { contract_address: e, time_picker: t || "" },
              o
            ),
            c = await (null == l
              ? void 0
              : null === (r = l.data) || void 0 === r
              ? void 0
              : null === (a = r.groups) || void 0 === a
              ? void 0
              : a.sort((e, t) =>
                  e.attribute_type < t.attribute_type
                    ? -1
                    : e.attribute_type > t.attribute_type
                    ? 1
                    : 0
                )),
            u = await (function (e) {
              let t = { SYBIL: !1, "CEX USERS": !1 };
              return (
                e.forEach((e) => {
                  e.attribute_type in t && (t[e.attribute_type] = !0);
                }),
                Object.keys(t).forEach((a) => {
                  t[a] || e.push(s[a]);
                }),
                e
              );
            })(c);
          return u;
        },
        getAlsoHoldList = async (e, t) => {
          let a = {
              headers: {
                "content-type": "application/json",
                "X-API-Key": n.basicConfig.bluwhale.apiKey,
              },
            },
            r = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/grouping/holders_also_hold/"
              ),
              { contract_address: e, time_picker: t || "" },
              a
            ),
            o = holdersUtil(null == r ? void 0 : r.data.collections);
          return o;
        },
        comparisonProjectInfo = async (e) => {
          var t;
          let a = sessionStorage.getItem("firebaseUser"),
            r = a ? JSON.parse(a).accessToken : void 0,
            o = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/enterprise/comparison/project_info/\n      "
              ),
              { compare_to: e },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "".concat(r ? "Bearer ".concat(r) : void 0),
                },
              }
            );
          return null == o
            ? void 0
            : null === (t = o.data) || void 0 === t
            ? void 0
            : t.projects;
        },
        comparisonProjectAttributes = async (e) => {
          var t;
          let a = sessionStorage.getItem("firebaseUser"),
            r = a ? JSON.parse(a).accessToken : void 0,
            o = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/enterprise/comparison/attributes/\n      "
              ),
              { compare_to: e },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "".concat(r ? "Bearer ".concat(r) : void 0),
                },
              }
            );
          return null == o
            ? void 0
            : null === (t = o.data) || void 0 === t
            ? void 0
            : t.attributes;
        },
        comparisonProjectHolders = async (e) => {
          let t = sessionStorage.getItem("firebaseUser"),
            a = t ? JSON.parse(t).accessToken : void 0,
            o = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/enterprise/comparison/holders_also_hold/\n      "
              ),
              { compare_to: e },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "".concat(a ? "Bearer ".concat(a) : void 0),
                },
              }
            ),
            s =
              null == o
                ? void 0
                : o.data.holders_also_hold.map((e) => ({
                    ...e,
                    bgColor: (0, r.Z)(e.address)
                      ? "#81EAFF"
                      : "#".concat(e.address.replace("0x", "").substring(0, 6)),
                    percentage: (100 * e.holders_percentage).toFixed(2),
                  }));
          return s;
        },
        comparisonProjectActiveUsers = async (e, t) => {
          let a = sessionStorage.getItem("firebaseUser"),
            r = a ? JSON.parse(a).accessToken : void 0,
            o = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/enterprise/active_users/"
              ),
              { compare_to: t ? [t] : [], expression: "daily" },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "".concat(r ? "Bearer ".concat(r) : void 0),
                },
              }
            );
          return null == o ? void 0 : o.data.active_users;
        },
        completionEmail = async (e, t) => {
          let a = await i.default.post(
            "".concat(
              n.basicConfig.bluwhale.walletAPIUrl,
              "/wallets/grouping/completion_email/"
            ),
            { contract_address: e, email: t },
            {
              headers: {
                "content-type": "application/json",
                "X-API-Key": n.basicConfig.bluwhale.apiKey,
              },
            }
          );
          return null == a ? void 0 : a.data;
        },
        getTokenProfile = async (e, t) => {
          let a = await i.default.post(
            "".concat(
              n.basicConfig.bluwhale.walletAPIUrl,
              "/wallets/grouping/token_profiles/"
            ),
            { contract_address: e, time_picker: t || "" },
            {
              headers: {
                "content-type": "application/json",
                "X-API-Key": n.basicConfig.bluwhale.apiKey,
              },
            }
          );
          return null == a ? void 0 : a.data;
        },
        getBuyingPower = async (e, t) => {
          let a = await i.default.post(
            "".concat(
              n.basicConfig.bluwhale.walletAPIUrl,
              "/wallets/grouping/buying_power/"
            ),
            { contract_address: e, time_picker: t || "" },
            {
              headers: {
                "content-type": "application/json",
                "X-API-Key": n.basicConfig.bluwhale.apiKey,
              },
            }
          );
          return null == a ? void 0 : a.data;
        },
        claimingProject = async (e) => {
          let t = sessionStorage.getItem("firebaseUser"),
            a = t ? JSON.parse(t).accessToken : void 0,
            r = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/grouping/claim_project/"
              ),
              { contract_address: e },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "".concat(a ? "Bearer ".concat(a) : void 0),
                },
              }
            );
          return null == r ? void 0 : r.data;
        },
        getGroupingUsers = async function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 100,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            o = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/grouping/users/"
              ),
              { contract_address: e, page: t, limit: a, time_picker: r || "" },
              {
                headers: {
                  "content-type": "application/json",
                  "X-API-Key": n.basicConfig.bluwhale.apiKey,
                },
              }
            );
          return null == o ? void 0 : o.data;
        },
        getEnterpriseCompaign = async (e) => {
          var t;
          if (!e) return;
          let a = await e.get(
            "/wallets/enterprise/message/campaign-history/",
            {}
          );
          return null == a
            ? void 0
            : null === (t = a.data) || void 0 === t
            ? void 0
            : t.data;
        },
        sendComapaign = async (e, t, a) => {
          if (!a) return;
          let n = await a.post(
            "/wallets/enterprise/message/enterprise/campaign/batch-send/",
            { campaign_id: e, receiver_addresses: t }
          );
          return null == n ? void 0 : n.data;
        },
        useCreateCampaign = () => {
          let [e, t] = (0, o.useState)(null),
            [a, n] = (0, o.useState)(!1),
            [i, r] = (0, o.useState)(null),
            createCampaign = async (e, a, i, o, s) => {
              if (s)
                try {
                  var l, c;
                  n(!0);
                  let r = await s.post(
                    "/wallets/enterprise/message/campaign/",
                    {
                      button_text: e,
                      button_url: a,
                      description: i,
                      img_url: o,
                    }
                  );
                  return (
                    t(
                      null == r
                        ? void 0
                        : null === (l = r.data) || void 0 === l
                        ? void 0
                        : l.data
                    ),
                    null == r
                      ? void 0
                      : null === (c = r.data) || void 0 === c
                      ? void 0
                      : c.data
                  );
                } catch (e) {
                  r(e);
                } finally {
                  n(!1);
                }
            };
          return { campaignData: e, isLoading: a, error: i, createCampaign };
        },
        addUserToOutReachList = async (e, t, a) => {
          if (!a) return;
          let i = await a.post(
            "".concat(
              n.basicConfig.bluwhale.walletAPIUrl,
              "/wallets/enterprise/add_wallets_to_outreach_list/"
            ),
            { users: e, source: t },
            { headers: d }
          );
          return null == i ? void 0 : i.data;
        },
        getOutReachList = async (e) => {
          var t;
          if (!e) return;
          let a = await e.get(
            "/wallets/enterprise/message/enterprise/groups/?page=1&limit=1000",
            {}
          );
          return null == a
            ? void 0
            : null === (t = a.data) || void 0 === t
            ? void 0
            : t.data;
        },
        createEnterpriseGroup = async (e, t) => {
          var a;
          if (!t) return;
          let n = await t.post(
            "/wallets/enterprise/message/enterprise/group/",
            { name: e }
          );
          return null == n
            ? void 0
            : null === (a = n.data) || void 0 === a
            ? void 0
            : a.data;
        },
        addUserToEnterpriseGroup = async (e, t, a) => {
          var n;
          if (!a) return;
          let i = await a.post(
            "/wallets/enterprise/message/enterprise/group/members/",
            { group_id: e, member_addresses: t }
          );
          return null == i
            ? void 0
            : null === (n = i.data) || void 0 === n
            ? void 0
            : n.data;
        },
        getSubUser = async (e, t, a) => {
          if (!t) return;
          let r = c[t],
            o = await i.default.post(
              ""
                .concat(
                  n.basicConfig.bluwhale.walletAPIUrl,
                  "/wallets/grouping/subgroup/"
                )
                .concat(r, "/users/"),
              { contract_address: e, time_picker: a || "" },
              {
                headers: {
                  "content-type": "application/json",
                  "X-API-Key": n.basicConfig.bluwhale.apiKey,
                },
              }
            );
          return null == o ? void 0 : o.data;
        },
        getSubActiveUser = async (e, t, a) => {
          var r;
          let o = c[t],
            s = await i.default.post(
              ""
                .concat(
                  n.basicConfig.bluwhale.walletAPIUrl,
                  "/wallets/grouping/subgroup/"
                )
                .concat(o, "/active_users/"),
              {
                contract_address: e,
                expression: "daily",
                time_picker: a || "",
              },
              {
                headers: {
                  "content-type": "application/json",
                  "X-API-Key": n.basicConfig.bluwhale.apiKey,
                },
              }
            );
          return null == s
            ? void 0
            : null === (r = s.data) || void 0 === r
            ? void 0
            : r.active_users;
        },
        getSubHolders = async (e, t, a) => {
          let r = c[t],
            o = await i.default.post(
              ""
                .concat(
                  n.basicConfig.bluwhale.walletAPIUrl,
                  "/wallets/grouping/subgroup/"
                )
                .concat(r, "/holders_also_hold/"),
              { contract_address: e, time_picker: a || "" },
              {
                headers: {
                  "content-type": "application/json",
                  "X-API-Key": n.basicConfig.bluwhale.apiKey,
                },
              }
            ),
            s = holdersUtil(null == o ? void 0 : o.data.collections);
          return s;
        },
        getSubTokenProfile = async (e, t, a) => {
          let r = c[t],
            o = await i.default.post(
              ""
                .concat(
                  n.basicConfig.bluwhale.walletAPIUrl,
                  "/wallets/grouping/subgroup/"
                )
                .concat(r, "/token_profiles/"),
              { contract_address: e, time_picker: a || "" },
              {
                headers: {
                  "content-type": "application/json",
                  "X-API-Key": n.basicConfig.bluwhale.apiKey,
                },
              }
            );
          return null == o ? void 0 : o.data;
        },
        getSubBuyingPower = async (e, t, a) => {
          let r = c[t],
            o = await i.default.post(
              ""
                .concat(
                  n.basicConfig.bluwhale.walletAPIUrl,
                  "/wallets/grouping/subgroup/"
                )
                .concat(r, "/buying_power/"),
              { contract_address: e, time_picker: a || "" },
              {
                headers: {
                  "content-type": "application/json",
                  "X-API-Key": n.basicConfig.bluwhale.apiKey,
                },
              }
            );
          return null == o ? void 0 : o.data;
        },
        getSubChainUtilization = async (e, t, a) => {
          let r = c[t],
            o = await i.default.post(
              ""
                .concat(
                  n.basicConfig.bluwhale.walletAPIUrl,
                  "/wallets/grouping/subgroup/"
                )
                .concat(r, "/chain_utilization/"),
              { contract_address: e, time_picker: a || "" },
              {
                headers: {
                  "content-type": "application/json",
                  "X-API-Key": n.basicConfig.bluwhale.apiKey,
                },
              }
            );
          return null == o ? void 0 : o.data;
        },
        sendMsgList = async (e, t, a, n, i) => {
          if (!i) return;
          let r = await i.post(
            "wallets/messages/".concat(e, "/").concat(t, "/"),
            { text: a, ...(n && { transaction_hash: n }) }
          );
          return null == r ? void 0 : r.data;
        },
        markAllRead = async (e, t, a) => {
          if (!a) return;
          let n = await a.post(
            "wallets/messages/".concat(e, "/").concat(t, "/mark-all-as-read/"),
            {}
          );
          return null == n ? void 0 : n.data;
        },
        readCampaign = async (e, t, a) => {
          if (!a) return;
          let n = await a.put(
            "wallets/campaigns/".concat(e, "/read/").concat(t, "/"),
            {}
          );
          return null == n ? void 0 : n.data;
        },
        getCategories = async () => {
          let e = sessionStorage.getItem("firebaseUser"),
            t = e ? JSON.parse(e).accessToken : void 0,
            a = await i.default.get(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/auth/profile_category/"
              ),
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "".concat(t ? "Bearer ".concat(t) : void 0),
                },
              }
            );
          return null == a ? void 0 : a.data;
        },
        updateProfile = async (e, t, a) => {
          let r = sessionStorage.getItem("firebaseUser"),
            o = r ? JSON.parse(r).accessToken : void 0,
            s = (await o) ? "Bearer ".concat(o) : void 0,
            l = await i.default.post(
              "".concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/auth/update_profile/"
              ),
              {
                category: e,
                ...(t && { project_address: t }),
                ...(a && { project_url: a }),
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "".concat(s),
                },
              }
            );
          return null == l ? void 0 : l.data;
        },
        fetchUserInfo = async (e) => {
          if (!e) return;
          let t = await i.default.post(
            "".concat(
              n.basicConfig.bluwhale.walletAPIUrl,
              "/wallets/get_info/"
            ),
            { wallet: e },
            { headers: { "content-type": "application/json" } }
          );
          return null == t ? void 0 : t.data;
        },
        fetchEnterpriseClaimPoints = async (e) => {
          if (!e) return;
          let t = await e.post("/wallets/enterprise/point/increased/", {});
          return null == t ? void 0 : t.data;
        },
        fetchEnterpriseSimilarWallet = async (e) => {
          if (!e) return;
          let t = await i.default.post(
            "".concat(
              n.basicConfig.bluwhale.walletAPIUrl,
              "/wallets/get_similar_wallets_by_label/"
            ),
            { label: e }
          );
          return null == t ? void 0 : t.data;
        },
        fetchEnterpriseImportPoints = async (e) => {
          if (!e) return;
          let t = await e.get("/wallets/enterprise/point/import_point/", {});
          return null == t ? void 0 : t.data;
        },
        fetchProjectVisibility = async (e, t) => {
          if (t)
            try {
              let a = await t.get(
                "/wallets/enterprise/settings/visibility_options?project_id=".concat(
                  e
                ),
                {}
              );
              return null == a ? void 0 : a.data;
            } catch (e) {}
        },
        updateProjectVisibility = async (e, t, a, n) => {
          if (!n || (!a && "private" === t)) return;
          let i = await n.put(
            "/wallets/enterprise/settings/visibility_options",
            { project_id: e, visibility_type: t, visibility_key: a }
          );
          return null == i ? void 0 : i.data;
        },
        getProjectVisibility = async (e, t, a) => {
          if (!t) {
            if (a) {
              let t = await a.get(
                ""
                  .concat(
                    n.basicConfig.bluwhale.walletAPIUrl,
                    "/wallets/enterprise/permissions/visibility?project_id="
                  )
                  .concat(e),
                {}
              );
              return null == t ? void 0 : t.data;
            }
            let t = await i.default.get(
              ""
                .concat(
                  n.basicConfig.bluwhale.walletAPIUrl,
                  "/wallets/enterprise/permissions/visibility?project_id="
                )
                .concat(e),
              {}
            );
            return null == t ? void 0 : t.data;
          }
          let r = await i.default.get(
            ""
              .concat(
                n.basicConfig.bluwhale.walletAPIUrl,
                "/wallets/enterprise/permissions/visibility?project_id="
              )
              .concat(e, "&visibility_key=")
              .concat(t || ""),
            {}
          );
          return null == r ? void 0 : r.data;
        },
        deleteUserFromOutReachList = async (e, t, a) => {
          if (!a) return;
          let n = await a.delete(
            "/wallets/enterprise/message/enterprise/group/".concat(
              t,
              "/members/"
            ),
            { data: { member_addresses: e } }
          );
          return null == n ? void 0 : n.data;
        },
        deleteOutReachGroup = async (e, t) => {
          if (!t) return;
          let a = await t.delete(
            "/wallets/enterprise/message/enterprise/group/",
            { data: { group_id: e } }
          );
          return null == a ? void 0 : a.data;
        },
        changeTargetGroupName = async (e, t, a) => {
          if (!a) return;
          let n = await a.put("/wallets/enterprise/message/enterprise/group/", {
            group_id: t,
            name: e,
          });
          return null == n ? void 0 : n.data;
        },
        getListPrices = async (e, t) => {
          var a;
          if (!t) return;
          let n = await t.post("/wallets/enterprise/message/prices/batch/", {
            addresses: e,
          });
          return null == n
            ? void 0
            : null === (a = n.data) || void 0 === a
            ? void 0
            : a.data;
        },
        getEnterpriseUserPlan = async (e, t) => {
          if (e)
            try {
              let a = await e.get(
                "wallets/enterprise/plan?user_type=".concat(
                  null != t ? t : "enterprise"
                ),
                {}
              );
              return null == a ? void 0 : a.data;
            } catch (e) {
              return;
            }
        },
        getEnterpriseSocialLinks = async (e, t) => {
          if (t)
            try {
              let { data: a } = await t.post(
                "/wallets/enterprise/users_social_links/",
                { addresses: e }
              );
              return a;
            } catch (e) {
              return;
            }
        },
        getEnterpriseProjectUserRole = async (e, t, a) => {
          if (a)
            try {
              let n = await a.get(
                "/wallets/enterprise/permissions/roles?project_id="
                  .concat(e, "&user_id=")
                  .concat(t),
                {}
              );
              return null == n ? void 0 : n.data;
            } catch (e) {
              return;
            }
        },
        getEnterpriseMsgHistory = async (e) => {
          if (e)
            try {
              var t;
              let a = await e.get(
                "/wallets/enterprise/message/message-history/?page=1&limit=100",
                {}
              );
              return null == a
                ? void 0
                : null === (t = a.data) || void 0 === t
                ? void 0
                : t.data;
            } catch (e) {
              return;
            }
        },
        getEnterpriseCampaignHistory = async (e) => {
          if (e)
            try {
              var t;
              let a = await e.get(
                "/wallets/enterprise/message/campaign-history/",
                {}
              );
              return null == a
                ? void 0
                : null === (t = a.data) || void 0 === t
                ? void 0
                : t.data;
            } catch (e) {
              return;
            }
        },
        sendEnterpriseMsg = async (e, t, a) => {
          if (a)
            try {
              var n;
              let i = await a.post(
                "/wallets/enterprise/message/enterprise/message/batch-send/?user_type=enterprise",
                { target_user_addresses: e, content: t }
              );
              return null == i
                ? void 0
                : null === (n = i.data) || void 0 === n
                ? void 0
                : n.data;
            } catch (e) {
              return;
            }
        },
        getEnterpriseCampaignList = async (e) => {
          if (e)
            try {
              var t;
              let a = await e.get(
                "/wallets/enterprise/message/campaigns/?page=1&page_size=1000",
                {}
              );
              return null == a
                ? void 0
                : null === (t = a.data) || void 0 === t
                ? void 0
                : t.data;
            } catch (e) {
              return;
            }
        };
    },
    26285: function (e, t, a) {
      var n = a(85893),
        i = a(57747),
        r = a(71293),
        o = a(25675),
        s = a.n(o);
      t.Z = (e) => {
        let { children: t, loading: a, minH: o = "180px" } = e;
        return (0, n.jsx)(i.xu, {
          className: "transition-all ease-linear overflow-hidden",
          children: a
            ? (0, n.jsxs)(i.xu, {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minH: o,
                children: [
                  (0, n.jsx)(s(), {
                    width: 36,
                    height: 36,
                    src: "/images/ic_brain.gif",
                    alt: "brain",
                  }),
                  (0, n.jsx)(
                    r.x,
                    {
                      className: "inline-block",
                      mx: "auto",
                      mt: "2",
                      fontSize: "12px",
                      variant: "outline",
                      color: "#B1B1B1",
                      alignSelf: "flex-start",
                      children: "Analyzing...",
                    },
                    "loading"
                  ),
                ],
              })
            : t,
        });
      };
    },
    1840: function (e, t, a) {
      a.d(t, {
        U: function () {
          return n;
        },
      });
      let n = {
        btn_learn_more: "btn_learn_more",
        btn_notify_me_email: "btn_notify_me_email",
        btn_whoHuntYou: "btn_whoHuntYou",
        btn_follow: "btn_follow",
        btn_un_follow: "btn_un_follow",
        btn_my_group_result: "btn_my_group_result",
        btn_profile_now: "btn_profile_now",
        whoHuntYou_list: "whoHuntYou_list",
        checkout_address: "checkout_address",
        btn_contact_us: "btn_contact_us",
        connect_wallet_display: "connect_wallet_display",
        connect_wallet_success: "connect_wallet_success",
        btn_import_users: "btn_import_users",
        rate_limit_exceed: "rate_limit_exceed",
        connectwallet_success: "connectwallet_success",
        first_entry: "first_entry",
        msg_viewed: "msg_viewed",
        msg_timespent: "msg_timespent",
        msg_open: "msg_open",
        msg_cta: "msg_cta",
        btn_openMoreSpots: "btn_openMoreSpots",
        btn_copyShareLink: "btn_copyShareLink",
        share_by: "share_by",
        similar_wallets: "similar_wallets",
        btn_listview: "btn_listview",
        btn_msg_click: "btn_msg_click",
        btn_msg_sent: "btn_msg_sent",
        msg_success: "msg_success",
        msg_failed: "msg_failed",
        btn_claim_profile: "btn_claim_profile",
        linksocial_choose: "linksocial_choose",
        not_have_wallet: "not_have_wallet",
        connectwallet_choose: "connectwallet_choose",
        connectwallet_display: "connectwallet_display",
        signUp_step2_display: "signUp_step2_display",
        signUp_step2_create: "signUp_step2_create",
        signUp_step2_cancel: "signUp_step2_cancel",
        signUp_click: "signUp_click",
        signInSsocial_choose: "signInSsocial_choose",
        signUpSsocial_choose: "signUpSsocial_choose",
        click_recommendedProjects: "click_recommendedProjects",
        btn_addUsers_to_outreach: "btn_addUsers_to_outreach",
        btn_userlist_sendMsg: "btn_userlist_sendMsg",
        btn_compare: "btn_compare",
        btn_importWallet_Submit: "btn_importWallet_Submit",
        btn_buy_trending_spot: "btn_buy_trending_spot",
        buy_trending_spot_success: "buy_trending_spot_success",
        btn_trade_and_earn: "btn_trade_and_earn",
        claimed_spot: "claimed_spot",
        btn_sell_spot: "btn_sell_spot",
        btn_sell_spot_confirm: "btn_sell_spot_confirm",
        btn_buy_market_spot: "btn_buy_market_spot",
        buy_market_spot_confirm: "buy_market_spot_confirm",
      };
    },
    75776: function (e, t, a) {
      a.d(t, {
        Ow: function () {
          return n;
        },
        R2: function () {
          return r;
        },
        T0: function () {
          return s;
        },
        d6: function () {
          return o;
        },
        u$: function () {
          return l;
        },
        zr: function () {
          return i;
        },
      });
      let n = {
          BNB: "#FFD700",
          MATIC: "#00FF00",
          COMP: "#32CD32",
          LINK: "#00CED1",
          USDT: "#008080",
          USDC: " #9400D3",
          ETH: "#0096FF",
          Ethereum: "#0096FF",
        },
        i = ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
        r = "0x611c48B5B48344CeDD71D7edfEec37719c24E2b0",
        o = "0x192931B5919B237c4b0cC2B4Ef9264d20d9B3b9b",
        s = "0x0000000000000000000000000000000000000000",
        l = "0x0000000000000000000000000000000000000000";
    },
    29173: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return useLoginByBluwhaleAuth;
        },
      });
      var n = a(22326),
        i = a(7963),
        r = a(5121),
        o = a(77132),
        s = a(23152);
      function useLoginByBluwhaleAuth(e) {
        let { BASIC_URL: t } = e,
          a = (0, i.p)(),
          { getRecaptchaTokenAsync: l } = (0, s.Z)();
        return {
          onFirebaseWeb3ReqeustMessage: async function (e) {
            let { address: a, chainId: n, type: i } = e,
              o = JSON.stringify({ address: a, chain_id: 1, type: i }),
              s = await r.default.post(
                "".concat(t, "/web3/request-message/"),
                o,
                { headers: { "Content-Type": "application/json" } }
              ),
              l = await s.data,
              { message: c } = l;
            return c;
          },
          onFirebaseWeb3Signin: async function (e) {
            let { message: i, signature: s, address: c } = e;
            try {
              let e = await l("submit"),
                a = JSON.stringify({
                  message: i,
                  signature: s,
                  address: c,
                  recaptcha_token: e,
                }),
                u = await r.default.post("".concat(t, "/web3/sign-in/"), a, {
                  headers: { "Content-Type": "application/json" },
                }),
                p = await u.data,
                d = await (0, o._p)(n.I8, p.token),
                g = await d.user.getIdToken(!0);
              return { credential: d, token: g };
            } catch (e) {
              var u, p, d, g;
              (null == e
                ? void 0
                : null === (u = e.response) || void 0 === u
                ? void 0
                : u.status) === 400 &&
                (null == e
                  ? void 0
                  : null === (g = e.response) || void 0 === g
                  ? void 0
                  : null === (d = g.data) || void 0 === d
                  ? void 0
                  : null === (p = d.detail) || void 0 === p
                  ? void 0
                  : p.includes("ReCAPTCHA")) &&
                a({
                  description: "ReCAPTCHA validation failed. Please try again.",
                  status: "error",
                  position: "top",
                });
              return;
            }
          },
          onFirebaseWeb3SuiSignin: async function (e) {
            let { message: i, signature: s, address: c } = e;
            try {
              let e = await l("submit"),
                a = JSON.stringify({
                  message: i,
                  signature: s,
                  address: c,
                  recaptcha_token: e,
                }),
                u = await r.default.post("".concat(t, "/web3/sign-in/sui"), a, {
                  headers: { "Content-Type": "application/json" },
                }),
                p = await u.data,
                d = await (0, o._p)(n.I8, p.token),
                g = await d.user.getIdToken(!0);
              return { credential: d, token: g };
            } catch (e) {
              var u, p, d, g;
              (null == e
                ? void 0
                : null === (u = e.response) || void 0 === u
                ? void 0
                : u.status) === 400 &&
                (null == e
                  ? void 0
                  : null === (g = e.response) || void 0 === g
                  ? void 0
                  : null === (d = g.data) || void 0 === d
                  ? void 0
                  : null === (p = d.detail) || void 0 === p
                  ? void 0
                  : p.includes("ReCAPTCHA")) &&
                a({
                  description: "ReCAPTCHA validation failed. Please try again.",
                  status: "error",
                  position: "top",
                });
              return;
            }
          },
          onSignin: async function (e) {
            let { token: n, userType: i, isSignUp: o, referralCode: s } = e,
              l = JSON.stringify({
                token: n,
                user_type: i,
                auto_signup: o,
                referral_code: s,
              });
            try {
              let e = await r.default.post("".concat(t, "/sign-in/"), l, {
                  headers: { "Content-Type": "application/json" },
                }),
                a = await e.data;
              return a;
            } catch (e) {
              var c, u, p, d, g, f, h, w;
              if (
                (null == e
                  ? void 0
                  : null === (c = e.response) || void 0 === c
                  ? void 0
                  : c.status) === 403
              ) {
                a({
                  description:
                    null == e
                      ? void 0
                      : null === (f = e.response) || void 0 === f
                      ? void 0
                      : null === (g = f.data) || void 0 === g
                      ? void 0
                      : g.detail,
                  status: "error",
                  position: "top",
                });
                return;
              }
              if (
                (null == e
                  ? void 0
                  : null === (u = e.response) || void 0 === u
                  ? void 0
                  : u.status) === 400
              ) {
                a({
                  description:
                    (null == e
                      ? void 0
                      : null === (w = e.response) || void 0 === w
                      ? void 0
                      : null === (h = w.data) || void 0 === h
                      ? void 0
                      : h.detail) || "User does not exist",
                  status: "error",
                  position: "top",
                });
                return;
              }
              a({
                description:
                  (null == e
                    ? void 0
                    : null === (d = e.response) || void 0 === d
                    ? void 0
                    : null === (p = d.data) || void 0 === p
                    ? void 0
                    : p.detail) || "System error",
                status: "error",
                position: "top",
              });
              return;
            }
          },
          onLink: async function (e) {
            let { token: n, preToken: i, userType: o, media_type: s } = e,
              l = JSON.stringify({
                token: n,
                pre_token: i,
                user_type: o,
                ...(s && { media_type: s }),
              });
            try {
              let e = await r.default.post("".concat(t, "/link/"), l, {
                  headers: { "Content-Type": "application/json" },
                }),
                a = await e.data;
              return a;
            } catch (e) {
              var c;
              (null == e
                ? void 0
                : null === (c = e.response) || void 0 === c
                ? void 0
                : c.status) === 403 &&
                a({
                  description:
                    "The chosen social account is linked to another profile. Kindly opt for a different identity for your registration",
                  status: "error",
                  position: "top",
                });
              return;
            }
          },
          onLinkedinSignin: async function (e) {
            let { code: a, redirect_uri: i } = e,
              s = JSON.stringify({ code: a, redirect_uri: i });
            try {
              let e = await r.default.post(
                  "".concat(t, "/linkedin/sign-in/"),
                  s,
                  { headers: { "Content-Type": "application/json" } }
                ),
                a = await e.data,
                i = await (0, o._p)(n.I8, a.token),
                l = await i.user.getIdToken(!0);
              return { credential: i, token: l };
            } catch (e) {
              return;
            }
          },
          onTelegramSignin: async function (e) {
            let a = JSON.stringify(e);
            try {
              let e = await r.default.post(
                  "".concat(t, "/telegram/sign-in/"),
                  a,
                  { headers: { "Content-Type": "application/json" } }
                ),
                i = await e.data,
                s = await (0, o._p)(n.I8, i.token),
                l = await s.user.getIdToken(!0);
              return { credential: s, token: l };
            } catch (e) {
              return;
            }
          },
          onPrivySignin: async function (e) {
            let { token: a } = e,
              i = JSON.stringify({ token: a });
            try {
              let e = await r.default.post("".concat(t, "/privy/sign-in/"), i, {
                  headers: { "Content-Type": "application/json" },
                }),
                a = await e.data,
                s = await (0, o._p)(n.I8, a.token),
                l = await s.user.getIdToken(!0);
              return { credential: s, token: l };
            } catch (e) {
              return;
            }
          },
          onDiscordSignin: async function (e) {
            let { code: a, redirect_uri: i } = e,
              s = JSON.stringify({ code: a, redirect_uri: i });
            try {
              let e = await r.default.post(
                  "".concat(t, "/discord/sign-in/"),
                  s,
                  { headers: { "Content-Type": "application/json" } }
                ),
                a = await e.data,
                i = await (0, o._p)(n.I8, a.token),
                l = await i.user.getIdToken(!0);
              return { credential: i, token: l };
            } catch (e) {
              return;
            }
          },
        };
      }
    },
    23152: function (e, t, a) {
      var n = a(50259);
      t.Z = function () {
        let { executeRecaptcha: e } = (0, n.xX)();
        return {
          getRecaptchaTokenAsync: async function (t) {
            if (!e) return "";
            let a = await e(t);
            return a;
          },
        };
      };
    },
    32745: function (e, t, a) {
      a.d(t, {
        PX: function () {
          return isURL;
        },
        Zo: function () {
          return cutEllipsisTxtWithLength;
        },
        ec: function () {
          return getLastfourchar;
        },
        ek: function () {
          return getEllipsisTxt;
        },
        ge: function () {
          return getDomain;
        },
        kr: function () {
          return separator;
        },
        p6: function () {
          return formatDate;
        },
        pX: function () {
          return trailingZeros;
        },
        uf: function () {
          return formatNumber;
        },
        vV: function () {
          return isValidEmail;
        },
        zO: function () {
          return formatToTwoDecimalPlaces;
        },
      });
      let getEllipsisTxt = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
          return e
            ? "".concat(e.slice(0, t), "...").concat(e.slice(e.length - t))
            : "";
        },
        getLastfourchar = (e) =>
          e
            ? "".concat(
                e
                  .slice(e.length - 2)
                  .split("")
                  .join(" ")
              )
            : "",
        formatToTwoDecimalPlaces = (e) => {
          if (!e || e <= 1) return "--";
          let t = separator(e);
          return t;
        },
        cutEllipsisTxtWithLength = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
          return e && e.length > t ? "".concat(e.slice(0, t), "...") : e || "";
        };
      function separator(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!e && 0 !== e) return "";
        let a = e.toString().split(".");
        if (
          ((a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), 2 === a.length)
        ) {
          var n;
          a[1] =
            null === (n = a[1]) || void 0 === n ? void 0 : n.substring(0, t);
        }
        return a.join(".");
      }
      function formatNumber(e, t) {
        let a = ["", "K", "M", "B", "T"],
          n = 0;
        for (; e >= 1e3 && n < a.length - 1; ) (e /= 1e3), n++;
        let i = null == e ? void 0 : e.toFixed(null != t ? t : 1);
        return (
          -1 !== i.indexOf(".") &&
            (i = (i = i.replace(/\.0+$/, "")).replace(/(\.\d*[1-9])0+$/, "$1")),
          i + a[n]
        );
      }
      function isURL(e) {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(e);
      }
      function isValidEmail(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          String(e).toLowerCase()
        );
      }
      function getDomain(e) {
        return (e = (e = (e = e.replace(/^https?:\/\//, "")).replace(
          /^www\./,
          ""
        )).replace(/\/$/, ""));
      }
      function formatDate(e) {
        let t = new Date(e),
          a = String(t.getDate()).padStart(2, "0"),
          n = String(t.getMonth() + 1).padStart(2, "0"),
          i = t.getFullYear();
        return "".concat(a, "/").concat(n, "/").concat(i);
      }
      function trailingZeros(e) {
        return e.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "");
      }
    },
  },
]);

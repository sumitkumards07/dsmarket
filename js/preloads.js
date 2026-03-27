
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CNeLQ-Or.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.X3PI6hyi.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.CrO6zN-6.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.o8q3xdVS.js","/cdn/shopifycloud/checkout-web/assets/c1/unactionable-errors.Ch4zDMkk.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer.o01P0q0Z.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency.O08nlv0R.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal.DGAduwHT.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops.UC80TmKE.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.D8Dj8EbF.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage._2ZZj4ck.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.RrLX4Nch.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers.-kKQn7P2.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.k0b0j39I.js","/cdn/shopifycloud/checkout-web/assets/c1/useForceShopPayUrl.BRKofLpc.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.BBnzDw10.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.CqeVu_yj.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.4FvYfbvZ.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.l8Y1X6la.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.40Wt_SNQ.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.DiWi4eAR.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.CHcQAw41.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.0qGVHFIG.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin.Dlk-sYjS.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.DaFUEyF7.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.FB18SgjZ.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery.CxaSFsm0.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.CqlsJj1w.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.FLG6oybS.js","/cdn/shopifycloud/checkout-web/assets/c1/flags.BVRBPog-.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.kUMMif6m.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.Be4-63O3.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options.iAg3vrGl.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.DrF-0alX.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.RgEK62EP.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.ChvkrtVz.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.au8IBghB.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.DeqbGT7B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useHasOrdersFromMultipleShops.B7GwbFYI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CKTqepKH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.oEoBAbtG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.DHxWiy4k.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OrderEditVaultedDelivery.D3uP-fLI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeDescriptionText.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
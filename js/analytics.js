/* ==========================================================================
   Google Analytics 4 + conversion events
   --------------------------------------------------------------------------
   1) Put your Measurement ID below (looks like  G-XXXXXXXXXX).
      While it is empty NOTHING is loaded and NO data leaves the site.
   2) Events sent (GA4 > Admin > Events):
        whatsapp_click  { link_location, project_name?, language }
        generate_lead   { lead_source:'contact_form', service, language }   <- mark as "Key event"
        view_project    { project_name, language }
        language_change { language }
   3) Consent: set REQUIRE_CONSENT = true if you add a cookie banner (KVKK/GDPR).
      Analytics stays "denied" until your banner calls  lookartGrantConsent().
   4) Debug: open the site with  ?ga_debug=1  (events are logged in the console
      and show up in GA4 > Admin > DebugView).
   ========================================================================== */
const GA_MEASUREMENT_ID = 'G-Z3TSTWHBDB';
const REQUIRE_CONSENT = false;

(function () {
    const valid = /^G-[A-Z0-9]{6,}$/.test(GA_MEASUREMENT_ID);
    const debug = /[?&]ga_debug=1/.test(location.search);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }

    if (valid) {
        gtag('consent', 'default', {
            analytics_storage: REQUIRE_CONSENT ? 'denied' : 'granted',
            ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
        });
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true, debug_mode: debug || undefined });
        const s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
        document.head.appendChild(s);
    }

    window.lookartGrantConsent = function () { if (valid) gtag('consent', 'update', { analytics_storage: 'granted' }); };

    window.trackEvent = function (name, params) {
        params = Object.assign({ language: (typeof currentLanguage !== 'undefined' ? currentLanguage : 'ar') }, params || {});
        if (debug) console.log('[analytics]', name, params, valid ? '' : '(no GA ID set — not sent)');
        if (valid) gtag('event', name, params);
    };

    // WhatsApp clicks — one delegated listener covers hero, floating button, contact, footer and project modal
    document.addEventListener('click', function (e) {
        const a = e.target.closest && e.target.closest('a[href*="wa.me"]');
        if (!a) return;
        let loc = 'other';
        if (a.closest('.whatsapp-floating')) loc = 'floating_button';
        else if (a.closest('.project-modal')) loc = 'project_modal';
        else if (a.closest('.hero')) loc = 'hero';
        else if (a.closest('.footer')) loc = 'footer';
        else if (a.closest('#contact')) loc = 'contact_section';
        else if (a.closest('.navbar')) loc = 'navbar';
        const params = { link_location: loc };
        const modal = a.closest('.project-modal');
        if (modal && modal.querySelector('h2')) params.project_name = modal.querySelector('h2').textContent;
        window.trackEvent('whatsapp_click', params);
    }, true);

    document.addEventListener('click', function (e) {
        const b = e.target.closest && e.target.closest('.lang-btn');
        if (b) window.trackEvent('language_change', { language: b.getAttribute('data-lang') });
    }, true);
})();

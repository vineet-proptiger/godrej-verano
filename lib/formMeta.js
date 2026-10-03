export function getParam(name) {
  if (typeof window === 'undefined') return ''
  return new URLSearchParams(window.location.search).get(name) || ''
}

export function buildTrackingFields() {
  return {
    utm_source:    getParam('utm_source'),
    utm_medium:    getParam('utm_medium'),
    utm_campaign:  getParam('utm_campaign'),
    utm_term:      getParam('utm_term'),
    utm_content:   getParam('utm_content'),
    campaign_name: getParam('campaign_name'),
    adgroup_name:  getParam('adgroup_name'),
    gclid:         getParam('gclid'),
    gbraid:        getParam('gbraid'),
    wbraid:        getParam('wbraid'),

    // New Google Parameters
    // google_campaign_id:   getParam('google_campaign_id'),
    google_campaign_id:   getParam('campaign_name'),
    google_ad_group_id:   getParam('google_ad_group_id'),
    google_ad_group_name: getParam('google_ad_group_name'),
    google_ad_id:         getParam('google_ad_id'),
    google_wbraid:        getParam('google_wbraid'),
    google_gbraid:        getParam('google_gbraid'),
    google_keyword:       getParam('google_keyword'),
    google_matchtype:     getParam('google_matchtype'),
    google_network:       getParam('google_network'),
    google_device:        getParam('google_device'),
    google_gclid:         getParam('google_gclid'),

    // New UTM Parameters
    utm_campaign_id:      getParam('utm_campaign_id'),
    utm_adgroup:          getParam('utm_adgroup'),
    utm_adgroup_id:       getParam('utm_adgroup_id'),
    utm_ad_id:            getParam('utm_ad_id'),
    utm_keyword:          getParam('utm_keyword'),
    utm_matchtype:        getParam('utm_matchtype'),
    utm_network:          getParam('utm_network'),
    utm_device:           getParam('utm_device'),
    utm_gclid:            getParam('utm_gclid'),
    utm_gbraid:           getParam('utm_gbraid'),
    utm_wbraid:           getParam('utm_wbraid'),

    SourceURL:     typeof window !== 'undefined' ? window.location.href : '',
    landing_page:  typeof window !== 'undefined' ? window.location.href : '',
    referrer:      typeof document !== 'undefined' ? document.referrer : '',
    device:        typeof window !== 'undefined' ? (window.innerWidth < 768 ? 'mobile' : 'desktop') : '',
    ip_address:    '',
    geo_city:      '',
    geo_region:    '',
    geo_postal:    '',
    geo_country:   '',
    website:       '',
  }
}

let vendorContainer = {
    'vue': require('vue'),
    'vuex': require('vuex'),
    'vue-router': require('vue-router'),
}

if (process.browser) {
    window.engineer = {
        require (name) {
            return vendorContainer[name]
        }
    }
}
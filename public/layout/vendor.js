let vendorContainer = {
    'vue': require('vue'),
    // 'vuex': require('vuex'),
    // 'vue-router': require('vue-router'),
}


window.engineer = {
    require (name) {
        return vendorContainer[name]
    }
}
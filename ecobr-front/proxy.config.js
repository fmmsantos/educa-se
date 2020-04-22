const PROXY_CONFIG = [
    {
        context: '/api/**',
        target: 'http://localhost:8080'
        //target: 'http://35.193.46.58:8081'
    }
]
module.exports = PROXY_CONFIG;

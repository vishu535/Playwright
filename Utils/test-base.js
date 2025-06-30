const base = require('@playwright/test')

exports.customtest = base.test.extend({
    testData:{
        username : 'salesforce2etest-5clt@force.com',
        password : 'Testing@123'
    }

})
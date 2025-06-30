class ApiUtils{
    condtructor(apiContext, loginPayload){
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

    async getToken(){
        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {data:this.loginPayload})
        const responseJson = loginResponse.json()
        token = responseJson.token;
        console.log(token)
        return token;
    }

    async createOrder(orderPayload){
        const orderResponse = await this.apiContext.post('', {data: orderPayload, headers:{'Authorization': this.getToken(), 'Content-Type': 'application/json'},
    })
        const orderRespJson = await orderResponse.json()
        console.log(orderRespJson)
        orderId = orderRespJson.orders[0]
        return orderId;

    }
}
module.exports = {ApiUtils};
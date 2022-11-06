exports.handler= async(event, context) =>  {
    console.log("In netlfiy",process.env.REACT_APP_API_KEY)
    return {
        statusCode: 200,
        body: JSON.stringify({
        api: process.env.REACT_APP_API_KEY
        })
    }
}
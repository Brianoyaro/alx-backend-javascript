export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    return {status: 200, body: 'success'}})
  .then(console.log('Got a response from the API'))
  .catch(() => {return})
  /*if (promise.then()){
    console.log('Got a response from the API')
    return {status: 200, body: 'success'}
  } else {
    return {}
  }*/
;}

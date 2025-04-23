function logMessage(data, message, type){
  console.log(`${data.toLocaleString('en-US')} - ${type.toUpperCase()} - ${message}`);

}

logMessage(new Date(), 'wrong password', 'warning')

function logMessageDate(date){
  return function(message, type){
    logMessageNow(date, message, type)
  }
}

// let logMessageDate = (data) =>(message,type) => logMessage(data,message,type)


let logMessageNow = logMessageDate(new Date())




logMessageNow('wrong password', 'warning ')
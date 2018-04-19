//All helper methods so you can use them in any other file and do not need to right code for multiple time
export const LogType = {
  ERROR: "ERROR",
  DEBUG: "DEBUG",
  INFO: "INFO"
};

/*
  *To create custom log so in future if u need to stop showing log u dont need to go 
  * and remove the log from all file simply comment out bellow and it wil stop showing log 
*/
export function customLog(str, logType) {
  switch (logType) {
    case LogType.ERROR:
      console.error(str);
      break;
    case LogType.DEBUG:
      console.debug(str);
      break;
    case LogType.INFO:
      console.info(str);
      break;

    default:
      console.log("====================================");
      console.log(str);
      console.log("===================================");
      break;
  }
}

//To check for valid string
export function checkForValidString(str) {
  var re = /^([a-z0-9]{5,})$/;
  return re.test(str);
}

//To check for valid email
export function checkForValidEmail(email) {
  var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
}

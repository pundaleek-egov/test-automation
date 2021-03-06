function waitTimeSec(x) {
    karate.log('sleeping');
    java.lang.Thread.sleep(x * 1000);
}

/**
 * Generates random string
 * @param {character length of string} x
 * @returns random string
 */
function ranString(x) {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, x);
}

/**
 * Generates random integer
 * @param {no of digits} x
 * @returns random integer
 */
function ranInteger(x) {
    if (x) {
        return new java.util.Random().nextInt(Math.pow(10, x));
    } else {
        return new java.util.Random().nextInt(100000000);
    }
}

/**
 * Generates todays date/time in epoch format
 * @returns todays date/time
 */
function getCurrentEpochTime(){
    return new java.util.Date().getTime();
}

/**
 * Generates tomorrows date/time in epoch format
 * @returns tomorrows date/time
 */
function getTomorrowEpochTime(){
    return new Date(new java.util.Date().getTime() + (1000 * 60 * 60 * 24)).getTime();
}

/**
 * Generates date/time in epcoh format
 * @param {no of days in future from now} days
 * @returns date/time in epoch format
 */
function getEpochDate(days){
    return new Date(new java.util.Date().getTime() + (1000 * 60 * 60 * 24 * days)).getTime();
}

/*function validateAddress(request, response){

if(request.Property.address.city == karate.jsonPath(response,"$.Properties[*].address.city")[0] && 
	request.Property.address.doorNo == karate.jsonPath(response,"$.Properties[*].address.doorNo")[0] && 
	request.Property.address.locality.code == karate.jsonPath(response,"$.Properties[*].address..code")[0] && 
	request.Property.address.locality.area == karate.jsonPath(response,"$.Properties[*].address..area")[0]){
	return true;
	} else {
	
	return false;
	}
}*/

/**
 * Generates random mobile number
 * @param {no fo digits} x
 * @returns random mobile number
 */
function randomMobileNumGen(x)
{
    var tenMultiplier = Math.pow(10, x)
    var randNo,mostSigDigit= 0;
    //while(continuIter){
        while (mostSigDigit == 0){
            randNo = Math.random();
            var mostSigDigit = Math.floor(randNo * 10);
        }
        var randMobNo = Math.floor(randNo * tenMultiplier);
        var intVsl = parseInt(randMobNo);
        //if(intVsl > (tenMultiplier-1)){
        //    continuIter = false;
       // }
    //}    
    return intVsl;
}

/**
 * Generates random string using predefined character set
 * @param {character length of string} length
 * @returns random string
 */
function ranString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 /**
 * Converts string to an integer
 * @param {string} x
 * @returns converted integer
 */
 function stringToInteger(x) {
    return parseInt(x);
}
// selectors.js
const SELECTORS = {
    LOGIN_PAGE: {
        USERNAME_INPUT: 'input[name="username"]',
        PASSWORD_INPUT: 'input[name="password"]',
        LOGIN_BUTTON: 'input[value="Log In"]',
        errorMessageXPath: 'div#rightPanel > p',
        FORGOT_LOGIN_INFO_LINK_XPath: '//*[@id="loginPanel"]/p[1]/a',  
        REGISTER_LINK_XPath: '//*[@id="loginPanel"]/p[2]/a', 
    },
    Forgot_Login_Info_Page :{        
        FIRSTNAME_ERROR_MESSAGE: 'input[id="firstName.errors"]',
        LASTNAME_ERROR_MESSAGE: 'input[id="lastName.errors"]',
        ADDRESS_ERROR_MESSAGE: 'input[id="address.street.errors"]',
        CITY_ERROR_MESSAGE: 'input[id="address.city.errors"]',
        STATE_ERROR_MESSAGE: 'input[id="address.state.errors"]',
        ZIPCODE_ERROR_MESSAGE: 'input[id="address.zipCode.errors"]',
        SSN_ERROR_MESSAGE: 'input[id="ssn.errors"]',
        Find_My_Login_Info_BUTTON: 'input[class="button"]',
        WrongFieldError_Message: 'div#rightPanel'
    },
    
    REGISTRATION_PAGE: {
        FIRSTNAME_INPUT: 'input[name="customer.firstName"]',
        LASTNAME_INPUT:'input[name="customer.lastName"]',
        ADDRESS_INPUT: 'input[name="customer.address.street"]',
        CITY_INPUT: 'input[name="customer.address.city"]',
        STATE_INPUT: 'input[name = "customer.address.state"]',
        ZIPCODE_INPUT: 'input[name="customer.address.zipCode"]',
        PHONE_INPUT: 'input[name="customer.phoneNumber"]',
        SSN_INPUT: 'input[name="customer.ssn"]',

        USERNAME_INPUT: 'input[name="customer.username"]',
        PASSWORD_INPUT: 'input[name="customer.password"]',
        CONFIRMPASSWORD_INPUT: 'input[name="repeatedPassword"]',

        FIRSTNAME_ERROR: '//*[@id="customer.firstName.errors"]',
        LASTNAME_ERROR: '//*[@id="customer.lastName.errors"]',
        ADDRESS_ERROR: '//*[@id="customer.address.street.errors"]',
        CITY_ERROR: '//*[@id="customer.address.city.errors"]',
        STATE_ERROR: '//*[@id="customer.address.state.errors"]',
        ZIPCODE_ERROR: '//*[@id="customer.address.zipCode.errors"]',
        SSN_ERROR: '//*[@id="customer.ssn.errors"]',
        USERNAME_ERROR: '//*[@id="customer.username.errors"]',
        PASSWORD_ERROR: '//*[@id="customer.password.errors"]',
        CONFIRMPASSWORD_ERROR: '//*[@id="repeatedPassword.errors"]',

        REGISTER_BUTTON: 'input[value="Register"]',



        SUCCESS_PANEL_XPath: '//*[@id="rightPanel"]/p', 
 
    } 
};

module.exports = SELECTORS;
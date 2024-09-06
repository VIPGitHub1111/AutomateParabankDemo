// constants.js
const CREDENTIALS = {
    LOGIN_URL: 'https://parabank.parasoft.com/parabank/index.htm',
    Account_Login_URL: 'https://parabank.parasoft.com/parabank/overview.htm',
    VALID_USERNAME: 'EPam',
    VALID_PASSWORD: 'login123',
    INVALID_USERNAME: 'invalidUser',
    INVALID_PASSWORD: 'invalidPassword',
    EMPTY_USERNAME: '',
    EMPTY_PASSWORD: '',
    emptyFieldErrorMessage: 'Please enter a username and password.',
    wrongCredentialsErrorMessage: 'An internal error has occurred and has been logged.',
   //wrongCredentialsErrorMessage: 'The username and password could not be verified.',

    FORGOT_LOGIN_INFO:{
        Forgot_Login_Info_URL: 'https://parabank.parasoft.com/parabank/lookup.htm',
        FLI_FIRSTNAME: 'Elle',
        FLI_LASTNAME: 'Pam',
        FLI_ADDRESS: '110 E. Third Street',
        FLI_CITY: 'San Dimas',
        FLI_STATE: 'CA',
        FLI_ZIPCODE: '91773',
        FLI_SSN: '412012141',
        
        FLI_empty_FIRSTNAME:'',
        FLI_empty_LASTNAME:'',
        FLI_empty_ADDRESS:'',
        FLI_empty_CITY:'',
        FLI_empty_STATE:'',
        FLI_empty_ZIPCODE:'',
        FLI_empty_SSN:'',



        FLI_emptyFIRSTNAME_ErrorMessage: 'First name is required.',
        FLI_emptyLASTNAME_ErrorMessage: 'Last name is required.',
        FLI_emptyADDRESS_ErrorMessage: 'Address is required.',
        FLI_emptyCITY_ErrorMessage: 'City is required.',
        FLI_emptySTATE_ErrorMessage: 'State is required.',
        FLI_emptyZIPCODE_ErrorMessage: 'Zip Code is required.',
        FLI_emptySSN_ErrorMessage: 'Social Security Number is required.',

        FLI_INVALID_FIRSTNAME: 'SAM1',
        FLI_INVALID_ZIPCODE:'154256',
        
        wrongFieldErrorMessage: 'The customer information provided could not be found.'
        
    },

    REGISTRATION: {
        REGISTER_URL: 'https://parabank.parasoft.com/parabank/register.htm',
        Register_FIRSTNAME: 'Samue1',
        Register_LASTNAME: 'Joseph',
        Register_ADDRESS: '271 W. Pearl Street',
        Register_CITY: 'Pomona',
        Register_STATE: 'CA',
        Register_ZIPCODE: '91767',
        Register_PHONE: '323-647-2001',
        Register_SSN: '412012774',
        Register_USERNAME: 'Samue1',
        Register_PASSWORD: 'login1231',
        Register_CONFIRMPASSWORD: 'login1231',
        SuccessRegistrationMessage: 'Your account was created successfully. You are now logged in.',


        Register_empty_FIRSTNAME:'',
        Register_empty_LASTNAME:'',
        Register_empty_ADDRESS:'',
        Register_empty_CITY:'',
        Register_empty_STATE:'',
        Register_empty_ZIPCODE:'',
        Register_empty_SSN:'',

        Register_EmptyFIRSTNAME_ErrorMessage :'First name is required.',
        Register_EmptyLASTNAME_ErrorMessage :'Last name is required.',
        Register_EmptyADDRESS_ErrorMessage :'Address is required.',
        Register_EmptyCITY_ErrorMessage :'City is required.',
        Register_EmptySTATE_ErrorMessage :'State is required.',
        Register_EmptyZIPCODE_ErrorMessage :'Zip Code is required.',
        Register_EmptySSN_ErrorMessage :'Social Security Number is required.',
        Register_EmptyUSERNAME_ErrorMessage :'Username is required.',
        Register_EmptyPASSWORD_ErrorMessage :'Password is required.',
        Register_EmptyCONFIRMPASSWORD_ErrorMessage :'Password confirmation is required.',
        Duplicate_ConfirmPassword_ErrorMessage:'Passwords did not match.',
        Existing_Username_ErrorMessage:'This username already exists.',
    }
};

module.exports = CREDENTIALS;
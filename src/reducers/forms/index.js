import { combineForms } from 'react-redux-form';

export default combineForms(
    {
        signup: {
            firstName: '',
            lastName:  '',
            password:  '',
            email:     '',
            invite:    '',
        },
        login: {
            email:    '',
            password: '',
            remember: false,
        },
    },
    'forms'
);
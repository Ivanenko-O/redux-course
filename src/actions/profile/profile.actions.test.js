import actions from './';

const user = {
    firstName: '',
    lastName: '',
};

const error = { massage: 'an error ocurred'};

describe('Profile actions:', () => {
    test('Fill profile action', () => {
        expect(actions.fillProfile(user)).toMatchSnapshot();
    });
    test('Update profile action', () => {
        expect(actions.updateProfile(user)).toMatchSnapshot();
    });
    test('UpdateProfileSuccess action', () => {
        expect(actions.updateProfileSuccess(user)).toMatchSnapshot();
    });
    test('updateProfileFail  action', () => {
        expect(actions.updateProfileFail(error)).toMatchSnapshot();
    });


});
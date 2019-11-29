import auth from './requests'

const mockMsg = 'Error'

describe("Auth Reducer", () => {
    test("SET_ERROR_MESSAGE", () => {
        const testAction = {
            type: 'SET_ERROR_MESSAGE',
            payload: {
                message: mockMsg
            }
        };
        const newState = auth(undefined, testAction);
        expect(newState.loginError).toBe(undefined);
    })
    test("CLEAR_ERROR_MESSAGE", () => {
        const testAction = {
            type: 'CLEAR_ERROR_MESSAGE',
            payload: {
                message: mockMsg
            }
        };
        const newState = auth(undefined, testAction);
        expect(newState.loginError).toBe(undefined);
    })

})
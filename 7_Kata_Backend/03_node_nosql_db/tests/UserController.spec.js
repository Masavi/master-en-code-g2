jest.mock('../models/User.js', () => jest.requireActual('../models/__mocks__/User.js'));
const UserController = require('../controllers/UserController');

describe('User Controller', () => {
    it('creates user successfully', async () => {
        const req = {
            body: {
                first_name: 'Krystel',
                last_name: 'Baca',
                email: 'krystel@gmail.com'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }

        await UserController.create(req, res);
        expect(res.status.mock.calls).toEqual([[201]]);
        expect(res.json.mock.calls).toEqual([[
            expect.objectContaining({
                user: expect.objectContaining({
                    email: 'krystel@gmail.com'
                })
            })
        ]])
    });
});

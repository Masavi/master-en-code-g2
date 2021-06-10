jest.mock('../models/User.js', () => jest.requireActual('../models/__mocks__/User.js'));
const UserController = require('../controllers/UserController');

describe('User Controller', () => {
    // it('creates user successfully', async () => {
    //     const req = {
    //         body: {
    //             first_name: 'Krystel',
    //             last_name: 'Baca',
    //             email: 'krystel@gmail.com'
    //         }
    //     };
    //     const res = {
    //         status: jest.fn().mockReturnThis(),
    //         json: jest.fn(),
    //     }

    //     await UserController.create(req, res);
    //     expect(res.status.mock.calls).toEqual([[201]]);
    //     expect(res.json.mock.calls).toEqual([[
    //         expect.objectContaining({
    //             user: expect.objectContaining({
    //                 email: 'krystel@gmail.com'
    //             })
    //         })
    //     ]])
    // });

    describe('Update One User By Id', () => {
        it('updates one user by id successfully', async () => {
            const req = {
                params: {
                    idUser: '60bed2fc7361601a4c78f6ff',
                },
                body: {
                    first_name: 'Jhonatan'
                }
            };

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await UserController.updateOne(req, res);
            expect(res.status.mock.calls).toEqual([[200]]);
            expect(res.json.mock.calls).toEqual([[
                expect.objectContaining({
                    user: expect.objectContaining({
                        first_name: req.body.first_name
                    })
                })
            ]])
        });
        it('updates one user by id (error)', async () => {
            const req = {
                params: {
                    idUser: '60bed2fc7361601a4c78f6fe',
                },
                body: {
                    first_name: 'Jhonatan'
                }
            };

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await UserController.updateOne(req, res);
            expect(res.status.mock.calls).toEqual([[500]]);
        });
        // it('updates one user by id (error)', () => {});
        // it('updates one user by id (not found)', () => {});
        // it('updates one user by id (email duplicated)', () => {});
        // it('updates one user by id (forbbiden)', () => {});
        // it('update body has more properties than expected in model', () => {});
    });
});

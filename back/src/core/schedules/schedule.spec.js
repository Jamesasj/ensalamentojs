import {ScheduleUseCase as uc} from './schedule.usecase.js'
describe('Name of the group', () => {
    test('validade duplicate schedule' , () => {
        //const uc = ScheduleUseCase();

        const ret = uc.validateNew({});
        expect(ret).toBe(true);
    })
});
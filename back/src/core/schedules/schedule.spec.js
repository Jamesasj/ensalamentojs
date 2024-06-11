import {ScheduleUseCase as uc} from './schedule.usecase.js'
describe('Name of the group', () => {
    test('validade duplicate schedule' , () => {
        //const uc = ScheduleUseCase();
        const newSchedule = {challenge: {name : "projeto integrador"}}
        const schedules = [];
        const ret = uc.validateNew(newSchedule, schedules );
        expect(ret).toBe(true);
    })
});
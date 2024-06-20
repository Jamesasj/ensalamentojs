import {ScheduleUseCase as uc} from './schedule.usecase.js'
describe('Validate schedules', () => {
    test('validade duplicate schedule' , () => {
        //const uc = ScheduleUseCase();
        const newSchedule = {challenge: {name : "projeto integrador"}}
        const schedules = [];
        const ret = uc.validateNew(newSchedule, schedules );
        expect(ret).toBe(newSchedule);
    })



    test('conflict schedule - same hour and day' , () => {
        //const uc = ScheduleUseCase();
        const newSchedule = {challenge: {name : "projeto integrador v"}, professor: {id:1, name:"james"} , start_hr:18, end_hr:22, dayOfWeak:4}
        const schedules = [{challenge: {name : "projeto integrador ii"}, professor: {id:1, name:"james"} , start_hr:18, end_hr:22, dayOfWeak:4}];
        expect(()=> uc.validateNew(newSchedule, schedules)).toThrow();
    })
});
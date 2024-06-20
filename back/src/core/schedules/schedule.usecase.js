export const ScheduleUseCase = {
    validateNew : (newSchedule, schedules ) => {
        
        if(schedules.length == 0){
            return newSchedule
        }

        if(schedules.find((item) => { return item.dayOfWeak == newSchedule.dayOfWeak && item.start_hr == newSchedule.start_hr })){
            throw new Error('0001: schedule conflict');
        } else {
            return newSchedule;
        }

    }
}
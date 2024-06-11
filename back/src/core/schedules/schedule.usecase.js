export const ScheduleUseCase = {
    validateNew : (newSchedule, schedules ) => {
        
        if(schedules.length === 0){
            return true
        }
        return false;
    }
}
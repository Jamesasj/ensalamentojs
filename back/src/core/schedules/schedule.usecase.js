export const ScheduleUseCase = {
    validateNew : (newSchedule, schedules ) => {
        
        if(schedules.length === 0){
            return newSchedule
        }

        if(schedules.find((item)=> item.professor.id == newSchedule.professor.id &&  item.professor.dayOfWeak == newSchedule.dayOfWeak && item.professor.start_hr == newSchedule.professor.start_hr )){
            throw new Error('0001: schedule conflict');
        }
        return newSchedule;
    }
}
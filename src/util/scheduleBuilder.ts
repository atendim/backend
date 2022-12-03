import { ScheduleFeed, ScheduleRes, ScheduleWeek } from "../models/responses";

export const buildSheduleFeed = (data: ScheduleRes[]) => {
  let feed: ScheduleFeed = new ScheduleFeed();

  if (data) {
    data.forEach(schedule => {
      if (schedule.finished) {
        feed.fineshed.schedules.push(schedule);
        return;
      }
      let list = isOverdue(schedule) ? 'overdue' : 'avaliable'

      let indexSameDay = feed[list].findIndex(s =>
        isSameDay(s.label, schedule.appointment)
      )

      if (indexSameDay !== -1) {
        feed[list][indexSameDay].schedules.push(schedule)
      } else {
        let aux = new ScheduleWeek();
        aux.label = schedule.appointment;
        aux.schedules.push(schedule)
        feed[list].push(aux)
      }
    })
  }

  return feed;
}

const isSameDay = (date1: Date, date2: Date = new Date()) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  return d1.getTime() === d2.getTime();
}

const isOverdue = (schedule: ScheduleRes) => {
  return (schedule.appointment.getTime() < new Date().getTime() && !schedule.finished)
}
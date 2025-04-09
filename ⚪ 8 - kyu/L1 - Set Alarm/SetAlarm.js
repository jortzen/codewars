const setAlarm = (employed, vacation) => employed && !vacation;

const isAlarmNeeded = (employed, vacation) => (employed ? !vacation : false);

const alarmStatus = (employed, vacation) => employed > vacation;
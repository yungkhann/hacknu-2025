export interface IAgendaData {
    weekday: string; 
    date: string;
    events: {
      time: string;
      name: string;
    }[];
  }
  
  export const AgendaData: IAgendaData[] = [
    {
      weekday: "Saturday",
      date: "13 April",
      events: [
        { time: "09:00", name: "Check-in" },
        { time: "10:00", name: "Opening Ceremony" },
        { time: "11:30", name: "Coding Start" },
        { time: "13:00", name: "Q&A with Judges" },
        { time: "14:00", name: "Coffee-break" },
        { time: "17:30", name: "Games" },
      ],
    },
    {
      weekday: "Sunday",
      date: "14 April",
      events: [
        { time: "11:30", name: "Submissions Deadline" },
        { time: "12:00", name: "Coffee-break" },
        { time: "13:00", name: "Pitching" },
        { time: "16:00", name: "Closing Ceremony" }
      ],
    },
  ];
  
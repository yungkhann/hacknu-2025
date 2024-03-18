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
        { time: "11:00", name: "Coding Start" },
        { time: "13:00", name: "Q&A with Judges" },
        { time: "14:00", name: "Coffee-break" },
        { time: "18:00", name: "Games" },
        { time: "20:00", name: "Pizza Break" }
      ],
    },
    {
      weekday: "Sunday",
      date: "14 April",
      events: [
        { time: "09:00", name: "Submissions Deadline" },
        { time: "10:00", name: "Coffee-break" },
        { time: "11:00", name: "Pitching" },
        { time: "13:00", name: "Closing Ceremony" }
      ],
    },
  ];
  
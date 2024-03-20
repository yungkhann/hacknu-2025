export interface ITimelineData {
  question: string;
  answer: string;
  map?: boolean;
  link?: string;
}

export const TimelineData: ITimelineData[] = [
  {
    question: "When?",
    answer: "13-14 April",
    link: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGFsMDVncTY2aWowZDdtcnJqNnFiZGI3MjMgY19lZmQ0NzM5NTAyNGM1ZTMzN2U2Njc4YWM5MmVlYzVmNjJjYWFjZWNkOWU3ZmMzM2YwNDFjMzI1MTIyNzU5MDMzQGc&tmsrc=c_efd47395024c5e337e6678ac92eec5f62caacecd9e7fc33f041c325122759033%40group.calendar.google.com",
  },
  {
    question: "Where?",
    answer: "Nazarbayev University",
    map: true,
    link: "https://2gis.kz/astana/firm/70000001018129704",
  },
  {
    question: "How?",
    answer: "In teams of 2-4",
  },
];

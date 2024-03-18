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
  },
  {
    question: "Where?",
    answer: "Nazarbayev University",
    map: true,
  },
  {
    question: "How?",
    answer: "In teams of 2-4",
  },
];

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
    link: "https://2gis.kz/astana/firm/70000001018129704",
  },
  {
    question: "How?",
    answer: "In teams of 2-4",
  },
];

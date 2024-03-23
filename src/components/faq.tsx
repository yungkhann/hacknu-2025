import { FAQQuestion } from "./faq-question";

const FAQ = () => {
  return (
    <div className="flex py-6 flex-col justify-end items-center gap-12 md:gap-3 self-stretch">
      {texts.map((text, index) => (
        index === 0 ? (
          <div key={index} className="flex flex-col md:flex-row items-start gap-8 self-stretch">
            <h1 className="font-Helloviteca flex-1 text-primary-purple text-[88px]">{text.section}</h1>
            <div className="flex flex-col items-start gap-6 flex-1	">
              {text.questions.map((question, index) => (
                <FAQQuestion key={index} question={question.question} answer={question.answer} />
              ))}
            </div>
          </div>
        ) : (
          <div key={index} className="flex flex-col md:flex-row  items-start gap-2 md:gap-8 self-stretch">
            <div className="flex justify-center items-center gap-3 flex-1">
              <p className="text-dashed-border">#</p>
              <p>{text.section}</p>
              <div className="flex flex-1 border-dashed	border-b-2 border-dashed-border" />
            </div>
            <div className="flex pt-[10px] flex-col items-start gap-6 flex-1">
              {text.questions.map((question, index) => (
                <FAQQuestion key={index} question={question.question} answer={question.answer} />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default FAQ;

const texts = [
  {
    section: "FAQ",
    questions: [
      {
        question: "What is a hackathon?",
        answer: `A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.`
      },
      {
        question: "Who runs HackNU?",
        answer: `Association for Computing Machinery Student Chapter (ACM SC) at Nazarbayev University.`
      },
      {
        question: "What’s the cost?",
        answer: `Participation is totally free and includes opportunities for networking, workshops, lots of food and swag.`,
      },
      {
        question: "Will HackNU be fully in-person this year?",
        answer: `Yes, HackNU/24 is fully offline.`,
      },
      {
        question: "Will I annoy people if I ask them questions?",
        answer: `Not at all! This is a common misconception about hackathons and in actual fact, it’s the complete opposite. The environment at these events are designed specifically to encourage everyone to have fun and help each other. For now, join our <a href='https://t.me/hacknu_chat/' target="_blank">telegram group</a> to ask any question you have.`,
      }
    ]
  }, 
  {
    section: "Participation", 
    questions: [
      {
        question: "How do I participate in a hackathon?",
        answer: `To register, fill out the online form before the application deadline of <strong>Apr 7th, 23:59</strong>. Applications are approved on a rolling basis, so registering early increases your chances of attending. Once the registration period ends, you will have a limited time to confirm your attendance at the event. Otherwise, your spot will be allocated to another team.`
      },
      {
        question: "Can I attend?",
        answer: `If you are currently an undergraduate student (from any University) or NUFYP student, then yes! Note that we consider the 2023-2024 academic year, so new graduates are <strong>not</strong> eligible.`
      },
      {
        question: "Do I need to have a team before I participate in a hackathon?",
        answer: `Yes, our hackathon is team-based, and we want you to have the freedom to form teams and ensure that all members you want to see in your team will participate.`
      },
      {
        question: "What is the deadline for team registration?",
        answer: `Apr 7th, 23:59`
      },
      {
        question: "What if I don’t have a team?",
        answer: `To find teammates, check the dedicated topic in our <a href='https://t.me/hacknu_chat/' target="_blank">Telegram Group</a>.`
      },
      {
        question: "Can teams with more than 4 people participate?",
        answer: `No. You can form teams of 2-4 members.`
      },
      {
        question: "Why might some teams not be allowed to participate?",
        answer: `1. Some team members did not submit the required information or submitted incorrect information on the registration form.<br/>2. Violation of rules or code of conduct.`
      }
    ]
  },
  {
    section: "Venue and Logistics",
    questions: [
      {
        question: "What should participants who are not students of Nazarbayev University do to obtain a pass to the campus?",
        answer: `1. You should submit your Full Name in Cyrillic to the online registration form<br/>2. You should bring your National ID with you.`
      },
      {
        question: "Where will the opening ceremony take place?",
        answer: `Orange Hall (Block C2, 2nd Floor).`
      },
      {
        question: "Where is the registration area located?",
        answer: `Block C2 (in front of central entrance to the Main Hall, 2nd floor).`
      },
      {
        question: "Where will the hackathon take place?",
        answer: `Ballroom Left, Ballroom Right (Block C2, 3rd floor).`
      },
      {
        question: "Why is it advisable for teams to be at the venue for the first 9 hours?",
        answer: `Company representatives will be available to answer your questions. Additionally, you will have the opportunity to network with hundreds of other talented participants at HackNU.`
      },
      {
        question: "Are there any rules about where to eat during the hackathon?",
        answer: `We will have special areas for food serving and we ask you to clean up after yourself.`
      },
      {
        question: "Will non-NU participants be given a bed in the dormitory?",
        answer: `No. It is prohibited for non-residents to enter the area of Dormitory.`
      },
      {
        question: "Do teams have to be at the venue for the entire 24 hours of offline participation?",
        answer: `No, you are free to move anywhere after the Opening Ceremony and Team Check-in up until the Pitching Period. However, we highly encourage you to stay in the venue as much as possible since we organize workshops, chill zones, and much more for you to enjoy.`
      }
    ]
  },
  {
    section: 'Project Development',
    questions: [
      {
        question: "Is it possible to change the chosen track?",
        answer: `Yes, you will have to contact Tech. Managers present in the venue.`
      },
      {
        question: "How are hackathon projects evaluated?",
        answer: `Each track will have its own evaluation criteria, that will be shared during the Problems Briefing (Opening Ceremony)`
      },
      {
        question: "What if I don’t want to present my hack?",
        answer: `You might think your project isn’t impressive or it might not be finished so you don’t want to present it. You should present it anyway! Honestly, hackathons aren't about being the best or being competitive. It’s all about having fun, making friends and learning how to become better at things you care about. Presenting your hack gives you a chance to be proud of what you’ve done, and you should be proud.`
      },
      {
        question: "How do I come up with an idea for a hackathon project?",
        answer: `Mainly don’t worry. Problems Briefing and discussion with your teammates will create some ideas that you can work on. Don’t be afraid to ask questions and experiment.`
      },
      {
        question: "Can I use any programming language or technology for my project?",
        answer: `You are free to use any programming language and tools for your project, unless some specific stack was specified by the problem setting company.`
      }
    ]
  },
  {
    section: 'Benefits and Other',
    questions: [
      {
        question: "What are the benefits of participating in a hackathon?",
        answer: `Participating in a hackathon is a great way to meet other professionals, learn new skills, and gain experience working with a clear goal. It's also a chance to potentially win prizes or recognition for your work. Moreover, hackathons are an opportunity to generate creative solutions to problems or create innovative new products or services.`
      },
      {
        question: "How and when will I hear back?",
        answer: `We will get back to your team in 3 working days after all team members have submitted their information. This may vary depending on the number of applications on a given day (Please don’t forget that we are students too :D )`
      },
      {
        question: "I don’t want to hack, I want to ________!",
        answer: `If you have any suggestions or wishes, you can send us an email at hackathon@nu.edu.kz.`
      },
      {
        question: "How can I stay updated with what is going on at the event?",
        answer: `Follow us on <a href="https://instagram.com/hacknukz" target="_blank">Instagram</a>, <a href="https://t.me/hacknu"  target="_blank">Telegram</a> and join our <a href="https://t.me/hacknu_chat" target="_blank">Telegram group</a>.`
      },
      {
        question: "I didn’t find my question here!",
        answer: `Join our <a href="https://t.me/hacknu_chat" target="_blank">Telegram group</a> to get answer to any questions.`
      }
    ]
  }
];
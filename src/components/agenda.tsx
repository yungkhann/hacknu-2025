import { IAgendaData, AgendaData } from "@/consts/agenda";
import { Icons } from ".";

const Agenda = () => {
  return (
    <div id="agenda" className="py-24 px-2 flex flex-col md:flex-row gap-x-6">
      <div className="py-4 w-full md:w-1/2">
        <p className="font-Helloviteca text-[56px] leading-[1.6] text-primary-green lg:text-[80px] pt-4">
          Agenda
        </p>
        <p className="font-NeueMachina text-xl font-normal text-primary-grey">
          18-19 October
        </p>
      </div>
      <div className="w-full md:w-1/2">
        {AgendaData.map((item: IAgendaData, index: number) => {
          return (
            <div className="flex flex-col" key={index}>
              <div className="flex items-center">
                <span className="text-secondary-grey pr-3">#</span>
                <Icons.separator />
              </div>
              <div key={index} className="py-4 flex flex-col lg:flex-row">
                <div className="py-4 w-full lg:w-2/5">
                  {item.weekday}, {item.date}
                </div>
                <div className="py-4 w-full lg:w-3/5 leading-[2]">
                  {item.events.map((event, event_index) => (
                    <div
                      key={event_index}
                      className="flex flex-row justify-between"
                    >
                      <div
                        className={`text-primary-${
                          event_index === 0 ? "green" : "grey"
                        }`}
                      >
                        <span className="opacity-60">{">"}</span> {event.name}
                      </div>
                      <div className="text-primary-green">{event.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Agenda;

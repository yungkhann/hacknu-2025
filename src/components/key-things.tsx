import { Icons } from ".";

const KeyThings = () => {
  return (
    <div className="w-full flex justify-center items-center py-6 lg:py-28">
      <span className="text-secondary-grey pr-3 md:text-base lg:text-2xl">
        #<br />#<br />#
      </span>
      <div className="flex flex-col gap-3 lg:gap-4 justify-center items-center md:text-base lg:text-2xl">
        <Icons.seperatorLong className="!w-full" />
        Few key things about HackNU
        <Icons.seperatorLong className="!w-full"  />
      </div>
    </div>
  );
};

export default KeyThings;
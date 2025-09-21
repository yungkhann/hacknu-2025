import { Icons } from '.';

const authors = [
  {
    name: 'kadirzhan,',
    link: 'https://t.me/kadirzhan',
  },
  { name: 'alekgreen,', link: 'https://github.com/elamirKad' },
  { name: 'abyl,', link: 'https://github.com/Abyl10' },
  { name: 'akbota,', link: 'https://github.com/aqbotash' },
  { name: 'rakhman,', link: 'https://github.com/abd-rakhman' },
  { name: 'sanxzhar,', link: 'https://sanxzhar.com' },
  { name: 'yungkhann', link: 'https://github.com/yungkhann' },
];

const Credentials = () => {
  return (
    <div className="w-full py-6 flex justify-center">
      <div className=" font-Helloviteca text-[#6A6A6A] text-xs lg:text-sm flex gap-2 flex-wrap justify-center ">
        created with
        <Icons.heart />
        by
        {authors.map(author => {
          return (
            <a
              key={author.link}
              href={author.link}
              className="underline decoration-2 underline-offset-4">
              {author.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Credentials;

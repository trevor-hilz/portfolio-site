import unicorn from '../assets/unicorn.jpg';

const Footer = () => {
  return (
    <div className='w-full max-w-screen-xl p-4 mx-auto '>
      <div className='flex items-center justify-center'>
        {/* <a
          href='https://linkedin.com/in/trevor-hilz'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse'
        >
          <img src={unicorn} className='h-16' alt='Unicorn Picture' />
        </a> */}
        <ul className='flex flex-wrap items-center mb-6 text-sm font-medium'>
          <li>
            <a
              href='http://www.nemomonitoring.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline me-4 md:me-6'
            >
              Nemo
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/trevor-hilz'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline me-4 md:me-6'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://www.github.com/trevor-hilz'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline me-4 md:me-6'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:trevorhilz@gmail.com?subject=Hi Trevor, I'd like to hire you!"
              className='hover:underline'
            >
              Email
            </a>
          </li>
        </ul>
      </div>
      <hr className='border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4' />
      <span className='block text-sm text-center text-gray-500 dark:text-gray-400'>
        &#169; Trevor Hilz 2024 | All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;

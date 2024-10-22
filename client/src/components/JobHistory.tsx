const JobHistory = () => {
  return (
    <div className='flex flex-col items-center text-center list-none'>
      <div className='text-xl font-bold underline'>
        Software Engineer | 2023 - 2024
      </div>
      <li>
        Binary Artisan (Contract) | 2024 – 2024 |{' '}
        <a
          href='https://www.countyourcards.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='underline'
        >
          Count Your Cards
        </a>
      </li>
      <li className='mt-4 text-lg font-bold underline'>
        Open Source Project | 2023 – 2024
      </li>
      <li>
        {' '}
        Nemo | Kubernetes Monitoring Tool |{' '}
        <a
          href='https://www.nemomonitoring.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='underline'
        >
          Nemo Monitoring
        </a>
      </li>
      <li> Tech Times | New Aggregation Site</li>
      <li> Binary Bridge | Job Posting Aggregator</li>
      <li> Paper Trading | Stock Trading Simulator</li>

      <header className='mt-4 text-xl font-bold underline'>
        Wealth Experience | 2014 - 2023
      </header>
      <li>Texas Capital Bank | Executive Director</li>
      <li>J P Morgan Chase | Vice President </li>
      <li>Fidelity Investments</li>
    </div>
  );
};

export default JobHistory;

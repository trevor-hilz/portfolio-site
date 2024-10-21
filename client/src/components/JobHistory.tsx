const JobHistory = () => {
  return (
    <div className='ml-8 list-none '>
      <div className='flex flex-col justify-center'>
        <div className='text-xl font-bold underline'>
          Software Engineer | 2023 - 2024
        </div>
        <li className='ml-8'>
          {' '}
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
        <li className='ml-8 font-bold underline'>
          Open Source Project | 2023 – 2024
        </li>
        <li className='ml-12'>
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
        <li className='ml-12'> Tech Times | New Aggregation Site</li>
        <li className='ml-12'> Binary Bridge | Job Posting Aggregator</li>
        <li className='ml-12'> Paper Trading | Stock Trading Simulator</li>
      </div>
      <br></br>
      <header className='text-xl font-bold underline'>
        Wealth Experience | 2014 - 2023
      </header>
      <li className='ml-8 list-none'>Texas Capital Bank</li>
      <li className='ml-8 list-none'>J P Morgan Chase</li>
      <li className='ml-8 list-none'>Fidelity Investments</li>
      {/* <li className='ml-8 list-none'>
        Analyzed financial data using Bloomberg and Morningstar, supporting
        portfolio management for assets worth $140M
      </li>
      <li className='ml-8 list-none'>
        Automated reporting processes using advanced Excel scripts, reducing
        preparation time by 40% and improving data presentation
      </li> */}
    </div>
  );
};

export default JobHistory;

const Projects = () => {
  return (
    <div className='flex flex-col items-center gap-4 mb-8'>
      <div className='text-xl font-bold underline'>Works</div>
      <div className='flex gap-4'>
        <a
          href='https://www.datadiversities.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
            NYS Biodiversity
          </button>
        </a>
        <a
          href='https://www.countyourcards.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
            Count Your Cards
          </button>
        </a>
        <a
          href='https://www.nemomonitoring.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
            Nemo Monitoring
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;

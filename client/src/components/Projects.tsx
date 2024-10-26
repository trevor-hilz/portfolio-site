const Projects = () => {
  return (
    <div className='flex flex-col items-center gap-4 mb-8'>
      <div className='text-xl font-bold underline'>Projects</div>
      <a
        href='http://biodiversity-app-env-1.eba-d5psxzae.us-east-2.elasticbeanstalk.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
          NYS Biodiversity
        </button>
      </a>
    </div>
  );
};

export default Projects;

const JobHistory = () => {
  return (
    <div className='ml-8'>
      <h1>Work Experience</h1>
      <br></br>
      <li className='list-none'>
        <span className='underline'>
          {' '}
          Binary Artisan (Contract) | Software Engineer | 2024 – 2024
        </span>
      </li>
      <li className='ml-8 list-none'>
        Co-engineered a TypeScript card counting training application
      </li>
      <li className='ml-8 list-none'>
        Designed a responsive UI using React with Astro frameworks, improving
        loading and user satisfaction on multiple devices
      </li>
      <br></br>
      <header className='underline'>Open Source</header>
      <br></br>
      <header className='underline'>
        Nemo (Open Source) | Software Engineer | A Kubernetes Monitoring Tool |
        nemonitoring.com 2023 – 2024
      </header>
      <li className='mb-2 ml-8 list-none'>
        Engineered the GKE Kubernetes cluster data scraping of cluster data from
        node exporter and metric server allowing the application to receive data
        for storage and live data monitoring of the cluster’s health for both
        nodes and pods
      </li>
      <li className='mb-2 ml-8 list-none'>
        Developed the React state management using effect and state hooks for
        live updates of the Kubernetes cluster health data
      </li>
      <li className='mb-2 ml-8 list-none'>
        Advanced CI/CD integrations using Docker, streamlining deployment
        processes, and reducing downtime
      </li>
      <li className='mb-2 ml-8 list-none'>
        Stored data in five-second intervals using the NoSQL MongoDB for its
        flexible schema, and horizontal scaling used for in-session performance
        reporting, historical reporting, as well as providing a solution for
        readily accessible information across systems
      </li>
      <li className='mb-2 ml-8 list-none'>
        Leveraged D3's high customization, data-driven approach, and web
        standards compliance to create interactive, color-coded visualizations,
        simplifying cluster health assessment of nodes and pods by CPU and
        memory usage for end-users
      </li>
      <li className='mb-2 ml-8 list-none'>
        Utilized Express.js for its flexibility in an applications structure,
        URI routing, middleware support system, modularity, and scalability in
        creating an organized backend structure of server, routers, and
        controllers
      </li>
      <br></br>
      <li className='underline list-none'>
        Texas Capital Bank, JP Morgan Chase, Fidelity Investments | Banking &
        Wealth Management 2014 – 2023
      </li>
      <li className='ml-8 list-none'>
        Analyzed financial data using Bloomberg and Morningstar, supporting
        portfolio management for assets worth $140M
      </li>
      <li className='ml-8 list-none'>
        Automated reporting processes using advanced Excel scripts, reducing
        preparation time by 40% and improving data presentation
      </li>
    </div>
  );
};

export default JobHistory;

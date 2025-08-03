import { useState } from 'react';
import { MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import { db } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Banner = () => {
  const { user } = useAuth();
  const [title, settitle] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

const handleSearch = async (e) => {
  e.preventDefault();

  if (!user) {
    setErrorMsg('Please log in to search for jobs.');
    return;
  }

  const trimmedTitle = title.trim().toLowerCase();
  const trimmedLocation = location.trim().toLowerCase();

  if (!trimmedTitle && !trimmedLocation) {
    setErrorMsg('Please enter a job title or location to search.');
    setResults([]);
    return;
  }

  setErrorMsg('');
  setResults([]);

  try {
    const jobsRef = collection(db, 'jobs');
    const querySnapshot = await getDocs(jobsRef);

    const allJobs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Filter jobs with substring matching
    const filteredJobs = allJobs.filter((job) => {
      const jobTitle = job.title?.toLowerCase() || '';
      const jobLocation = job.location?.toLowerCase() || '';

      const titleMatches = trimmedTitle ? jobTitle.includes(trimmedTitle) : true;
      const locationMatches = trimmedLocation ? jobLocation.includes(trimmedLocation) : true;

      return titleMatches && locationMatches;
    });

    if (filteredJobs.length === 0) {
      setErrorMsg('No matching jobs found.');
    }

    setResults(filteredJobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    setErrorMsg('Something went wrong while fetching jobs.');
  }
};


  return (
    <section className="bg-white dark:bg-gray-900 lg:grid lg:h-screen lg:place-content-center transition-all duration-500 ease-in-out">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Job Portal <strong className="text-indigo-600">increase</strong> conversions
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            A portal made for developers by developers to find the job they need.
          </p>

          <form onSubmit={handleSearch} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative">
              <BriefcaseIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm text-gray-900 
                          focus:border-indigo-500 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                          dark:bg-gray-800 dark:text-white dark:focus:bg-gray-900 dark:focus:text-white"
              />
            </div>
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm text-gray-900 
                          focus:border-indigo-500 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                          dark:bg-gray-800 dark:text-white dark:focus:bg-gray-900 dark:focus:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Search Jobs
            </button>
          </form>

          {errorMsg && (
            <p className="mt-4 text-sm text-red-600 dark:text-red-400">{errorMsg}</p>
          )}

          {results.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {results.map((job) => (
                <div key={job.id} className="bg-white dark:bg-gray-800 rounded-md p-4 shadow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{job.company}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{job.location}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Type: {job.type}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;

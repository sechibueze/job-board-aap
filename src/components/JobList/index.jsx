import JobCard from '../JobCard';
import { useAppContext } from '../../hooks/useAppContext';

const JobList = () => {
  const { jobs: jobList } = useAppContext();

  return (
    <div className='job-list-container'>
      {jobList.length > 0 ? (
        jobList.map((jobItem) => {
          return <JobCard job={jobItem} key={jobItem.id} />;
        })
      ) : (
        <div>No Job</div>
      )}
    </div>
  );
};

export default JobList;

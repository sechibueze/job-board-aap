import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const JobDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { jobs } = useAppContext();
  const { jobId } = useParams();

  const jobItem = jobs.find((job) => job.id === jobId);
  if (!jobItem) {
    return <div>Not Found</div>;
  }

  const { description, jobTitle } = jobItem;
  return (
    <div>
      {jobItem.type}
      {description && <p>{description}</p>}

      <span onClick={() => setIsOpen(!isOpen)}>Apply Now</span>

      {isOpen && (
        <form>
          <h1>Apply for {jobTitle}</h1>
        </form>
      )}
    </div>
  );
};

export default JobDetails;

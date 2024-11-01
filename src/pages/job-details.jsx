import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import TextInput from '../components/TextInput';

const JobDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { jobs } = useAppContext();
  const { jobId } = useParams();

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    resume: '',
  });

  const handleChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(formState);
    const fd = FormData();

    Object.keys(formState).forEach((key) => {
      fd.append(key, formState[key]);
    });

    console.log('Ready to submit ', fd);
  };
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
        <form onSubmit={handleSubmit} className='apply-job-form'>
          <h1>Apply for {jobTitle}</h1>
          <TextInput
            label={'Full Name'}
            name={'fullName'}
            value={formState.fullName}
            onChange={(event) => handleChange('fullName', event.target.value)}
          />
          <TextInput
            label={'Email'}
            name={'email'}
            value={formState.email}
            onChange={(event) => handleChange('email', event.target.value)}
          />
          <TextInput
            label={'Upload resume'}
            name={'resume'}
            type='file'
            value={''}
            onChange={(event) => {
              console.log(event);
              handleChange('resume', event.target.files[0]);
            }}
          />
          <button type='submit'>Apply</button>
        </form>
      )}
    </div>
  );
};

export default JobDetails;

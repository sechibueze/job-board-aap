const JobCard = ({ job }) => {
  const {
    id,
    company,
    imageURL,
    type,
    description,
    location,
    jobTitle,
    payRange,
    postedDate,
  } = job;
  return (
    <div className='job-card'>
      <img width={'100%'} height={200} src={imageURL} alt={jobTitle} />
      {jobTitle && <h3>{jobTitle}</h3>}
      {description && <p>{description}</p>}

      <a href={`/details/${id}`}>See details</a>
    </div>
  );
};

export default JobCard;

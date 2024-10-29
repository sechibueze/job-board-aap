const JobCard = ({ job }) => {
  const {
    id,
    company_name: compnay,
    company_logo: imageURL,
    job_type: type,
    description,
    candidate_required_location: location,
    title: jobTitle,
    salary: payRange,
    publication_date: postedDate,
    url: applyLink,
  } = job;
  return (
    <div className='job-card'>
      <img
        style={{ maxWidth: '300px' }}
        height={200}
        src={imageURL}
        alt={jobTitle}
      />
      {jobTitle && <h3>{jobTitle}</h3>}
      {description && (
        <div
          className='description'
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      )}

      <a href={applyLink}>Apply Now</a>
    </div>
  );
};

export default JobCard;

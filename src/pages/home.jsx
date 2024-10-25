import JobList from '../components/JobList';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h2>Top Jobs</h2>
        <JobList />
      </section>
    </div>
  );
};

export default Home;

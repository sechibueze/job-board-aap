import JobList from '../components/JobList';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <section style={{ width: '100%' }}>
        <h2>Top Jobs</h2>
        <JobList />
      </section>
    </div>
  );
};

export default Home;

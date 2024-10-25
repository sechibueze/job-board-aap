import { createContext } from 'react';

export const AppContext = createContext();

const jobs = [
  {
    id: '82c4c199-1313-4b44-8e44-d7f356249817',
    company: 'GreenTech Solutions',
    postedDate: '2024-10-25T13:19:15.583Z',
    payRange: '$75,000 - $90,000',
    jobTitle: 'Software Engineer - Sustainability',
    location: 'San Francisco, CA',
    description:
      'Develop innovative software solutions to combat climate change and promote sustainable practices. Leverage your skills in Python, JavaScript, and React to build a greener future.',
    type: 'Full-Time',
    imageURL: 'https://picsum.photos/200/300?random=0.3467823467823467',
  },
  {
    id: '818c0098-d722-4c31-8461-906e1b57141c',
    company: 'Acme Inc.',
    postedDate: '2024-10-25T13:19:15.583Z',
    payRange: '$50,000 - $65,000',
    jobTitle: 'Graphic Designer',
    location: 'Remote (US)',
    description:
      'Create stunning visual designs for marketing materials, websites, and social media. Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign) is essential.',
    type: 'Full-Time',
    imageURL: 'https://picsum.photos/200/300?random=0.7654321654321654',
  },
  // ... (18 more job objects)
  {
    id: '77551a06-83e6-4641-96a2-61e828640948',
    company: 'FinTech Solutions',
    postedDate: '2024-10-25T13:19:15.583Z',
    payRange: '$90,000 - $110,000',
    jobTitle: 'Blockchain Developer',
    location: 'New York City, NY',
    description:
      'Build innovative blockchain applications to revolutionize the financial industry. Strong understanding of Solidity, Ethereum, and other blockchain platforms is required.',
    type: 'Full-Time',
    imageURL: 'https://picsum.photos/200/300?random=0.12345678901234567',
  },
  {
    id: '76b4173a-34c5-4641-96a2-61e828640948',
    company: 'CyberSec Solutions',
    postedDate: '2024-10-25T13:19:15.583Z',
    payRange: '$100,000 - $120,000',
    jobTitle: 'Cybersecurity Analyst',
    location: 'Washington D.C., DC',
    description:
      'Protect sensitive information and systems from cyber threats. Strong knowledge of network security, incident response, and cybersecurity frameworks is essential.',
    type: 'Full-Time',
    imageURL: 'https://picsum.photos/200/300?random=0.9876543210987654',
  },
];
const AppContextProvider = ({ children }) => {
  const contextValues = {
    jobs: jobs,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

import Layout from './components/Layout/Layout';
import PersonsList from './components/PersonsList/PersonsList';

const App = () => {
  return (
    <div>
      <Layout>
        <PersonsList />
      </Layout>
    </div>
  );
};

export default App;

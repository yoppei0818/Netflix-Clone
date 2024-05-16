import { requests } from "./request";
import { Row } from "./components/Row";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      {requests.map((request) => (
        <Row
          key={request.title}
          title={request.title}
          fetchUrl={request.fetchUrl}
          isLargeRow={request.isLargeRow}
        />
      ))}
    </div>
  );
}

export default App;

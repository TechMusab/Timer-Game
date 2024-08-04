import Player from './components/Player.jsx';
import Timechallange from './components/timechallange.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timechallange title="Easy" targettime={1}>

        </Timechallange>
        <Timechallange title="Not Easy" targettime={5}>

        </Timechallange>
        <Timechallange title="Getting Tough" targettime={10}>

        </Timechallange>
        <Timechallange title="Pros Only" targettime={15}>

        </Timechallange>
      </div>
    </>
  );
}

export default App;

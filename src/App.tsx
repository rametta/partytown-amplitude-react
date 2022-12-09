// this type can also be imported, but to match what is
// forwarded by partytown, it is a good idea to Pick<>
// the items that you need. Writing manually like this
// is fine too temporarily.
type Amplitude = {
  track: (event: string, params: any) => void;
};

declare global {
  interface Window {
    amplitude: Amplitude;
  }
}

function useAmplitude() {
  return window.amplitude;
}

function App() {
  const amplitude = useAmplitude();

  return (
    <div>
      <h1>Amplitude Partytown React</h1>
      <button
        type="button"
        onClick={() => {
          amplitude.track("partytown-event-test", { jason: 6 });
        }}
      >
        track event `partytown-event-test`
      </button>
    </div>
  );
}

export default App;

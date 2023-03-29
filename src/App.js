import "./App.css";
import MyTooltip from "./MyTooltip/MyTooltip";

function App() {
  return (
    <div className="App">
      <section>
        <MyTooltip
          color="red"
          backgroundColor="green"
          text="top"
          position="top"
        >
          <button>button</button>
        </MyTooltip>
      </section>
      <section>
        <MyTooltip
          color="pink"
          backgroundColor="purple"
          text="bottom"
          position="bottom"
        >
          <div>div</div>
        </MyTooltip>
      </section>
      <section>
        <MyTooltip
          color="green"
          backgroundColor="orange"
          text="left"
          position="left"
        >
          <h2>h2</h2>
        </MyTooltip>
      </section>
      <section>
        <MyTooltip text="right" position="right">
          <input />
        </MyTooltip>
      </section>
      <section>
        <MyTooltip text="bottom" position="bottom" color="red">
          <span>span</span>
        </MyTooltip>
      </section>
    </div>
  );
}

export default App;

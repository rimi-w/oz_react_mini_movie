import { useModeStore } from "./store/ModeStore";
import Layout from "./pages/Layout";

function App() {
  const isDark = useModeStore((state) => state.isDark);

  console.log(isDark);
  return (
    <div
      className={
        isDark
          ? `bg-black text-[rgb(253,250,248)]`
          : `bg-[rgb(253,250,248)] text-black`
      }
    >
      <Layout />
    </div>
  );
}

export default App;

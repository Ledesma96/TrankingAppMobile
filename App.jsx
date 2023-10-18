import { useFonts } from "expo-font";
import fonts from "./src/global/fonts.js";
import { Provider } from "react-redux";
import { store } from "./src/store";
import IndexNavigation from "./src/navigation/IndexNavigation.jsx";
import { init } from "./src/db/index.js";

init()
  .then(() => console.log('DB connected'))
  .catch(err => console.log('DB failed', err.message))

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <IndexNavigation/>
    </Provider>
  );
}

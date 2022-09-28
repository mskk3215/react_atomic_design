import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "フィッシャー",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1234@example.com",
  phone: "090-111-2222",
  company: {
    name: "test株式会社"
  },
  website: "https//google.com"
};

export default function App() {
  return <Router />;
}

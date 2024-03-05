import "./index.css";
import { Route, Routes } from "react-router";
import { CounterApp } from "./components/CounterApp";
import { HangmanRoute } from "./components/HangmanRoute";
import { IndexRoute } from "./components/IndexRoute";

// Make a new component TimesN
// takes a number and a mutilplier and renders the result in purple

export function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexRoute />} />
      <Route path="/hangman" element={<HangmanRoute />} />
      <Route path="/counter" element={<CounterApp />} />
    </Routes>
  );
}

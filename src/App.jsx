import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Design from "./pages/Design";
import Testing from "./pages/Testing";
import Projects from "./pages/Projects";
import Instruments from "./pages/Instruments";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import TestingTeam from './pages/TestingTeam'


function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 text-center">
      <p className="text-xs font-black uppercase tracking-widest text-amber-700">
        404
      </p>
      <h1 className="mt-3 text-4xl font-black text-[#123b64]">
        Page not found
      </h1>
      <a
        href="/"
        className="mt-7 inline-block rounded-lg bg-[#123b64] px-6 py-3 font-bold text-white"
      >
        Return home
      </a>
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="team" element={<Team />} /> */}
          <Route path="design" element={<Design />} />
          <Route path="testing" element={<Testing />} />
          <Route path="projects" element={<Projects />} />
          <Route path="instruments" element={<Instruments />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/testing-team" element={<TestingTeam />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

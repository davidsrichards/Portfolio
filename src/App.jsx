import Component from "./Components/Components";
import Navigation from "./Components/Navigation/Navigation";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={{
          initState: { opacity: 0 },
          animateState: { opacity: 1 },
          exitState: {},
        }}
        key={true}
        initial="initState"
        animate="animateState"
        exit={"exitState"}
      >
        <Navigation />
        <Component />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;

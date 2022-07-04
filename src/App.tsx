import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(136deg, #e09, #d0e);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlayVariants = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  animate: {
    backgroundColor: "rgba(0, 0, 0, .7)",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: {
      duration: 0.3,
    },
  },
};

function App() {
  const [clicked, setClicked] = useState(false);
  const [currentBox, setCurrentBox] = useState("");

  const toggle = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggle}>
      <Grid>
        {["1", "2", "3", "4"].map((item) => (
          <Box
            key={item}
            layoutId={item + ""}
            onClick={() => setCurrentBox(item)}
          />
        ))}
      </Grid>
      <AnimatePresence>
        {clicked ? (
          <Overlay
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Box
              layoutId={currentBox + ""}
              style={{
                width: "80%",
                height: 380,
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

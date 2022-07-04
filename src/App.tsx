import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(136deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClick}>
      <Box>
        {!clicked ? (
          <Circle
            layoutId="circle"
            style={{
              borderRadius: 50,
            }}
          />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle
            layoutId="circle"
            style={{
              borderRadius: 0,
              scale: 2,
            }}
          />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;

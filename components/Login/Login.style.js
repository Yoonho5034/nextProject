import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 300px;
  height: 120px;

  background-color: #192227;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const InputsArea = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  text-align: center;
`;

export const InputBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  :nth-child(1) {
    margin-bottom: 6px;
  }
`;

export const Title = styled(motion.span)``;
export const Input = styled(motion.input)``;

export const SubmitButton = styled(motion.button)`
  width: 100px;
  height: 24px;
  margin-top: 10px;

  cursor: pointer;
`;

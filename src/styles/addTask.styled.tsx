import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { getFontColor, isTestMode } from "../utils";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AddTaskButton = styled(Button)<{ testMode?: boolean }>`
  margin-top: 4px;
  border: none;
  padding: 16px 32px;
  font-size: 24px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => getFontColor(theme.primary)};
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: ${({ testMode }) => (testMode ? 'none' : '0.3s all')};
  margin: 20px;
  width: 400px;
  text-transform: capitalize;
  
  /* AI Agent Stability - Disable animations in test mode */
  ${({ testMode }) => testMode && `
    animation: none !important;
    transition: none !important;
    transform: none !important;
    will-change: auto !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  `}
  
  &:hover {
    box-shadow: ${({ theme, testMode }) => 
      testMode ? 'none' : `0px 0px 24px 0px ${theme.primary + "80"}`};
    background: ${({ theme }) => theme.primary};
  }
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
    color: ${({ theme }) => getFontColor(theme.secondary)};
  }
`;

export const StyledInput = styled(TextField)<{ helpercolor?: string; hidetext?: boolean }>`
  margin: 12px;
  & .MuiOutlinedInput-root {
    border-radius: 16px;
    transition: 0.3s all;
    width: 400px;
    color: ${({ theme, hidetext }) => (hidetext ? "transparent" : getFontColor(theme.secondary))};
  }
  .MuiFormHelperText-root {
    color: ${({ helpercolor, theme }) => helpercolor || getFontColor(theme.secondary)};
    opacity: 0.8;
  }
`;

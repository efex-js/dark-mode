import styled from 'styled-components';
import { Checkbox } from '@gympass/yoga';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ThemeSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Slide = styled(Checkbox.Switch)`
  margin: 0 5px;
`;
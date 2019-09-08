import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Wrapper = styled.div`
  background: rgb(245, 245, 245);
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr;
  height: 100%;
  overflow: auto;
`;

export const Scroll = styled(PerfectScrollbar)`
  grid-area: content;
  padding: 16px 16px 15px 12px;
`;

export const Container = styled.main`
  max-width: 1600px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
`;

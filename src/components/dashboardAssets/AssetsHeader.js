import styled from "styled-components";

const StyledAssetsHeader = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 1fr 1fr;
  height: 35px;
  background-color: var(--color-grey-500);
  border-radius: 4px;
  text-align: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 1.2rem;

  & :first-child {
    text-align: left;
  }
  & :nth-child(2) {
    text-align: left;
  }
`;

function AssetsHeader() {
  return (
    <StyledAssetsHeader>
      <span>Garade</span>
      <span>Name</span>
      <span>Total Vuinerabilities</span>
      <span>Last Seen</span>
    </StyledAssetsHeader>
  );
}

export default AssetsHeader;

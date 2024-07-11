import styled from "styled-components";

const StyledAssetsRow = styled.div`
  background-color: var(--color-grey-600);
  display: grid;
  grid-template-columns: 100px 100px 1fr 1fr;
  align-items: center;
  font-size: 1.3rem;
  border-radius: 4px;
  padding: 0.7rem 1.2rem;
  text-align: center;
  color: var(--color-grey-100);
  margin-bottom: 7px;

  & :first-child {
    margin: 0 16px;
  }

  & :nth-child(2) {
    text-align: left;
  }
`;

const Hexagon = styled.div`
  width: 28px;
  height: 32px;
  background-color: var(--color-red-300);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);

  & span {
    transform: rotate(-90deg);
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

function AssetsRow({ rowData }) {
  const date = new Date(rowData.lastSeen);
  return (
    <StyledAssetsRow>
      <Hexagon>
        <span>{rowData.grade}</span>
      </Hexagon>

      <span>{rowData.name}</span>

      <span>{rowData.total_vuls}</span>

      <span>
        {date.toLocaleDateString()} at {date.getHours()}:{date.getMinutes()}
      </span>
    </StyledAssetsRow>
  );
}

export default AssetsRow;

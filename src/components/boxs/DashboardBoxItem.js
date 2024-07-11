import styled, { css } from "styled-components";

const portocolObj = {
  Cloud: {
    imagePath: "/UploadtoCloud.png",
    iconColor: "#D1B003",
  },
  Domain: {
    imagePath: "/EarthPlanet.png",
    iconColor: "#DF6710",
  },
  Ip: {
    imagePath: "/EarthPlanet.png",
    iconColor: "#565392",
  },
};

const StyledDashboardBoxItem = styled.div`
  background-color: var(--color-grey-800);
  padding: 2rem;
  border-radius: var(--border-radius-md);
  position: relative;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #fff;
  padding: 1.4rem 1rem;

  gap: 10px;
`;

const ArrowImg = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const HeaderIcon = styled.div`
  width: 100%;
  height: 75%;
  background-color: ${(props) => portocolObj[props.type].iconColor};
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 43px;
    height: auto;
    padding: 2px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 68px;
  overflow: hidden;
  border-radius: var(--border-radius-sm);
  margin-bottom: 20px;

  & span {
    background-color: var(--color-grey-100);
    color: var(--color-grey-900);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

const BoxTitle = styled.div`
  font-size: 1.4rem;
  margin-bottom: 8px;
`;

const Status = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;

  & span {
    font-size: 1.5rem;
  }

  & img {
    width: 60px;
    height: auto;

    ${(props) =>
      props.type === "portocol" &&
      css`
        width: 40px;
        height: 40px;
        background-color: var(--color-blue-100);
        border-radius: var(--border-radius-sm);
        padding: 0.8rem;
      `}
  }
`;

function DashboardBoxItem({ portocol, onClick }) {
  const {
    ports,
    total,
    total_live: totalLive,
    total_monitored: totalMonitored,
    vulns,
    portocolName,
  } = portocol;

  return (
    <StyledDashboardBoxItem onClick={onClick}>
      <ArrowImg src="/DownLeftArrow.png" alt="Arrow" />

      <Header>
        <HeaderIcon type={portocolName}>
          <img src={portocolObj[portocolName].imagePath} alt="icon" />
        </HeaderIcon>
        <span>{total}</span>
      </Header>

      <BoxTitle>{portocolName}</BoxTitle>

      <Row>
        <Status>
          <div>
            <div>Live</div>
            <span>{totalLive}</span>
          </div>

          <img src="/dashboardfull1.png" alt="status" />
        </Status>
        <Status>
          <div>
            <div>Maintained</div>
            <span>{totalMonitored}</span>
          </div>

          <img src="/dashboardfull1.png" alt="status" />
        </Status>
      </Row>

      <Row>
        <Status type="portocol">
          <img src="/Globe.png" alt="status" />
          <div>
            <div>Ips</div>
            <span>6</span>
          </div>
        </Status>

        <Status type="portocol">
          <img src="/Conflict.png" alt="status" />
          <div>
            <div>Ports</div>
            <span>{ports}</span>
          </div>
        </Status>

        <Status type="portocol">
          <img src="/Bug.png" alt="status" />
          <div>
            <div>vulns</div>
            <span>{vulns}</span>
          </div>
        </Status>
      </Row>
    </StyledDashboardBoxItem>
  );
}

export default DashboardBoxItem;

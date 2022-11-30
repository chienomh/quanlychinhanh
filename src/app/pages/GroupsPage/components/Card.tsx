import { Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from 'utils/formatNumber';

interface Iprops {
  avatar?: string;
  name: string;
  position: string;
  desc?: string;
  onClick?: any;
  label?: string;
  total: number;
}

const CardInfo = (props: Iprops) => {
  const { name, avatar, position, desc, onClick, label, total } = props;
  return (
    <Tooltip title={label || ''} overlayStyle={{ textAlign: 'center' }}>
      <StyledCard onClick={onClick ? onClick : () => {}}>
        <img
          src={
            avatar
              ? avatar
              : 'https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'
          }
          alt=""
        />
        <p className="spanName">{name}</p>
        <p className="spanPositon">{position}</p>
        <p className="spanDesc">{desc}</p>
        <p>Doanh thu: {formatNumber(total)}đ</p>
      </StyledCard>
    </Tooltip>
  );
};

export default CardInfo;

export const StyledCard = styled.div`
  display: inline-block;
  width: 200px;
  text-align: center;
  min-height: 240px;
  border: 1px solid ${({ theme }) => theme.blueColor};
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;

  img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-top: 15px;
    border: 1px solid #ccc;
  }

  .spanName {
    font-weight: bold;
    margin-top: 18px;
    font-size: 16px;
  }
  .spanPositon {
    margin-bottom: 20px;
  }
  .spanDesc {
  }
`;

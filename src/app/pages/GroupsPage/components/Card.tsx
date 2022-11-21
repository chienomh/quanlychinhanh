import { Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { StyledCard } from './style';

interface Iprops {
  avatar?: string;
  name: string;
  position: string;
  desc?: string;
}

const CardInfo = (props: Iprops) => {
  const { name, avatar, position, desc } = props;
  return (
    <Tooltip title="Nhấn để xem doanh thu của nhóm">
      <StyledCard>
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
      </StyledCard>
    </Tooltip>
  );
};

export default CardInfo;

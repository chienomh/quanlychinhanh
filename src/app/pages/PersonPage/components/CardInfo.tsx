import { Col, Descriptions, Row } from 'antd';
import moment from 'moment';
import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { usePersonalPageStateSlice } from '../slice';
import { DataPerson } from '../type';

interface Iprops {
  data: DataPerson;
}

const CardInfo = (props: Iprops) => {
  const { data } = props;
  const dispatch = useDispatch();
  const { actions } = usePersonalPageStateSlice();
  const handleEditDataPerson = () => {
    dispatch(actions.setShowFormEdit(true));
  };
  return (
    <Wrapper>
      <div className="colImg">
        <img src={data?.img} alt="" className="avatar" />
      </div>
      <div className="colInfo">
        <MdModeEdit className="iconEdit" onClick={handleEditDataPerson} />
        <Descriptions column={1} labelStyle={{ fontWeight: 'bold' }}>
          <Descriptions.Item label="Mã nhân viên">{data?.id}</Descriptions.Item>
          <Descriptions.Item label="Họ tên">{data?.name}</Descriptions.Item>
          <Descriptions.Item label="Ngày sinh">
            {moment(data?.birth).format('DD/MM/YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label="Số điện thoại">
            {data?.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Mức triết khấu">
            {data?.discountPercentage}%
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Wrapper>
  );
};

export default CardInfo;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  display: flex;

  .colImg {
    display: flex;
    align-items: center;
    margin-right: 20px;
    .avatar {
      height: 200px;
      width: 200px;
      border-radius: 5px;
    }
  }

  .colInfo {
    position: relative;

    .iconEdit {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

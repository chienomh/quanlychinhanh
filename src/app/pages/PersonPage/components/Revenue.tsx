import { Card, Typography } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { usePersonalPageStateSlice } from '../slice';
import { selectPersonalPageState } from '../slice/selectors';
import { DataPerson } from '../type';
import { MonthPickerWrapper } from './MonthPicker';
import { AiFillExclamationCircle } from 'react-icons/ai';

const Revenue = () => {
  const { selectTime } = useSelector(selectPersonalPageState);
  const dispatch = useDispatch();
  const { actions } = usePersonalPageStateSlice();
  const setSelectTime = (value: any) => {
    dispatch(actions.setSelectTime(value));
  };
  let dataPerson: DataPerson = JSON.parse(
    localStorage.getItem('personData') as never,
  );

  const revenueSelectedMonth = dataPerson?.revenue?.find(
    (item: any) => item.month === moment(selectTime).format('MM/YYYY'),
  );

  return (
    <Wrapper>
      <div className="selectTime">
        <MonthPickerWrapper
          onChange={(value: any) => {
            setSelectTime(value);
          }}
          selectedTime={selectTime}
        />
      </div>
      <div className="revenueWrap">
        <Card
          headStyle={{ backgroundColor: '#ccc' }}
          title="Doanh thu sỉ lẻ"
          className="cardInfo"
        >
          <p>
            Tổng đơn hàng: {revenueSelectedMonth?.retailRevenue?.totalOrder}
          </p>
          <p>Vốn: {revenueSelectedMonth?.retailRevenue.capital}đ</p>
          <p>Lợi nhuận: {revenueSelectedMonth?.retailRevenue?.interest}đ</p>
        </Card>
        <Card
          headStyle={{ backgroundColor: '#ccc' }}
          title="Doanh thu đội nhóm"
          className="cardInfo"
        >
          <p>
            Tổng số thành viên:{' '}
            {revenueSelectedMonth?.groupRevenue?.totalMember}
          </p>
          <p>
            Lợi nhuận đạt được: {revenueSelectedMonth?.groupRevenue?.interest}đ
          </p>
        </Card>
        <Card
          headStyle={{ backgroundColor: '#ccc' }}
          title="Tiền thưởng"
          className="cardInfo"
        >
          <p>Thành tiền: {revenueSelectedMonth?.bonus}đ</p>
        </Card>
      </div>
      <h1 className="totalMoneySpan">
        Tổng tiền nhận được: {revenueSelectedMonth?.totalMoney}đ
      </h1>
      <p className="nextLevelSpan">
        <AiFillExclamationCircle className="iconWarn" />
        <span>
          Bạn cần hoàn thành 50.000.000đ để vị trí giám đốc có mức chiết khấu
          55% và nhận về tối thiểu 37.000.000đ
        </span>
      </p>
    </Wrapper>
  );
};

export default Revenue;

const Wrapper = styled.div`
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;

  .selectTime {
    width: 25%;
  }

  .revenueWrap {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .cardInfo {
      width: 45%;
      margin-top: 20px;
    }
  }

  .totalMoneySpan {
    margin-top: 20px;
  }

  .nextLevelSpan {
    .iconWarn {
      font-size: 20px;
      margin-right: 10px;
    }
    & > span {
      color: red;
    }
  }
`;

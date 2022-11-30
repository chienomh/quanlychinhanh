import { Card, Result } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { usePersonalPageStateSlice } from '../slice';
import { selectPersonalPageState } from '../slice/selectors';
import { DataPerson } from '../type';
import { MonthPickerWrapper } from './MonthPicker';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { formatNumber } from 'utils/formatNumber';

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

  // const formatNumber = (number: number) => {
  //   return new Intl.NumberFormat().format(number) || number;
  // };

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
      {revenueSelectedMonth ? (
        <>
          <div className="revenueWrap">
            <StyledCard title="Doanh thu sỉ lẻ" className="cardInfo">
              <p>
                Tổng đơn hàng:{' '}
                {formatNumber(revenueSelectedMonth?.retailRevenue?.totalOrder)}
              </p>
              <p>
                Vốn:{' '}
                {formatNumber(revenueSelectedMonth?.retailRevenue?.capital)}đ
              </p>
              <p>
                Lợi nhuận:{' '}
                {formatNumber(revenueSelectedMonth?.retailRevenue?.interest)}đ
              </p>
            </StyledCard>
            <StyledCard title="Doanh thu đội nhóm" className="cardInfo">
              <p>
                Tổng số thành viên:{' '}
                {formatNumber(revenueSelectedMonth?.groupRevenue?.totalMember)}
              </p>
              <p>
                Lợi nhuận đạt được:{' '}
                {formatNumber(revenueSelectedMonth?.groupRevenue?.interest)}đ
              </p>
            </StyledCard>
            <StyledCard title="Tiền thưởng" className="cardInfo">
              <p>Thành tiền: {formatNumber(revenueSelectedMonth?.bonus)}đ</p>
            </StyledCard>
          </div>
          <h1 className="totalMoneySpan">
            Tổng tiền nhận được:{' '}
            {formatNumber(revenueSelectedMonth?.totalMoney)}đ
          </h1>
          <p className="nextLevelSpan">
            <AiFillExclamationCircle className="iconWarn" />
            <span>
              Bạn cần hoàn thành 50.000.000đ để vị trí giám đốc có mức chiết
              khấu 55% và nhận về tối thiểu 37.000.000đ
            </span>
          </p>
        </>
      ) : (
        <Result title="Không có dữ liệu doanh thu" status={404} />
      )}
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

// eslint-disable-next-line prettier/prettier

const StyledCard = styled(Card)`
  .ant-card-head {
    background-color: ${({ theme }) => theme.blueColor};
    color: white;
  }
`;

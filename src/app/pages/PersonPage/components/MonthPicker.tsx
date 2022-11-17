import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const { MonthPicker } = DatePicker;

const Cover = styled.div`
  flex-direction: row;
  flex: 1;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

const CoverIconLeft = styled(MdArrowBackIos)`
  margin: 5px 0px;
  cursor: pointer;
`;

const CoverIconRight = styled(MdArrowForwardIos)`
  margin: 5px 0px;
  cursor: pointer;
`;

const Date = styled.div`
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
`;

const useOutsideClick = (ref: any, callback: any) => {
  const handleClick = (e: any) => {
    const popupPicker = e.target.closest('.ant-calendar-picker-container');
    if (!popupPicker && ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

interface Iprops {
  onChange: any;
  selectedTime: any;
  onTimeChange?: any;
}

export const MonthPickerWrapper = (props: Iprops) => {
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const { onChange, selectedTime } = props; // selectedTime first day of week;
  const setLastMonth = () => {
    const lastMonth = moment(selectedTime).subtract(1, 'months');
    onChange(lastMonth);
  };

  const setNextMonth = () => {
    const nextMonth = moment(selectedTime).add(1, 'months');
    onChange(nextMonth);
  };

  const onSelectedMonth = (date: any) => {
    const firstOne = moment(date);
    onChange(firstOne);
    setShowDatePicker(false);
  };

  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setShowDatePicker(false);
  });

  return (
    <Cover ref={ref}>
      <MonthPicker
        suffixIcon={<></>}
        style={{ width: 0, overflow: 'hidden', display: 'none' }}
        popupStyle={{ paddingTop: 35, paddingLeft: 40 }}
        open={showDatePicker}
        value={moment(selectedTime)}
        onChange={onSelectedMonth}
        monthCellRender={(date: any) => moment(date).format('[Tháng] M')}
      />
      <Center>
        <CoverIconLeft type="left" onClick={setLastMonth} />
        <Date onClick={() => setShowDatePicker(true)}>
          {moment(selectedTime).format('MM/YYYY')}
        </Date>
        <CoverIconRight type="right" onClick={setNextMonth} />
      </Center>
    </Cover>
  );
};

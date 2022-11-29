import React from 'react';
import { Index, Wrapper } from './styled';
import { NumericFormat } from 'react-number-format';
import { MdDeleteOutline } from 'react-icons/md';

interface IpropsItem {
  id: number;
  from: number;
  to: number;
  persen: number;
}

interface Iprops {
  item: IpropsItem;
  index: number;
  disabled: boolean;
  handlerDeleteItem?: any;
}

export default function Item(props: Iprops) {
  const { item, index, disabled, handlerDeleteItem } = props;

  const handlerChangeValueFrom = e => {
    item.from = e.target.value;
  };

  const handlerChangeValueTo = e => {
    item.to = e.target.value;
  };

  const handlerChangeValueRose = e => {
    item.persen = e.target.value;
  };
  return (
    <Wrapper>
      <Index>{index + 1}</Index>
      <div>
        Từ:{' '}
        <NumericFormat
          value={item.from}
          allowLeadingZeros
          thousandSeparator=","
          style={{ textAlign: 'right' }}
          disabled={disabled}
          onChange={handlerChangeValueFrom}
        />{' '}
        đ
      </div>
      <div>
        Đến:{' '}
        <NumericFormat
          value={item.to}
          allowLeadingZeros
          thousandSeparator=","
          style={{ textAlign: 'right' }}
          disabled={disabled}
          onChange={handlerChangeValueTo}
        />{' '}
        đ
      </div>
      <div>
        Hoa hồng đạt được:{' '}
        <NumericFormat
          value={item.persen}
          disabled={disabled}
          style={{ textAlign: 'right' }}
          onChange={handlerChangeValueRose}
        />{' '}
        %
      </div>
      {!disabled && (
        <MdDeleteOutline
          size={20}
          style={{ cursor: 'pointer' }}
          onClick={() => handlerDeleteItem(item.id)}
        />
      )}
    </Wrapper>
  );
}

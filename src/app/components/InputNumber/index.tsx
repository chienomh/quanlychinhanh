import React from 'react';
import { NumericFormat } from 'react-number-format';

interface IpropType {
  value: any;
  thousandSeparator: string;
  disabled?: boolean;
  onChange?: Function;
  sx?: any;
}

export default function InputNumber(props: IpropType) {
  const { thousandSeparator, value, disabled, onChange } = props;

  return (
    <NumericFormat
      value={value ? value : null}
      allowLeadingZeros
      thousandSeparator={thousandSeparator ? thousandSeparator : ''}
      style={{ textAlign: 'right' }}
      disabled={disabled}
      onChange={() => onChange}
    />
  );
}

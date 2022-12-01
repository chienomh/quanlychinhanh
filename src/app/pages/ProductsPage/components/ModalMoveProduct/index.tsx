import { Modal, Input, InputNumber } from 'antd';
import React, { useState } from 'react';
import { FormatMoney } from 'utils/formatMoney';
import {
  CustomImg,
  InforProduct,
  Label,
  WrapperContent,
  WrapperInfor,
  WrapperPrice,
} from './styled';

interface ProductType {
  id: string;
  nameProduct: string;
  codeProduct: string;
  price: number;
  quantity: number;
  image: string;
}

interface Iprops {
  products: ProductType;
  isOpenChange: boolean;
  closeModal: any;
}

export default function ModalMoveProduct(props: Iprops) {
  const { isOpenChange, products, closeModal } = props;

  const [quantity, setQuantity] = useState<number>(0);
  const [code, setCode] = useState<string>('');

  const handlerCloseModal = () => {
    closeModal();
    setQuantity(0);
    setCode('');
  };

  const handlerChangeQuantity = value => {
    setQuantity(value);
  };

  const handlerChangeCode = value => {
    setCode(value.target.value);
  };

  return (
    <Modal
      title="Chuyển hàng"
      open={isOpenChange}
      onCancel={handlerCloseModal}
      width="800px"
      onOk={handlerCloseModal}
    >
      <WrapperInfor>
        <CustomImg src={products.image} />
        <InforProduct>
          <div>
            Tên hàng: <span>{products.nameProduct}</span>
          </div>
          <div>
            Giá: <span>{FormatMoney(products.price)} đ</span>
          </div>
        </InforProduct>
      </WrapperInfor>
      <WrapperContent>
        <div>
          <Label>Mã nhân viên</Label>
          <Input
            placeholder="Nhập mã nhân viên"
            onChange={handlerChangeCode}
            value={code}
          />
        </div>
        <div>
          <Label>Tên nhân viên</Label>
          <Input type="num" disabled />
        </div>
        <div>
          <Label>Số lượng sản phẩm</Label>
          <br />
          <InputNumber
            style={{ width: '100%' }}
            onChange={handlerChangeQuantity}
            value={quantity}
          />
        </div>
        <WrapperPrice>
          Thành tiền: {FormatMoney(quantity * products.price)} đ
        </WrapperPrice>
      </WrapperContent>
    </Modal>
  );
}

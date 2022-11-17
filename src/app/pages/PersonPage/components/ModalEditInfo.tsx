import { Button, Col, DatePicker, Form, Input, Modal, Row } from 'antd';
import { NotificationSuccess } from 'app/components/Notification';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { usePersonalPageStateSlice } from '../slice';
import { selectPersonalPageState } from '../slice/selectors';
import { DataPerson } from '../type';

interface IProps {
  data: DataPerson;
}

const ModalEditInfo = (props: IProps) => {
  const { showFormEdit } = useSelector(selectPersonalPageState);
  const dispatch = useDispatch();
  const { actions } = usePersonalPageStateSlice();
  const [data, setData] = useState<DataPerson>(props.data);
  const [form] = Form.useForm();

  const onFinishForm = (value: any) => {
    let newInfo = {
      ...value,
      birth: moment(value?.birth)?.format() || moment().format(),
    };
    let newPersonData = {
      ...data,
      ...newInfo,
    };
    setData(newPersonData);
    localStorage.setItem('personData', JSON.stringify(newPersonData));
    NotificationSuccess('Thành công', 'Sửa thông tin cá nhân thành công');
    closeModal();
  };

  const closeModal = () => {
    dispatch(actions.setShowFormEdit(false));
  };

  return (
    <StyledModal
      visible={showFormEdit}
      onCancel={closeModal}
      footer={null}
      title="Sửa thông tin cá nhân"
      width={900}
      afterClose={() => form.resetFields()}
    >
      <WrapperBody>
        <Form form={form} onFinish={onFinishForm} layout="inline">
          <Row gutter={16}>
            <Col className="editImg" span={6}>
              <img src={data?.img} alt="" />
              <Button icon={<BsUpload style={{ marginRight: '5px' }} />}>
                Chọn ảnh
              </Button>
            </Col>
            <Col span={18}>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Form.Item
                    labelAlign="left"
                    rules={[{ required: true, message: 'Trường bắt buộc!' }]}
                    requiredMark="optional"
                    label="Họ tên"
                    name={'name'}
                    initialValue={data?.name}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelAlign="left"
                    rules={[{ required: true, message: 'Trường bắt buộc!' }]}
                    requiredMark="optional"
                    label="Email"
                    name={'email'}
                    initialValue={data?.email}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelAlign="left"
                    rules={[{ required: true, message: 'Trường bắt buộc!' }]}
                    requiredMark="optional"
                    label="Địa chỉ"
                    name={'address'}
                    initialValue={data?.address}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelAlign="left"
                    rules={[{ required: true, message: 'Trường bắt buộc!' }]}
                    requiredMark="optional"
                    label="Số điện thoại"
                    name={'phone'}
                    initialValue={data?.phone}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelAlign="left"
                    rules={[{ required: true, message: 'Trường bắt buộc!' }]}
                    requiredMark="optional"
                    label="Ngày sinh"
                    name={'birth'}
                    initialValue={moment(data?.birth)}
                  >
                    <DatePicker />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Button type="primary" className="btnSubmit" htmlType="submit">
            Đồng ý
          </Button>
        </Form>
      </WrapperBody>
    </StyledModal>
  );
};

export default ModalEditInfo;

const StyledModal = styled(Modal)``;

const WrapperBody = styled.div`
  .ant-form-item-label {
    width: 100%;
  }

  .ant-form-item-has-error {
    position: absolute;
  }

  .btnSubmit {
    display: block;
    margin-top: 20px;
    width: 200px;
    margin: 20px auto 0;
  }

  .editImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
      max-width: 200px;
    }

    button {
      display: block;
      margin-top: 15px;
      width: 150px;
    }
  }
`;

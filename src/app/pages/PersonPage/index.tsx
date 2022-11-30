import moment from 'moment';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import CardInfo from './components/CardInfo';
import ModalEditInfo from './components/ModalEditInfo';
import Revenue from './components/Revenue';
import { selectPersonalPageState } from './slice/selectors';
import { DataPerson } from './type';

const PersonalPage = () => {
  const { showFormEdit } = useSelector(selectPersonalPageState);
  let dataPerson: DataPerson = JSON.parse(
    localStorage.getItem('personData') as never,
  );

  // eslint-disable-next-line prettier/prettier
  useEffect(() => {
    if (!dataPerson) {
      localStorage.setItem(
        'personData',
        JSON.stringify({
          id: 1,
          name: 'Cao Mỗ',
          birth: moment('20001203', 'YYYYMMDD').format(),
          img: 'https://s.memehay.com/files/posts/20200905/meme-khoa-mom-chu-cho-bi-bop-mom-c9bee3f124dd83d2cce3c4470a21d22f.jpg',
          email: 'mountmo@gmail.com',
          address: 'Vĩnh Tường, Tuyên Quang',
          phone: '0123232323',
          discountPercentage: 50,
          revenue: [
            {
              month: '08/2022',
              retailRevenue: {
                totalOrder: 100,
                capital: 5000000,
                interest: 2000000,
              },
              groupRevenue: {
                totalMember: 100,
                interest: 2000000,
              },
              bonus: 10000000,
              totalMoney: 3000000000,
            },
            {
              month: '09/2022',
              retailRevenue: {
                totalOrder: 100,
                capital: 7000000,
                interest: 3000000,
              },
              groupRevenue: {
                totalMember: 100,
                interest: 2500000,
              },
              bonus: 11000000,
              totalMoney: 3200000000,
            },
            {
              month: '10/2022',
              retailRevenue: {
                totalOrder: 100,
                capital: 9000000,
                interest: 5000000,
              },
              groupRevenue: {
                totalMember: 100,
                interest: 2800000,
              },
              bonus: 12000000,
              totalMoney: 3500000000,
            },
            {
              month: '11/2022',
              retailRevenue: {
                totalOrder: 100,
                capital: 10000000,
                interest: 6000000,
              },
              groupRevenue: {
                totalMember: 100,
                interest: 3000000,
              },
              bonus: 13000000,
              totalMoney: 3600000000,
            },
            {
              month: '12/2022',
              retailRevenue: {
                totalOrder: 100,
                capital: 12000000,
                interest: 8000000,
              },
              groupRevenue: {
                totalMember: 100,
                interest: 5000000,
              },
              bonus: 15000000,
              totalMoney: 4000000000.03,
            },
          ],
        }),
      );
    }
  }, [dataPerson, showFormEdit]);
  return (
    <div>
      <Helmet>
        <title>Cá nhân</title>
      </Helmet>
      <CardInfo data={dataPerson} />
      <Revenue />
      <ModalEditInfo data={dataPerson} />
    </div>
  );
};

export default PersonalPage;

import React from 'react';
import { Tree } from 'react-organizational-chart';
import { themes } from 'styles/theme/themes';
import CardInfo from './Card';
import TreeNodeChart from './TreeNodeChart';

const Chart = () => {
  const groupsData = {
    leadInfo: {
      avatar: '',
      name: 'Thàng Nguyễn',
      position: 'Trưởng nhóm',
      desc: 'WF Nguyễn',
      total: 1000000000,
    },
    membersInfo: [
      {
        avatar: '',
        name: 'Nguyễn Thàng',
        position: 'FrontEnd Developer',
        desc: 'FE ReactJs',
        total: 300000000,
        childMember: [
          {
            avatar: '',
            name: 'Nguyễn Thàng',
            position: 'FrontEnd Developer',
            desc: 'FE ReactJs',
            total: 100000000,
            childMember: [
              {
                avatar: '',
                name: 'Nguyễn Thàng',
                position: 'FrontEnd Developer',
                desc: 'FE ReactJs',
                total: 30000000,

                childMember: [
                  {
                    avatar: '',
                    name: 'Nguyễn Thàng',
                    position: 'FrontEnd Developer',
                    desc: 'FE ReactJs',
                    total: 30000000,
                    childMember: [],
                  },
                ],
              },
              {
                avatar: '',
                name: 'Nguyễn Thàng',
                position: 'FrontEnd Developer',
                desc: 'FE ReactJs',
                total: 30000000,

                childMember: [],
              },
              {
                avatar: '',
                name: 'Nguyễn Thàng',
                position: 'FrontEnd Developer',
                desc: 'FE ReactJs',
                total: 40000000,
                childMember: [],
              },
            ],
          },
          {
            avatar: '',
            name: 'Nguyễn Thàng',
            position: 'FrontEnd Developer',
            desc: 'FE ReactJs',
            total: 100000000,

            childMember: [],
          },
          {
            avatar: '',
            name: 'Nguyễn Thàng',
            position: 'FrontEnd Developer',
            desc: 'FE ReactJs',
            total: 100000000,

            childMember: [],
          },
        ],
      },
      {
        avatar: '',
        name: 'Nguyễn Thàng',
        position: 'FrontEnd Developer',
        desc: 'FE ReactJs',
        total: 300000000,
        childMember: [
          {
            avatar: '',
            name: 'Nguyễn Thàng',
            position: 'FrontEnd Developer',
            desc: 'FE ReactJs',
            total: 150000000,
            childMember: [],
          },
          {
            avatar: '',
            name: 'Nguyễn Thàng',
            position: 'FrontEnd Developer',
            desc: 'FE ReactJs',
            childMember: [],
            total: 150000000,
          },
        ],
      },
      {
        avatar: '',
        name: 'Nguyễn Thàng',
        position: 'FrontEnd Developer',
        desc: 'FE ReactJs',
        total: 400000000,
        childMember: [
          {
            avatar: '',
            name: 'Nguyễn Thàng',
            position: 'FrontEnd Developer',
            desc: 'FE ReactJs',
            total: 200000000,
            childMember: [],
          },
          {
            avatar: '',
            name: 'Nguyễn Thàng',
            position: 'FrontEnd Developer',
            desc: 'FE ReactJs',
            total: 200000000,
            childMember: [],
          },
        ],
      },
    ],
  };
  return (
    <div>
      <Tree
        lineWidth={'1px'}
        lineColor={themes.dark.blueColor}
        lineBorderRadius={'10px'}
        label={
          <CardInfo
            name={groupsData.leadInfo.name}
            position={groupsData.leadInfo.position}
            desc={groupsData.leadInfo.desc}
            avatar={groupsData.leadInfo.avatar}
            total={groupsData.leadInfo.total}
          />
        }
        nodePadding="10px"
        lineHeight="30px"
      >
        {groupsData.membersInfo.map((item: any, index: number) => (
          <TreeNodeChart
            key={index}
            data={item}
            child={item?.childMember || []}
          ></TreeNodeChart>
        ))}
      </Tree>
    </div>
  );
};

export default Chart;

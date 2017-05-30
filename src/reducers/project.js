const defaultStatus = {
    name: 'project',
    data: [
        {
            _id: 0,
            name: '外在',
            imgsrc: 'diannao.png'
        },
        {
            _id: 1,
            name: '日语',
            imgsrc: 'gou.png'            
        },
        {
            _id: 2,
            name: '英语',
            imgsrc: 'mao.png'            
        },
        {
            _id: 3,
            name: '健康',
            imgsrc: 'q.png'
        },
        {
            _id: 4,
            name: '视力',
            imgsrc: 'shan.png'
        },
        {
            _id: 5,
            name: 'react',
            imgsrc: 'shili.png'
        },
        {
            _id: 6,
            name: 'react-native',
            imgsrc: 'shuye.png'
        },
        {
            _id: 7,
            name: '技术博',
            imgsrc: 'xingkong.png'
        }
    ]
}

const project = (state = defaultStatus, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default project
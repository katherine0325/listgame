const defaultState = {
    name: 'list',
    data: [
        {
            _id: 1, 
            text: '第一条数据', 
            score: 6,
            date: '2017-03-05',
            project: {
                name: "英语"            
            }, 
            finishAt: '2015-4-14'
        },
        {
            _id: 2,
            text: '第二条数据', 
            score: 7,
            project: {
                name: "英语"
            },
            finishAt: '2015-4-14'
        },
        {
            _id: 3, 
            text: '第三条数据', 
            project: {
                name: "IT"
            },
            finishAt: '2015-4-14'
        },
        {
            _id: 4,
            text: '第四条数据',
            project: {
                name: "OO"
            },
            finishAt: '2015-1-14'
        }
    ]
}

const list = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default list
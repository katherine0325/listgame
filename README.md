#  listgame

npm install
npm start    # 开发
npm run build    # 构建

#  结构目标
  * 复用
  * 扩展
  * 易维护

#  目录结构
--src--actions    # 总体的actions
   |--components    # UI层级的组件，可复用，单一的react组件
   |--constants    # actions的另一个文件夹
   |--containers   # 内文件名为路由地址，内含逻辑代码，其引用的可复用组件在components中，react-redux的connect绑定，以及mapStateToProps和mapDispatchToProps的绑定在当前文件中实现
   |--reducers    # 其绑定方式由路由的containers文件进行绑定，实现共享组件状态树
   |--main.js    # 入口，当前文件除了充当入口的角色，其中redux的store的绑定也主要在这个文件
   |--routes.js    # 路由，引入containers里的文件对应的以路由为文件名的文件，react-router主要在这里使用
--views--index.js    # 视图文件
--webpack.config.js    # webpack配置文件
--package.json
--README.md 

#  技术点
  * react
  * react-router
  * redux
  * webpack

  * bootstrap ???

#  增加一个页面
    01. containers新页面
    02. routes.js新增路由
    01. components新增组件
    02. containers引入及绑定数据
    03. reducers增加数据
    04. reducers/index引入reducer
    05. actions
    06. actionTypes


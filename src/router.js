import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";


const routes = [
  {
    path: "/list", //어떤 사람이 이 경로로 접속을 하면
    component: {
        List : List, // 여러개의 컴포넌트를 보여줄 때 named views
        Comment : Comment,
        Author : Author
    }, // 이 컴포넌트를 보여주세용
  },
  {
    path:"/",
    component : Home,
  },
  {
    path:'/detail/:id', // :'키워드'로 수백개의 하위 페이지를 만들수 있음
    // /detail/0, /detail/100, /detail/1000 어떤걸로든 접속해도 Detail 컴포넌트를 보여줌
    component : Detail,
    children:[
        //nested routes
        {   // children 부분은 상대경로로 작성
            path:"author",
            component:Author,
        },
        {
            path:"comment",
            component:Comment,
        }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  // Hash mode 설정 -> 서버가 라우팅을 채가서 Vue에서 라우팅을 하기 전에 없는 서버라고 판단되어
  // 404페이지가 뜰 수 있는데
  // 이걸 설정해주면 온전히 라우팅을 Vue에서 해주기 때문에 에러를 최대한 막을 수 있다.
  routes,
});

export default router; 
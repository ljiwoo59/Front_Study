// 여러개의 컴포넌트들을 import 해서 라우터 정보 구성(parth-component 간의 관계)
import Top from "./Top.js";
import CustomerList from "./CustomerList.js";
import CustomerDetail from "./CustomerDetail.js";
import CustomerDelete from "./CustomerDelete.js";
import CustomerInsert from "./CustomerInsert.js";
import CustomerSearch from "./CustomerSearch.js";
import CustomerModify from "./CustomerModify.js";

// 라우터 구성
export default new VueRouter({
    routes: [
        {path: "/top", component: Top},
        {path: "/list", component: CustomerList},
        {path: "/detail/:num", component: CustomerDetail},
        {path: "/delete/:num", component: CustomerDelete},
        {path: "/insert/", component: CustomerInsert},
        {path: "/search/", component: CustomerSearch},
        {path: "/modify/:num", component: CustomerModify},
    ]
});

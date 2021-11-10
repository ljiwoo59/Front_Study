// 사용자 목록(모든 데이터 보여주기 - 서버에서 받아오기)
export default {
    template:
        `
        <div class="container">
            <h2>사용자 목록</h2>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th class="text-center">번호</th>
                        <th class="text-center">이름</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cus in result">
                        <td v-text="cus.num"></td>
                        <td>
                            <router-link :to="'/detail/' + cus.num" v-text="cus.name"></router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `,
        data() {
            return {
                result: [], // 서버에서 받아온 결과
            }
        },
        created() { // 아직 화면과 연결되기 전
            this.selectAll();
        },
        methods: {
            selectAll() {
                axios
                    .get("http://localhost/customers") // Spring 과 live server 은 다른 포트 번호로 돌기 때문에 스프링 컨트롤러에 Cross Origin 필수
                    .then((response) => {this.result = response.data}) // 성공적으로 결과를 받으면 실행할 함수
                    .catch((response) => {this.error = response.status}) // 에러 났을 때 실행할 함수
            },
        }
}
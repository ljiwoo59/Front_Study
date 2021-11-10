// 사용자 한사람의 정보 보여주기
export default {
    template:
        `
        <div class="container">
            <h2>사용자 정보</h2>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th class="text-center">번호</th>
                        <th class="text-center">이름</th>
                        <th class="text-center">주소</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-text="num"></td>
                        <td v-text="name"></td>
                        <td v-text="address"></td>
                    </tr>
                </tbody>
            </table>
            <router-link :to="'/delete/' + num">삭제하기</router-link>
            <router-link :to="'/modify/' + num">수정하기</router-link>
        </div>
        `,
        data() {
            return {
                num: "",
                name: "",
                address: ""
            }
        },
        created() {
            let param = this.$route.params.num;
            this.selectOne(param);
        },
        methods: {
            selectOne(num) {
                axios
                    .get("http://localhost/customers/" + num)
                    .then((response) => {
                        let json = response.data;
                        this.num = json.num;
                        this.name = json.name;
                        this.address = json.address;
                    })
                    .catch((response) => {this.error = response.status})
            },
        },
}
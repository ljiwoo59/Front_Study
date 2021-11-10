// 이전 화면에서 번호를 받아와 서버에 삭제 요청
export default {
    template:
        `
            <div class="container">
                <h3>{{num}} 번 고객정보가 삭제되었습니다.</h3>
            </div>
        `,
        data() {
            return {
                num: ""
            }
        },
        created() {
            this.num = this.$route.params.num;
            this.deleteOne();
        },
        methods: {
            deleteOne() {
                axios
                    .delete("http://localhost/customers/" + this.num)
                    .then((response) => {
                        this.selectAll(); // 화면 refresh
                        this.clearAll();
                    })
                    .catch((response) => {this.error = response.status})
            },
        }
}
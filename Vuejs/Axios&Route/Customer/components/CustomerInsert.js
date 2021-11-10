export default {
    template:
        `
            <div class="container">
                <form id="form1" class="form-horizontal">
                    <h2>사용자 등록</h2>
                    <div class="form-group">
                        <label>번호:</label>
                        <input type="text" class="form-control" id="num" v-model="num">
                    </div>
                    <div class="form-group">
                        <label>이름:</label>
                        <input type="text" class="form-control" id="name" v-model="name">
                    </div>

                    <div class="form-group">
                        <label>주소:</label>
                        <input type="text" class="form-control" id="address" v-model="address">
                    </div>

                    <div class="btn-group">
                        <input type="button" class="btn btn-primary" value="등록" id="btnInsert" @click="insert" /> 
                    </div>
                </form>
            </div>
        `,
        data() {
            return {
                num: "",
                name: "",
                address: ""
            }
        },
        methods: {
            insert() {
                axios
                    .post("http://localhost/customers", { // 서버에 데이터를 보내 주어야 한다
                        num: this.num,
                        name: this.name,
                        address: this.address
                    })
                    .then((response) => {
                        alert("고객정보가 등록되었습니다.");
                        this.$router.push("/list");
                    })
                    .catch((response) => {this.error = response.status})
            },
        }
}
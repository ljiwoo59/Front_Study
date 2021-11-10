export default {
    template:
        `
            <div class="container">
                <form id="form1" class="form-horizontal">
                    <h2>사용자 정보 수정</h2>
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
                        <input type="button" class="btn btn-primary" value="수정" id="btnUpdate" @click="update" /> 
                    </div>
                </form>
            </div>
        `,
    created() {
        this.num = this.$route.params.num;
    },
    data() {
        return {
            num: "",
            name: "",
            address: ""
        }
    },
    methods: {
        update() {
            axios
                .put("http://localhost/customers", {
                    num: this.num,
                    address: this.address
                })
                .then((response) => {
                    alert("수정되었습니다.");
                    this.$router.push("/list");
                })
                .catch((response) => {this.error = response.status})
        },
    },
}
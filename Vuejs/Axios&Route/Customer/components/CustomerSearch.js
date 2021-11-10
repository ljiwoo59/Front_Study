export default {
    template:
        `
        <div class="container">
            <h2>사용자 검색</h2>
            <label>주소:</label>
            <div class="form-group">
                <input type="text" class="form-control" id="address" v-model="address">
            </div>
            
            <div class="btn-group">
                <input type="button" class="btn btn-primary" value="검색" id="btnSearch" @click="search" /> 
            </div>
 
            <div>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th class="text-center">번호</th>
                            <th class="text-center">이름</th>
                            <th class="text-center">주소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cus in result">
                            <td v-text="cus.num"></td>
                            <td v-text="cus.name"></td>
                            <td v-text="cus.address"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `,
        data() {
            return {
                address: "",
                result: []
            }
        },
        methods: {
            search() {
                axios
                    .get("http://localhost/customers/find/" + this.address)
                    .then((response) => {
                        this.result = response.data;
                    })
                    .catch((response) => {this.error = response.status})
            },
        },
}
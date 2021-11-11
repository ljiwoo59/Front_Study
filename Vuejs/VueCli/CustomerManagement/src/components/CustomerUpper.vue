<template>
    <div class="container">
        <form id="form1" class="form-horizontal">
            <div class="form-group">
                <label>번호:</label>
                <input type="text" class="form-control" id="num" v-model="cus.num">
            </div>
            <div class="form-group">
                <label>이름:</label>
                <input type="text" class="form-control" id="name" v-model="cus.name">
            </div>

            <div class="form-group">
                <label>주소:</label>
                <input type="text" class="form-control" id="address" v-model="cus.address">
            </div>

            <div class="btn-group">
                <input type="button" class="btn btn-primary" value="등록" 	id="btnInsert" @click="insert" /> 
                <input type="button" class="btn btn-primary" value="수정" id="btnUpdate" @click="update" /> 
                <input type="button" class="btn btn-primary" value="삭제" id="btnDelete" @click="deleteOne" /> 
                <input type="button" class="btn btn-primary" value="검색" id="btnSearch" @click="search" /> 
                <input type="button" class="btn btn-primary" value="전체" id="btnAll" @click="selectAll" /> 
                <input type="button" class="btn btn-primary" value="초기화" id="btnInit" @click="clearAll" />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "CustomerUpper",
    props: {
        cus: {
            num: "",
            name: "",
            address: ""
        }
    },
    
    methods: {
        selectAll() {
            this.$emit("all", {})
        },
        insert() {
            // 부모 컴포넌트에 신호를 보내서 insert 부탁
            this.$emit("ins", { // 부모에게 보내는 신호 이름, 데이터
                num: this.cus.num,
                name: this.cus.name,
                address: this.cus.address
            });
            this.clearAll();
        },
        update() {
            this.$emit("upd", {
                num: this.cus.num,
                address: this.cus.address
            });
            this.clearAll();
        },
        deleteOne() {
            this.$emit("del", {
                num: this.cus.num
            });
            this.clearAll();
        },
        search() {
            this.$emit("find", {
                address: this.cus.address
            });
            this.clearAll();
        },
        clearAll() { // 화면 입력 칸 지우기
            this.cus.num = "";
            this.cus.name = "";
            this.cus.address = "";
        }
    },
}
</script>

<style>

</style>
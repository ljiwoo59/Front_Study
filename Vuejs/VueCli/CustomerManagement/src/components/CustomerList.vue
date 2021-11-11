<template>
    <div class="container">
        <h2>사용자 목록</h2>
        <table class="table text-center">
            <thead>
                <tr>
                    <th class="text-center">번호</th>
                    <th class="text-center">이름</th>
                    <th class="text-center">주소</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cus in result" :key="cus.num" @click="selectOne(cus)">
                    <td v-text="cus.num"></td>
                    <td v-text="cus.name"></td>
                    <td v-text="cus.address"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "CustomerList",
    props: {
        result: []
    },
    methods: {
        selectOne(data) {
            this.$emit("cus", {
                num: data.num
            })
        }
    },
}
</script>

<style>

</style>
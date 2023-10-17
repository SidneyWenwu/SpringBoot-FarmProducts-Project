const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootn3ua8/",
            name: "springbootn3ua8",
            // 退出到首页链接
            indexUrl: 'http://localhost:63342/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农产品销售系统"
        }
    }
}
export default base

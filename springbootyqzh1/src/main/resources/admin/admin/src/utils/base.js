const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootyqzh1/",
            name: "springbootyqzh1",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootyqzh1/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "书籍学习平台"
        } 
    }
}
export default base

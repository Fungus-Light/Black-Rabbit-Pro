let jsBlocks = ["level", "log", "warning", "error", 'wait_for_seconds', 'comment', 'say']

let luaBlocks = ["log", "warning", "error", 'wait_for_seconds', 'comment']

let jsSearch = new Vue({
    el: "#jsSearch",
    data: {
        searchText: "",
        menuTags: [],
        menuShow: false
    },
    methods: {
        valueChange: () => {

            let key = jsSearch.searchText
            let tags = []
            jsBlocks.forEach((item) => {
                if (item.includes(key) && key != "") {
                    tags.push(item)
                }
            })
            jsSearch.menuTags = tags
            if (tags.length > 0) {
                jsSearch.menuShow = true
            }
        },
        clickMenu: (tag) => {
            console.log("will create " + tag)

            let newBlock = workspaceJS.newBlock(tag);
            newBlock.initSvg();
            newBlock.render();

            jsSearch.menuShow = false
        }
    }
})

let luaSearch = new Vue({
    el: "#luaSearch",
    data: {
        searchText: "",
        menuTags: [],
        menuShow: false
    },
    methods: {
        valueChange: () => {

            let key = luaSearch.searchText
            let tags = []
            luaBlocks.forEach((item) => {
                if (item.includes(key) && key != "") {
                    tags.push(item)
                }
            })
            luaSearch.menuTags = tags
            if (tags.length > 0) {
                luaSearch.menuShow = true
            }
        },
        clickMenu: (tag) => {
            console.log("will create " + tag)

            let newBlock = workspaceLUA.newBlock(tag);
            newBlock.initSvg();
            newBlock.render();

            luaSearch.menuShow = false
        }
    }
})
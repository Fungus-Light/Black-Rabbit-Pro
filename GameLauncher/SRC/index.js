let GameTab = document.getElementById("games")

let SettingsTab = document.getElementById("settings")

let ModTab = document.getElementById("mod")

let AboutTab = document.getElementById("about")

let GamePage = document.getElementById("gamesPage")

let SettingPage = document.getElementById("settingPage")

let pages = [GamePage, SettingPage]

function Init() {
    GamePage.style.display = "block"
    SettingPage.style.display = "none"
}

function BindButtom(btn, page) {
    btn.addEventListener('click', () => {
        pages.forEach((e => {
            e.style.display = "none"
        }))
        page.style.display = "block"
    })
}

BindButtom(GameTab, GamePage)
BindButtom(SettingsTab, SettingPage)

Init()
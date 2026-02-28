let currentTab ="all"
const tabActive = ["bg-[#3B82F6]", "text-white"];
const tabInActive = ["bg-transparent", "text-slate-700", "border-slate-200", "text-black"]

function switchTab(tab) {
    console.log(tab)
    const tabs = ["all", "interview", "rejected"];

    for(const t of tabs){
        const tabName = document.getElementById("tab-" + t);
        if(t === tab){
            tabName.classList.remove(...tabInActive);
            tabName.classList.add(...tabActive);
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInActive);

        }
    }
}

switchTab(currentTab);
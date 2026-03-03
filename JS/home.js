let currentTab ="all"
const tabActive = ["bg-[#3B82F6]", "text-white"];
const tabInActive = ["bg-white", "text-slate-700", "border-slate-200", "text-black"]

const availableJobs = document.getElementById("jobs-container");
const interviewTab = document.getElementById("interview-container");
const rejectTab = document.getElementById("reject-container")

function switchTab (tab) {
    // console.log(tab)
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

    const pages = [availableJobs, interviewTab, rejectTab];

    for (const page of pages){
        page.classList.add("hidden");
    }

    if(tab === "all") {
        availableJobs.classList.remove("hidden");
    } else if(tab === "interview") {
        interviewTab.classList.remove("hidden");
    } else {
        rejectTab.classList.remove("hidden");
    }
}

switchTab(currentTab);
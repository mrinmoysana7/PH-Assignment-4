let currentTab ="all"
const tabActive = ["bg-[#7DA8FF]", "text-white"];
const tabInActive = ["bg-white", "text-slate-700", "border-slate-200", "text-black"]

const availableJobs = document.getElementById("jobs-container");
const interviewTab = document.getElementById("interview-container");
const rejectTab = document.getElementById("reject-container");
const noJob = document.getElementById("no-jobs-section");

function switchTab (tab) {
    // console.log(tab)
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
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
    noJob.classList.add("hidden");

    const pages = [availableJobs, interviewTab, rejectTab];

    for (const page of pages){
        page.classList.add("hidden");
    }
    

    if(tab === "all") {
        availableJobs.classList.remove("hidden");
        if(availableJobs.children.length < 1){
            noJob.classList.remove("hidden");
        }    
    } else if(tab === "interview") {
        interviewTab.classList.remove("hidden");
        if(interviewTab.children.length < 1){
            noJob.classList.remove("hidden");
        }
    } else {
        rejectTab.classList.remove("hidden");
        if(rejectTab.children.length < 1){
            noJob.classList.remove("hidden");
        }
    };
    updateStatNumber();
};


const totalNum = document.getElementById("stat-total");
const inrterviewNum = document.getElementById("stat-interview");
const rejectNum = document.getElementById("stat-reject");
const availJob = document.getElementById("Available-jobs");

totalNum.innerText = availableJobs.children.length;

switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function(event){
    // console.log(event.target);
    const targetClickEvent = event.target;
    const card = targetClickEvent.closest(".card");
    const status = card.querySelector(".statuses");
    const parent = card.parentNode;

    if(targetClickEvent.classList.contains("interview")){
       status.innerText = "Interviewed";
       interviewTab.appendChild(card);
    }
    if(targetClickEvent.classList.contains("rejected")){
       status.innerText = "Rejected";
       rejectTab.appendChild(card);
    }
    if(targetClickEvent.classList.contains("delete")){
        parent.removeChild(card);
        
    };
    updateStatNumber();
});

function updateStatNumber() {
const stats = {
    all: availableJobs.children.length,
    interview: interviewTab.children.length,
    rejected: rejectTab.children.length  
}
totalNum.innerText = stats.all;
inrterviewNum.innerText = stats.interview;
rejectNum.innerText = stats.rejected;

availJob.innerText = stats[currentTab];

if(stats[currentTab] < 1){
   noJob.classList.remove("hidden");
} else {
   noJob.classList.add("hidden");
}
}


updateStatNumber();
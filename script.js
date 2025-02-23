const sidebarBtns = Array.from(document.querySelectorAll(".sidebar-button"));
sidebarBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        sidebarBtns.forEach(x => x.classList.remove("active"));
        btn.classList.add("active");
        const toggleId = btn.dataset.toggle;
        const hiddenableEls = Array.from(document.querySelectorAll(".hiddenable")); 
        const toggleEl = hiddenableEls.find(el => el.classList.contains(toggleId));
        hiddenableEls.forEach(el => el.hidden = true);
        toggleEl.hidden = false;

        if (btn.dataset.section) {
            const sectionEl = document.getElementById(btn.dataset.section);
            sectionEl.scrollIntoView();
        }
    });
});

sidebarBtns.find(x => x.classList.contains("active"))?.click();
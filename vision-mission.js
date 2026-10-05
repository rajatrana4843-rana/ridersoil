function switchVmTab(index) {
    const tabs = document.querySelectorAll('.vm-tab-btn');
    const contents = document.querySelectorAll('.vm-info-box');
    const slider = document.getElementById('vmSliderBg');

    // Remove active classes
    tabs.forEach(t => t.classList.remove('active-tab'));
    contents.forEach(c => c.classList.remove('active-vm-content'));

    // Add active class to clicked tab and corresponding content
    tabs[index].classList.add('active-tab');
    const targetId = tabs[index].getAttribute('data-target');
    document.getElementById(targetId).classList.add('active-vm-content');

    // Move the red background slider
    if (index === 0) {
        slider.style.transform = "translateX(0%)";
    } else {
        slider.style.transform = "translateX(100%)";
    }
}

// Optional: Enable Hover effect as shown in your video
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.vm-tab-btn');
    tabs.forEach((tab, index) => {
        tab.addEventListener('mouseenter', function() {
            switchVmTab(index);
        });
    });
});
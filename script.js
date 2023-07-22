var nextButtons = document.querySelectorAll(".next-button");
var backButtons = document.querySelectorAll(".back-button");
// menu items
var menuItemOne = document.getElementById("menu-item-1");
var menuItemTwo = document.getElementById("menu-item-2");
var menuItemThree = document.getElementById("menu-item-3");
var menuItemFour = document.getElementById("menu-item-4");
// sections
var sectionOne = document.getElementById("info-card-1");
var sectionTwo = document.getElementById("info-card-2");
var sectionThree = document.getElementById("info-card-3");
var sectionFour = document.getElementById("info-card-4");
var sectionFive = document.getElementById("info-card-5");
// yearly or Monthly checkbox
var checkboxYorM = document.getElementById("checkboxYorM");
//page 2 options
var arcade = document.getElementById("arcade");
var advanced = document.getElementById("advanced");
var pro = document.getElementById("pro");
var finalSelectionsOfPlans = [];
//page 3 options
var onlineService = document.getElementById("online-service");
var largerStorage = document.getElementById("larger-storage");
var customProfile = document.getElementById("customizable-profile");
var finalSelectionsOfAddOns = [];
//populating the spans of truth
var chosenPlan = document.getElementById("chosen-plan");
var planPrice = document.getElementById("plan-price");
// choices
var onlineServiceChoice = document.getElementById("online-service-choice");
var largerStorageChoice = document.getElementById("larger-storage-choice");
var customProfileChoice = document.getElementById("custom-profile-choice");

var totalPriceDiv = document.getElementById("total-price");
var currentItem = 1;
var totalPriceValue = 0;

function hideAllChoices() {
    onlineServiceChoice.classList.add("hidden");
    largerStorageChoice.classList.add("hidden");
    customProfileChoice.classList.add("hidden");
}
function deleteSelectionStyleToAll() {
    menuItemOne.classList.remove("selected");
    menuItemTwo.classList.remove("selected");
    menuItemThree.classList.remove("selected");
    menuItemFour.classList.remove("selected");
}
function hideAllSections() {
    sectionOne.classList.add("hidden");
    sectionTwo.classList.add("hidden");
    sectionThree.classList.add("hidden");
    sectionFour.classList.add("hidden");
    sectionFive.classList.add("hidden");
}
function savingSectionTwoData() {
    totalPriceValue = 0;
    //clean it before appending dear
    finalSelectionsOfPlans = [];
    if (checkboxYorM.checked) {
        if (arcade.checked) {
            finalSelectionsOfPlans.push("Arcade (Yearly)");
            finalSelectionsOfPlans.push("$90/yr");
            totalPriceValue += 90;
        } else if (advanced.checked) {
            finalSelectionsOfPlans.push("Advanced (Yearly)");
            finalSelectionsOfPlans.push("$120/yr");
            totalPriceValue += 120;
        } else if (pro.checked) {
            finalSelectionsOfPlans.push("Pro (Yearly)");
            finalSelectionsOfPlans.push("$150/yr");
            totalPriceValue += 150;
        }
    } else {
        if (arcade.checked) {
            finalSelectionsOfPlans.push("Arcade (Monthly)");
            finalSelectionsOfPlans.push("$9/mo");
            totalPriceValue += 9;
        } else if (advanced.checked) {
            finalSelectionsOfPlans.push("Advanced (Monthly)");
            finalSelectionsOfPlans.push("$12/mo");
            totalPriceValue += 12;
        } else if (pro.checked) {
            finalSelectionsOfPlans.push("Pro (Monthly)");
            finalSelectionsOfPlans.push("$15/mo");
            totalPriceValue += 15;
        }
    }
    chosenPlan.textContent = finalSelectionsOfPlans[0];
    planPrice.textContent = finalSelectionsOfPlans[1];
}
function savingSectionThreeData() {
    hideAllChoices();
    var addons = [onlineService, largerStorage, customProfile];
    for (var i = 0; i < addons.length; i++) {
        if (addons[i].checked) {
            if (addons[i] == onlineService) {
                onlineServiceChoice.classList.toggle("hidden");
                totalPriceValue += 1;
            } else if (addons[i] == largerStorage) {
                largerStorageChoice.classList.toggle("hidden");
                totalPriceValue += 2;
            } else if (addons[i] == customProfile) {
                customProfileChoice.classList.toggle("hidden");
                totalPriceValue += 2;
            }
        }
    }
}

nextButtons.forEach((button) => {
    button.addEventListener("click", function () {
        // Your functionality goes here
        deleteSelectionStyleToAll();
        if (currentItem < 5) {
            currentItem++;
            console.log("currentItem " + currentItem);
            if (currentItem == 4) {
                savingSectionTwoData();
                savingSectionThreeData();
                totalPriceDiv.textContent = totalPriceValue + " $";
            }
            if (currentItem == 5) {
                renderFinalPage();
            }
        }
        document
            .getElementById(`menu-item-${currentItem}`)
            .classList.add("selected");
        renderNewPage();
    });
});

backButtons.forEach((button) => {
    button.addEventListener("click", function () {
        deleteSelectionStyleToAll();
        if (currentItem > 1) {
            currentItem--;
            if (currentItem == 4) {
                savingSectionTwoData();
            }
            if (currentItem == 5) {
                savingSectionThreeData();
            }
        }
        document
            .getElementById(`menu-item-${currentItem}`)
            .classList.add("selected");
        renderNewPage();
    });
});

function renderFinalPage() {
    hideAllSections();
    sectionFive.classList.remove("hidden");
    sectionFive.classList.add("fade-in");
    setTimeout(() => {
        sectionFive.classList.add("show");
    }, 100);
    setTimeout(() => {
        sectionFive.classList.remove("fade-in", "show");
    }, 300);
}
function renderNewPage() {
    hideAllSections();
    var currentSection = document.getElementById(`info-card-${currentItem}`);
    currentSection.classList.remove("hidden");
    currentSection.classList.add("fade-in");
    setTimeout(() => {
        currentSection.classList.add("show");
    }, 100);
    setTimeout(() => {
        currentSection.classList.remove("fade-in", "show");
    }, 300);
}
checkboxYorM.addEventListener("change", function () {
    if (checkboxYorM.checked) {
        displayYearlyPlans();
    } else {
        displayMonthlyPlans();
    }
});

function displayMonthlyPlans() {
    const yearlyPlans = document.getElementsByClassName("yearly");
    for (let i = 0; i < yearlyPlans.length; i++) {
        yearlyPlans[i].classList.add("hidden");
        yearlyPlans[i].classList.remove("block");
    }
    const monthlyPlans = document.getElementsByClassName("monthly");
    for (let i = 0; i < monthlyPlans.length; i++) {
        monthlyPlans[i].classList.remove("hidden");
        monthlyPlans[i].classList.add("block");
    }
}

function displayYearlyPlans() {
    const monthlyPlans = document.getElementsByClassName("monthly");
    for (let i = 0; i < monthlyPlans.length; i++) {
        monthlyPlans[i].classList.add("hidden");
        monthlyPlans[i].classList.remove("block");
    }
    const yearlyPlans = document.getElementsByClassName("yearly");
    for (let i = 0; i < yearlyPlans.length; i++) {
        yearlyPlans[i].classList.remove("hidden");
        yearlyPlans[i].classList.add("block");
    }
}

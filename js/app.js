document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    showSlides();
    const contactData = [
        { image: "assets/images/ic_email.png", title: "Email Icon", description: "nandaadisaputra18@gmail.com", link: "mailto:nandaadisaputra18@gmail.com" },
        { image: "assets/images/ic_wa.png", title: "WhatsApp Icon", description: "082141730797", link: "https://api.whatsapp.com/send?phone=6282141730797" },
        { image: "assets/images/ic_instagram.png", title: "Instagram Icon", description: "nanda_coding_android", link: "https://www.instagram.com/nanda_coding_android/" }
    ];
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000);
    }

    function generateContactHTML(data, containerIds) {
        containerIds.forEach((containerId, index) => {
            const container = document.querySelector(`.${containerId}`);
            const item = data[index];

            const div = document.createElement("div");
            div.classList.add(`kontak-box`);

            const anchor = document.createElement("a");
            anchor.href = item.link;
            anchor.target = "_blank";

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = item.title;

            const heading = document.createElement("h3");
            heading.textContent = item.description;

            anchor.appendChild(image);
            anchor.appendChild(heading);
            div.appendChild(anchor);

            container.appendChild(div);
        });
    }
    generateContactHTML(contactData, ["kontak-1", "kontak-2", "kontak-3"]);


    var educationDropdown = document.getElementById('educationDropdown');
    var menuDropdownItems = document.querySelectorAll('.dropdown-content a');

    educationDropdown.addEventListener('change', function () {
        var selectedValue = educationDropdown.value;
        if (selectedValue.toLowerCase() === 'all') {
            showAllBoxes();
        } else {
            navigateToSelected(selectedValue);
        }
    });
    menuDropdownItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            educationDropdown.value = targetId;
            navigateToSelected(targetId);
        });
    });

    function navigateToSelected(sectionId) {
        hideAllBoxes();
        var selectedBox = document.getElementById(sectionId);
        if (selectedBox) {
            selectedBox.style.display = 'block';
        }
    }

    function showAllBoxes() {
        var boxes = document.querySelectorAll('.education-boxes > .box-1, .education-boxes > .box-2, .education-boxes > .box-3, .education-boxes > .box-4');
        boxes.forEach(function (box) {
            box.style.display = 'block';
        });
    }

    function hideAllBoxes() {
        var boxes = document.querySelectorAll('.education-boxes > .box-1, .education-boxes > .box-2, .education-boxes > .box-3, .education-boxes > .box-4');
        boxes.forEach(function (box) {
            box.style.display = 'none';
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var educationDropdown = document.getElementById('skillDropdown');
    var menuDropdownItems = document.querySelectorAll('.dropdown-content a');

    educationDropdown.addEventListener('change', function () {
        var selectedValue = educationDropdown.value;
        if (selectedValue.toLowerCase() === 'all') {
            showAllBoxes();
        } else {
            navigateToSelected(selectedValue);
        }
    });
    menuDropdownItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            educationDropdown.value = targetId;
            navigateToSelected(targetId);
        });
    });

    function navigateToSelected(sectionId) {
        hideAllBoxes();
        var selectedBox = document.getElementById(sectionId);
        if (selectedBox) {
            selectedBox.style.display = 'block';
        }
    }

    function showAllBoxes() {
        var boxes = document.querySelectorAll('.skill-boxes > .box-a, .skill-boxes > .box-b, .skill-boxes  > .box-c, .skill-boxes  > .box-d, .skill-boxes  > .box-e');
        boxes.forEach(function (box) {
            box.style.display = 'block';
        });
    }

    function hideAllBoxes() {
        var boxes = document.querySelectorAll('.skill-boxes > .box-a, .skill-boxes > .box-b, .skill-boxes  > .box-c, .skill-boxes  > .box-d, .skill-boxes  > .box-e');
        boxes.forEach(function (box) {
            box.style.display = 'none';
        });

    }

});

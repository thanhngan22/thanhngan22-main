export default function handleChangePath (path: string, nav_links:HTMLAnchorElement[]) {
    nav_links?.forEach((link) => {
        // get href of the link and compare it with the path
        let href = link.getAttribute("href");
        // console.log(href);

        if (path === "/home") {
            path = "/";
        }

        if (href === path) {
            link.setAttribute("aria-current", "page");
            link.classList.add("rounded-sm");

            // get svg icon of the link
            let icon = link.querySelector("svg");
            // console.log(icon)

            // set animation to the icon
            switch (icon?.getAttribute("data-icon")) {
                case "house":
                    icon.classList.add("fa-fade"); break;
                case "pen" : 
                        icon.classList.add("fa-bounce"); break;
                case "book-open":
                    icon.classList.add("fa-flip"); break;
                case "chalkboard-user":
                    icon.classList.add("fa-beat-fade"); break;
                case "blog" : 
                        icon.classList.add("fa-spin");  break;
            }

        } else {
            link.removeAttribute("aria-current");
            link.classList.remove("bg-gray-700", "opacity-50", "rounded-sm");
            
            // get svg icon of the link
            let icon = link.querySelector("svg");

            // remove animate class from the icon
            switch (icon?.getAttribute("data-icon")) {
                case "house":
                    icon.classList.remove("fa-fade"); break;
                case "pen" :
                    icon.classList.remove("fa-bounce"); break;
                case "book-open":
                    icon.classList.remove("fa-flip"); break;
                case "chalkboard-user":
                    icon.classList.remove("fa-beat-fade"); break;
                case "blog" :
                    icon.classList.remove("fa-spin"); break;
            }
        }

    })

}
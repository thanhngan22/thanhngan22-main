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

            // get svg icon of the link
            let icon = link.querySelector("svg");
            // console.log(icon)

            // set animation to the icon
            switch (icon?.getAttribute("data-icon")) {
                case "house":
                case "pen" : 
                        icon.classList.add("animate-bounce"); 
                        break;
                case "book-open":
                case "chalkboard-user":
                case "blog" : 
                        icon.classList.add("animate-pulse"); 
                        break;
            }

        } else {
            link.removeAttribute("aria-current");
            
            // get svg icon of the link
            let icon = link.querySelector("svg");

            // remove animate class from the icon
            switch (icon?.getAttribute("data-icon")) {
                case "house":
                case "pen" :
                    icon.classList.remove("animate-bounce"); break;
                case "book-open":
                case "chalkboard-user":
                case "blog" :
                    icon.classList.remove("animate-pulse"); break;
            }
        }

    })

}
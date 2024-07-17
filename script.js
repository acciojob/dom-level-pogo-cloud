//your JS code here. If required.
let level = document.querySelector("#level");
        let root = document.querySelector("html");
        // for (let i = 0; i < root.children.length; i++) {
        //     console.log(root.children[0].textContent);
        // }
        let count = 1;
        while (level != root) {
            count++;

            level = level.parentNode;

        }
        alert(`The level of the element is: ${count}`);
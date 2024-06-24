
// const worker = new Worker("worker.js")

// const calculateBtn = document.querySelector("#calculate")
// const changeBtn = document.querySelector("#change")

// changeBtn.addEventListener("click", () => {
//     if (document.body.style.backgroundColor !== "red") {
//         document.body.style.backgroundColor = "red"
//     } else {
//         document.body.style.backgroundColor = "blue"
//     }
// })

// calculateBtn.addEventListener("click", () => {
//     worker.postMessage(2)
// })

// worker.onmessage = function (message) {

//     console.log("From main", message.data)
// }


const notify = document.querySelector("#notify");

notify.addEventListener("click", async () => {
  if (Notification.permission !== "granted") {
    // Request permission if not already granted
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
        alert("Notifications permission denied!");
        return;
    }
}

const not = new Notification("My Custom Notification", {
    body: "Victor",
    data: "My Custom",
    icon: "", // You can provide an image path here for the icon
    tag: "Welcome to my page"
});

console.log("test")
  not.addEventListener("error", (e) => {
    alert("error");
  });
});
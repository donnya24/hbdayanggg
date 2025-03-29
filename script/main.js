// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// animation timeline
const animationTimeline = () => {
    // split chars that need to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -15,
        rotationX: 5,
        skewX: "10deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 15,
        rotationY: 5,
        skewX: "-10deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.4, { visibility: "visible" })
    .from(".one", 0.5, { opacity: 0, y: 8 })
    .from(".two", 0.3, { opacity: 0, y: 8 })
    .to(".one", 0.5, { opacity: 0, y: 8 }, "+=2.5")
    .to(".two", 0.5, { opacity: 0, y: 8 }, "-=1")
    .from(".three", 0.5, { opacity: 0, y: 8 })
    .to(".three", 0.5, { opacity: 0, y: 8 }, "+=2")
    .from(".four", 0.5, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.2, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 1, { visibility: "visible" }, 0.05)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=3")
    .to(".four", 0.4, { scale: 0.2, opacity: 0, y: -120 }, "+=0.8")
    .from(".idea-1", 0.5, ideaTextTrans)
    .to(".idea-1", 0.5, ideaTextTransLeave, "+=2")
    .from(".idea-2", 0.5, ideaTextTrans)
    .to(".idea-2", 0.5, ideaTextTransLeave, "+=2")
    .from(".idea-3", 0.5, ideaTextTrans)
    .to(".idea-3 strong", 0.4, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
    .to(".idea-3", 0.5, ideaTextTransLeave, "+=2")
    .from(".idea-4", 0.5, ideaTextTrans)
    .to(".idea-4", 0.5, ideaTextTransLeave, "+=2")
    .from(".idea-5", 0.5, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 40, z: 10, opacity: 0 }, "+=1")
    .to(".idea-5 span", 0.5, { rotation: 90, x: 8 }, "+=1")
    .to(".idea-5", 0.5, { scale: 0.2, opacity: 0 }, "+=1.5")
    .staggerFrom(".idea-6 span", 0.6, { scale: 2.5, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.15)
    .staggerTo(".idea-6 span", 0.6, { scale: 2.5, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.15, "+=1")
    .staggerFromTo(".baloons img", 2, { opacity: 0.9, y: 1200 }, { opacity: 1, y: -900 }, 0.15)
    .from(".profile-picture", 0.4, { scale: 3, opacity: 0, x: 20, y: -20, rotationZ: -40 }, "-=1.8")
    .from(".hat", 0.4, { x: -80, y: 300, rotation: -160, opacity: 0 })
    .staggerFrom(".wish-hbd span", 0.6, { opacity: 0, y: -40, rotation: 120, skewX: "25deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.1)
    .staggerFromTo(".wish-hbd span", 0.6, { scale: 1.3, rotationY: 130 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.1, "party")
    .from(".wish h5", 0.4, { opacity: 0, y: 8, skewX: "-10deg" }, "party")
    .staggerTo(".eight svg", 1.2, { visibility: "visible", opacity: 0, scale: 70, repeat: 3, repeatDelay: 1 }, 0.25)
    .to(".six", 0.4, { opacity: 0, y: 25, zIndex: "-1" })
    .staggerFrom(".nine p", 0.8, ideaTextTrans, 1)
    .to(".last-smile", 0.4, { rotation: 90 }, "+=0.8");

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}

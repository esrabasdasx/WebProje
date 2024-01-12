var yeniVideo = "";
var oncekiVideo = "";

function rastgeleLinkGetir() {
    var turSelect = document.getElementById("turSec");
    var seciliTur = turSelect.options[turSelect.selectedIndex].value;

    // Her türün rastgele linkleri
    var linkler = {
        "pop": ["U66ixhdbxEI?si=qlfx5LHyREqANIS7", "K-w2sYAqMKw?si=CeOyrAZtcXSBeiLP", "LHtgIWSUPew?si=Nm8i_-cymoMgJak-", "x-gkBiy3djk?si=yBxr4vl9VT3ZaB1e", "GwqJX3ZjRrs?si=67gGBCwyXFu5mCFd"],
        "hiphop": ["TQDPkVWIq4o?si=G3Ywt434CmeU9cFH", "VXZLIQ_Ke4o?si=Q-3U_KQMd_yVEFNI", "KZYBe5XIjIY?si=MrqU5f-oUI4IxWD7", "n7_ObtKRZfA?si=8mIkt93EjjYcBR0n", "PUiNB0UFwJM?si=2RmoLxo_6zDbwR5F"],
        "jaz": ["O51U38Y3gIE?si=SfjVuUD2xhvyqUBO", "5-vZVbdOZAU?si=tcmRSt00m2k-57VM", "VqhCQZaH4Vs?si=gmzRxtWekaNg5Jqa", "X0p_RyHHD2I?si=k218GHWroUe_pFQG", "cb2w2m1JmCY?si=ghOsKif6scXv_Wpm"],
        "rnb": ["t9MsAc9EySc?si=c5G4AcM0GYuGB0mk", "l9H3IgM-ViU?si=s2-Qy6MfgmT7sXuM", "aWUWC21_HE8?si=lGByrGYT9eNMFcv8", "lQ7A7A6PVGw?si=yglE1v9GlPG1Pkxu", "RytU4nJRiII?si=Q1_KQA0BRdusgzlj"],
        "blues": ["Q6hHEluygpM?si=m9itGU6fvd3Tw8x7", "W9mhsW5aWJM?si=E_G9I8PL7m-LDVac", "oohxHANtPs0?si=xwb5FZYVkHe1_GdD", "uZt1xKtPbUQ?si=Vf5piXPKGxuQ3-a8", "F-YOTJoKz_o?si=zJRIkDA03tbO2dYZ"],
        "country": ["xXRGrRnLpaE?si=9j1HF3leZeV6GXhB", "Y2LTVLhtbIE?si=q2uU8dPFmjHnvn71", "Y2LTVLhtbIE?si=6oekwLXm9xBZ1JdI", "TsfDpW7PYN8?si=Am2Ghc3FM9xPWvo4", "gv5ZqpKPh58?si=y-MH8yOp9Oc3eqOO"],
        "rock": ["g4UsXksoGNg?si=OfyKCjsOQG6oQBKD", "uPMDPiNG4TE?si=cFuX000u3dRo-9gV", "-K64BkRAOUI?si=07soANm9lKcAIV_6", "-K64BkRAOUI?si=Psi9IRjmKk5Jlan4", "DLOth-BuCNY?si=ZStiu3Tk33XY9ER4"],
        "metal": ["Gb6JRborcOU?si=numDFO-cKQW_gyrs", "JhY2LvmYQLg?si=Zs-WH2xTdZbG1HaC", "85NbHpeYjS8?si=gEwNtnFw8zLiFIq-", "CmFQFVcip_I?si=erpJmQfNaAOLxzmV", "8FMpIiDo-Ic?si=IBs4aWQJb7UuKtJK"]
    };

    do {
        // Seçili türe ait rastgele linki al
        yeniVideo = linkler[seciliTur][Math.floor(Math.random() * linkler[seciliTur].length)];
    } while (yeniVideo === oncekiVideo); // Eğer yeni seçilen video bir öncekine eşitse, tekrar seç

    // Rastgele video linkini iframe'e yerleştir
    var iframe = document.getElementById("videoIframe");
    iframe.src = "https://www.youtube.com/embed/" + yeniVideo;
    console.log(yeniVideo);
    // Seçilen videoyu bir önceki değişkene ata
    oncekiVideo = yeniVideo;
}
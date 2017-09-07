/*
I saw some parts of this code on the internet. I forgot where. If it's yours
let me know and I'll credit you.

*/

const VERSION_CHECK_SUPPORTED = "Your iOS version is supported! &#x1f60a;";
const VERSION_CHECK_NEEDS_UPGRADE = "Requires at least iOS %s &#x1f615;";
const VERSION_CHECK_UNCONFIRMED = "Not yet tested on iOS %s &#x2190;";

function checkIOSVersion(minIOS, maxIOS) {
    var iOS = parseFloat(
        ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
        .replace('undefined', '3_2').replace('_', '.').replace('_', '')
    ) || false;

    if (iOS > maxIOS) {
        return VERSION_CHECK_UNCONFIRMED.replace("%s", iOS);
    } else if (iOS < minIOS) {
        return VERSION_CHECK_NEEDS_UPGRADE.replace("%s", minIOS);
    } else {
        return VERSION_CHECK_SUPPORTED;
    }
}
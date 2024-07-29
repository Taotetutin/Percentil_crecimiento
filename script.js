const femaleData = {
    14: [73, 77, 82, 89, 96, 102, 107],
    15: [92, 97, 104, 113, 121, 129, 135],
    16: [122, 131, 141, 151, 162, 170, 178],
    17: [145, 152, 164, 176, 189, 202, 211],
    18: [180, 188, 202, 217, 233, 248, 261],
    19: [221, 231, 248, 266, 285, 304, 319],
    20: [269, 281, 302, 322, 346, 369, 387],
    21: [333, 349, 364, 388, 417, 444, 466],
    22: [388, 405, 435, 464, 499, 530, 557],
    23: [461, 481, 516, 551, 592, 629, 660],
    24: [542, 567, 608, 649, 697, 740, 776],
    25: [663, 710, 758, 815, 865, 907, 951],
    26: [735, 769, 823, 880, 946, 1003, 1051],
    27: [846, 886, 948, 1014, 1090, 1156, 1210],
    28: [967, 1013, 1083, 1160, 1247, 1323, 1383],
    29: [1096, 1150, 1230, 1319, 1418, 1505, 1570],
    30: [1234, 1296, 1386, 1489, 1601, 1699, 1770],
    31: [1379, 1451, 1553, 1670, 1796, 1907, 1984],
    32: [1530, 1614, 1728, 1861, 2002, 2127, 2209],
    33: [1687, 1783, 1911, 2060, 2217, 2358, 2445],
    34: [1847, 1957, 2111, 2268, 2440, 2598, 2690],
    35: [2008, 2135, 2296, 2481, 2669, 2846, 2943],
    36: [2169, 2314, 2494, 2698, 2902, 3099, 3201],
    37: [2329, 2493, 2695, 2917, 3138, 3357, 3462],
    38: [2484, 2670, 2896, 3136, 3373, 3616, 3725],
    39: [2633, 2843, 3096, 3354, 3605, 3875, 3988],
    40: [2775, 3010, 3294, 3567, 3832, 4131, 4247],
};

const maleData = {
    14: [70, 73, 78, 83, 90, 98, 104, 109, 113],
    15: [89, 93, 99, 106, 114, 123, 132, 138, 144],
    16: [113, 117, 124, 133, 144, 155, 166, 173, 179],
    17: [141, 146, 155, 166, 179, 193, 207, 217, 225],
    18: [174, 181, 192, 206, 222, 239, 255, 268, 278],
    19: [214, 223, 235, 252, 272, 293, 313, 328, 340],
    20: [260, 271, 286, 307, 332, 358, 389, 413, 430],
    21: [314, 327, 345, 370, 399, 428, 458, 481, 497],
    22: [375, 392, 412, 443, 476, 512, 548, 575, 595],
    23: [445, 465, 489, 525, 565, 608, 650, 682, 705],
    24: [523, 548, 576, 618, 665, 716, 765, 803, 830],
    25: [611, 641, 673, 723, 778, 836, 894, 938, 970],
    26: [707, 743, 780, 838, 902, 971, 1038, 1087, 1125],
    27: [813, 855, 898, 964, 1039, 1118, 1196, 1251, 1295],
    28: [929, 977, 1026, 1102, 1189, 1279, 1368, 1429, 1481],
    29: [1053, 1108, 1165, 1251, 1350, 1453, 1554, 1622, 1681],
    30: [1185, 1247, 1313, 1410, 1523, 1640, 1755, 1830, 1896],
    31: [1326, 1394, 1470, 1579, 1707, 1834, 1960, 2046, 2126],
    32: [1473, 1548, 1635, 1757, 1901, 2047, 2187, 2276, 2349],
    33: [1626, 1708, 1807, 1942, 2103, 2266, 2429, 2516, 2619],
    34: [1785, 1872, 1985, 2134, 2312, 2492, 2672, 2764, 2853],
    35: [1948, 2058, 2167, 2330, 2527, 2723, 2904, 3018, 3148],
    36: [2113, 2205, 2352, 2531, 2769, 2995, 3222, 3330, 3427],
    37: [2280, 2372, 2537, 2733, 2966, 3202, 3438, 3539, 3654],
    38: [2446, 2536, 2723, 2935, 3186, 3432, 3668, 3767, 3865],
    39: [2612, 2696, 2905, 3135, 3403, 3664, 3924, 4058, 4247],
    40: [2775, 2849, 3084, 3333, 3617, 3892, 4164, 4312, 4515],
};

function calculatePercentile() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const gestationalWeeks = parseInt(document.getElementById('gestationalWeeks').value);
    const gestationalDays = parseInt(document.getElementById('gestationalDays').value);

    if (isNaN(weight) || isNaN(gestationalWeeks) || isNaN(gestationalDays) || gestationalWeeks <= 0 || gestationalDays < 0 || gestationalDays > 6) {
        document.getElementById('result').textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    let data = gender === 'male' ? maleData : femaleData;
    let lowerPercentiles = data[gestationalWeeks];
    let upperPercentiles = data[gestationalWeeks + 1];

    if (!lowerPercentiles || !upperPercentiles) {
        document.getElementById('result').textContent = "No hay datos disponibles para esa edad gestacional.";
        return;
    }

    let interpolatedPercentiles = lowerPercentiles.map((value, index) =>
        value + ((upperPercentiles[index] - value) / 7) * gestationalDays
    );

    let percentile = getPrecisePercentile(weight, interpolatedPercentiles);
    document.getElementById('result').textContent = `El percentil de peso fetal es ${percentile}`;
}

function getPrecisePercentile(weight, percentiles) {
    let precisePercentile = 0;
    for (let i = 0; i < percentiles.length - 1; i++) {
        if (weight <= percentiles[i]) {
            precisePercentile = i * 10;
            break;
        } else if (weight < percentiles[i + 1]) {
            precisePercentile = i * 10 + ((weight - percentiles[i]) / (percentiles[i + 1] - percentiles[i])) * 10;
            break;
        }
    }
    return Math.round(precisePercentile);
}

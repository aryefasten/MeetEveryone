var ppl = {};

for (let i = 0; i < 20; i++) {
    ppl[i] = [];
}
var settings = ['a','b','c','d','e']
for (let j = 0; j < 5; j++) {
    var groups = [];
    var ppl2 = { ...ppl };
    for (let i = 0; i < 5; i++) {
        var pariticipants = 0;
        groups = [];
        Object.keys(ppl2).forEach(person => {
            if (pariticipants >= 5) return;
            if (ppl2[person].length > 0 ? ppl2[person].some(g => groups.includes(g)) : 0) return;
            groups = [...groups, ...ppl2[person]];
            console.log(groups);
            ppl[person].push(`${settings[j]}${i}`);
            delete ppl2[person];
            pariticipants++;
        })
    }
}


console.log(JSON.stringify(ppl));
